+++
url = "/fr/hebergement-web/bases-de-donnees/memcached/php/"
title = "Configurer une application PHP avec Memcached"
tags = ["base de données", "memcached", "php"]
+++

## Configuration

L'utilisation de Memcached en PHP nécessite l'[installation d'une extension PECL](/web-hosting/languages/php/extensions#depuis-peclhttpspeclphpnet) sur votre compte via [SSH](/web-hosting/remote-access/ssh).

```
$ ad_install_pecl memcached
```

N'oubliez pas ensuite d'[ajouter l'extension dans votre `php.ini`](/web-hosting/languages/php/configuration#paramètres-phpini) :

```
extension=/home/[compte]/path/to/memcached-[VERSION].so
```

{{% notice warning %}}
`[VERSION]` correspond à la version majeure de PHP avec laquelle l'extension a été installée. Par défaut, cela prendra la version du menu **Environnement** (utilisée en SSH). Vous pouvez l'installer avec [une autre version de PHP](/web-hosting/languages/php/troubleshooting#utiliser-différentes-versions-en-ssh).
{{% /notice %}}
