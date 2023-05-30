<?php

declare(strict_types=1);

namespace App\GraphQL\Query\UserList;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\UserList;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class UserListQuery implements GraphQLQuery
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<string, mixed>
     */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(UserList::class),
            'args' => [
                'id' => Type::nonNull(Type::int()),
                'shortname' => Type::nonNull(Type::string()),
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
