<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\ArtistUnprefix;
use League\Event\EventDispatcher;

class ArtistsUnprefixQuery implements GraphQLQuery
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<string, mixed>
     */
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

                // print_r($queryBuilder->getQuery()->getSQL());die();
                },
            );
        }

        return [
            'type' => $driver->connection($driver->type(ArtistUnprefix::class)),
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
