+++
title = "Installing a PHP Extension"
hidden = true
layout = "howto"
tags = ["php"]
+++

`[account]` and `[extension]` have to be replaced by the name of the extension to be installed and the account on which it is to be installed.

## Managing extensions

A PHP extension comes in the form of a file with an `.so` extension. To load it, you need to add to your `php.ini` file (**Environment > PHP** or at the website level in **Web > Sites**).

{{% notice warning %}}
Some extensions load with the `zend_extension` directive and not extension. The extension publisher will tell you when this directive should be used instead.

The extensions depend on the major version of PHP. In other words, a `.so` file compiled for PHP version 5.5 will not work with version 5.6: **it must be recompiled**.
{{% /notice %}}

The following sections tell you how to get new extensions. All commands are to be executed in [SSH](remote-access/ssh).

### Extensions included in PHP

PHP includes numerous extensions as standard, a number of which are already preloaded by default by alwaysdata. To see the full list of extensions available:

```sh
$ ls $(php-config --extension-dir)
```

To see the list of extensions already loaded in your account:

```sh
$ grep extension $HOME/admin/config/php/php.ini
```

To load an extension included in PHP, you will not need to specify the
full directory, the filename is enough:

```
extension = [extension].so
```

> Examples: `imap`, `intl`.

### From PECL

Many extensions can be installed via [PECL](https://pecl.php.net/). To install an extension, we suggest using our proprietary script, `ad_install_pecl`. It handles downloading, configuring and compiling an extension:

```sh
$ ad_install_pecl [extension]
```

The command generates a new `.so` file in the current directory. At the end of the script it gives a path to add in your `php.ini`. For example if you launched it at the root of your account:

```ini
extension = /home/[account]/[extension].so
```

Where `/home/[account]/[extension].so` is the absolute path to your extension.

You don't have to use our script, you can use the usual commands (`phpize`, `make`) if you prefer.

> Example of regularly requested PECL extensions: `apcu`, `imagick`, `memcached`, `ssh2`, `yaml`.

### From the vendor site

Some extensions can be directly downloaded from the vendor site in pre-compiled form (`.so` file). If the vendor offers you a choice, download the Linux 64 bit version. For example:

- [ionCube](https://www.ioncube.com/loaders.php)
- [SourceGuardian](https://www.sourceguardian.com/loaders.html)
- [Zend Guard](http://www.zend.com/en/products/guard/downloads#Linux)

You will need to add the absolute path to your extension in your  `php.ini`. For example if you downloaded it at the root of your account:

```ini
extension = /home/[account]/[extension].so
```

### From distribution packages

Some extensions are complex or even impossibles to compile manually. It is possible to retrieve a `.so` file from the Linux distribution packs, for example [Debian](https://www.debian.org/distrib/packages):

```sh
$ wget http://ftp.debian.org/debian/pool/main/m/mapserver/php5-mapscript_7.0.4-1~bpo8+1_amd64.deb
$ dpkg-deb -x php5-mapscript_7.0.4-1~bpo8+1_amd64.deb .
```

You will need to add the absolute path to your extension in your  `php.ini`. For example if you downloaded it at the root of your account:

```ini
extension = /home/[account]/[extension].so
```
