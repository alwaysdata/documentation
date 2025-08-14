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

## Email sending

The use of `/usr/sbin/sendmail` is not functional. Please choose to set your "own SMTP parameters" and simply provide the SMTP hostname of your account (given in the menu **Emails > Addresses** of your alwaysdata admin interface).

{{< fig "images/prestashop-emails.en.png" "" >}}

## Enable the PrestaShop cache
If you experience performance issues, a good first step might be to enable the **CacheApc** cache system. To do this:

- install [the PECL extension](languages/php/extensions#from-peclhttpspeclphpnet) `apcu` in your account through [SSH](remote-access/ssh).

```
ad_install_pecl apcu
```
- then add [the extension to your `php.ini`](languages/php/configuration#parameters-phpini).

```
extension=/home/[account]/path/to/apcu-[VERSION].so
```

- then activate the **CacheApc** system in the PrestaShop administration interface.

{{% notice warning %}}
`[VERSION]` corresponds to the major version of PHP with which the extension was installed. By default, this will take the version from the **Environment** menu (used in SSH). You can install it with [another version of PHP](languages/php/troubleshooting#use-several-versions-in-ssh) if your website use another one.
{{% /notice %}}
