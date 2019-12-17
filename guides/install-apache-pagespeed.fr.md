+++
url = "/fr/guides/installer-apache-pagespeed/"
title = "Comment installer Apache PageSpeed"
menuTitle = "Installer Apache PageSpeed"
layout = "howto"
hidden = true
+++

[PageSpeed](https://www.modpagespeed.com/) optimise automatiquement votre site internet en modifiant les ressources de cette page web pour mettre en œuvre les [meilleures pratiques](https://developers.google.com/speed/docs/best-practices/rules_intro) de performance web. Pour l'utiliser Apache **mod_pagespeed** doit être installé sur le compte.

Du fait des particularités de notre infrastructure, leur script d'installation n'est pas exploitable sur nos serveurs, voici les étapes à suivre.

Dans notre exemple, nous utilisons un [accès SSH]({{< ref "remote-access/ssh" >}}) et considérons les informations suivantes :

- Nom de compte : `foo`
- Répertoire de PageSpeed : `$HOME/pagespeed/`
- Apache 2.4

## Étape 1 : Téléchargement

```
foo@ssh:~/pagespeed$ wget https://dl-ssl.google.com/dl/linux/direct/mod-pagespeed-stable_current_amd64.deb
foo@ssh:~/pagespeed$ dpkg -x mod-pagespeed-stable_current_amd64.deb .
```
Il y a deux modules, un pour Apache 2.2 et l'autre pour Apache 2.4.

## Étape 2 : Modification de la configuration Apache

Dans **Web > Configuration**, ajoutez :

```
LoadModule pagespeed\_module         /home/[foo]/pagespeed/usr/lib/apache2/modules/mod_pagespeed_ap24.so
ModPagespeedFileCachePath            "/home/[foo]/pagespeed/cache/pagespeed/"
ModPagespeedFileCacheSizeKb          102400
ModPagespeedFileCacheCleanIntervalMs 3600000
ModPagespeedFileCacheInodeLimit      500000
```

