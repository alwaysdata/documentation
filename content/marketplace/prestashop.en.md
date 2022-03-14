+++
title = "PrestaShop"
layout = "man"
hidden = true
tags = ["e-commerce"]
+++

## Transfer from another hosting provider

You will need to change:

- the *ps_shop_domain*, `ps_shop_domain_ssl` settings in the `ps_shop_url` and `ps_configuration` tables in the database,
- the **localhost** value of the `physical_URL` setting in the `ps_shop_url` table with **/**,
- the file `$HOME/path/to/the/application/app/config/parameters.php`.
