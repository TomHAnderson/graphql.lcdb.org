<?php

declare(strict_types=1);

namespace App\GraphQL\Query\ArtistGroup;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\ArtistGroup;
use App\GraphQL\Query\GraphQLQuery;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ArtistGroupQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(ArtistGroup::class),
            'args' => [
                'id' => Type::nonNull($driver->type('int')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)->getRepository(ArtistGroup::class)->find($args['id']);
            },
            'description' => <<<'EOF'
Fetch a single artist group.
EOF,
        ];
    }
}
