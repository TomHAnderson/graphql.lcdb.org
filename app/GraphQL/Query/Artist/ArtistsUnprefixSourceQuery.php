<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\ArtistUnprefixSource;
use League\Event\EventDispatcher;

class ArtistsUnprefixSourceQuery implements GraphQLQuery
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<string, mixed>
     */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        if ($operationName === 'ArtistsUnprefixSourceOther') {
            $driver->get(EventDispatcher::class)->subscribeTo(
                'aritsts.unprefix.source',
                static function (FilterQueryBuilder $event): void {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->andWhere(
                            $queryBuilder->expr()->orX(
                                $queryBuilder->expr()->lt('ASCII(entity.nameUnprefix)', ':min'),
                                $queryBuilder->expr()->gt('ASCII(entity.nameUnprefix)', ':max'),
                            ),
                        )
                        ->setParameter('min', 65)
                        ->setParameter('max', 122);

                // print_r($queryBuilder->getQuery()->getSQL());die();
                },
            );
        }

        return [
            'type' => $driver->connection($driver->type(ArtistUnprefixSource::class)),
            'args' => [
                'filter' => $driver->filter(ArtistUnprefixSource::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(
                ArtistUnprefixSource::class,
                'aritsts.unprefix.source',
            ),
            'description' => <<<'EOF'
Fetch a collection of artists that have sources
using a view for unprefixing the artist name.
This endpoint does not have relationships.  Use `artists` for related data.

Special Operations:

* ArtistsUnprefixSourceOther

    Fetch artists with sources with non-a to z-names
EOF,
        ];
    }
}
