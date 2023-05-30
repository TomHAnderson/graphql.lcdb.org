<?php

declare(strict_types=1);

namespace App\Console\Commands\InternetArchive;

use App\Jobs\InternetArchive\IndexDate;
use DateInterval;
use DateTime;
use Illuminate\Console\Command;

class EnqueueDatesSince extends Command
{
    /**
     * The name and signature of the console command.
     */
    protected string $signature = 'internet-archive:enqueue:since {date}';

    /**
     * The console command description.
     */
    protected string $description = 'Enqueue all dates since a given date to be indexed.';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $startAt = new DateTime($this->argument('date'));
        $now     = new DateTime();

        while ($startAt < $now) {
            IndexDate::dispatch($startAt->format('Y-m-d'))->onQueue('default');

            echo 'enqueued ' . $startAt->format('Y-m-d') . "\n";
            $startAt->add(new DateInterval('P1D'));
        }

        return self::SUCCESS;
    }
}
