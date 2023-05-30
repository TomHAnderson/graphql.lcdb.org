<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\ORM\Entity\Source;
use Doctrine\ORM\EntityManager;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

use function abort;
use function header;
use function preg_replace;
use function str_replace;
use function strtolower;
use function substr;
use function trim;

class SourceDownloadTextdocController extends BaseController
{
    public function __construct(private EntityManager $entityManager)
    {
    }

    public function download(int $id, Request $request): void
    {
        $source = $this->entityManager->getRepository(Source::class)
            ->find($id);

        if (! $source) {
            abort(404);
        }

        $abbrev = $source->getPerformance()->getArtist()->getAbbrev() ?:
            $source->getPerformance()->getArtist()->getName();

        $date = substr($source->getPerformance()->getDate(), 0, 5);
        $year = $source->getPerformance()->getYear();

        $filename = $this->safeHtmlString($abbrev . $year . '-' . str_replace('/', '-', $date), 'txt');

        header('Content-type: application/text');
        header('Content-Disposition: inline; filename=' . $filename);
        header('Content-Description: SHN Info File');

        echo $source->getTextdoc();
    }

    private function safeHtmlString(string $title, string $ext = 'html'): string
    {
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
