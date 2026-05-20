---
permalink: /fr/docs/developpement/guides/ffmpeg/
title: FFmpeg
eleventyNavigation:
  key: FFmpeg
  parent: Guides
---

[FFmpeg](https://www.ffmpeg.org/) fournit des outils destinés au traitement de flux audio ou vidéo.

Cette bibliothèque étant source de traitements lourds elle n'est pas disponible par défaut sur le Cloud Public.

> [!TIP]
> Si vous êtes propriétaire d'un [Cloud Privé](/fr/docs/admin-facturation/facturation/prix-cloud-prive/), contactez notre [support](https://admin.alwaysdata.com/support/add/). Il l'installera globalement sur le serveur.


Dans notre exemple, nous utilisons l'[accès SSH](/web-hosting/remote-access/ssh) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de ffmpeg : `$HOME/ffmpeg/`

```sh
foo@ssh:~/ffmpeg$ wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
foo@ssh:~/ffmpeg$ tar -xJf ffmpeg-release-amd64-static.tar.xz --strip-components=1
foo@ssh:~/ffmpeg$ rm ffmpeg-release-amd64-static.tar.xz
```

Les binaires seront disponibles dans le répertoire `$HOME/ffmpeg/`.

Prenez la [dernière version amd64 stable disponible](https://johnvansickle.com/ffmpeg/).
