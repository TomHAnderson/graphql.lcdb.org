<?php

declare(strict_types=1);

namespace App\GraphQL\Query;

use ApiSkeletons\Doctrine\GraphQL\Driver;

interface GraphQLQuery
{
    /**
     * @param array<string, mixed> $variables
     *
     * @return array<string, mixed>
     */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array;
}
