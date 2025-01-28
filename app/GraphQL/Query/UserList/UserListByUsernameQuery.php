<?php

declare(strict_types=1);

namespace App\GraphQL\Query\UserList;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\UserList;
use App\GraphQL\Query\GraphQLQuery;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class UserListByUsernameQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(UserList::class),
            'args' => [
                'username' => Type::nonNull($driver->type('string')),
                'listname' => $driver->type('string'),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                if (! $args['listname']) {
                    return null;
                }

                $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                $queryBuilder->select('userList')
                    ->from(UserList::class, 'userList')
                    ->innerJoin('userList.user', 'user')
                    ->andWhere($queryBuilder->expr()->eq('userList.shortname', ':shortname'))
                    ->setParameter('shortname', $args['listname'])
                    ->andWhere($queryBuilder->expr()->eq('user.username', ':username'))
                    ->setParameter('username', $args['username']);

                return $queryBuilder->getQuery()->getOneOrNullResult();
            },
            'description' => <<<'EOF'
Fetch a single user list by username and listname.
EOF,
        ];
    }
}
