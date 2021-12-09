+++
url = "/fr/marketplace/prestashop/"
title = "PrestaShop"
layout = "man"
hidden = true
tags = ["e-commerce"]
+++

[PrestaShop](https://www.prestashop.com/fr) est une plateforme de commerce électronique développée avec le [framework PHP Symfony](https://symfony.com/).

- [Documentation](https://www.prestashop.com/fr/ressources)

## Installation
La dernière version de *PrestaShop* est auto-installable via l'interface d'administration : **Web > Sites > Installer une application**.

- [Script d'installation](https://admin.alwaysdata.com/site/application/script/8/detail/)

Si vous migrez une application PrestaShop, précédemment hébergée chez un autre prestataire, modifiez :

- les paramètres `ps_shop_domain`, `ps_shop_domain_ssl` présents dans les tables `ps_shop_url` et `ps_configuration` de la base de données ;
- la valeur **localhost** du paramètre `physical_URI` de la table `ps_shop_url` par **/** ;
- le fichier `$HOME/chemin/vers/l'application/app/config/parameters.php`.
