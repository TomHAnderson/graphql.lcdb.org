<?php

declare(strict_types=1);

namespace App\GraphQL\Query\ArtistGroup;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\ArtistGroup;
use League\Event\EventDispatcher;

class ArtistGroupsQuery implements GraphQLQuery
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<string, mixed>
     */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        if ($operationName === 'ArtistGroupsOther') {
            $driver->get(EventDispatcher::class)->subscribeTo(
                'artistGroups',
                static function (FilterQueryBuilder $event): void {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->andWhere(
                            $queryBuilder->expr()->orX(
                                $queryBuilder->expr()->lt('ASCII(entity.title)', ':min'),
                                $queryBuilder->expr()->gt('ASCII(entity.title)', ':max'),
                            ),
                        )
                        ->setParameter('min', 65)
                        ->setParameter('max', 122);

                // print_r($queryBuilder->getQuery()->getSQL());die();
                },
            );
        }

        if ($operationName === 'SourceArtistGroups') {
            $driver->get(EventDispatcher::class)->subscribeTo(
                'artistGroups',
                static function (FilterQueryBuilder $event): void {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->distinct()
                        ->innerJoin('entity.artistToArtistGroups', 'artistToArtistGroups')
                        ->innerJoin('artistToArtistGroups.artist', 'artist')
                        ->innerJoin('artist.performances', 'performances')
                        ->innerJoin('performances.sources', 'sources');

                // print_r($queryBuilder->getQuery()->getSQL());die();
                },
            );
        }

        if ($operationName === 'SourceArtistGroupsOther') {
            $driver->get(EventDispatcher::class)->subscribeTo(
                'artistGroups',
                static function (FilterQueryBuilder $event): void {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->distinct()
                        ->innerJoin('entity.artistToArtistGroups', 'artistToArtistGroups')
                        ->innerJoin('artistToArtistGroups.artist', 'artist')
                        ->innerJoin('artist.performances', 'performances')
                        ->innerJoin('performances.sources', 'sources')
                        ->andWhere(
                            $queryBuilder->expr()->orX(
                                $queryBuilder->expr()->lt('ASCII(entity.title)', ':min'),
                                $queryBuilder->expr()->gt('ASCII(entity.title)', ':max'),
                            ),
                        )
                        ->setParameter('min', 65)
                        ->setParameter('max', 122);

                // print_r($queryBuilder->getQuery()->getSQL());die();
                },
            );
        }

        return [
            'type' => $driver->connection($driver->type(ArtistGroup::class)),
            'args' => [
                'filter' => $driver->filter(ArtistGroup::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(ArtistGroup::class, 'artistGroups'),
            'description' => <<<'EOF'
Fetch a collection of artist groups.

Special Operations

* ArtistGroupsOther

    Fetch artist groups with non-a to z-names
* SourceArtistGroups

    Fetch artist groups with sources
* SourceArtistGroupsOther

    Fetch artist groups with sources with non-a to z-names
EOF,
        ];
    }
}
