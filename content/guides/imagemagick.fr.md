+++
url = "/fr/guides/imagemagick/"
title = "Comment installer une version locale d'ImageMagick"
layout = "howto"
hidden = true
tags = ["developpement", "imagemagick", "convert", "magick"]
+++

[ImageMagick](https://imagemagick.org/) est une solution de traitement d'image en ligne de commande. Elle est souvent utilisée en backend technique par différents outils et frameworks.

Cet outil est proposé par défaut sur notre plateforme en version `6.9.10-23 Q16` (disponible au chemin `/usr/bin/convert`). Cependant, vous pouvez avoir besoin d'utiliser une version plus récente pour des besoins techniques spécifiques (comme le support de certains formats d'image par exemple). Pour cela, vous pouvez utiliser une version portable d'*ImageMagick* installée localement dans votre compte.

## Installation

[Connectez-vous en SSH]({{< ref "remote-access/ssh" >}}) sur votre compte, puis téléchargez et décompressez la version [AppImage](https://appimage.org/) disponible sur le site officiel :

```sh
$ wget https://imagemagick.org/archive/binaries/magick
$ chmod +x magick
$ ./magick --appimage-extract usr/bin
$ ./magick --appimage-extract usr/include
$ ./magick --appimage-extract usr/lib
$ mkdir -p $HOME/.local/{bin,share}
$ mv ./squashfs-root/usr $HOME/.local/share/imagick
$ ln -sf $HOME/.local/share/imagick/bin/* $HOME/.local/bin
$ rm -r magick squashfs-root
```

Votre exécutable est disponible au chemin `$HOME/.local/bin/magick`. Il prend la main par défaut lorsque vous exécutez la comande `magick` (ou `convert`, etc). Vos outils / frameworks doivent donc l'utiliser en priorité, mais vous pouvez toujours spécifier son chemin complet si nécessaire.


## Utilisation

Vous pouvez vérifier que votre installation s'est bien déroulée en exécutant les commandes suivantes :

```sh
$ magick --version
$ magick logo: imagick-logo.png
```

Vous devriez obtenir un fichier `imagick-logo.png` du logo d'ImageMagick.
