+++
url = "/fr/langages/php/"
title = "PHP"
chapter = true
tags = ["php"]
+++

# PHP

Le fonctionnement de PHP chez alwaysdata est très standard. Si vous avez l'habitude d'utiliser PHP sous un système Unix (par exemple, Linux), vous savez déjà presque tout ce qu'il faut.

* les [versions proposées]({{< ref "languages/php/configuration" >}}#versions-supportées) vont de la 4.4 à la 7.4 ;
* il est tout à fait possible de [personnaliser le fichier php.ini]({{< ref "languages/php/configuration" >}}#paramètres-php-ini) ;
* PHP tourne en *FastCGI*, derrière [Apache]({{< ref "sites/configure-apache" >}}) : il est donc possible de créer des fichiers `.htaccess` ;
* il est possible d'[installer des extensions]({{< ref "languages/php/extensions" >}}) (depuis PECL ou autre) ;
* il est possible d'[installer des paquets]({{< ref "languages/php/packages" >}}) (*Composer*, *PEAR*).

Les frameworks [CakePHP](https://cakephp.org/), [Laravel](https://laravel.com/), [Symfony](https://symfony.com/) et [Zend](https://framework.zend.com/) font partie de nos applications autoinstallables. 

---

* [Ressource API](https://api.alwaysdata.com/v1/environment/php/doc/)
* [Problèmes fréquents]({{< ref "languages/php/troubleshooting" >}})
