+++
title = "PrestaShop"
layout = "man"
hidden = true
tags = ["e-commerce"]
+++

[PrestaShop](https://www.prestashop.com) is an e-commerce platform developed with the [Symfony PHP framework](https://symfony.com/).

- [Documentation](https://www.prestashop.com/en/resources)

## Installation

The last version of *PrestaShop* is auto-installable via the administration interface: **Web > Sites > Install an application**.

- [Install script](https://admin.alwaysdata.com/site/application/script/8/detail/)

If you migrate a PrestaShop application previously hosted by another hosting provider, change:

- the *ps_shop_domain*, `ps_shop_domain_ssl` settings in the `ps_shop_url` and `ps_configuration` tables in the database,
- the **localhost** value of the `physical_URL` setting in the `ps_shop_url` table with **/**,
- the file `$HOME/path/to/the/application/app/config/parameters.php`.
