<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\ORM\Entity\Checksum;
use Doctrine\ORM\EntityManager;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

use function abort;
use function header;

class ChecksumDownloadController extends BaseController
{
    public function __construct(private EntityManager $entityManager)
    {
    }

    public function download(int $id, Request $request): void
    {
        $checksum = $this->entityManager->getRepository(Checksum::class)
            ->find($id);

        if (! $checksum) {
            abort(404);
        }

        header('Content-type: application/text');
        header('Content-Disposition: inline; filename=' . $checksum->getDescription() . '.txt');
        header('Content-Description: SHN MD5 File');

        echo $checksum->getBody();
    }
}
