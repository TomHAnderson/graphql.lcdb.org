<?php

namespace DoctrineProxies\__CG__\App\Doctrine\ORM\Entity;


/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Template extends \App\Doctrine\ORM\Entity\Template implements \Doctrine\ORM\Proxy\Proxy
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
            return ['__isInitialized__', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'name', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'author', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'description', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'default_colors', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'default_columns', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'longdesc', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'smarty', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'forcelist', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'zendview', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'id', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'users', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'userLists'];
        }

        return ['__isInitialized__', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'name', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'author', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'description', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'default_colors', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'default_columns', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'longdesc', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'smarty', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'forcelist', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'zendview', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'id', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'users', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\Template' . "\0" . 'userLists'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Template $proxy) {
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
    public function setAuthor($author)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAuthor', [$author]);

        return parent::setAuthor($author);
    }

    /**
     * {@inheritDoc}
     */
    public function getAuthor()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAuthor', []);

        return parent::getAuthor();
    }

    /**
     * {@inheritDoc}
     */
    public function setDescription($description = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDescription', [$description]);

        return parent::setDescription($description);
    }

    /**
     * {@inheritDoc}
     */
    public function getDescription()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDescription', []);

        return parent::getDescription();
    }

    /**
     * {@inheritDoc}
     */
    public function setDefaultColors($defaultColors = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDefaultColors', [$defaultColors]);

        return parent::setDefaultColors($defaultColors);
    }

    /**
     * {@inheritDoc}
     */
    public function getDefaultColors()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDefaultColors', []);

        return parent::getDefaultColors();
    }

    /**
     * {@inheritDoc}
     */
    public function setDefaultColumns($defaultColumns = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDefaultColumns', [$defaultColumns]);

        return parent::setDefaultColumns($defaultColumns);
    }

    /**
     * {@inheritDoc}
     */
    public function getDefaultColumns()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDefaultColumns', []);

        return parent::getDefaultColumns();
    }

    /**
     * {@inheritDoc}
     */
    public function setLongdesc($longdesc = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLongdesc', [$longdesc]);

        return parent::setLongdesc($longdesc);
    }

    /**
     * {@inheritDoc}
     */
    public function getLongdesc()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLongdesc', []);

        return parent::getLongdesc();
    }

    /**
     * {@inheritDoc}
     */
    public function setSmarty($smarty)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setSmarty', [$smarty]);

        return parent::setSmarty($smarty);
    }

    /**
     * {@inheritDoc}
     */
    public function getSmarty()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSmarty', []);

        return parent::getSmarty();
    }

    /**
     * {@inheritDoc}
     */
    public function setForcelist($forcelist)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setForcelist', [$forcelist]);

        return parent::setForcelist($forcelist);
    }

    /**
     * {@inheritDoc}
     */
    public function getForcelist()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getForcelist', []);

        return parent::getForcelist();
    }

    /**
     * {@inheritDoc}
     */
    public function setZendview($zendview)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setZendview', [$zendview]);

        return parent::setZendview($zendview);
    }

    /**
     * {@inheritDoc}
     */
    public function getZendview()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getZendview', []);

        return parent::getZendview();
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
    public function addUser(\App\Doctrine\ORM\Entity\User $user)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addUser', [$user]);

        return parent::addUser($user);
    }

    /**
     * {@inheritDoc}
     */
    public function removeUser(\App\Doctrine\ORM\Entity\User $user)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeUser', [$user]);

        return parent::removeUser($user);
    }

    /**
     * {@inheritDoc}
     */
    public function getUsers()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUsers', []);

        return parent::getUsers();
    }

    /**
     * {@inheritDoc}
     */
    public function addUserList(\App\Doctrine\ORM\Entity\UserList $userList)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addUserList', [$userList]);

        return parent::addUserList($userList);
    }

    /**
     * {@inheritDoc}
     */
    public function removeUserList(\App\Doctrine\ORM\Entity\UserList $userList)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeUserList', [$userList]);

        return parent::removeUserList($userList);
    }

    /**
     * {@inheritDoc}
     */
    public function getUserLists()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUserLists', []);

        return parent::getUserLists();
    }

}
