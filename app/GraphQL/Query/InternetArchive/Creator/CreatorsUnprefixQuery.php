<?php

namespace App\GraphQL\Query\InternetArchive\Creator;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\InternetArchive\CreatorUnprefix;
use League\Event\EventDispatcher;

class CreatorsUnprefixQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        if ($operationName === 'CreatorUnprefixListOther') {
            $driver->get(EventDispatcher::class)->subscribeTo('filter.querybuilder',
                function (FilterQueryBuilder $event) use ($variables) {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->andWhere(
                            $queryBuilder->expr()->orX(
                                $queryBuilder->expr()->lt('ASCII(entity.name)', ':min'),
                                $queryBuilder->expr()->gt('ASCII(entity.name)', ':max')

                            )
                        )
                        ->setParameter('min', 65)
                        ->setParameter('max', 122);

#                    print_r($queryBuilder->getQuery()->getSQL());die();
                }
            );
        }

        return [
            'type' => $driver->connection($driver->type(CreatorUnprefix::class)),
            'args' => [
                'filter' => $driver->filter(CreatorUnprefix::class),
            ],
            'resolve' => $driver->resolve(CreatorUnprefix::class),
            'description' => <<<EOF
Fetch a collection of creators using a view for unprefixing the creator name.
This endpoint does not have relationships.  Use `creators` for related data.

Special Operations

* CreatorUnprefixListOther

    Fetch creators with non-a to z-names
EOF,
        ];
    }
}
