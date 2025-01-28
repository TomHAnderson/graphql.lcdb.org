<?php

declare(strict_types=1);

namespace App\GraphQL\Query\UserPerformance;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\QueryBuilder as FilterQueryBuilder;
use App\Doctrine\ORM\Entity\UserPerformance;
use App\GraphQL\Query\GraphQLQuery;
use GraphQL\Type\Definition\Type;
use League\Event\EventDispatcher;

class UserPerformancesByUsernameQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        $driver->get(EventDispatcher::class)->subscribeTo(
            'userPerformancesByUsername',
            static function (FilterQueryBuilder $event): void {
                $queryBuilder = $event->getQueryBuilder();
                $queryBuilder
                    ->innerJoin('entity.performance', 'performance')
                    ->innerJoin('entity.user', 'user')
                    ->innerJoin('performance.artist', 'artist')
                    ->andWhere($queryBuilder->expr()->eq('user.username', ':username'))
                    ->setParameter('username', $event->getArgs()['username'])
                    ->addOrderBy('artist.name', 'asc')
                    ->addOrderBy('performance.year', 'asc')
                    ->addOrderBy('performance.date', 'asc')
                    ->addOrderBy('entity.id', 'asc');

                if (! isset($event->getArgs()['listname']) || ! $event->getArgs()['listname']) {
                    return;
                }

                $queryBuilder
                    ->innerJoin('entity.userLists', 'userLists')
                    ->andWhere($queryBuilder->expr()->eq('userLists.shortname', ':listname'))
                    ->setParameter('listname', $event->getArgs()['listname']);
            },
        );

        return [
            'type' => $driver->connection(UserPerformance::class),
            'args' => [
                'username' => Type::nonNull($driver->type('string')),
                'listname' => $driver->type('string'),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(UserPerformance::class, 'userPerformancesByUsername'),
            'description' => <<<'EOF'
Fetch a user's list or sublist of performances by username.
EOF,
        ];
    }
}
