<?php

declare(strict_types=1);

namespace App\GraphQL\Query\ArtistGroup;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\Source;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ArtistGroupSourceCountQuery implements GraphQLQuery
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<string, mixed>
     */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => Type::int(),
            'args' => [
                'id' => Type::nonNull(Type::int()),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                $queryBuilder->select('COUNT(source.id)')
                    ->from(Source::class, 'source')
                    ->innerJoin('source.performance', 'performance')
                    ->innerJoin('performance.artist', 'artist')
                    ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                    ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                    ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                    ->setParameter('artistGroupId', $args['id']);

                return $queryBuilder->getQuery()->getSingleScalarResult();
            },
            'description' => <<<'EOF'
Fetch the number of sources for an artist group.
EOF,
        ];
    }
}
