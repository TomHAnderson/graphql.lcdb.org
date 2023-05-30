<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Source;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\Source;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class SourceYearsQuery implements GraphQLQuery
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
                    ->andWhere($queryBuilder->expr()->eq('performance.artist', ':artist'))
                    ->setParameter('artist', $args['id'])
                    ->orderBy('performance.year', 'ASC');

                $years = [];
                foreach ($queryBuilder->getQuery()->getArrayResult() as $result) {
                    $years[] = $result['year'];
                }

                return $years;
            },
            'description' => <<<'EOF'
Fetch an array of years for artist performances with sources.
EOF,
        ];
    }
}
