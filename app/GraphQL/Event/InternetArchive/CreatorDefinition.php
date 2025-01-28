<?php

declare(strict_types=1);

namespace App\GraphQL\Event\InternetArchive;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\EntityDefinition;
use App\Doctrine\ORM\Entity\InternetArchive\Creator;
use App\Doctrine\ORM\Entity\InternetArchive\Identifier;
use App\GraphQL\Event\Event;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use League\Event\EventDispatcher;

final class CreatorDefinition implements Event
{
    public static function subscribe(Driver $driver): void
    {
        /**
         * Add a userPerformanceCount field to UserList
         */
        $driver->get(EventDispatcher::class)->subscribeTo(
            Creator::class . '.definition',
            static function (EntityDefinition $event) use ($driver): void {
                $definition = $event->getDefinition();
                $fields     = $definition['fields']();

                $fields['years'] = [
                    'type' => Type::listOf($driver->type('int')),
                    'description' => 'The performance years for a creator',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('identifier.year')
                            ->distinct()
                            ->from(Identifier::class, 'identifier')
                            ->innerJoin('identifier.creator', 'creator')
                            ->andWhere($queryBuilder->expr()->eq('creator.id', ':id'))
                            ->setParameter('id', $objectValue->getId())
                            ->orderBy('identifier.year', 'ASC');

                        $years = [];
                        foreach ($queryBuilder->getQuery()->getArrayResult() as $result) {
                            $years[] = $result['year'];
                        }

                        return $years;
                    },
                ];

                $fields['latestYear'] = [
                    'type' => $driver->type('int'),
                    'description' => 'The most recent identifier year for a creator',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('MAX(identifier.year)')
                            ->from(Identifier::class, 'identifier')
                            ->innerJoin('identifier.creator', 'creator')
                            ->andWhere($queryBuilder->expr()->eq('creator.id', ':id'))
                            ->setParameter('id', $objectValue->getId())
                            ->orderBy('identifier.year', 'ASC');

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $definition['fields'] = $fields;
            },
        );
    }
}
