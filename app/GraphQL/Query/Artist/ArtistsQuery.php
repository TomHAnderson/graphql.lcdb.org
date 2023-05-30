<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\ArtistUnprefix;

class ArtistsQuery implements GraphQLQuery
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<string, mixed>
     */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->connection($driver->type(ArtistUnprefix::class)),
            'args' => [
                'filter' => $driver->filter(ArtistUnprefix::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(ArtistUnprefix::class),
            'description' => <<<'EOF'
Fetch a collection of artists.
EOF,
        ];
    }
}
