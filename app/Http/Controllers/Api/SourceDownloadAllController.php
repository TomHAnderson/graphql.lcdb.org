<?php

namespace App\Http\Controllers\Api;

use App\ORM\Entity\Source;
use Doctrine\ORM\EntityManager;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class SourceDownloadAllController extends BaseController
{
    public function __construct(private EntityManager $entityManager) {}

    public function download(int $id, Request $request) {

        $source = $this->entityManager->getRepository(Source::class)
            ->find($id);

        if (! $source) {
            abort(404);
        }

        $abbrev = ($source->getPerformance()->getArtist()->getAbbrev()) ?:
            $source->getPerformance()->getArtist()->getName();

        $date = substr($source->getPerformance()->getDate(), 0, 5);
        $year = $source->getPerformance()->getYear();

        $prefix = $this->safeHtmlString(
            $abbrev .
            $year .
            "-" .
            str_replace("/", "-", $date),
            ''
        );

        $zipfile = tempnam(sys_get_temp_dir(), 'zip');
        $zip = new \ZipArchive();
        $zip->open($zipfile, \ZIPARCHIVE::CREATE);
        $zip->addEmptyDir($prefix);
        $zip->setArchiveComment('Downloaded from http://lcdb.org/shn/' . $source->getId());

        $zip->addFromString("$prefix/$prefix.txt", $source->getTextdoc());
        foreach ($source->getChecksums() as $checksum) {
            $zip->addFromString("$prefix/$prefix." . $checksum->getDescription(), $checksum->getBody());
        }

        $zip->close();

        header("Content-type: application/octet-stream");
        header("Content-disposition: attachment; filename=$prefix.zip");

        readfile($zipfile);
        unlink($zipfile);
    }

    private function safeHtmlString($title, $ext = 'html') {

        require_once __DIR__ . '/../../../Functions/unicode_utf8.php';

        // Based on http://snipplr.com/view/9024/php-generate-url-from-text/
        $title = preg_replace('/[^A-Za-z0-9-]/', ' ', $title);
        $title = normalize($title);
        $title = preg_replace('/ +/', ' ', $title);
        $title = trim($title);
        $title = str_replace(' ', '-', $title);
        $title = preg_replace('/-+/', '-', $title);
        if ($ext) {
            $title = strtolower($title) . '.' . $ext;
        }

        return $title;
    }
}
