<?php

declare(strict_types=1);

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class IaMetadata extends ObjectType
{
    /** @inheritDoc */
    public function __construct()
    {
        $configuration = [
            'name' => 'IaMetadata',
            'description' => 'Metadata for a given identifier',
            'fields' => static function () {
                return [
                    'identifier' => Type::string(),
                    'metadata' => Type::string(),
                ];
            },
        ];

        parent::__construct($configuration);
    }
}
