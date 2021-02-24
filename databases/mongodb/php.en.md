+++
title = "Using MongoDB with a PHP Backend"
hidden = true
layout = "howto"
tags = ["databases", "mongodb", "php"]
+++

## Configuration

Using Mongo in PHP requires [installing a PECL extension]({{< ref "languages/php/extensions" >}}#from-pecl-https-pecl-php-net) in your account.

```sh
$ ad_install_pecl mongodb
```

Then don’t forget to [add the extension to your `php.ini`]({{< ref "languages/php/configuration" >}}#parameters-php-ini):

```ini
extension=/home/[account]/path/to/mongodb.so
```
