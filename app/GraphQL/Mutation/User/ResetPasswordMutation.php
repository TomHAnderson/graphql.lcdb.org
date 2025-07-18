<?php

declare(strict_types=1);

namespace App\GraphQL\Mutation\User;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\User;
use App\GraphQL\Mutation\GraphQLMutation;
use DateTime;
use Doctrine\ORM\EntityManager;
use GraphQL\Error\Error;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GuzzleHttp\Client;

use function bin2hex;
use function random_bytes;

class ResetPasswordMutation implements GraphQLMutation
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(User::class),
            'args' => [
                'username' => Type::nonNull($driver->type('string')),
                'email' => Type::nonNull($driver->type('string')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                $entityManager = $driver->get(EntityManager::class);

                // Verify unique user name
                $user = $entityManager->getRepository(User::class)->findOneBy([
                    'username' => $args['username'],
                    'realemail' => $args['email'],
                ]);
                if (! $user) {
                    throw new Error('User not found by email: ' . $args['email']);
                }

                $confirmHash = bin2hex(random_bytes(32));

                $user
                    ->setConfirmHash($confirmHash)
                    ->setUpdatedAt(new DateTime());

                $entityManager->flush();

                // Send reset password email
                $guzzle = new Client();
                $guzzle->post('https://n8n.apiskeletons.dev/webhook/af025e91-5705-4a0b-bcc2-7af1dbcb726c', [ // Production
//                $guzzle->post('https://n8n.apiskeletons.dev/webhook-test/af025e91-5705-4a0b-bcc2-7af1dbcb726c', [
                    'json' => [
                        'name' => $user->getName(),
                        'email' => $user->getRealemail(),
                        'username' => $user->getUsername(),
                        'confirmHash' => $confirmHash,
                    ],
                ]);

                return $user;
            },
            'description' => <<<'EOF'
Reset a lost password.
EOF,
        ];
    }
}
