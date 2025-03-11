+++
title = "PHP"
archetype = "chapter"
tags = ["php"]
+++

# PHP

The way [PHP](https://www.php.net) works at alwaysdata is very standard. If you are used to using PHP on a Unix system, e.g. Linux, then you already know almost everything you need.

- the [provisioned versions](languages/php/configuration#supported-versions) range from 4.4 to 8.4,
- it is always possible to [customize the php.ini file](languages/php/configuration#parameters-phpini),
- PHP runs in *FastCGI*, behind Apache: creating `.htaccess` files is therefore possible,
- it is possible to [install extensions](languages/php/extensions) (from PECL or others),
- it is possible to [install packages](languages/php/packages) (*Composer*, *PEAR*),
- it is possible to [install libraries](languages/php/libraries).

Our marketplace provides the installation of the [CakePHP](https://cakephp.org/), [Laminas](https://getlaminas.org/), [Laravel](https://laravel.com/), [Symfony](https://symfony.com/) and [TNH](https://github.com/tnhfw/tnh-fw) frameworks.

---

- [API resource](https://api.alwaysdata.com/v1/environment/php/doc/)
- [Frequent issues](languages/php/troubleshooting)
