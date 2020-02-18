+++
title = "Using Static Files Type"
layout = "howto"
weight = 15
tags = ["apache", "http", "site"]
+++

Whether to manage a static site, like an HTML site or to serve site
media using uWSGI, you can use the static file type.

Go to the **Web > Sites > Add a site** menu.

{{< fig "images/admin-panel_sites-list.en.png" "Administration interface: list of sites" >}}

- Name: used for display purposes in the alwaysdata administration interface, it is purely for information purposes,
- Addresses: the addresses used to reach your site (`*.example.org` for _catch-all_),

{{< fig "images/admin-panel_add-site-general.en.png" "Add a site: general" >}}

- Type: Static files,
- Root directory: the directory where your application is located.

{{< fig "images/admin-panel_static-files.en.png" "Add a site: Static files" >}}
