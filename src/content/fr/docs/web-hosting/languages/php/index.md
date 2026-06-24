---
permalink: /fr/docs/hebergement-web/langages/php/
title: PHP
eleventyNavigation:
  key: PHP
  parent: Langages
  order: 1
---

Le fonctionnement de [PHP](https://www.php.net) chez alwaysdata est très standard. Si vous avez l'habitude d'utiliser PHP sous un système Unix (par exemple, Linux), vous savez déjà presque tout ce qu'il faut.

* les [versions proposées](/fr/docs/hebergement-web/langages/php/configuration/#versions-supportées) vont de la 4.4 à la 8.5 ;
* il est tout à fait possible de [personnaliser le fichier php.ini](/fr/docs/hebergement-web/langages/php/configuration/#paramètres-phpini) ;
* PHP tourne en *FastCGI*, derrière [Apache](/fr/docs/hebergement-web/sites/serveurs-http/configurer-apache/) : il est donc possible de créer des fichiers `.htaccess` ;
* il est possible d'[installer des extensions](/fr/docs/hebergement-web/langages/php/installer-une-extension/) (depuis PECL ou autre) ;
* il est possible d'[installer des paquets](/fr/docs/hebergement-web/langages/php/installer-un-paquet/) (*Composer*, *PEAR*) ;
* il est possible d'[installer des bibliothèques](/fr/docs/hebergement-web/langages/php/ajouter-une-bibliotheque/).

Notre marketplace propose l'installation des frameworks [CakePHP](https://cakephp.org/), [Laminas](https://getlaminas.org/), [Laravel](https://laravel.com/), [Symfony](https://symfony.com/) et [TNH](https://github.com/tnhfw/tnh-fw).

---

* [Ressource API](https://api.alwaysdata.com/v1/environment/php/doc/)
* [Problèmes fréquents](/fr/docs/hebergement-web/langages/php/problemes-frequents/)
