+++
title = "PHP"
chapter = true
tags = ["php"]
+++

# PHP

The way PHP works at alwaysdata is very standard. If you are used to using PHP on a Unix system, e.g. Linux, then you already know almost everything you need.

- the [proposed versions]({{< ref "languages/php/configuration">}}#versions-supported) range from 4.4 to 7.4,
- it is always possible to [customize the php.ini file]({{< ref "languages/php/configuration" >}}#parameters-php-ini),
- PHP runs in *FastCGI*, behind Apache: creating `.htaccess` files is therefore possible,
- it is possible to [install extensions]({{< ref "languages/php/extensions" >}}) (from PECL or others),
- it is possible to [install packages]({{< ref "languages/php/packages" >}}) (*Composer*, *PEAR*).

The [CakePHP](https://cakephp.org/), [Laravel](https://laravel.com/), [Symfony](https://symfony.com/) and [Zend](https://framework.zend.com/) frameworks are part of our autoinstallable applications.

---

- [API resource](https://api.alwaysdata.com/v1/environment/php/doc/)
- [Frequent issues]({{< ref "languages/php/troubleshooting" >}})
