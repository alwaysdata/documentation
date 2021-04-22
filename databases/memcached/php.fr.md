+++
url = "/fr/bases-de-données/memcached/php/"
title = "Comment configurer une application PHP avec Memcached"
hidden = true
layout = "howto"
tags = ["base de données", "memcached", "php"]
+++

## Configuration

L'utilisation de Memcached en PHP nécessite l'[installation d'une extension PECL]({{< ref "languages/php/extensions" >}}#depuis-pecl-https-pecl-php-net) sur votre compte.

```
$ ad_install_pecl memcache
```

N'oubliez pas ensuite d'[ajouter l'extension dans votre `php.ini`]({{< ref "languages/php/configuration" >}}#paramètres-php-ini) :

```
extension=/home/[compte]/path/to/memcache.so
```
