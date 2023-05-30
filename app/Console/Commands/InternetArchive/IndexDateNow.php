<?php

declare(strict_types=1);

namespace App\Console\Commands\InternetArchive;

use App\Jobs\InternetArchive\IndexDate;
use Doctrine\ORM\EntityManager;
use Illuminate\Console\Command;

class IndexDateNow extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @phpcsSuppress SlevomatCodingStandard.TypeHints.PropertyTypeHint.MissingAnyTypeHint
     */
    protected $signature = 'internet-archive:index:now {date}';

    /**
     * The console command description.
     *
     * @phpcsSuppress SlevomatCodingStandard.TypeHints.PropertyTypeHint.MissingAnyTypeHint
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(EntityManager $entityManager): int
    {
        $job = new IndexDate($this->argument('date'));

        $job->handle($entityManager);

        return Command::SUCCESS;
    }
}
