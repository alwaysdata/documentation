+++
url = "/fr/marketplace/nextcloud/"
title = "Nextcloud"
layout = "man"
hidden = true
tags = ["productivité", "stockage"]
+++

[Nextcloud](https://nextcloud.com/) est une plateforme de productivité permettant d'héberger des fichiers, de les modifier et partager, de gérer des calendriers, contacts et bien d'autres.

- [Documentation](https://docs.nextcloud.com/)

## Installation
La dernière version de *Nextcloud* est auto-installable via l'interface d'administration : **Web > Sites > Installer une application**.

- [Script d'installation](https://admin.alwaysdata.com/site/application/script/7/detail/)

## Mise à jour

Il est possible d'utiliser le script suivant, en [SSH]({{< ref "/remote-access/ssh" >}}) pour mettre à jour Nextcloud.

```sh
$ php chemin/vers/le/répertoire/nextcloud/updater/updater.phar
```

## Autres informations

Nous proposons un [profil spécifique]({{<ref "sites/waf/use-waf#profils-disponibles">}}) sur notre WAF.
