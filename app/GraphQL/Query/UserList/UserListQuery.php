<?php

declare(strict_types=1);

namespace App\GraphQL\Query\UserList;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\UserList;
use App\GraphQL\Query\GraphQLQuery;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class UserListQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(UserList::class),
            'args' => [
                'id' => Type::nonNull($driver->type('int')),
                'shortname' => Type::nonNull($driver->type('string')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)
                    ->getRepository(UserList::class)
                    ->findOneBy([
                        'user' => $args['id'],
                        'shortname' => $args['shortname'],
                    ]);
            },
            'description' => <<<'EOF'
Fetch a single user list.
EOF,
        ];
    }
}
