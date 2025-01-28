<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\ArtistUnprefix;
use App\GraphQL\Query\GraphQLQuery;

class ArtistsQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->connection(ArtistUnprefix::class),
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
