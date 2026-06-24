---
layout: layouts/indexed.njk
title: Domains
eleventyNavigation:
  key: Domains
  order: 3
---

Domains are managed from the **Domains** tab in your administration interface. [Buy](/en/docs/domains/buy-a-domain), [transfer](/en/docs/domains/transfer-a-domain) or add them when [managing](/en/docs/domains/add-an-external-domain) your domain. We use the experience brought by reseller [GANDI](https://www.gandi.net/en) to offer you as many extensions as possible. [Contact us](https://admin.alwaysdata.com/support/add/) if the desired extension is not offered by default.

> [!NOTE]
> As GANDI resellers you can receive emails from us, from them and from the [registry operators](https://en.wikipedia.org/wiki/Domain_name_registry) of the domain extensions taken.

- [Prices](https://www.alwaysdata.com/en/domains/#main)
- [API Resource](https://api.alwaysdata.com/v1/domain/doc/)
- [API Resource - DNS](https://api.alwaysdata.com/v1/record/doc/)

> [!WARNING]
> Officially invalid (according to [IDNA2008](http://unicode.org/faq/idn.html)), we do not support **emojis** in a domain name. Our infrastructure uses the [Python library `idna`](https://github.com/kjd/idna), which [imperatively respects](https://github.com/kjd/idna/issues/18) IDNA2008 at this stage.
