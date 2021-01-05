+++
url = "/fr/bases-de-données/mongodb/php/"
title = "Comment configurer une application PHP avec MongoDB"
hidden = true
layout = "howto"
tags = ["base de données", "mongodb", "php"]
+++

## Configuration

L'utilisation de Mongo en PHP nécessite l'[installation d'une extension PECL]({{< ref "languages/php/extensions" >}}#depuis-pecl-https-pecl-php-net) sur votre compte.

```
$ ad_install_pecl mongodb
```

N'oubliez pas ensuite d'[ajouter l'extension dans votre `php.ini`]({{< ref "languages/php/configuration" >}}#paramètres-php-ini) :

```
extension=/home/[compte]/path/to/mongodb.so
```
