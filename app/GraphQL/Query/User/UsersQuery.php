<?php

declare(strict_types=1);

namespace App\GraphQL\Query\User;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\User;

class UsersQuery implements GraphQLQuery
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<string, mixed>
     */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->connection($driver->type(User::class)),
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
