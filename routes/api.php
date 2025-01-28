<?php

declare(strict_types=1);

use App\Http\Controllers\Api\ChecksumDownloadController;
use App\Http\Controllers\Api\FileDownloadController;
use App\Http\Controllers\Api\IdentifierDownloadAllController;
use App\Http\Controllers\Api\SourceDownloadAllController;
use App\Http\Controllers\Api\SourceDownloadTextdocController;
use App\Http\Controllers\GraphQLController;
use Illuminate\Support\Facades\Route;

// Open API endpoint for GraphQL
Route::post('/', GraphQLController::class)
    ->name('graphql');

Route::get('/api/source/{id}/download', SourceDownloadAllController::class)
    ->name('source.download.all.get');

Route::get('/api/source/{id}/textdoc/download', SourceDownloadTextdocController::class)
    ->name('source.download.textdoc.get');

Route::get('/api/checksum/{id}/download', ChecksumDownloadController::class)
    ->name('checksum.download.get');

Route::get('/api/file/{id}/download', FileDownloadController::class)
    ->name('file.download.get');

Route::get('/api/identifier/{id}/download', IdentifierDownloadAllController::class)
    ->name('identifier.download.all.get');
