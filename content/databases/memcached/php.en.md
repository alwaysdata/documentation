+++
title = "Using Memcached with a PHP Backend"
hidden = true
layout = "howto"
tags = ["databases", "memcached", "php"]
+++

## Configuration

Using Memcached in PHP requires [installing a PECL extension]({{< ref "languages/php/extensions" >}}#from-pecl-https-pecl-php-net) in your account.

```
$ ad_install_pecl memcached
```

Then don’t forget to [add the extension to your `php.ini`]({{< ref "languages/php/configuration" >}}#parameters-php-ini):

```
extension=/home/[account]/path/to/memcached.so
```
