+++
url = "/fr/applithèque/wordpress/"
title = "WordPress"
menuTitle = "WordPress"
layout = "man"
weight = 10
tags = ["wordpress"]
+++

WordPress est le [CMS](http://fr.wikipedia.org/wiki/Syst%C3%A8me_de_gestion_de_contenu) open source le plus utilisé aujourd'hui de par sa simplicité de déploiement et la possibilité d'y greffer de nouvelles fonctionnalités développées par la communauté appelées [plugins](http://wordpress.org/plugins/).

## Installation

La dernière version de WordPress fait partie de nos applications auto-installables via l'interface d'administration : **Web > Sites > Installer une application**.

Si vous souhaitez l'installer par vous-même vous devrez suivre les étapes suivantes :

- téléchargez la version souhaitée sur le [site officiel](http://www.WordPress-fr.net/telechargements/) ;
- décompressez les sources et déposez les sur votre compte alwaysdata par [FTP]({{< ref "platform/remote-access/ftp" >}}) ;
- créez votre [base de données]({{< ref "platform/databases" >}}) MySQL ;
- créez votre [site]({{< ref "platform/websites/declare-a-website" >}}) ;
- accédez à la page web de votre application pour finaliser son installation.

Si vous migrez une application WordPress, précédemment hébergée chez un autre prestataire, modifiez :

- les paramètres _siteurl_, _home_ présents dans la table `_options` de la base de données ;
- le fichier `$HOME/chemin/vers/l'application/wp-config.php` (situé à la racine de l'application).

## Recommandations

Sa notoriété en fait une cible prioritaire pour les pirates informatiques, il est donc important de suivre ces quelques recommandations d'usage :

- mettez à jour régulièrement WordPress et ses plugins ;
- informez-vous sur les rapports de bugs et failles de sécurité des plugins avant de les installer ;
- choisissez un autre préfixe que _wp__ pour le nom de vos tables. Pour changer cette valeur sur un WordPress déjà déployé, modifiez la table `_options` et le fichier `$HOME/chemin/vers/l'application/wp_config.php`.
- supprimez les thèmes et plugins inactifs ;
- supprimez le fichier readme.txt à la racine de votre application (contient la version actuelle de votre WordPress, utile pour connaitre les failles de sécurité exploitables) ;
- éditez le fichier `$HOME/chemin/vers/l'application/wp-content/themes/nom_du_theme/functions.php` de votre thème et ajoutez :

```
remove_action("wp_head", "wp_generator");
```

Cela masquera le numéro de version dans le meta name generator. Ajoutez :

```
add_filter('login_errors',create_function('$a', "return null;"));
```

Pour masquer les erreurs de connexion.

- supprimez le compte "admin" créé par défaut ;
- d'[autres règles]({{<ref "platform/websites/desinfect-a-website" >}}##3-supprimer-les-vecteurs-dinfection).

## Liens utiles

* [Better WP Security](http://wordpress.org/plugins/better-wp-security/ "Better WP Security") : Améliore la sécurité de votre site WordPress.
* [WP Security Scan](http://wordpress.org/plugins/wp-security-scan/ "WP Security Scan") : Vérifie la présence de failles de sécurité dans votre site et propose des actions correctives.
* [Theme Authenticity Checker](http://wordpress.org/plugins/tac/ "Theme Authenticity Checker") : Recherche la présence de codes indésirables dans les fichiers de votre thème.
