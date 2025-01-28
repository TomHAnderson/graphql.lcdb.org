<?php

declare(strict_types=1);

namespace App\GraphQL\Query\User;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\User;
use App\GraphQL\Query\GraphQLQuery;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class UserByUsernameQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(User::class),
            'args' => [
                'username' => Type::nonNull($driver->type('string')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)->getRepository(User::class)
                    ->findOneBy([
                        'username' => $args['username'],
                    ]);
            },
            'description' => <<<'EOF'
Fetch a single user by username.
EOF,
        ];
    }
}
