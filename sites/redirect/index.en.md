+++
title = "Redirecting HTTP Addresses"
layout = "howto"
weight = 5
tags = ["http", "redirection", "site"]
+++

Go to the **Web > Sites > Add a site** menu.

{{< fig "images/admin-panel_sites-list.en.png" "Administration interface: list of sites" >}}

- Name: used for display purposes in the alwaysdata administration interface, it is purely for information purposes,
- Addresses: the addresses used to reach your site (`*.example.org` for _catch-all_),

{{< fig "images/admin-panel_add-site-general.en.png" "Add a site: general" >}}

- Type: Redirect,
- Destination URL: address that the redirect leads to,
- Type of redirect:
    - permanent (HTTP code `301`): for conventional use, redirects a visitor from an address A to an address B. Search engines will update their index with the new destination,
    - temporary (HTTP code `302`): generally used during site maintenance. The search engines retain the original page in their index,
    - "transparent" or "invisible": redirects the original address to the destination address but retains the original address as the URL. It uses frames with content that will not be indexed by most search engines so referencing will therefore be less effective.
- Add the request path to the destination URL.

{{< fig "images/admin-panel_redirect.en.png" "Add a site: redirect">}}

## Redirect via Apache

For PHP sites, static files and custom Apache sites you can also use a `.htaccess` file and the [Redirect](https://httpd.apache.org/docs/2.4/fr/mod/mod_alias.html#redirect) directive.

## Redirect via uWSGI

For Python WSGI, Ruby Rack and Ruby on Rails <= 2.x sites, you can also use the [InternalRouting](https://uwsgi-docs.readthedocs.io/en/latest/InternalRouting.html) method and its `router-redirect` plugin in the advanced site configuration.
