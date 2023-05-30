<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Performance;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\Performance;
use League\Event\EventDispatcher;

class PerformancesQuery implements GraphQLQuery
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<string, mixed>
     */
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

                // print_r($queryBuilder->getQuery()->getSQL());die();
                },
            );
        }

        return [
            'type' => $driver->connection($driver->type(Performance::class)),
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
