<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Performance;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\Performance;
use App\GraphQL\Query\GraphQLQuery;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class PerformanceQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(Performance::class),
            'args' => [
                'id' => Type::nonNull($driver->type('int')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)->getRepository(Performance::class)->find($args['id']);
            },
            'description' => <<<'EOF'
Fetch a single performance.
EOF,
        ];
    }
}
