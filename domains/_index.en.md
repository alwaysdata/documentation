+++
title = "Domains"
pre = "<i class='fas fa-fw fa-server'></i> "
weight = 16
chapter = true
tags = ["dns", "domains"]
+++

# Domains

Domains are managed from the **Domains** tab in your administration interface. [Buy](https://www.alwaysdata.com/en/domains/#main), transfer or add them when managing your domain. We use the experience brought by reseller [GANDI](https://www.gandi.net/en) to offer you as many extensions as possible. [Contact us](https://admin.alwaysdata.com/support/add/) if the desired extension is not offered by default.

{{% notice note %}}
As GANDI resellers you can receive emails from us, from them and from the [registry operators](https://en.wikipedia.org/wiki/Domain_name_registry) of the domain extensions taken.
{{% /notice %}}

## Resources

- [API - Domain](https://api.alwaysdata.com/v1/domain/doc/)
- [Buy a domain]({{< relref "buy-a-domain" >}})
- [Transfer a domain]({{< relref "transfer-a-domain" >}})
- [Add an external domain]({{< relref "add-an-external-domain">}})
- [Renew a domain]({{< relref "renew-a-domain" >}})
- [Deadlines]({{< relref "deadlines" >}})
- [Move a domain]({{< relref "move-a-domain" >}})
- [Change of owner]({{< relref "change-of-owner" >}})
- [Update domain owner's details]({{< relref "update-owner-details" >}})
- [Delegate a subdomain]({{< relref "delegate-a-subdomain" >}})
- [Wipe a domain]({{< relref "wipe-a-domain" >}})
- [Outgoing transfer]({{< relref "outgoing-transfer" >}})
- [Troubleshooting]({{< relref "./troubleshooting" >}})

{{% notice warning %}}
Officially invalid (according to [IDNA2008](http://unicode.org/faq/idn.html)), we do not support **emojis** in a domain name. Our infrastructure uses the [Python library `idna`](https://github.com/kjd/idna), which [imperatively respects](https://github.com/kjd/idna/issues/18) IDNA2008 at this stage.
{{% /notice %}}

## DNS management

You can also manage your DNS via a conventional system, directly from the **Domains** tab.

To use our DNS servers, set on your registrar administration panel `dns1.alwaysdata.com` and `dns2.alwaysdata.com`.

- [API - DNS record](https://api.alwaysdata.com/v1/record/doc/)
- [Add a DNS record]({{< relref "add-dns" >}})
- [Use external MX]({{< relref "use-external-mx" >}})
- [Change of DNS servers]({{< relref "change-of-dns-servers" >}})
- [Add a SRV record]({{< relref "add-srv-record" >}})
- [Add a CAA record]({{< relref "add-caa-record" >}})
- [Delete a DNS record]({{< relref "delete-dns" >}})

[DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) is not yet supported.

{{% notice note %}}
The [SOA DNS record](https://en.wikipedia.org/wiki/SOA_record) includes a 32-bit serial number (between 1 and 4294967295). We do not follow the *convention* of defining it with a date format that comes from a time when zone files were edited by hand. Not following this convention *should not* be considered an error.
{{% /notice %}}
