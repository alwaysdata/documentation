---
title: Domains
eleventyNavigation:
  key: Domains
  order: 3
---

Domains are managed from the **Domains** tab in your administration interface. [Buy](/en/docs/domains/buy-a-domain), [transfer](/en/docs/domains/transfer-a-domain) or add them when [managing](/en/docs/domains/add-an-external-domain) your domain. We use the experience brought by reseller [GANDI](https://www.gandi.net/en) to offer you as many extensions as possible. [Contact us](https://admin.alwaysdata.com/support/add/) if the desired extension is not offered by default.

> [!NOTE]
> As GANDI resellers you can receive emails from us, from them and from the [registry operators](https://en.wikipedia.org/wiki/Domain_name_registry) of the domain extensions taken.


## Resources

- [Prices](https://www.alwaysdata.com/en/domains/#main)
- [Buy a domain](/en/docs/domains/buy-a-domain)
- [Transfer a domain](/en/docs/domains/transfer-a-domain)
- [Add an external domain](/en/docs/domains/add-an-external-domain)
* [Renew a domain](/en/docs/domains/renew-a-domain)
* [Deadlines](/en/docs/domains/deadlines)
* [Change of owner](/en/docs/domains/change-of-owner)
* [Update domain owner's details](/en/docs/domains/update-owner-details)
* [Wipe a domain](/en/docs/domains/wipe-a-domain)
* [Set up DNSSEC](/en/docs/domains/dnssec)
- [Move a domain](/en/docs/domains/move-a-domain)
- [Delegate a subdomain](/en/docs/domains/delegate-a-subdomain)
- [Outgoing transfer](/en/docs/domains/outgoing-transfer)
* [API - Domain](https://api.alwaysdata.com/v1/domain/doc/)
* [Troubleshooting](/en/docs/domains/troubleshooting)

> [!WARNING]
> Officially invalid (according to [IDNA2008](http://unicode.org/faq/idn.html)), we do not support **emojis** in a domain name. Our infrastructure uses the [Python library `idna`](https://github.com/kjd/idna), which [imperatively respects](https://github.com/kjd/idna/issues/18) IDNA2008 at this stage.


## DNS management

You can also manage your DNS via a conventional system, directly from the **Domains** tab.

To use our DNS servers, set on your registrar administration panel `dns1.alwaysdata.com` and `dns2.alwaysdata.com`.

- [API - DNS record](https://api.alwaysdata.com/v1/record/doc/)
- [Add a DNS record](/en/docs/domains/add-dns)
- [Import a zone file](/en/docs/domains/add-dns#import-a-zone-file)
- [Add several DNS records with CSV](/en/docs/domains/create-dns-records-using-csv)
- [Use external MX](/en/docs/domains/use-external-mx)
- [Change of DNS servers](/en/docs/domains/change-of-dns-servers)
- [Add a SRV record](/en/docs/domains/add-srv-record)
- [Add a CAA record](/en/docs/domains/add-caa-record)
- [Delete a DNS record](/en/docs/domains/delete-dns)

> [!NOTE]
> The [SOA DNS record](https://en.wikipedia.org/wiki/SOA_record) includes a 32-bit serial number (between 1 and 4294967295). We do not follow the *convention* of defining it with a date format that comes from a time when zone files were edited by hand. Not following this convention *should not* be considered an error.
