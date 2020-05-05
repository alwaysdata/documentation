+++
url = "/fr/guides/installer-ffmpeg/"
title = "Comment installer FFmpeg"
layout = "howto"
hidden = true
+++

[FFmpeg](https://www.ffmpeg.org/) fournit des outils destinés au traitement de flux audio ou vidéo.

Cette bibliothèque étant source de traitements lourds elle n'est pas disponible par défaut en serveurs mutualisés.

{{% notice info %}}
Si vous êtes propriétaire d'un serveur VPS ou dédié, contactez notre [support](https://admin.alwaysdata.com/support/add/). Il l'installera globalement sur le serveur.
{{% /notice %}}

Dans notre exemple, nous utilisons l'[accès SSH]({{< ref "remote-access/ssh">}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de ffmpeg : `$HOME/ffmpeg/`

```
foo@ssh:~/ffmpeg$ wget -O- https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz|tar -xJf --strip-components=1
```

Les binaires seront disponibles dans le répertoire `$HOME/ffmpeg/`.

Prenez la [dernière version amd64 stable disponible](https://johnvansickle.com/ffmpeg/).
