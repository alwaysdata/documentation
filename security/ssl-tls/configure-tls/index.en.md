+++
title = "Change TLS Configuration"
layout = "howto"
hidden = true
tags = ["http", "security", "site"]
+++

[TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) is a cryptographic protocol to secure Internet communications.

2 presets are available in the **Web > Configuration > SSL** menu:

- _Intermediate_: TLS versions higher than 1.2 are activated. Compatible with most web browsers.
- _Old_: all TLS versions are activated. Compatible with olders web browsers.

{{% notice note %}}
The _Old_ profile is activated by default on [v2017]({{< ref "accounts/version" >}}) alwaysdata's servers. On [v2020]({{< ref "accounts/version" >}}) alwaysdata's servers it's the _Intermediate_ profile.
{{% /notice %}}

## VPS and dedicated servers

Owners of VPS and dedicated servers can set the TLS profile at the _server_ level in the **SSL > Configuration** menu.
