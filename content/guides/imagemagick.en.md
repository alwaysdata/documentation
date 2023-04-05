+++
title = "How to install a local version of ImageMagick"
layout = "howto"
hidden = true
tags = ["development", "imagemagick", "convert", "magick"]
+++

[ImageMagick](https://imagemagick.org/) is a command-line image processing solution that is often used as a technical backend by various tools and frameworks.

By default, our platform offers version `6.9.10-23 Q16` of this tool (available at the path `/usr/bin/convert`). However, you may need to use a more recent version for specific technical needs (such as support for certain image formats, for example). To do so, you can use a portable version of ImageMagick installed locally in your account.


## Installation

[Connect to your account via SSH]({{< ref "remote-access/ssh" >}}), then download and extract the [AppImage](https://appimage.org/) version available on the official website:

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

Your executable is available at the path `$HOME/.local/bin/magick`. It takes over by default when you execute the `magick` (or `convert`, etc.) command. Therefore, your tools/frameworks should use it first, but you can still specify its full path if necessary.


## Usage

You can verify that your installation was successful by running the following commands:

```sh
$ magick --version
$ magick logo: imagick-logo.png
```

You should obtain an `imagick-logo.png` file of the ImageMagick logo.
