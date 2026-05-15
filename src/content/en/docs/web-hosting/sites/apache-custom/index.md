---
title: Using The Custom Apache Type
eleventyNavigation:
  key: Custom Apache
  parent: Websites
---

The custom Apache type is used to run sites served by the Apache server that do not use PHP or HTML.

> [!WARNING]
> If you only wish to add global directives to Apache, change its [configuration](/en/docs/web-hosting/sites/configure-apache) in **Web > Configuration > Apache**.


Go to the **Web > Sites > Add a site** menu.

![Administration interface: list of sites](images/admin-panel_sites-list.png)

- Name: used for display purposes in the alwaysdata administration interface, it is purely for information purposes,
- Addresses: the addresses used to reach your site (`*.example.org` for _catch-all_),

![Add a site: general](images/admin-panel_add-site-general.png)

- Type: Custom Apache,
- Global directives: directives that apply to all of the sites served by Apache,
- Virtual host directives: Apache directives for the relevant site.

![Add a site: custom Apache](images/admin-panel_apache-custom.png)

All of the modifications will impact the `$HOME/admin/config/apache/sites.conf` file. Apache error logs are available in file `$HOME/admin/logs/apache/apache.log`.
