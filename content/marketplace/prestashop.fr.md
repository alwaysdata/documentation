+++
url = "/fr/marketplace/prestashop/"
title = "PrestaShop"
layout = "man"
hidden = true
tags = ["e-commerce"]
+++

## Migration depuis un autre prestataire d'hébergement

Vous aurez besoin de modifier :

- les paramètres `ps_shop_domain`, `ps_shop_domain_ssl` présents dans les tables `ps_shop_url` et `ps_configuration` de la base de données ;
- la valeur **localhost** du paramètre `physical_URI` de la table `ps_shop_url` par **/** ;
- le fichier `$HOME/chemin/vers/l'application/app/config/parameters.php`.
