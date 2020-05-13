+++
url = "/fr/applithèque/prestashop/"
title = "PrestaShop"
menuTitle = "PrestaShop"
layout = "man"
tags = ["prestashop"]
+++

## Installation
La dernière version de [PrestaShop](https://www.prestashop.com/fr) fait partie de nos applications auto-installables via l'interface d'administration : **Web > Sites > Installer une application**.

Si vous souhaitez l'installer par vous-même vous pourrez suivre les étapes suivantes :

- téléchargez la version souhaitée sur le [site officiel](https://www.prestashop.com/fr/telecharger) ;
- décompressez les sources et déposez les sur votre compte alwaysdata par [FTP]({{< ref "/remote-access/ftp" >}}) ;
- créez votre [base de données]({{< ref "/databases" >}}) MySQL ;
- créez votre [site]({{< ref "sites/add-a-site" >}}) ;
- accédez à la page web de votre application pour finaliser son installation ;
- supprimez le dossier `$HOME/chemin/vers/l'application/install` obsolète après le déploiement.

Si vous migrez une application PrestaShop, précédemment hébergée chez un autre prestataire, modifiez :

- les paramètres `ps_shop_domain`, `ps_shop_domain_ssl` présents dans les tables `ps_shop_url` et `ps_configuration` de la base de données ;
- la valeur **localhost** du paramètre `physical_URI` de la table `ps_shop_url` par **/** ;
- le fichier `$HOME/chemin/vers/l'application/app/config/parameters.php`.
