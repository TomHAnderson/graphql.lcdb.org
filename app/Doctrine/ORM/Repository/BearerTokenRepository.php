<?php

declare(strict_types=1);

namespace App\Doctrine\ORM\Repository;

use App\Doctrine\ORM\Entity\BearerToken;
use App\Doctrine\ORM\Entity\User;
use DateTime;
use Doctrine\ORM\EntityRepository;

use function bin2hex;
use function random_bytes;
use function session_create_id;

class BearerTokenRepository extends EntityRepository
{
    /**
     * Find a bearer token by user and token.
     */
    public function findByUserAndToken(string $userId, string $token): mixed
    {
        return $this->findOneBy(['user' => $userId, 'token' => $token]);
    }

    /**
     * Find all bearer tokens for a user.
     *
     * @return array<mixed>
     */
    public function findByUser(string $userId): array
    {
        return $this->findBy(['user' => $userId]);
    }

    /**
     * Find all expired bearer tokens.
     *
     * @return array<mixed>
     */
    public function findExpiredTokens(): array
    {
        $qb = $this->createQueryBuilder('bt');
        $qb->where('bt.expiresAt < :now')
           ->setParameter('now', new DateTime());

        return $qb->getQuery()->getResult();
    }

    /**
     * Create a new bearer token for a user.
     */
    public function create(User $user, DateTime|null $expiresAt = null): mixed
    {
        $bearerToken = new BearerToken();
        $bearerToken->setUser($user);
        $bearerToken->setToken(session_create_id() . '-' . bin2hex(random_bytes(16))); // Unique token
        $bearerToken->setCreatedAt(new DateTime());
        if ($expiresAt) {
            $bearerToken->setExpiresAt($expiresAt);
        }

        return $bearerToken;
    }
}
