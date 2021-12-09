+++
title = "Installing a PHP Package"
hidden = true
layout = "howto"
tags = ["php"]
+++

## Handling packages

There are a number of PHP tools for installing packages.

### Composer

[Composer](https://getcomposer.org/) lets you locally install a set of dependencies. It is already installed at alwaysdata.

To install the dependencies listed in the `composer.json` file:

```sh
$ composer install
```

### PEAR

[PEAR](https://pear.php.net/) is one of the oldest package management tools for PHP. It is not ready installed but you can download it and run it:

```sh
$ wget http://pear.php.net/go-pear.phar
$ php go-pear.phar
```

{{% notice info %}}
The PHP executable indicated at the PEAR binary level does not take into account the necessary preloaded extensions (e.g. XML). These paths need to be changed and specify `/usr/bin/php` in place of `/usr/alwaysdata/php/[VERSION]/bin/php`.
{{% /notice %}}
