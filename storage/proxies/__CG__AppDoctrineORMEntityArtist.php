<?php

namespace DoctrineProxies\__CG__\App\Doctrine\ORM\Entity;


/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Artist extends \App\Doctrine\ORM\Entity\Artist implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array<string, null> properties to be lazy loaded, indexed by property name
     */
    public static $lazyPropertiesNames = array (
);

    /**
     * @var array<string, mixed> default values of properties to be lazy loaded, with keys being the property names
     *
     * @see \Doctrine\Common\Proxy\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = array (
);



    public function __construct(?\Closure $initializer = null, ?\Closure $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return ['__isInitialized__', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'name', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'fanUrl', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'officialUrl', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'icon', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'artistuserid', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'createdAt', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'abbrev', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'isTradable', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'ref_shnartist', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'nameFirstLetter', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'archive_key', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'top100', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'nameNormalized', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'notes', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'id', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'performances', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'artistToArtistGroups', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'creators', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'user'];
        }

        return ['__isInitialized__', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'name', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'fanUrl', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'officialUrl', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'icon', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'artistuserid', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'createdAt', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'abbrev', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'isTradable', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'ref_shnartist', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'nameFirstLetter', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'archive_key', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'top100', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'nameNormalized', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'notes', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'id', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'performances', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'artistToArtistGroups', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'creators', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Artist' . "\0" . 'user'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Artist $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy::$lazyPropertiesDefaults as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load(): void
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', []);
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized(): bool
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized): void
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(?\Closure $initializer = null): void
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer(): ?\Closure
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(?\Closure $cloner = null): void
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner(): ?\Closure
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @deprecated no longer in use - generated code now relies on internal components rather than generated public API
     * @static
     */
    public function __getLazyProperties(): array
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function setName($name)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setName', [$name]);

        return parent::setName($name);
    }

    /**
     * {@inheritDoc}
     */
    public function getName()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getName', []);

        return parent::getName();
    }

    /**
     * {@inheritDoc}
     */
    public function setFanUrl($fanUrl = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setFanUrl', [$fanUrl]);

        return parent::setFanUrl($fanUrl);
    }

    /**
     * {@inheritDoc}
     */
    public function getFanUrl()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFanUrl', []);

        return parent::getFanUrl();
    }

    /**
     * {@inheritDoc}
     */
    public function setOfficialUrl($officialUrl = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setOfficialUrl', [$officialUrl]);

        return parent::setOfficialUrl($officialUrl);
    }

    /**
     * {@inheritDoc}
     */
    public function getOfficialUrl()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getOfficialUrl', []);

        return parent::getOfficialUrl();
    }

    /**
     * {@inheritDoc}
     */
    public function setIcon($icon)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setIcon', [$icon]);

        return parent::setIcon($icon);
    }

    /**
     * {@inheritDoc}
     */
    public function getIcon()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getIcon', []);

        return parent::getIcon();
    }

    /**
     * {@inheritDoc}
     */
    public function setArtistuserid($artistuserid)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setArtistuserid', [$artistuserid]);

        return parent::setArtistuserid($artistuserid);
    }

    /**
     * {@inheritDoc}
     */
    public function getArtistuserid()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getArtistuserid', []);

        return parent::getArtistuserid();
    }

    /**
     * {@inheritDoc}
     */
    public function setCreatedAt($createdAt = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCreatedAt', [$createdAt]);

        return parent::setCreatedAt($createdAt);
    }

    /**
     * {@inheritDoc}
     */
    public function getCreatedAt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCreatedAt', []);

        return parent::getCreatedAt();
    }

    /**
     * {@inheritDoc}
     */
    public function setAbbrev($abbrev)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAbbrev', [$abbrev]);

        return parent::setAbbrev($abbrev);
    }

    /**
     * {@inheritDoc}
     */
    public function getAbbrev()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAbbrev', []);

        return parent::getAbbrev();
    }

    /**
     * {@inheritDoc}
     */
    public function setIsTradable($isTradable)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setIsTradable', [$isTradable]);

        return parent::setIsTradable($isTradable);
    }

    /**
     * {@inheritDoc}
     */
    public function getIsTradable()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getIsTradable', []);

        return parent::getIsTradable();
    }

    /**
     * {@inheritDoc}
     */
    public function setRefShnartist($refShnartist)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setRefShnartist', [$refShnartist]);

        return parent::setRefShnartist($refShnartist);
    }

    /**
     * {@inheritDoc}
     */
    public function getRefShnartist()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getRefShnartist', []);

        return parent::getRefShnartist();
    }

    /**
     * {@inheritDoc}
     */
    public function setNameFirstLetter($nameFirstLetter)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNameFirstLetter', [$nameFirstLetter]);

        return parent::setNameFirstLetter($nameFirstLetter);
    }

    /**
     * {@inheritDoc}
     */
    public function getNameFirstLetter()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNameFirstLetter', []);

        return parent::getNameFirstLetter();
    }

    /**
     * {@inheritDoc}
     */
    public function setArchiveKey($archiveKey)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setArchiveKey', [$archiveKey]);

        return parent::setArchiveKey($archiveKey);
    }

    /**
     * {@inheritDoc}
     */
    public function getArchiveKey()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getArchiveKey', []);

        return parent::getArchiveKey();
    }

    /**
     * {@inheritDoc}
     */
    public function setTop100($top100 = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTop100', [$top100]);

        return parent::setTop100($top100);
    }

    /**
     * {@inheritDoc}
     */
    public function getTop100()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTop100', []);

        return parent::getTop100();
    }

    /**
     * {@inheritDoc}
     */
    public function setNameNormalized($nameNormalized = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNameNormalized', [$nameNormalized]);

        return parent::setNameNormalized($nameNormalized);
    }

    /**
     * {@inheritDoc}
     */
    public function getNameNormalized()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNameNormalized', []);

        return parent::getNameNormalized();
    }

    /**
     * {@inheritDoc}
     */
    public function setNotes($notes = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNotes', [$notes]);

        return parent::setNotes($notes);
    }

    /**
     * {@inheritDoc}
     */
    public function getNotes()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNotes', []);

        return parent::getNotes();
    }

    /**
     * {@inheritDoc}
     */
    public function getId()
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', []);

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function addPerformance(\App\Doctrine\ORM\Entity\Performance $performance)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addPerformance', [$performance]);

        return parent::addPerformance($performance);
    }

    /**
     * {@inheritDoc}
     */
    public function removePerformance(\App\Doctrine\ORM\Entity\Performance $performance)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removePerformance', [$performance]);

        return parent::removePerformance($performance);
    }

    /**
     * {@inheritDoc}
     */
    public function getPerformances()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPerformances', []);

        return parent::getPerformances();
    }

    /**
     * {@inheritDoc}
     */
    public function addArtistToArtistGroup(\App\Doctrine\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addArtistToArtistGroup', [$artistToArtistGroup]);

        return parent::addArtistToArtistGroup($artistToArtistGroup);
    }

    /**
     * {@inheritDoc}
     */
    public function removeArtistToArtistGroup(\App\Doctrine\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeArtistToArtistGroup', [$artistToArtistGroup]);

        return parent::removeArtistToArtistGroup($artistToArtistGroup);
    }

    /**
     * {@inheritDoc}
     */
    public function getArtistToArtistGroups()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getArtistToArtistGroups', []);

        return parent::getArtistToArtistGroups();
    }

    /**
     * {@inheritDoc}
     */
    public function addCreator(\App\Doctrine\ORM\Entity\InternetArchive\Creator $creator)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addCreator', [$creator]);

        return parent::addCreator($creator);
    }

    /**
     * {@inheritDoc}
     */
    public function removeCreator(\App\Doctrine\ORM\Entity\InternetArchive\Creator $creator)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeCreator', [$creator]);

        return parent::removeCreator($creator);
    }

    /**
     * {@inheritDoc}
     */
    public function getCreators()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCreators', []);

        return parent::getCreators();
    }

    /**
     * {@inheritDoc}
     */
    public function setUser(\App\Doctrine\ORM\Entity\User $user)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUser', [$user]);

        return parent::setUser($user);
    }

    /**
     * {@inheritDoc}
     */
    public function getUser()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUser', []);

        return parent::getUser();
    }

}
