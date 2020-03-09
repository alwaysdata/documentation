+++
title = "Websites : Troubleshooting"
menuTitle = "Troubleshooting"
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
- Check the address [DNS resolution](https://www.dnswatch.info/).

### 500 Errors

These errors can be returned by web servers (example Apache), used language or the application herself. Set up debug logs to have more informations to fix.

### Empty page

An empty page without message or error code usually means an application issue: the returned code by HTTP logs is *200*, stating the request reach the application. Set up debug logs to have more informations to fix.

[^1]: More informations on [whois](https://en.wikipedia.org/wiki/Whois)
