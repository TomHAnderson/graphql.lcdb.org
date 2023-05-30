<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\ORM\Entity\InternetArchive\Identifier;
use Doctrine\ORM\EntityManager;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use ZipArchive;

use function abort;
use function header;
use function readfile;
use function sys_get_temp_dir;
use function tempnam;
use function unlink;

class IdentifierDownloadAllController extends BaseController
{
    public function __construct(private EntityManager $entityManager)
    {
    }

    public function download(string $id, Request $request): void
    {
        $identifier = $this->entityManager->getRepository(Identifier::class)
            ->findOneBy(['archiveIdentifier' => $id]);

        if (! $identifier) {
            abort(404);
        }

        $zipfile = tempnam(sys_get_temp_dir(), 'zip');
        $zip     = new ZipArchive();
        $zip->open($zipfile, \ZIPARCHIVE::CREATE);
        $zip->addEmptyDir($id);
        $zip->setArchiveComment('Downloaded from https://lcdb.org/identifier/' . $id);

        foreach ($identifier->getFiles() as $file) {
            $zip->addFromString($id . '/' . $file->getName(), $file->getBody());
        }

        $zip->close();

        header('Content-type: application/octet-stream');
        header('Content-disposition: attachment; filename=' . $id . '.zip');

        readfile($zipfile);
        unlink($zipfile);
    }
}
