<?php

declare(strict_types=1);

namespace App\GraphQL\Query\InternetArchive;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\GraphQL\Type\IaMetadata;
use GraphQL\Error\Error;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

use function escapeshellarg;
use function exec;
use function implode;

class MetadataQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => new IaMetadata(),
            'args' => [
                'id' => Type::nonNull($driver->type('string')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) {
                // Sanitize the id for command line use
                $id = escapeshellarg($args['id']);

                // Get the performance creator from the ia tool
                $output     = '';
                $resultCode = 0;
                exec('ia metadata ' . $id, $output, $resultCode);

                if ($resultCode !== 0) {
                    throw new Error('Failed to fetch metadata for ID: ' . $id);
                }

                return [
                    'identifier' => $id,
                    'metadata' => implode("\n", $output),
                ];
            },
            'description' => <<<'EOF'
Fetch metadata for an identifier.
EOF,
        ];
    }
}
