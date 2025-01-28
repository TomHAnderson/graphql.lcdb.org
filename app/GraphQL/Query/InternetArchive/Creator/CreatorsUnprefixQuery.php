<?php

declare(strict_types=1);

namespace App\GraphQL\Query\InternetArchive\Creator;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\QueryBuilder as FilterQueryBuilder;
use App\Doctrine\ORM\Entity\InternetArchive\CreatorUnprefix;
use App\GraphQL\Query\GraphQLQuery;
use League\Event\EventDispatcher;

class CreatorsUnprefixQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        if ($operationName === 'CreatorUnprefixListOther') {
            $driver->get(EventDispatcher::class)->subscribeTo(
                'creators.unprefix',
                static function (FilterQueryBuilder $event): void {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->andWhere(
                            $queryBuilder->expr()->orX(
                                $queryBuilder->expr()->lt('ASCII(entity.name)', ':min'),
                                $queryBuilder->expr()->gt('ASCII(entity.name)', ':max'),
                            ),
                        )
                        ->setParameter('min', 65)
                        ->setParameter('max', 122);
                },
            );
        }

        return [
            'type' => $driver->connection(CreatorUnprefix::class),
            'args' => [
                'filter' => $driver->filter(CreatorUnprefix::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(CreatorUnprefix::class, 'creators.unprefix'),
            'description' => <<<'EOF'
Fetch a collection of creators using a view for unprefixing the creator name.
This endpoint does not have relationships.  Use `creators` for related data.

Special Operations

* CreatorUnprefixListOther

    Fetch creators with non-a to z-names
EOF,
        ];
    }
}
