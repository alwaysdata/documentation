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

- Name: used for display purposes in the alwaysdata administration interface, it is purely for information purposes,
- Addresses: the addresses used to reach your site (`*.example.org` for catch-alls),

{{< fig "images/admin-panel_add-site-general.en.png" "Add a site: general" >}}

- Configuration: specific to every type of site:
    - [PHP]({{< ref "languages/php" >}}),
    - [Python WSGI]({{< ref "languages/python" >}}),
    - [Ruby Rack]({{< ref "languages/ruby" >}}),
    - [Ruby on Rails <= 2.x]({{< ref "languages/ruby/ruby-on-rails" >}}),
    - [Node.js]({{< ref "languages/nodejs" >}}),
    - [Elixir]({{< ref "languages/elixir" >}}),
    - [Redirect]({{< ref "sites/redirect" >}}),
    - [Static files]({{< ref "sites/static-files" >}}): to manage sites or static files,
    - [Custom Apache]({{< ref "sites/apache-custom" >}}): to fully configure your Apache server,
    - [User program]({{< ref "sites/user-program" >}}): to run any web server.

PHP, static and custom Apache files are served by [Apache](https://httpd.apache.org/). Python WSGI, Ruby Rack and Ruby on Rails <= 2.x use [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/).

-   [SSL]({{< ref "security/ssl-tls/redirect-http-to-https">}}): redirect HTTP to HTTPS,
    {{< fig "images/admin-panel_add-site-ssl.en.png" "Add a site: SSL" >}}

-   [WAF]({{< ref "sites/waf" >}}): configure the application firewall,
    {{< fig "images/admin-panel_add-site-waf.en.png" "Add a site: WAF" >}}

-   [Cache]({{< ref "sites/http-cache" >}}): set up the HTTP cache,
    {{< fig "images/admin-panel_add-site-cache.en.png" "Add a site: HTTP cache" >}}

-   [Logs]({{< ref "sites/formatting-http-logs" >}}): customize HTTP logs,
    {{< fig "images/admin-panel_add-site-logs.en.png" "Add a site: HTTP logs" >}}

-   Advanced.
    {{< fig "images/admin-panel_add-site-advanced.en.png""Add a site: advanced" >}}

---

HTTP logs are available from directory `$HOME/admin/logs/http/`. The *site* logs showing "upstream" web site starts, stops and malfunctions are available from `$HOME/admin/logs/sites/`.
