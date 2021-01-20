+++
url = "/fr/applithèque/drupal/"
title = "Drupal"
layout = "man"
tags = ["drupal"]
+++

- [Documentation Drupal](https://www.drupal.org/documentation)

## Installation
La dernière version de [Drupal](https://www.drupal.org/) fait partie de nos applications auto-installables via l'interface d'administration : **Web > Sites > Installer une application**.

Si vous souhaitez l'installer par vous-même vous pourrez suivre les étapes suivantes :

- téléchargez la version souhaitée sur le [site officiel](https://www.drupal.org/download) ;
- décompressez les sources et déposez les sur votre compte alwaysdata par [FTP]({{< ref "/remote-access/ftp" >}}) ;
- créez votre [base de données]({{< ref "/databases" >}}) MySQL ;
- créez votre [site]({{< ref "sites/add-a-site" >}}) ;
- accédez à la page web de votre application pour finaliser son installation.

## Recommandations

Il est important de suivre ces quelques instructions d'usage pour éviter toute infection :

- mettez à jour régulièrement Drupal et ses plugins ;
- informez-vous sur les rapports de bugs et failles de sécurité des plugins avant de les installer ;
- mettez en place le [profil spécifique]({{<ref "sites/use-waf#profils-disponibles">}}) de notre WAF ;
- supprimez les thèmes et plugins inactifs ;
- personnalisez le préfixe du nom des tables de votre base de données ;
- supprimez le fichier readme.txt à la racine de votre application ;
- supprimez les utilisateurs créés par défaut ;
- d'[autres règles]({{<ref "sites/clean-up-a-site" >}}#3-supprimer-les-vecteurs-dinfection).

## Problèmes courants

### Précompression des fichiers CSS/JS

Si vous utilisez une version de Drupal inférieure à la **8.9** avec précompression des fichiers CSS et JS, vous devrez [appliquer ce patch](https://www.drupal.org/files/issues/2019-01-02/3023545-mod_brotli.patch) pour corriger [un bug relatif à la compression Brotli](https://www.drupal.org/project/drupal/issues/2960808).
