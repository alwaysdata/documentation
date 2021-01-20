+++
url = "/fr/applithèque/nextcloud/"
title = "Nextcloud"
layout = "man"
tags = ["nextcloud"]
+++

- [Documentation Nextcloud](https://docs.nextcloud.com/)

## Installation
La dernière version de [Nextcloud](https://nextcloud.com/) fait partie de nos applications auto-installables via l'interface d'administration : **Web > Sites > Installer une application**.

Si vous souhaitez l'installer par vous-même vous pourrez suivre les étapes suivantes :

- téléchargez la version souhaitée sur le [site officiel](https://nextcloud.com/install/#instructions-server);
- décompressez les sources et déposez les sur votre compte alwaysdata par [FTP]({{< ref "/remote-access/ftp" >}}) ;
- créez votre [base de données]({{< ref "/databases" >}}) MySQL ;
- créez votre [site]({{< ref "sites/add-a-site" >}}) ;
- accédez à la page web de votre application pour finaliser son installation.

## Mise à jour

Il est possible d'utiliser le script suivant, en [SSH]({{< ref "/remote-access/ssh" >}}) pour mettre à jour Nextcloud.

```
php chemin/vers/le/répertoire/nextcloud/updater/updater.phar
```

## Recommandations

Il est important de suivre ces quelques instructions d'usage pour éviter toute infection :

- mettez à jour régulièrement Nextcloud et ses plugins ;
- informez-vous sur les rapports de bugs et failles de sécurité des plugins avant de les installer ;
- mettez en place le [profil spécifique]({{<ref "sites/use-waf#profils-disponibles">}}) de notre WAF ;
- supprimez les plugins inactifs ;
- d'[autres règles]({{<ref "sites/clean-up-a-site" >}}#3-supprimer-les-vecteurs-dinfection).
