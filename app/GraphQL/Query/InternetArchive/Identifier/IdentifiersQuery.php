<?php

declare(strict_types=1);

namespace App\GraphQL\Query\InternetArchive\Identifier;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\InternetArchive\Creator;

class IdentifiersQuery implements GraphQLQuery
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<string, mixed>
     */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->connection($driver->type(Creator::class)),
            'args' => [
                'filter' => $driver->filter(Creator::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(Creator::class),
            'description' => <<<'EOF'
Fetch a collection of identifiers.
EOF,
        ];
    }
}
