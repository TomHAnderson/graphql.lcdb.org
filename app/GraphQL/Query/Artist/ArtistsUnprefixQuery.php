<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\QueryBuilder as FilterQueryBuilder;
use App\Doctrine\ORM\Entity\ArtistUnprefix;
use App\GraphQL\Query\GraphQLQuery;
use League\Event\EventDispatcher;

class ArtistsUnprefixQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        if ($operationName === 'ArtistUnprefixListOther') {
            $driver->get(EventDispatcher::class)->subscribeTo(
                'artists.unprefix',
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
            'type' => $driver->connection(ArtistUnprefix::class),
            'args' => [
                'filter' => $driver->filter(ArtistUnprefix::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(ArtistUnprefix::class, 'artists.unprefix'),
            'description' => <<<'EOF'
Fetch a collection of artists using a view for unprefixing the artist name.
This endpoint does not have relationships.  Use `artists` for related data.

Special Operations:

* ArtistUnprefixListOther

    Fetch artists with non-a to z-names
EOF,
        ];
    }
}
