<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\Artist;
use App\GraphQL\Query\GraphQLQuery;
use App\Doctrine\ORM\Entity\ArtistUnprefix;

class ArtistsRootQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->connection(Artist::class),
            'args' => [
                'filter' => $driver->filter(Artist::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(Artist::class),
            'description' => <<<'EOF'
Fetch a collection of artists.
EOF,
        ];
    }
}
