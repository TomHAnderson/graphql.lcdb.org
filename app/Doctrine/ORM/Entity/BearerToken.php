<?php

namespace App\Doctrine\ORM\Entity;

use DateTime;

class BearerToken
{
    private User $user;

    private string $token;

    private DateTime $createdAt;

    private DateTime|null $expiresAt = null;

    public function getId(): string
    {
        return $this->user->getId() . '-' . $this->token;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;

        return $this;
    }

    public function getCreatedAt(): DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(DateTime $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getExpiresAt(): DateTime|null
    {
        return $this->expiresAt;
    }

    public function setExpiresAt(DateTime|null $expiresAt): self
    {
        $this->expiresAt = $expiresAt;

        return $this;
    }
}
