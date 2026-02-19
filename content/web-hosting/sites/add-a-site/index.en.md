+++
title = "Adding a Site"
tags = ["http", "site"]
+++

Go to the **Web > Sites > Add a site** menu.

{{< fig "images/admin-panel_sites-list.en.png" "Administration interface: list of sites" >}}

{{% notice tip %}}
If you are starting from scratch you can take advantage of our [application library](/development/marketplace) by going to **Web > Sites > Install an application**.
{{% /notice %}}

## Addresses
Adding all the addresses in this menu is **mandatory** to access them as sites:
- for example, to access a website on *www\.example.org* and *example.org* both addresses must be added,
- entering your domain in the **Domains** menu is not enough either. Even for a domain using our [DNS servers](/domains#dns-management).

Also, if the domain does not use our DNS servers, you will need to [create DNS records](/web-hosting/sites/use-external-addresses) with the DNS provider.

{{< fig "images/admin-panel_add-site-general.en.png" "General" >}}

{{% notice note %}}
Adding the site will not create the *root directory*, it has to be created by [remote access](/web-hosting/remote-access).
{{% /notice %}}

To create a catch-all, indicate `*.example.org`.

## Configuration
Specific to every type of site:

- [PHP](/web-hosting/languages/php),
- [Python WSGI](/web-hosting/languages/python),
- [Ruby Rack](/web-hosting/languages/ruby),
- Ruby on Rails <= 2.x,
- [Node.js](/web-hosting/languages/nodejs),
- [Elixir](/web-hosting/languages/elixir),
- [Deno](/web-hosting/languages/deno),
- [.NET](/web-hosting/languages/dotnet),
- [Java](/web-hosting/languages/java),
- [Redirect](/web-hosting/sites/redirect),
- Reverse proxy: sets up a reverse proxy to a URL,
- [Static files](/web-hosting/sites/static-files): to manage sites or static files,
- [Custom Apache](/web-hosting/sites/apache-custom): to fully configure your Apache server,
- [User program](/web-hosting/sites/user-program): to run any web server.

PHP, Static Files and Custom Apache websites are served by [Apache](https://httpd.apache.org/). Python WSGI, Ruby Rack and Ruby on Rails <= 2.x use [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/).

## SSL
{{< fig "images/admin-panel_add-site-ssl.en.png" "Redirect HTTP to HTTPS" >}}
See [SSL](/web-hosting/sites/ssl-tls/redirect-http-to-https).

## WAF
{{< fig "images/admin-panel_add-site-waf.en.png" "Configure the web application firewall" >}}
See [WAF](/web-hosting/sites/waf).

## Cache
{{< fig "images/admin-panel_add-site-cache.en.png" "Set up the HTTP cache" >}}
See [Cache](/web-hosting/sites/http-cache).

## Logs
{{< fig "images/admin-panel_add-site-logs.en.png" "Customize HTTP logs" >}}
See [Logs](/web-hosting/sites/formatting-http-logs).

## Advanced
{{< fig "images/admin-panel_add-site-advanced.en.png" "" >}}

> [Idle time](/web-hosting/sites/misc#idle-time)

---

HTTP logs are available from directory `$HOME/admin/logs/http/`. The *site* logs showing "upstream" web site starts, stops and malfunctions are available from `$HOME/admin/logs/sites/`. An extract of these logs (with Apache & uWSGI logs) is presented in the administration’s interface (**Logs** - 📄).
