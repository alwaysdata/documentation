+++
title = "Change TLS Configuration"
layout = "howto"
hidden = true
tags = ["http", "security", "site"]
+++

[TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) is a cryptographic protocol to secure Internet communications.

2 presets for HTTP connections are available:

- _Intermediate_: TLS versions higher than 1.2 are activated. Compatible with most web browsers.
- _Old_: all TLS versions are activated. Compatible with olders web browsers.

{{% notice note %}}
The _Intermediate_ profile is activated by default on alwaysdata's servers.
{{% /notice %}}

To change the TLS profile at the account level you need to:

- edit the profile in the **Web > Configuration > SSL** menu:
{{< fig "images/account-tls-configuration.en.png" "Admin interface: configure TLS at the account level" >}}
- subscribe to a [dedicated IP]({{< ref "advanced/dedicated-ip-addresses" >}}) in the **Advanced > IP Addresses** menu and associate your HTTP addresses to it by clicking on the *Configure* button next to the address in the site modification form (in **Web > Sites**).

## VPS and dedicated servers

Owners of VPS and dedicated servers can set the HTTP TLS profile at the _server_ level in the **SSL > Configuration** menu:

{{< fig "images/server-tls-configuration.en.png" "Admin interface: configure TLS at the server level" >}}
