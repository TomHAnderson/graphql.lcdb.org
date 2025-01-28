<?php

declare(strict_types=1);

namespace App\GraphQL\Query\User;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\User;
use App\GraphQL\Query\GraphQLQuery;

class UsersQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->connection(User::class),
            'args' => [
                'filter' => $driver->filter(User::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(User::class),
            'description' => <<<'EOF'
Fetch a collection of users.
EOF,
        ];
    }
}
