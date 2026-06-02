---
permalink: /fr/docs/developpement/guides/apache-pagespeed/
title: Apache PageSpeed
eleventyNavigation:
  key: Apache PageSpeed
  parent: Guides
---

[PageSpeed](https://www.modpagespeed.com/) optimise automatiquement votre site internet en modifiant les ressources de cette page web pour mettre en œuvre les [meilleures pratiques](https://developers.google.com/speed/docs/best-practices/rules_intro) de performance web. **Apache mod_pagespeed** doit être installé sur le compte.

Du fait des particularités de notre infrastructure, leur script d'installation n'est pas exploitable sur nos serveurs, voici les étapes à suivre.

Dans notre exemple, nous utilisons un [accès SSH](/fr/docs/hebergement-web/acces-distant/ssh/) et considérons les informations suivantes :

- Nom de compte : `[compte]`
- Répertoire de PageSpeed : `/home/[compte]/pagespeed/`
- Apache 2.4

> [!NOTE]
> N'hésitez pas à ajuster en fonction de vos besoins.

## Étape 1 : Téléchargement

```sh
[compte]@ssh:~/pagespeed$ wget https://dl-ssl.google.com/dl/linux/direct/mod-pagespeed-stable_current_amd64.deb
[compte]@ssh:~/pagespeed$ dpkg -x mod-pagespeed-stable_current_amd64.deb .
```
Il y a deux modules, un pour Apache 2.2 et l'autre pour Apache 2.4.

## Étape 2 : Modification de la configuration Apache

Dans **Web > Configuration > Apache**, ajoutez :

```
LoadModule pagespeed_module          "/home/[compte]/pagespeed/usr/lib/apache2/modules/mod_pagespeed_ap24.so"
ModPagespeedFileCachePath            "/home/[compte]/pagespeed/cache/pagespeed/"
ModPagespeedFileCacheSizeKb          102400
ModPagespeedFileCacheCleanIntervalMs 3600000
ModPagespeedFileCacheInodeLimit      500000
```
