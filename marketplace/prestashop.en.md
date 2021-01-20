+++
title = "PrestaShop"
layout = "man"
tags = ["prestashop"]
+++

- [PrestaShop documentation](https://www.prestashop.com/en/resources)

## Installation

The last version of [PrestaShop](https://www.prestashop.com) is one of our applications that are auto-installable via the administration interface: **Web > Sites > Install an application**.

To install it yourself, follow the steps set out below:

- download the desired version from the [official site](https://www.prestashop.com/en/download),
- uncompress the source files and place them in your alwaysdata account using [FTP]({{< ref "/remote-access/ftp" >}}),
- create your MySQL [database]({{< ref "/databases" >}}),
- create your [site]({{< ref "sites/add-a-site" >}}),
- access your application's web page to finalize its installation,
- delete the `$HOME/path/to/the/application/install` folder that is obsolete after deployment.

If you migrate a PrestaShop application previously hosted by another hosting provider, change:

- the *ps_shop_domain*, `ps_shop_domain_ssl` settings in the `ps_shop_url` and `ps_configuration` tables in the database,
- the **localhost** value of the `physical_URL` setting in the `ps_shop_url` table with **/**,
- the file `$HOME/path/to/the/application/app/config/parameters.php`.

## Recommendations

It is important to follow these instructions to avoid infection:

- regularly update PrestaShop and its plugins,
- keep informed on reports of bugs and security breaches relating to plugins before installing them,
- implement the [complete profile]({{<ref "sites/use-waf#profiles-available">}}) of our WAF,
- delete idle themes and plugins,
- customize the prefix of the table names in your database,
- delete the readme.txt file at the root of your application,
- delete any users created by default,
- [other rules]({{<ref "sites/clean-up-a-site">}}#3-delete-infection-sources).
