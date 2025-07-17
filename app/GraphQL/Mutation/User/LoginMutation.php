<?php

declare(strict_types=1);

namespace App\GraphQL\Mutation\User;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\BearerToken;
use App\Doctrine\ORM\Entity\User;
use App\GraphQL\Mutation\GraphQLMutation;
use Doctrine\ORM\EntityManager;
use GraphQL\Error\Error;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

use function password_verify;

class LoginMutation implements GraphQLMutation
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(BearerToken::class),
            'args' => [
                'username' => Type::nonNull($driver->type('string')),
                'password' => Type::nonNull($driver->type('string')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                $entityManager = $driver->get(EntityManager::class);

                $user = $entityManager->getRepository(User::class)->findOneBy(['username' => $args['username']]);

                if (! $user) {
                    throw new Error('User not found: ' . $args['username']);
                }

                password_verify($args['password'], $user->getPassword()) ||
                    throw new Error('Invalid password for user: ' . $args['username']);

                // Return a bearer token for the user
                $bearerToken = $entityManager->getRepository(BearerToken::class)->create($user);

                $entityManager->persist($bearerToken);
                $entityManager->flush();

                return $bearerToken;
            },
            'description' => <<<'EOF'
Login a user.
EOF,
        ];
    }
}
