<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Performance;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\QueryBuilder as FilterQueryBuilder;
use App\Doctrine\ORM\Entity\Performance;
use App\GraphQL\Query\GraphQLQuery;
use League\Event\EventDispatcher;

class PerformancesQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        if ($operationName === 'ArtistGroupPerformances') {
            $driver->get(EventDispatcher::class)->subscribeTo(
                'performances',
                static function (FilterQueryBuilder $event) use ($variables): void {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->innerJoin('entity.artist', 'artist')
                        ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                        ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                        ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                        ->setParameter('artistGroupId', $variables['id']);
                },
            );
        }

        return [
            'type' => $driver->connection(Performance::class),
            'args' => [
                'filter' => $driver->filter(Performance::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(Performance::class, 'performances'),
            'description' => <<<'EOF'
Fetch a collection of performances.

Special Operations

* ArtistGroupPerformances

    Fetch performances for the given artist group $id and $year
EOF,
        ];
    }
}
