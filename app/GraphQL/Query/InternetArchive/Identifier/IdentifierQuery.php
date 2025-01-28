<?php

declare(strict_types=1);

namespace App\GraphQL\Query\InternetArchive\Identifier;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\InternetArchive\Identifier;
use App\GraphQL\Query\GraphQLQuery;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class IdentifierQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(Identifier::class),
            'args' => [
                'id' => Type::nonNull($driver->type('string')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)->getRepository(Identifier::class)
                    ->findOneBy(['archiveIdentifier' => $args['id']]);
            },
            'description' => <<<'EOF'
Fetch a single identifier.
EOF,
        ];
    }
}
