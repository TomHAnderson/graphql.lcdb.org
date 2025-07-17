<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use ApiSkeletons\Doctrine\ORM\GraphQL\Config;
use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\GraphQL\Schema;
use Doctrine\ORM\EntityManager;
use GraphQL\Error\Error;
use GraphQL\Error\FormattedError;
use GraphQL\GraphQL;
use GraphQL\Validator\DocumentValidator;
use GraphQL\Validator\Rules\QueryComplexity;
use Illuminate\Http\Request;
use Throwable;

use function array_map;
use function array_merge;
use function config;
use function mb_convert_encoding;

class GraphQLController extends Controller
{
    /** @return mixed[] */
    public function __invoke(EntityManager $entityManager, Request $request): array
    {
        $variables     = $request->get('variables') ?? [];
        $operationName = $request->get('operationName');

        // Build Driver
        $driver = new Driver($entityManager, new Config([
            'globalEnable' => true,
            'limit' => 300,
            'useHydratorCache' => true,
            'ignoreFields' => ['password', 'realemail'],
            'groupSuffix' => '',
            'sortFields' => true,
            'entityPrefix' => 'App\\Doctrine\\ORM\\Entity\\',
        ]));

        // Limit query complexity
        DocumentValidator::addRule(new QueryComplexity(350));

        try {
            $myValidationRules = array_merge(
                GraphQL::getStandardValidationRules(),
                [new QueryComplexity(250)],
            );

            // Run GraphQL
            $result = GraphQL::executeQuery(
                schema: Schema::build($driver, $variables, $operationName),
                source: $request->get('query'),
                variableValues: $variables,
                operationName: $operationName,
                validationRules: $myValidationRules,
            )
                ->setErrorFormatter(static function (Error $error): array {
                    $exception = $error->getPrevious() ?: $error;

                    // Local development
                    if (config('app.debug')) {
                        throw $exception;
                    }

                    return FormattedError::createFromException($error);
                })
                ->setErrorsHandler(static fn (array $errors, callable $formatter): array => array_map($formatter, $errors));

            return mb_convert_encoding($result->toArray(), 'UTF-8', 'UTF-8');
        } catch (Throwable $e) {
            throw $e;

            return FormattedError::createFromException($e);
        }
    }
}
