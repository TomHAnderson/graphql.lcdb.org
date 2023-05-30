<?php

declare(strict_types=1);

namespace App\GraphQL;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Schema as GraphQLSchema;

final class Schema
{
    /** @param array<string, mixed> $variables */
    public static function build(Driver $driver, array $variables, string|null $operationName): GraphQLSchema
    {
        return new GraphQLSchema([
            'query' => new ObjectType([
                'name' => 'query',
                'fields' => [
                    // Artists
                    'artists'                => Query\Artist\ArtistsQuery::getDefinition($driver, $variables, $operationName),
                    'artist'                 => Query\Artist\AritstQuery::getDefinition($driver, $variables, $operationName),
                    'artistYears'            => Query\Artist\ArtistYearsQuery::getDefinition($driver, $variables, $operationName),
                    'artistLatestYear'       => Query\Artist\ArtistLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    'artistsUnprefix'        => Query\Artist\ArtistsUnprefixQuery::getDefinition($driver, $variables, $operationName),
                    'artistsUnprefixSource'  => Query\Artist\ArtistsUnprefixSourceQuery::getDefinition($driver, $variables, $operationName),

                    // Artist Groups
                    'artistGroup'                 => Query\ArtistGroup\ArtistGroupQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroups'                => Query\ArtistGroup\ArtistGroupsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupArtists'          => Query\ArtistGroup\ArtistGroupArtistsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupLatestYear'       => Query\ArtistGroup\ArtistGroupLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupSourceCount'      => Query\ArtistGroup\ArtistGroupSourceCountQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupYears'            => Query\ArtistGroup\ArtistGroupYearsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupSourceYears'      => Query\ArtistGroup\ArtistGroupSourceYearsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupSourceLatestYear' => Query\ArtistGroup\ArtistGroupSourceLatestYearQuery::getDefinition($driver, $variables, $operationName),

                    // Performances
                    'performances'     => Query\Performance\PerformancesQuery::getDefinition($driver, $variables, $operationName),
                    'performance'      => Query\Performance\PerformanceQuery::getDefinition($driver, $variables, $operationName),

                    // Sources
                    'sources'          => Query\Source\SourcesQuery::getDefinition($driver, $variables, $operationName),
                    'source'           => Query\Source\SourceQuery::getDefinition($driver, $variables, $operationName),
                    'sourceCount'      => Query\Source\SourceCountQuery::getDefinition($driver, $variables, $operationName),
                    'sourceYears'      => Query\Source\SourceYearsQuery::getDefinition($driver, $variables, $operationName),
                    'sourceLatestYear' => Query\Source\SourceLatestYearQuery::getDefinition($driver, $variables, $operationName),

                    // Internet Archive
                    'creator'              => Query\InternetArchive\Creator\CreatorQuery::getDefinition($driver, $variables, $operationName),
                    'creatorLatestYear'    => Query\InternetArchive\Creator\CreatorLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    'creatorYears'         => Query\InternetArchive\Creator\CreatorYearsQuery::getDefinition($driver, $variables, $operationName),
                    'creators'             => Query\InternetArchive\Creator\CreatorsQuery::getDefinition($driver, $variables, $operationName),
                    'creatorsUnprefix'     => Query\InternetArchive\Creator\CreatorsUnprefixQuery::getDefinition($driver, $variables, $operationName),
                    'identifier'           => Query\InternetArchive\Identifier\IdentifierQuery::getDefinition($driver, $variables, $operationName),
                    'identifiers'          => Query\InternetArchive\Identifier\IdentifiersQuery::getDefinition($driver, $variables, $operationName),

                    // Users
                    'users'                => Query\User\UsersQuery::getDefinition($driver, $variables, $operationName),
                    'user'                 => Query\User\UserQuery::getDefinition($driver, $variables, $operationName),
                    'userByUsername'       => Query\User\UserByUsernameQuery::getDefinition($driver, $variables, $operationName),

                    // User Lists
                    'userList'             => Query\UserList\UserListQuery::getDefinition($driver, $variables, $operationName),
                    'userListByUsername'   => Query\UserList\UserListByUsernameQuery::getDefinition($driver, $variables, $operationName),

                    // User Performances
                    'userPerformancesByUsername' => Query\UserPerformance\UserPerformancesByUsernameQuery::getDefinition($driver, $variables, $operationName),
                    'userPerformance'            => Query\UserPerformance\UserPerformanceQuery::getDefinition($driver, $variables, $operationName),
                ],
            ]),
        ]);
    }
}
