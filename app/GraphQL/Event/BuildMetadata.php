<?php

declare(strict_types=1);

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\BuildMetadata as BuildMetadataEvent;
use App\ORM\Entity\UserPerformance;
use League\Event\EventDispatcher;

final class BuildMetadata implements Event
{
    public static function subscribe(Driver $driver): void
    {
        $driver->get(EventDispatcher::class)->subscribeTo(
            'metadata.build',
            static function (BuildMetadataEvent $event): void {
                    $metadata = $event->getMetadata();

                    $metadata[UserPerformance::class]['limit'] = 1000;
            },
        );
    }
}
