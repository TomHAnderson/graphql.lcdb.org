<?php

declare(strict_types=1);

namespace App\GraphQL\Query\ArtistGroup;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\Source;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ArtistGroupSourceYearsQuery implements GraphQLQuery
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<string, mixed>
     */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => Type::listOf(Type::int()),
            'args' => [
                'id' => Type::nonNull(Type::int()),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                $queryBuilder->select('performance.year')
                    ->distinct()
                    ->from(Source::class, 'source')
                    ->innerJoin('source.performance', 'performance')
                    ->innerJoin('performance.artist', 'artist')
                    ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                    ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                    ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                    ->setParameter('artistGroupId', $args['id'])
                    ->orderBy('performance.year', 'ASC');

                $years = [];
                foreach ($queryBuilder->getQuery()->getArrayResult() as $result) {
                    $years[] = $result['year'];
                }

                return $years;
            },
            'description' => <<<'EOF'
Fetch an array of years for artist group performances with sources.
EOF,
        ];
    }
}
