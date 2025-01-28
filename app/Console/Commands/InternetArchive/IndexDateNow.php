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
     * @var string
     * @phpcsSuppress SlevomatCodingStandard.TypeHints.PropertyTypeHint.MissingNativeTypeHint
     */
    protected $signature = 'internet-archive:index:now {date}';

    /**
     * The console command description.
     *
     * @var string
     * @phpcsSuppress SlevomatCodingStandard.TypeHints.PropertyTypeHint.MissingNativeTypeHint
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
