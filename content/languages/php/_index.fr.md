+++
url = "/fr/langages/php/"
title = "PHP"
archetype = "chapter"
tags = ["php"]
+++

# PHP

Le fonctionnement de [PHP](https://www.php.net) chez alwaysdata est très standard. Si vous avez l'habitude d'utiliser PHP sous un système Unix (par exemple, Linux), vous savez déjà presque tout ce qu'il faut.

* les [versions proposées](languages/php/configuration#versions-supportées) vont de la 4.4 à la 8.4 ;
* il est tout à fait possible de [personnaliser le fichier php.ini](languages/php/configuration#paramètres-phpini) ;
* PHP tourne en *FastCGI*, derrière [Apache](sites/configure-apache) : il est donc possible de créer des fichiers `.htaccess` ;
* il est possible d'[installer des extensions](languages/php/extensions) (depuis PECL ou autre) ;
* il est possible d'[installer des paquets](languages/php/packages) (*Composer*, *PEAR*) ;
* il est possible d'[installer des bibliothèques](languages/php/libraries).

Notre marketplace propose l'installation des frameworks [CakePHP](https://cakephp.org/), [Laminas](https://getlaminas.org/), [Laravel](https://laravel.com/), [Symfony](https://symfony.com/) et [TNH](https://github.com/tnhfw/tnh-fw).

---

* [Ressource API](https://api.alwaysdata.com/v1/environment/php/doc/)
* [Problèmes fréquents](languages/php/troubleshooting)
