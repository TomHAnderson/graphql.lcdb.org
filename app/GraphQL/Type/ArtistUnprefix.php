<?php

declare(strict_types=1);

namespace App\GraphQL\Type;

use ApiSkeletons\Doctrine\GraphQL\Type\Buildable;
use ApiSkeletons\Doctrine\GraphQL\Type\TypeManager;
use App\ORM\Entity\Artist;
use GraphQL\Type\Definition\ObjectType;

class ArtistUnprefix extends ObjectType implements Buildable
{
    /** @param array<mixed> $params */
    public function __construct(TypeManager $typeManager, string $typeName, array $params)
    {
        $driver = $params[0];

        $artistType   = $driver->type(Artist::class);
        $artistFields = $artistType->getFields();

        $fields                         = [];
        $fields['id']                   = $artistFields['id'];
        $fields['name']                 = $artistFields['name'];
        $fields['performances']         = $artistFields['performances'];
        $fields['artistToArtistGroups'] = $artistFields['artistToArtistGroups'];
        $fields['user']                 = $artistFields['user'];
        $fields['nameUnprefix']         = [
            'type' => $typeManager->get('string'),
            'description' => 'unprefix(name)',
        ];

        $configuration = [
            'name' => $typeName,
            'description' => 'Aritst with unprefix(name)',
            'fields' => static function () use ($fields) {
                return $fields;
            },
        ];

        parent::__construct($configuration);
    }
}
