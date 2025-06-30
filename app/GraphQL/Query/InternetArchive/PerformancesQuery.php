<?php

declare(strict_types=1);

namespace App\GraphQL\Query\InternetArchive;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\Artist;
use App\Doctrine\ORM\Entity\Performance;
use App\GraphQL\Query\GraphQLQuery;
use Doctrine\ORM\EntityManager;
use GraphQL\Error\Error;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

use function escapeshellarg;
use function exec;
use function explode;
use function implode;
use function json_decode;
use function substr;

class PerformancesQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => Type::listOf($driver->type(Performance::class)),
            'args' => [
                'id' => Type::nonNull($driver->type('string')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                $entityManager = $driver->get(EntityManager::class);

                // Sanitize the id for command line use
                $id = escapeshellarg($args['id']);

                // Get the performance date and artist from the ia tool
                $output     = '';
                $resultCode = 0;
                exec('ia metadata ' . $id . ' | jq [".metadata.creator, .metadata.date"]', $output, $resultCode);

                if ($resultCode !== 0) {
                    throw new Error('Failed to fetch metadata for ID: ' . $id);
                }

                $metadata = json_decode(implode("\n", $output), true);

                // Find the artist
                $artist = $entityManager->getRepository(Artist::class)->findOneBy(['name' => $metadata[0]])
                    ?? throw new Error('Artist not found: ' . $metadata[0]);

                // Search all artists in the artist's groups
                $artistIds   = [];
                $artistIds[] = $artist->getId();

                foreach ($artist->getArtistToArtistGroups() as $artistToArtistGroup) {
                    $artistGroup = $artistToArtistGroup->getArtistGroup()
                        ?? throw new Error('Artist has no artist group: ' . $artist->getName());

                    foreach ($artistGroup->getArtistToArtistGroups() as $groupArtistToArtistGroup) {
                        $artistIds[] = $groupArtistToArtistGroup->getArtist()->getId();
                    }
                }

                // Format the date for query
                $dateParts = explode('-', $metadata[1]);
                $showDate  = $dateParts[1] . '/' . $dateParts[2] . '/' . substr($dateParts[0], 2);
                $showYear  = $dateParts[0];

                // Search all performances for the artists and date
                $queryBuilder = $entityManager->createQueryBuilder();
                $queryBuilder->select('performance')
                    ->from(Performance::class, 'performance')
                    ->innerJoin('performance.artist', 'artist')
                    ->andWhere(
                        $queryBuilder->expr()->in('artist.id', ':artistIds'),
                    )
                    ->andWhere(
                        $queryBuilder->expr()->eq('performance.date', ':showDate'),
                    )
                    ->andWhere(
                        $queryBuilder->expr()->eq('performance.year', ':showYear'),
                    )
                    ->setParameter('artistIds', $artistIds)
                    ->setParameter('showDate', $showDate)
                    ->setParameter('showYear', $showYear);

                return $queryBuilder->getQuery()->getResult();
            },
            'description' => <<<'EOF'
Fetch performances for an identifier.
EOF,
        ];
    }
}
