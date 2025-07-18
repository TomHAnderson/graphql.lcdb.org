<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Doctrine\ORM\EntityManager;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;

use function redirect;

class ResetPasswordController extends Controller
{
    /** @return mixed[] */
    public function __invoke(EntityManager $entityManager, Request $request): Redirector|RedirectResponse|array
    {
        $email       = $request->get('email') ?? '';
        $confirmHash = $request->get('confirmHash') ?? '';

        $queryBuilder = $entityManager->createQueryBuilder();
        $queryBuilder
            ->select('u')
            ->from('App\\Doctrine\\ORM\\Entity\\User', 'u')
            ->andWhere('u.realemail = :email')
            ->andWhere('u.confirm_hash = :confirmHash')
            ->setParameter('confirmHash', $confirmHash)
            ->setParameter('email', $email);

        $user = $queryBuilder->getQuery()->getOneOrNullResult();

        if (! $user) {
            return [
                'success' => false,
                'message' => 'Invalid email or confirmation hash.',
            ];
        }

        $user
            ->setConfirmHash(null)
            ->setValidEmail(true);

        $entityManager->flush();

        return redirect('https://lcdb.org/user/' . $user->getUsername());
    }
}
