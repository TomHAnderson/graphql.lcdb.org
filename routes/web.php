<?php

declare(strict_types=1);

use App\Http\Controllers\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::get('/', static function () {
    return redirect('/docs/welcome');
});

Route::get('/verify-email', VerifyEmailController::class);
