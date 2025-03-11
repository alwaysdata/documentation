+++
title = "Using Memcached with a PHP Backend"
hidden = true
layout = "howto"
tags = ["databases", "memcached", "php"]
+++

## Configuration

Using Memcached in PHP requires [installing a PECL extension](languages/php/extensions#from-peclhttpspeclphpnet) in your account through [SSH](remote-access/ssh).

```
$ ad_install_pecl memcached
```

Then don’t forget to [add the extension to your `php.ini`](languages/php/configuration#parameters-phpini):

```
extension=/home/[account]/path/to/memcached-[VERSION].so
```

{{% notice warning %}}
`[VERSION]` corresponds to the major version of PHP with which the extension was installed. By default, this will take the version from the **Environment** menu (used in SSH). You can install it with [another version of PHP](languages/php/troubleshooting#use-several-versions-in-ssh).
{{% /notice %}}
