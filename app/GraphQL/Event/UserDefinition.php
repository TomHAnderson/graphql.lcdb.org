<?php

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\EntityDefinition;
use App\ORM\Entity\User;
use App\ORM\Entity\UserPerformance;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use League\Event\EventDispatcher;

final class UserDefinition implements Event
{
    public static function subscribe(Driver $driver)
    {
        /**
         * Add a userPerformanceCount field to each user
         */
        $driver->get(EventDispatcher::class)->subscribeTo(
            User::class . '.definition',
            static function (EntityDefinition $event) use ($driver): void {
                $definition = $event->getDefinition();
                $fields = $definition['fields']();

                $fields['userPerformanceCount'] = [
                    'type' => Type::int(),
                    'description' => 'The count of user performances for a user',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver) : mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();

                        $queryBuilder->select('COUNT(userPerformance)')
                            ->from(UserPerformance::class, 'userPerformance')
                            ->innerJoin('userPerformance.user', 'user')
                            ->andWhere($queryBuilder->expr()->eq('user.id', ':id'))
                            ->setParameter('id', $objectValue->getId())
                        ;

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $definition['fields'] = $fields;
            }
        );

    }
}
