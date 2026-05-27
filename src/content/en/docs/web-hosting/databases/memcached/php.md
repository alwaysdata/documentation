---
title: Using Memcached with a PHP Backend
eleventyNavigation:
  key: Using Memcached with a PHP Backend
  parent: Databases
---

## Configuration

Using Memcached in PHP requires [installing a PECL extension](/en/docs/web-hosting/languages/php/extensions#from-peclhttpspeclphpnet) in your account through [SSH](/en/docs/web-hosting/remote-access/ssh).

```
$ ad_install_pecl memcached
```

Then don’t forget to [add the extension to your `php.ini`](/en/docs/web-hosting/languages/php/configuration/#parameters-phpini):

```
extension=/home/[account]/path/to/memcached-[VERSION].so
```

> [!WARNING]
> `[VERSION]` corresponds to the major version of PHP with which the extension was installed. By default, this will take the version from the **Environment** menu (used in SSH). You can install it with [another version of PHP](/en/docs/web-hosting/languages/php/troubleshooting#use-several-versions-in-ssh).
