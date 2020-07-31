+++
url = "/fr/applithèque/prestashop/"
title = "PrestaShop"
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

## Recommandations

Il est important de suivre ces quelques instructions d'usage pour éviter toute infection :

- mettez à jour régulièrement PrestaShop et ses plugins ;
- informez-vous sur les rapports de bugs et failles de sécurité des plugins avant de les installer ;
- mettez en place le  [profil complet]({{<ref "sites/use-waf#profils-disponibles">}}) de notre WAF ;
- supprimez les thèmes et plugins inactifs ;
- personnalisez le préfixe du nom des tables de votre base de données ;
- supprimez le fichier readme.txt à la racine de votre application ;
- supprimez les utilisateurs créés par défaut ;
- d'[autres règles]({{<ref "sites/clean-up-a-site" >}}#3-supprimer-les-vecteurs-dinfection).
