<?php

namespace App\Http\Controllers\Api;

use App\ORM\Entity\InternetArchive\File;
use Doctrine\ORM\EntityManager;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class FileDownloadController extends BaseController
{
    public function __construct(private EntityManager $entityManager) {}

    public function download(int $id, Request $request)
    {
        $file = $this->entityManager->getRepository(File::class)
            ->find($id);

        if (! $file) {
            abort(404);
        }

        header('Content-type: application/text');
        header('Content-Disposition: inline; filename=' . $file->getName());
        header('Content-Description: archive.org File');

        echo $file->getBody();
    }
}
