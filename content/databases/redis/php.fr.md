+++
url = "/fr/bases-de-données/redis/php/"
title = "Comment configurer une application PHP avec Redis"
hidden = true
layout = "howto"
tags = ["base de données", "redis", "php"]
+++

## Configuration

L'utilisation de Redis en PHP nécessite l'[installation d'une extension PECL]({{< ref "languages/php/extensions" >}}#depuis-pecl-https-pecl-php-net) sur votre compte.

```
$ ad_install_pecl redis
```

N'oubliez pas ensuite d'[ajouter l'extension dans votre `php.ini`]({{< ref "languages/php/configuration" >}}#paramètres-php-ini) :

```
extension=/home/[compte]/path/to/redis.so
```
