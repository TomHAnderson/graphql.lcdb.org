<?php

declare(strict_types=1);

namespace App\GraphQL\Query\InternetArchive;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\Artist;
use App\GraphQL\Query\GraphQLQuery;
use Doctrine\ORM\EntityManager;
use GraphQL\Error\Error;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

use function escapeshellarg;
use function exec;
use function implode;
use function json_decode;

class ArtistQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(Artist::class),
            'args' => [
                'id' => Type::nonNull($driver->type('string')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                $entityManager = $driver->get(EntityManager::class);

                // Sanitize the id for command line use
                $id = escapeshellarg($args['id']);

                // Get the performance creator from the ia tool
                $output     = '';
                $resultCode = 0;
                exec('ia metadata ' . $id . ' | jq [".metadata.creator"]', $output, $resultCode);

                if ($resultCode !== 0) {
                    throw new Error('Failed to fetch metadata for ID: ' . $id);
                }

                $metadata = json_decode(implode("\n", $output), true);
                $creator  = $metadata[0];

                return $entityManager->getRepository(Artist::class)->findOneBy(['name' => $creator])
                    ?? throw new Error('Artist not found: ' . $args['name']);
            },
            'description' => <<<'EOF'
Find an artist by identifier.
EOF,
        ];
    }
}
