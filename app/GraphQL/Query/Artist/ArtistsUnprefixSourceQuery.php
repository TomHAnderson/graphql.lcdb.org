<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\QueryBuilder as FilterQueryBuilder;
use App\Doctrine\ORM\Entity\ArtistUnprefixSource;
use App\GraphQL\Query\GraphQLQuery;
use League\Event\EventDispatcher;

class ArtistsUnprefixSourceQuery implements GraphQLQuery
{
    /** @inheritDoc */
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
                },
            );
        }

        return [
            'type' => $driver->connection(ArtistUnprefixSource::class),
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
