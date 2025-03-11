+++
title = "Using The Custom Apache Type"
layout = "howto"
hidden = true
tags = ["apache", "http", "site"]
+++

The custom Apache type is used to run sites served by the Apache server that do not use PHP or HTML.

{{% notice warning %}}
If you only wish to add global directives to Apache, change its [configuration](sites/configure-apache) in **Web > Configuration > Apache**.
{{% /notice %}}

Go to the **Web > Sites > Add a site** menu.

{{< fig "images/admin-panel_sites-list.en.png" "Administration interface: list of sites" >}}

- Name: used for display purposes in the alwaysdata administration interface, it is purely for information purposes,
- Addresses: the addresses used to reach your site (`*.example.org` for _catch-all_),

{{< fig "images/admin-panel_add-site-general.en.png" "Add a site: general" >}}

- Type: Custom Apache,
- Global directives: directives that apply to all of the sites served by Apache,
- Virtual host directives: Apache directives for the relevant site.

{{< fig "images/admin-panel_apache-custom.en.png" "Add a site: custom Apache" >}}

All of the modifications will impact the `$HOME/admin/config/apache/sites.conf` file. Apache error logs are available in file `$HOME/admin/logs/apache/apache.log`.
