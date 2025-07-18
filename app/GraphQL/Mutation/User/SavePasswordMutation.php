<?php

declare(strict_types=1);

namespace App\GraphQL\Mutation\User;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\BearerToken;
use App\Doctrine\ORM\Entity\User;
use App\GraphQL\Mutation\GraphQLMutation;
use DateTime;
use Doctrine\ORM\EntityManager;
use GraphQL\Error\Error;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GuzzleHttp\Client;

use function password_hash;

use const PASSWORD_BCRYPT;

class SavePasswordMutation implements GraphQLMutation
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(BearerToken::class),
            'args' => [
                'confirmHash' => Type::nonNull($driver->type('string')),
                'password' => Type::nonNull($driver->type('string')),
                'verifyPassword' => Type::nonNull($driver->type('string')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                $entityManager = $driver->get(EntityManager::class);

                if (! $args['confirmHash']) {
                    throw new Error('Confirm hash is required.');
                }

                if ($args['password'] !== $args['verifyPassword']) {
                    throw new Error('Passwords do not match.');
                }

                $user = $entityManager->getRepository(User::class)->findOneBy([
                    'confirm_hash' => $args['confirmHash'],
                ]);
                if (! $user) {
                    throw new Error('User not found');
                }

                $user
                    ->setPassword(password_hash($args['password'], PASSWORD_BCRYPT))
                    ->setConfirmHash(null)
                    ->setUpdatedAt(new DateTime());

                $bearerToken = $entityManager->getRepository(BearerToken::class)->create($user);

                $entityManager->persist($bearerToken);
                $entityManager->flush();

                return $bearerToken;
            },
            'description' => <<<'EOF'
Change a lost password.
EOF,
        ];
    }
}
