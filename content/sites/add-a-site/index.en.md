+++
title = "Adding a Site"
layout = "howto"
weight = 1
tags = ["http", "site"]
+++

Go to the **Web > Sites > Add a site** menu.

{{< fig "images/admin-panel_sites-list.en.png" "Administration interface: list of sites" >}}

{{% notice tip %}}
If you are starting from scratch you can take advantage of our [application library]({{< ref "marketplace" >}}) by going to **Web > Sites > Install an application**.
{{% /notice %}}

## Addresses
Adding all the addresses in this menu is **mandatory** to access them as sites:
- for example, to access a website on *www\.exemple.org* and *example.org* both addresses must be added,
- entering your domain in the **Domains** menu is not enough either. Even for a domain using our [DNS servers]({{< ref "domains#dns-management" >}}).

Also, if the domain does not use our DNS servers, you will need to [create DNS records]({{< ref "sites/use-external-addresses" >}}) with the DNS provider.

{{< fig "images/admin-panel_add-site-general.en.png" "General" >}}

{{% notice note %}}
Adding the site will not create the *root directory*, it has to be created by [remote access]({{< ref "remote-access" >}}).
{{% /notice %}}

To create a catch-all, indicate `*.example.org`.

## Configuration
Specific to every type of site:

- [PHP]({{< ref "languages/php" >}}),
- [Python WSGI]({{< ref "languages/python" >}}),
- [Ruby Rack]({{< ref "languages/ruby" >}}),
- Ruby on Rails <= 2.x,
- [Node.js]({{< ref "languages/nodejs" >}}),
- [Elixir]({{< ref "languages/elixir" >}}),
- [Deno]({{< ref "languages/deno" >}}),
- [.NET]({{< ref "languages/dotnet" >}}),
- [Redirect]({{< ref "sites/redirect" >}}),
- [Static files]({{< ref "sites/static-files" >}}): to manage sites or static files,
- [Custom Apache]({{< ref "sites/apache-custom" >}}): to fully configure your Apache server,
- [User program]({{< ref "sites/user-program" >}}): to run any web server.

PHP, Static Files and Custom Apache websites are served by [Apache](https://httpd.apache.org/). Python WSGI, Ruby Rack and Ruby on Rails <= 2.x use [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/).

## [SSL]({{< ref "security/ssl-tls/redirect-http-to-https">}})
{{< fig "images/admin-panel_add-site-ssl.en.png" "Redirect HTTP to HTTPS" >}}

## [WAF]({{< ref "sites/waf" >}})
{{< fig "images/admin-panel_add-site-waf.en.png" "Configure the web application firewall" >}}

## [Cache]({{< ref "sites/http-cache" >}})
{{< fig "images/admin-panel_add-site-cache.en.png" "Set up the HTTP cache" >}}

## [Logs]({{< ref "sites/formatting-http-logs" >}})
{{< fig "images/admin-panel_add-site-logs.en.png" "Customize HTTP logs" >}}

## Advanced
{{< fig "images/admin-panel_add-site-advanced.en.png" "" >}}

> [Idle time]({{< ref "sites/misc#idle-time" >}})

---

HTTP logs are available from directory `$HOME/admin/logs/http/`. The *site* logs showing "upstream" web site starts, stops and malfunctions are available from `$HOME/admin/logs/sites/`. An extract of these logs (with Apache & uWSGI logs) is presented in the administration’s interface (**Logs** - 📄).
