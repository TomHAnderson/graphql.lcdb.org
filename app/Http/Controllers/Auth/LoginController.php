<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\ORM\Entity\User;
use Doctrine\ORM\EntityManager;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

use function password_verify;
use function redirect;

use const PASSWORD_BCRYPT;

class LoginController extends Controller
{
    public function __invoke(Request $request, EntityManager $entityManager): RedirectResponse
    {
        if (! $request->post('username') || ! $request->post('password')) {
            return redirect('/login?auth_error=3');
        }

        $user = $entityManager->getRepository(User::class)
            ->findOneBy([
                'username' => $request->post('username'),
            ]);

        if (! $user) {
            return redirect('/login?auth_error=1');
        }

        $passwordHash = $user->getPassword();
        $verify       = password_verify($passwordHash, PASSWORD_BCRYPT);

        if (! $verify) {
            return redirect('/login?auth_error=2');
        }

        die('auth post');
    }
}
