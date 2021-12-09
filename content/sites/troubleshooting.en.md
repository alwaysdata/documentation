+++
title = "Websites - Troubleshooting"
menuTitle = "Websites Troubleshooting"
layout = "faq"
weight = 90
tags = ["http", "site", "troubleshooting"]
+++

## Connection

External service to check uptime: [Down for everyone or just me](https://downforeveryoneorjustme.com/)

- [Connection to upstream refused, Connection to upstream skipped, Upstream not ready, Cannot parse upstream response]({{< ref "sites/connection-to-upstream" >}})
- [PHP]({{< ref "languages/php/troubleshooting" >}})

### This site can’t be reached / server DNS address could not be found

- Check if the domain exists, isn't expired or locked by the [ICANN](https://www.icann.org/fr) via a `whois`[^1],
- Check the [DNS resolution](https://www.dnswatch.info/) address.

Adding the domaine in the **Domains** menu is not enough to create a website. It is required to add the addresses in **Web > Sites**.

### 403 Forbidden

For websites using [Apache]({{< ref "sites/configure-apache" >}}) it will per default look for a file named `index.html` or `index.php` for the home page. Rename your file or use the [DirectoryIndex](https://httpd.apache.org/docs/2.4/en/mod/mod_dir.html#directoryindex) directive in an `.htaccess`.

### 500 Errors

These errors may be returned by web servers (e.g. Apache), language runtime, or the application itself. Set debug logs to get more inputs on how to fix them.

### Empty page

An empty page without a message or error code usually indicates an application issue: the returned code by HTTP logs is *200*, stating that the request reached the application. Set debug logs to get more inputs on how to fix it.

[^1]: More informations on [whois](https://en.wikipedia.org/wiki/Whois)
