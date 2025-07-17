<?php

declare(strict_types=1);

namespace App\GraphQL\Mutation\User;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\BearerToken;
use App\Doctrine\ORM\Entity\Template;
use App\Doctrine\ORM\Entity\User;
use App\GraphQL\Mutation\GraphQLMutation;
use DateTime;
use Doctrine\ORM\EntityManager;
use GraphQL\Error\Error;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GuzzleHttp\Client;

use function bin2hex;
use function password_hash;
use function random_bytes;

use const PASSWORD_BCRYPT;

class CreateMutation implements GraphQLMutation
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(BearerToken::class),
            'args' => [
                'name' => Type::nonNull($driver->type('string')),
                'email' => Type::nonNull($driver->type('string')),
                'obfuscatedEmail' => Type::nonNull($driver->type('string')),
                'username' => Type::nonNull($driver->type('string')),
                'password' => Type::nonNull($driver->type('string')),
                'confirmPassword' => Type::nonNull($driver->type('string')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                $entityManager = $driver->get(EntityManager::class);

                // Verify unique user name
                $user = $entityManager->getRepository(User::class)->findOneBy(['username' => $args['username']]);
                if ($user) {
                    throw new Error('Username already exists: ' . $args['username']);
                }

                if ($args['password'] !== $args['confirmPassword']) {
                    throw new Error('Passwords do not match.');
                }

                $template    = $entityManager->getRepository(Template::class)->findOneBy(['name' => 'original']);
                $confirmHash = bin2hex(random_bytes(8));

                $user = new User();
                $user->setName($args['name'])
                    ->setRealemail($args['email'])
                    ->setEmail($args['obfuscatedEmail'])
                    ->setUsername($args['username'])
                    ->setPassword(password_hash($args['password'], PASSWORD_BCRYPT))
                    ->setTemplate($template)
                    ->setValidemail(false)
                    ->setConfirmHash($confirmHash)
                    ->setPerms('musicLover')
                    ->setState('')
                    ->setCreatedAt(new DateTime())
                    ->setUpdatedAt(new DateTime());

                // Return a bearer token for the user
                $bearerToken = $entityManager->getRepository(BearerToken::class)->create($user);

                $entityManager->persist($user);
                $entityManager->persist($bearerToken);
                $entityManager->flush();

                // Send welcome email / verify email address
                $guzzle = new Client();
                $guzzle->post('https://n8n.apiskeletons.dev/webhook/4e3ed806-36de-48eb-b036-ae71e01e3e67', [
                    'json' => [
                        'name' => $user->getName(),
                        'email' => $user->getRealemail(),
                        'username' => $user->getUsername(),
                        'confirmHash' => $confirmHash,
                    ],
                ]);

                return $bearerToken;
            },
            'description' => <<<'EOF'
Create a user.
EOF,
        ];
    }
}
