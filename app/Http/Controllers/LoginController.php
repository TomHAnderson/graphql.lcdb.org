<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View as ViewResponse;

use function view;

class LoginController extends Controller
{
    public function __invoke(Request $request): ViewResponse
    {
        $authError = $request->get('auth_error');

        switch ($authError) {
            case 1:
                $error = 'Username not found';
                break;
            case 2:
                $error = 'Invalid password';
                break;
            case 3:
                $error = 'Username and password are required';
                break;
            default:
                $error = '';
        }

        return view('login', ['error' => $error]);
    }
}
