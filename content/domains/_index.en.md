+++
title = "Domains"
pre = "<i class='fas fa-fw fa-server'></i> "
weight = 16
archetype = "chapter"
tags = ["dns", "domain"]
+++

Domains are managed from the **Domains** tab in your administration interface. [Buy](buy-a-domain), [transfer](transfer-a-domain) or add them when [managing](add-an-external-domain) your domain. We use the experience brought by reseller [GANDI](https://www.gandi.net/en) to offer you as many extensions as possible. [Contact us](https://admin.alwaysdata.com/support/add/) if the desired extension is not offered by default.

{{% notice note %}}
As GANDI resellers you can receive emails from us, from them and from the [registry operators](https://en.wikipedia.org/wiki/Domain_name_registry) of the domain extensions taken.
{{% /notice %}}

## Resources

- [Prices](https://www.alwaysdata.com/en/domains/#main)
- [Buy a domain](buy-a-domain)
- [Transfer a domain](transfer-a-domain)
- [Add an external domain](add-an-external-domain)
* [Renew a domain](renew-a-domain)
* [Deadlines](deadlines)
* [Change of owner](change-of-owner)
* [Update domain owner's details](update-owner-details)
* [Wipe a domain](wipe-a-domain)
* [Set up DNSSEC](dnssec)
- [Move a domain](move-a-domain)
- [Delegate a subdomain](delegate-a-subdomain)
- [Outgoing transfer](outgoing-transfer)
* [API - Domain](https://api.alwaysdata.com/v1/domain/doc/)
* [Troubleshooting](./troubleshooting)

{{% notice warning %}}
Officially invalid (according to [IDNA2008](http://unicode.org/faq/idn.html)), we do not support **emojis** in a domain name. Our infrastructure uses the [Python library `idna`](https://github.com/kjd/idna), which [imperatively respects](https://github.com/kjd/idna/issues/18) IDNA2008 at this stage.
{{% /notice %}}

## DNS management

You can also manage your DNS via a conventional system, directly from the **Domains** tab.

To use our DNS servers, set on your registrar administration panel `dns1.alwaysdata.com` and `dns2.alwaysdata.com`.

- [API - DNS record](https://api.alwaysdata.com/v1/record/doc/)
- [Add a DNS record](add-dns)
- [Import a zone file](add-dns#import-a-zone-file)
- [Add several DNS records with CSV](create-dns-records-using-csv)
- [Use external MX](use-external-mx)
- [Change of DNS servers](change-of-dns-servers)
- [Add a SRV record](add-srv-record)
- [Add a CAA record](add-caa-record)
- [Delete a DNS record](delete-dns)

{{% notice note %}}
The [SOA DNS record](https://en.wikipedia.org/wiki/SOA_record) includes a 32-bit serial number (between 1 and 4294967295). We do not follow the *convention* of defining it with a date format that comes from a time when zone files were edited by hand. Not following this convention *should not* be considered an error.
{{% /notice %}}
