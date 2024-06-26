+++
url = "/fr/langages/php/installer-un-paquet/"
title = "Comment installer un paquet PHP"
hidden = true
layout = "howto"
tags = ["php"]
+++

## Gestion des paquets

Plusieurs outils existent en PHP pour installer des paquets.

### Composer

[Composer](https://getcomposer.org/) permet d'installer localement un ensemble de dépendances. Il est préinstallé chez alwaysdata.

Pour installer les dépendances listées dans le fichier `composer.json` :

1. Pour utiliser *Composer 2* (dernières versions) :
```sh
$ composer install
```

ou

```sh
$ composer2 install
```

2. Pour utiliser *Composer 1* :
```sh
$ composer1 install
```

### PEAR

[PEAR](https://pear.php.net/) est l'un des plus anciens outils de gestion de paquets pour PHP. Il n'est pas préinstallé, mais vous pouvez le télécharger puis l'exécuter :

```sh
$ wget http://pear.php.net/go-pear.phar
$ php go-pear.phar
```

{{% notice info %}}
L'exécutable PHP indiqué au niveau des binaires PEAR ne prend pas en compte les extensions nécessaires préchargées (XML par exemple). Il faut modifier ces chemins et indiquer `/usr/bin/php` à la place de `/usr/alwaysdata/php/[VERSION]/bin/php`.
{{% /notice %}}
