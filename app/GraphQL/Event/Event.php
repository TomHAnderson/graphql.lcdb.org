<?php

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\GraphQL\Driver;

interface Event
{
    public static function subscribe(Driver $driver);
}
