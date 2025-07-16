<?php

declare(strict_types=1);

namespace App\GraphQL\Mutation;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;

interface GraphQLMutation
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<mixed, mixed>
     */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array;
}
