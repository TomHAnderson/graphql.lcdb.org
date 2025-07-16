<?php

namespace App\Doctrine\ORM\Entity;

/**
 * User
 */
class User
{
    /**
     * @var string
     */
    private $username;

    /**
     * @var string
     */
    private $password;

    /**
     * @var string|null
     */
    private $email;

    /**
     * @var string|null
     */
    private $realemail;

    /**
     * @var string|null
     */
    private $perms;

    /**
     * @var bool
     */
    private $validemail;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string|null
     */
    private $css;

    /**
     * @var int|null
     */
    private $activetrading;

    /**
     * @var string|null
     */
    private $rules;

    /**
     * @var bool|null
     */
    private $config_showrules;

    /**
     * @var string|null
     */
    private $config_colors;

    /**
     * @var string|null
     */
    private $config_columns;

    /**
     * @var string|null
     */
    private $columnorder;

    /**
     * @var string|null
     */
    private $city;

    /**
     * @var string
     */
    private $state;

    /**
     * @var string|null
     */
    private $zipcode;

    /**
     * @var string|null
     */
    private $tradenotes;

    /**
     * @var string|null
     */
    private $confirm_hash;

    /**
     * @var string|null
     */
    private $cookie_hash;

    /**
     * @var \DateTime|null
     */
    private $updatedAt;

    /**
     * @var string|null
     */
    private $msg_yahoo;

    /**
     * @var string|null
     */
    private $picture;

    /**
     * @var \DateTime|null
     */
    private $createdAt;

    /**
     * @var int
     */
    private $id;

    private $bearerTokens = null;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $artists;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $artistGroups;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $artistToArtistGroups;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $userToArtistGroups;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $userPerformances;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $userLists;

    /**
     * @var \App\Doctrine\ORM\Entity\Template
     */
    private $template;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $wantedPerformances = array();

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->artists = new \Doctrine\Common\Collections\ArrayCollection();
        $this->artistGroups = new \Doctrine\Common\Collections\ArrayCollection();
        $this->artistToArtistGroups = new \Doctrine\Common\Collections\ArrayCollection();
        $this->userToArtistGroups = new \Doctrine\Common\Collections\ArrayCollection();
        $this->userPerformances = new \Doctrine\Common\Collections\ArrayCollection();
        $this->userLists = new \Doctrine\Common\Collections\ArrayCollection();
        $this->wantedPerformances = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set username.
     *
     * @param string $username
     *
     * @return User
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get username.
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set password.
     *
     * @param string $password
     *
     * @return User
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password.
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set email.
     *
     * @param string|null $email
     *
     * @return User
     */
    public function setEmail($email = null)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email.
     *
     * @return string|null
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set realemail.
     *
     * @param string|null $realemail
     *
     * @return User
     */
    public function setRealemail($realemail = null)
    {
        $this->realemail = $realemail;

        return $this;
    }

    /**
     * Get realemail.
     *
     * @return string|null
     */
    public function getRealemail()
    {
        return $this->realemail;
    }

    /**
     * Set perms.
     *
     * @param string|null $perms
     *
     * @return User
     */
    public function setPerms($perms = null)
    {
        $this->perms = $perms;

        return $this;
    }

    /**
     * Get perms.
     *
     * @return string|null
     */
    public function getPerms()
    {
        return $this->perms;
    }

    /**
     * Set validemail.
     *
     * @param bool $validemail
     *
     * @return User
     */
    public function setValidemail($validemail)
    {
        $this->validemail = $validemail;

        return $this;
    }

    /**
     * Get validemail.
     *
     * @return bool
     */
    public function getValidemail()
    {
        return $this->validemail;
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return User
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set css.
     *
     * @param string|null $css
     *
     * @return User
     */
    public function setCss($css = null)
    {
        $this->css = $css;

        return $this;
    }

    /**
     * Get css.
     *
     * @return string|null
     */
    public function getCss()
    {
        return $this->css;
    }

    /**
     * Set activetrading.
     *
     * @param int|null $activetrading
     *
     * @return User
     */
    public function setActivetrading($activetrading = null)
    {
        $this->activetrading = $activetrading;

        return $this;
    }

    /**
     * Get activetrading.
     *
     * @return int|null
     */
    public function getActivetrading()
    {
        return $this->activetrading;
    }

    /**
     * Set rules.
     *
     * @param string|null $rules
     *
     * @return User
     */
    public function setRules($rules = null)
    {
        $this->rules = $rules;

        return $this;
    }

    /**
     * Get rules.
     *
     * @return string|null
     */
    public function getRules()
    {
        return $this->rules;
    }

    /**
     * Set configShowrules.
     *
     * @param bool|null $configShowrules
     *
     * @return User
     */
    public function setConfigShowrules($configShowrules = null)
    {
        $this->config_showrules = $configShowrules;

        return $this;
    }

    /**
     * Get configShowrules.
     *
     * @return bool|null
     */
    public function getConfigShowrules()
    {
        return $this->config_showrules;
    }

    /**
     * Set configColors.
     *
     * @param string|null $configColors
     *
     * @return User
     */
    public function setConfigColors($configColors = null)
    {
        $this->config_colors = $configColors;

        return $this;
    }

    /**
     * Get configColors.
     *
     * @return string|null
     */
    public function getConfigColors()
    {
        return $this->config_colors;
    }

    /**
     * Set configColumns.
     *
     * @param string|null $configColumns
     *
     * @return User
     */
    public function setConfigColumns($configColumns = null)
    {
        $this->config_columns = $configColumns;

        return $this;
    }

    /**
     * Get configColumns.
     *
     * @return string|null
     */
    public function getConfigColumns()
    {
        return $this->config_columns;
    }

    /**
     * Set columnorder.
     *
     * @param string|null $columnorder
     *
     * @return User
     */
    public function setColumnorder($columnorder = null)
    {
        $this->columnorder = $columnorder;

        return $this;
    }

    /**
     * Get columnorder.
     *
     * @return string|null
     */
    public function getColumnorder()
    {
        return $this->columnorder;
    }

    /**
     * Set city.
     *
     * @param string|null $city
     *
     * @return User
     */
    public function setCity($city = null)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city.
     *
     * @return string|null
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set state.
     *
     * @param string $state
     *
     * @return User
     */
    public function setState($state)
    {
        $this->state = $state;

        return $this;
    }

    /**
     * Get state.
     *
     * @return string
     */
    public function getState()
    {
        return $this->state;
    }

    /**
     * Set zipcode.
     *
     * @param string|null $zipcode
     *
     * @return User
     */
    public function setZipcode($zipcode = null)
    {
        $this->zipcode = $zipcode;

        return $this;
    }

    /**
     * Get zipcode.
     *
     * @return string|null
     */
    public function getZipcode()
    {
        return $this->zipcode;
    }

    /**
     * Set tradenotes.
     *
     * @param string|null $tradenotes
     *
     * @return User
     */
    public function setTradenotes($tradenotes = null)
    {
        $this->tradenotes = $tradenotes;

        return $this;
    }

    /**
     * Get tradenotes.
     *
     * @return string|null
     */
    public function getTradenotes()
    {
        return $this->tradenotes;
    }

    /**
     * Set confirmHash.
     *
     * @param string|null $confirmHash
     *
     * @return User
     */
    public function setConfirmHash($confirmHash = null)
    {
        $this->confirm_hash = $confirmHash;

        return $this;
    }

    /**
     * Get confirmHash.
     *
     * @return string|null
     */
    public function getConfirmHash()
    {
        return $this->confirm_hash;
    }

    /**
     * Set cookieHash.
     *
     * @param string|null $cookieHash
     *
     * @return User
     */
    public function setCookieHash($cookieHash = null)
    {
        $this->cookie_hash = $cookieHash;

        return $this;
    }

    /**
     * Get cookieHash.
     *
     * @return string|null
     */
    public function getCookieHash()
    {
        return $this->cookie_hash;
    }

    /**
     * Set updatedAt.
     *
     * @param \DateTime|null $updatedAt
     *
     * @return User
     */
    public function setUpdatedAt($updatedAt = null)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Get updatedAt.
     *
     * @return \DateTime|null
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set msgYahoo.
     *
     * @param string|null $msgYahoo
     *
     * @return User
     */
    public function setMsgYahoo($msgYahoo = null)
    {
        $this->msg_yahoo = $msgYahoo;

        return $this;
    }

    /**
     * Get msgYahoo.
     *
     * @return string|null
     */
    public function getMsgYahoo()
    {
        return $this->msg_yahoo;
    }

    /**
     * Set picture.
     *
     * @param string|null $picture
     *
     * @return User
     */
    public function setPicture($picture = null)
    {
        $this->picture = $picture;

        return $this;
    }

    /**
     * Get picture.
     *
     * @return string|null
     */
    public function getPicture()
    {
        return $this->picture;
    }

    /**
     * Set createdAt.
     *
     * @param \DateTime|null $createdAt
     *
     * @return User
     */
    public function setCreatedAt($createdAt = null)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt.
     *
     * @return \DateTime|null
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Add artist.
     *
     * @param \App\Doctrine\ORM\Entity\Artist $artist
     *
     * @return User
     */
    public function addArtist(\App\Doctrine\ORM\Entity\Artist $artist)
    {
        $this->artists[] = $artist;

        return $this;
    }

    /**
     * Remove artist.
     *
     * @param \App\Doctrine\ORM\Entity\Artist $artist
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeArtist(\App\Doctrine\ORM\Entity\Artist $artist)
    {
        return $this->artists->removeElement($artist);
    }

    /**
     * Get artists.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getArtists()
    {
        return $this->artists;
    }

    /**
     * Add artistGroup.
     *
     * @param \App\Doctrine\ORM\Entity\ArtistGroup $artistGroup
     *
     * @return User
     */
    public function addArtistGroup(\App\Doctrine\ORM\Entity\ArtistGroup $artistGroup)
    {
        $this->artistGroups[] = $artistGroup;

        return $this;
    }

    /**
     * Remove artistGroup.
     *
     * @param \App\Doctrine\ORM\Entity\ArtistGroup $artistGroup
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeArtistGroup(\App\Doctrine\ORM\Entity\ArtistGroup $artistGroup)
    {
        return $this->artistGroups->removeElement($artistGroup);
    }

    /**
     * Get artistGroups.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getArtistGroups()
    {
        return $this->artistGroups;
    }

    /**
     * Add artistToArtistGroup.
     *
     * @param \App\Doctrine\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup
     *
     * @return User
     */
    public function addArtistToArtistGroup(\App\Doctrine\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup)
    {
        $this->artistToArtistGroups[] = $artistToArtistGroup;

        return $this;
    }

    /**
     * Remove artistToArtistGroup.
     *
     * @param \App\Doctrine\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeArtistToArtistGroup(\App\Doctrine\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup)
    {
        return $this->artistToArtistGroups->removeElement($artistToArtistGroup);
    }

    /**
     * Get artistToArtistGroups.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getArtistToArtistGroups()
    {
        return $this->artistToArtistGroups;
    }

    /**
     * Add userToArtistGroup.
     *
     * @param \App\Doctrine\ORM\Entity\UserToArtistGroup $userToArtistGroup
     *
     * @return User
     */
    public function addUserToArtistGroup(\App\Doctrine\ORM\Entity\UserToArtistGroup $userToArtistGroup)
    {
        $this->userToArtistGroups[] = $userToArtistGroup;

        return $this;
    }

    /**
     * Remove userToArtistGroup.
     *
     * @param \App\Doctrine\ORM\Entity\UserToArtistGroup $userToArtistGroup
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeUserToArtistGroup(\App\Doctrine\ORM\Entity\UserToArtistGroup $userToArtistGroup)
    {
        return $this->userToArtistGroups->removeElement($userToArtistGroup);
    }

    /**
     * Get userToArtistGroups.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getUserToArtistGroups()
    {
        return $this->userToArtistGroups;
    }

    /**
     * Add userPerformance.
     *
     * @param \App\Doctrine\ORM\Entity\UserPerformance $userPerformance
     *
     * @return User
     */
    public function addUserPerformance(\App\Doctrine\ORM\Entity\UserPerformance $userPerformance)
    {
        $this->userPerformances[] = $userPerformance;

        return $this;
    }

    /**
     * Remove userPerformance.
     *
     * @param \App\Doctrine\ORM\Entity\UserPerformance $userPerformance
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeUserPerformance(\App\Doctrine\ORM\Entity\UserPerformance $userPerformance)
    {
        return $this->userPerformances->removeElement($userPerformance);
    }

    /**
     * Get userPerformances.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getUserPerformances()
    {
        return $this->userPerformances;
    }

    /**
     * Add userList.
     *
     * @param \App\Doctrine\ORM\Entity\UserList $userList
     *
     * @return User
     */
    public function addUserList(\App\Doctrine\ORM\Entity\UserList $userList)
    {
        $this->userLists[] = $userList;

        return $this;
    }

    /**
     * Remove userList.
     *
     * @param \App\Doctrine\ORM\Entity\UserList $userList
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeUserList(\App\Doctrine\ORM\Entity\UserList $userList)
    {
        return $this->userLists->removeElement($userList);
    }

    /**
     * Get userLists.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getUserLists()
    {
        return $this->userLists;
    }

    /**
     * Set template.
     *
     * @param \App\Doctrine\ORM\Entity\Template $template
     *
     * @return User
     */
    public function setTemplate(\App\Doctrine\ORM\Entity\Template $template)
    {
        $this->template = $template;

        return $this;
    }

    /**
     * Get template.
     *
     * @return \App\Doctrine\ORM\Entity\Template
     */
    public function getTemplate()
    {
        return $this->template;
    }

    /**
     * Add wantedPerformance.
     *
     * @param \App\Doctrine\ORM\Entity\Performance $wantedPerformance
     *
     * @return User
     */
    public function addWantedPerformance(\App\Doctrine\ORM\Entity\Performance $wantedPerformance)
    {
        $this->wantedPerformances[] = $wantedPerformance;

        return $this;
    }

    /**
     * Remove wantedPerformance.
     *
     * @param \App\Doctrine\ORM\Entity\Performance $wantedPerformance
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeWantedPerformance(\App\Doctrine\ORM\Entity\Performance $wantedPerformance)
    {
        return $this->wantedPerformances->removeElement($wantedPerformance);
    }

    /**
     * Get wantedPerformances.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getWantedPerformances()
    {
        return $this->wantedPerformances;
    }
}
