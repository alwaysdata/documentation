+++
url = "/fr/bases-de-donnees/memcached/php/"
title = "Comment configurer une application PHP avec Memcached"
hidden = true
layout = "howto"
tags = ["base de données", "memcached", "php"]
+++

## Configuration

L'utilisation de Memcached en PHP nécessite l'[installation d'une extension PECL](languages/php/extensions#depuis-peclhttpspeclphpnet) sur votre compte via [SSH](remote-access/ssh).

```
$ ad_install_pecl memcached
```

N'oubliez pas ensuite d'[ajouter l'extension dans votre `php.ini`](languages/php/configuration#paramètres-phpini) :

```
extension=/home/[compte]/path/to/memcached-[VERSION].so
```

{{% notice warning %}}
`[VERSION]` correspond à la version majeure de PHP avec laquelle l'extension a été installée. Par défaut, cela prendra la version du menu **Environnement** (utilisée en SSH). Vous pouvez l'installer avec [une autre version de PHP](languages/php/troubleshooting#utiliser-différentes-versions-en-ssh).
{{% /notice %}}
