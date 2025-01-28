<?php

declare(strict_types=1);

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\EntityDefinition;
use App\Doctrine\ORM\Entity\User;
use App\Doctrine\ORM\Entity\UserPerformance;
use App\GraphQL\Type\TopArtist;
use DateTime;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use League\Event\EventDispatcher;

final class UserDefinition implements Event
{
    public static function subscribe(Driver $driver): void
    {
        /**
         * Add a userPerformanceCount field to each user
         */
        $driver->get(EventDispatcher::class)->subscribeTo(
            User::class . '.definition',
            static function (EntityDefinition $event) use ($driver): void {
                $definition = $event->getDefinition();
                $fields     = $definition['fields']();

                $fields['lastUpdate'] = [
                    'type' => $driver->type('datetime'),
                    'description' => 'The most recent update by this user',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver) {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();

                        $queryBuilder->select('MAX(userPerformance.createdAt)')
                            ->from(UserPerformance::class, 'userPerformance')
                            ->innerJoin('userPerformance.user', 'user')
                            ->andWhere($queryBuilder->expr()->eq('user', ':user'))
                            ->setParameter('user', $objectValue);

                        return new DateTime($queryBuilder->getQuery()->getSingleScalarResult());
                    },
                ];

                $fields['userPerformanceCount'] = [
                    'type' => $driver->type('int'),
                    'description' => 'The count of user performances for a user',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver) {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();

                        $queryBuilder->select('COUNT(userPerformance)')
                            ->from(UserPerformance::class, 'userPerformance')
                            ->innerJoin('userPerformance.user', 'user')
                            ->andWhere($queryBuilder->expr()->eq('user.id', ':id'))
                            ->setParameter('id', $objectValue->getId());

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $fields['topArtists'] = [
                    'type' => Type::listOf(new TopArtist()),
                    'args' => [
                        'first' => Type::nonNull($driver->type('int')),
                    ],
                    'description' => 'User top artists',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver) {
                        $limit = $args['first'] <= 20 ? $args['first'] : 20;

                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();

                        $queryBuilder->select('artist.id as id, artist.name as name, COUNT(userPerformance) as userPerformanceCount')
                            ->from(UserPerformance::class, 'userPerformance')
                            ->innerJoin('userPerformance.performance', 'performance')
                            ->innerJoin('performance.artist', 'artist')
                            ->innerJoin('userPerformance.user', 'user')
                            ->andWhere($queryBuilder->expr()->eq('user.id', ':id'))
                            ->setParameter('id', $objectValue->getId())
                            ->groupBy('artist.id')
                            ->orderBy('userPerformanceCount', 'desc')
                            ->setMaxResults($limit);

                        return $queryBuilder->getQuery()->getResult();
                    },
                ];

                $definition['fields'] = $fields;
            },
        );
    }
}
