+++
url = "/fr/langages/php/installer-une-extension/"
title = "Comment installer une extension PHP"
hidden = true
layout = "howto"
tags = ["php"]
+++

`[compte]` et `[extension]` sont à remplacer par le nom de l'extension à installer et du compte sur lequel elle doit l'être.

## Gestion des extensions

Une extension PHP se présente sous la forme d'un fichier ayant l'extension `.so`. Pour la charger vous devrez l'ajouter à votre `php.ini` (**Environnement > PHP** ou au niveau du site dans **Web > Sites**).
{{% notice warning %}}
Certaines extensions se chargent avec la directive `zend_extension` plutôt que extension, c'est l'éditeur de l'extension qui vous indiquera lorsque cette directive doit être utilisée à la place.

Les extensions dépendent de la version majeure de PHP. Autrement dit, un fichier `.so` compilé pour la version 5.5 de PHP ne fonctionnera pas avec la 5.6 : **elle devra être recompilée**.
{{% /notice %}}

Les sections suivantes vous indiquent comment vous procurer de nouvelles extensions. Toutes les commandes sont à exécuter en [SSH](remote-access/ssh).

### Extensions incluses dans PHP

PHP inclut de nombreuses extensions en standard, dont plusieurs d'entre elles sont déjà préchargées par défaut par alwaysdata. Pour voir la liste complète des extensions disponibles :

```sh
$ ls $(php-config --extension-dir)
```

Pour voir la liste des extensions déjà chargées sur votre compte :

```sh
$ grep extension $HOME/admin/config/php/php.ini
```

Pour charger une extension incluse dans PHP, vous n'aurez pas besoin de spécifier le répertoire complet, seul le nom du fichier suffit :

```
extension = [extension].so
```
> Exemples : `imap`, `intl`.

### Depuis PECL

De nombreuses extensions sont installables via [PECL](https://pecl.php.net/). Pour installer une extension, nous vous suggérons d'utiliser notre script maison, `ad_install_pecl`. Il se charge de télécharger, configurer et compiler une extension :

```sh
$ ad_install_pecl [extension]
```

La commande génère un nouveau fichier `.so` dans le répertoire courant. À la fin du script, il donne un chemin à ajouter au `php.ini`. Par exemple si c'est lancé à la racine du compte :

```ini
extension = /home/[compte]/[extension].so
```

où `/home/[compte]/[extension].so` est le chemin absolu vers votre extension.

Vous pouvez toutefois vous passer de notre script et utiliser les commandes usuelles (`phpize`, `make`) si vous préférez.

> Exemple d'extensions PECL régulièrement demandées : `apcu`, `imagick`, `memcached`, `ssh2`, `yaml`.

### Depuis le site de l'éditeur

Certaines extensions sont directement téléchargeables depuis le site de l'éditeur sous forme précompilée (fichier `.so`). Si l'éditeur vous propose le choix, vous devrez télécharger la version Linux 64 bits. Par exemple :

* [Zend Guard](http://www.zend.com/en/products/guard/downloads#Linux)
* [ionCube](https://www.ioncube.com/loaders.php)

Il faudra ensuite ajouter le chemin absolu au  `php.ini`. Par exemple si elle est téléchargé à la racine du compte :

```ini
extension = /home/[account]/[extension].so
```

### Depuis des paquets de distribution

Certaines extensions sont complexes voire impossibles à compiler à la main. Il est possible de récupérer un `.so` depuis les paquets de distributions Linux, par exemple [Debian](https://www.debian.org/distrib/packages) :

```sh
$ wget http://ftp.debian.org/debian/pool/main/m/mapserver/php5-mapscript_7.0.4-1~bpo8+1_amd64.deb
$ dpkg-deb -x php5-mapscript_7.0.4-1~bpo8+1_amd64.deb .
```

Il faudra ensuite ajouter le chemin absolu au  `php.ini`. Par exemple si elle est téléchargé à la racine du compte :

```ini
extension = /home/[account]/[extension].so
```
