+++
title = "Domains Troubleshooting"
layout = "faq"
weight = 90
tags = ["troubleshooting", "domains"]
+++

## Transfer

### "2304: Object status prohibits operation", "Transfer Prohibited from Registry Request" or "2308: Data management policy violation (domain [example.org] has invalid status (clientTransferProhibited))"

Domain protected against transfers a `whois` [^1] will return:

{{% notice %}}
Domain Status: clientTransferProhibited
{{% /notice %}}

The protection needs to be eliminated with the current registrar.

### "Invalid Authorization Code"

Check that no typos were made when rekeying the authorization code or generate a new authorization code.

{{% notice info %}}
To generate a new one for an outgoing transfer, contact our [support](https://admin.alwaysdata.com/support/add).
{{% /notice %}}

### "Registry error - 2308: Data management policy violation (domain expired)"

Domain expired, renew it before starting the transfer again.

### "Transfer Refused by Registrar (Queue Message #[id])"

The current registrar blocked the transfer. Contact them to determine the reason before starting the transfer again.

## Change of owner

### "Max waiting duration for owner responses (15 days) reached"

A change of owner needs to be accepted by both the former and the new owner within 15 days. Check the e-mail addresses of both contacts.

## Domain suspended by ICANN

[ICANN](https://www.icann.org) checks the e-mail addresses of domain owners to ensure their proper operation. Owners have 15 days to validate the e-mail sent by ICANN.

A `whois` will show the following message: `Domain Status: clientHold`

From the alwaysdata administration interface, the following message - **Domains > Details** tab in the **> Status** domain - lets you send the e-mail:

```
This domain was suspended by ICANN as its owner did not confirm their e-mail address within 15 days of creation, transfer or sale.
```

If you are not sure of the e-mail address, you can change it in the owner’s contact information from the **Domains > Manage contacts** menu:

{{< fig "images/admin-panel_domains-list.en.png" "Administration interface: access to the Manage contacts menu" >}}

{{< fig "images/admin-panel_contacts-management.en.png" "Administration interface: Manage contacts menu" >}}

---

## Links

- [Glossary of EPP status codes](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en)


[^1]: More information on [whois](https://en.wikipedia.org/wiki/WHOIS)
