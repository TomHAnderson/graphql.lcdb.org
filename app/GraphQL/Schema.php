<?php

declare(strict_types=1);

namespace App\GraphQL;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Schema as GraphQLSchema;

use function ksort;

final class Schema
{
    /** @param array<string, mixed> $variables */
    public static function build(Driver $driver, array $variables, string|null $operationName): GraphQLSchema
    {
        // Subscribe to events
        Event\BuildMetadata::subscribe($driver);
        Event\ArtistDefinition::subscribe($driver);
        Event\ArtistGroupDefinition::subscribe($driver);
        Event\PerformanceDefinition::subscribe($driver);
        Event\SourceDefinition::subscribe($driver);
        Event\UserDefinition::subscribe($driver);
        Event\UserListDefinition::subscribe($driver);
        Event\InternetArchive\CreatorDefinition::subscribe($driver);

        $fields = [
            // Artists
            'artistsRoot'                => Query\Artist\ArtistsRootQuery::getDefinition($driver, $variables, $operationName),
            'artists'                => Query\Artist\ArtistsQuery::getDefinition($driver, $variables, $operationName),
            'artist'                 => Query\Artist\AritstQuery::getDefinition($driver, $variables, $operationName),
            'artistsUnprefix'        => Query\Artist\ArtistsUnprefixQuery::getDefinition($driver, $variables, $operationName),
            'artistsUnprefixSource'  => Query\Artist\ArtistsUnprefixSourceQuery::getDefinition($driver, $variables, $operationName),

            // Artist Groups
            'artistGroup'                 => Query\ArtistGroup\ArtistGroupQuery::getDefinition($driver, $variables, $operationName),
            'artistGroups'                => Query\ArtistGroup\ArtistGroupsQuery::getDefinition($driver, $variables, $operationName),

            // Performances
            'performance'      => Query\Performance\PerformanceQuery::getDefinition($driver, $variables, $operationName),
            'performances'     => Query\Performance\PerformancesQuery::getDefinition($driver, $variables, $operationName),

            // Sources
            'source'           => Query\Source\SourceQuery::getDefinition($driver, $variables, $operationName),
            'sources'          => Query\Source\SourcesQuery::getDefinition($driver, $variables, $operationName),

            // Internet Archive
            'iaArtist'      => Query\InternetArchive\ArtistQuery::getDefinition($driver, $variables, $operationName),
            'iaPerformances' => Query\InternetArchive\PerformancesQuery::getDefinition($driver, $variables, $operationName),

            // Users
            'user'                 => Query\User\UserQuery::getDefinition($driver, $variables, $operationName),
            'users'                => Query\User\UsersQuery::getDefinition($driver, $variables, $operationName),
            'userByUsername'       => Query\User\UserByUsernameQuery::getDefinition($driver, $variables, $operationName),

            // User Lists
            'userList'             => Query\UserList\UserListQuery::getDefinition($driver, $variables, $operationName),
            'userListByUsername'   => Query\UserList\UserListByUsernameQuery::getDefinition($driver, $variables, $operationName),

            // User Performances
            'userPerformance'            => Query\UserPerformance\UserPerformanceQuery::getDefinition($driver, $variables, $operationName),
            'userPerformancesByUsername' => Query\UserPerformance\UserPerformancesByUsernameQuery::getDefinition($driver, $variables, $operationName),
        ];

        ksort($fields);

        return new GraphQLSchema([
            'query' => new ObjectType([
                'name' => 'query',
                'fields' => $fields,
            ]),
        ]);
    }
}
