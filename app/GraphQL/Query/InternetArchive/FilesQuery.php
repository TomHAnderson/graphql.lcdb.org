<?php

declare(strict_types=1);

namespace App\GraphQL\Query\InternetArchive;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\GraphQL\Type\IaMetadata;
use GraphQL\Error\Error;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

use function array_map;
use function escapeshellarg;
use function exec;
use function implode;

class FilesQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type('string'),
            'args' => [
                'id' => Type::nonNull($driver->type('string')),
                'files' => Type::nonNull(Type::listOf($driver->type('string'))),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) {
                // Sanitize the id for command line use
                $id = escapeshellarg($args['id']);

                $files = implode(' ', array_map('escapeshellarg', $args['files']));

                // Get the performance creator from the ia tool
                $output     = '';
                $resultCode = 0;
                exec('ia download --no-directories -s ' . $id . ' ' . $files, $output, $resultCode);

                if ($resultCode !== 0) {
                    throw new Error('Failed to fetch files for ID: ' . $id);
                }

                return implode("\n", $output);
            },
            'description' => <<<'EOF'
Fetch contents of files for an identifier.
EOF,
        ];
    }
}
