+++
title = "Adding an External Domain"
layout = "howto"
weight = 5
tags = ["domain"]
+++

An operation that is free, this allows transferring the domain’s *technical* management without touching its *administrative* management (its registrar). If you wish to move all of the management to alwaysdata, use a [domain transfer](domains/transfer-a-domain).

Here we wish to add the domain and **change of DNS servers** at the registrar to put `dns1.alwaysdata.com` and `dns2.alwaysdata.com`.

1.  From your administration interface, go to **Domains > Add a domain**;
    {{< fig "images/admin-panel_domain-list.en.png" "Administration interface: list of domains" >}}

2.  Fill-in the domain names that you wish to add,
    {{< fig "images/admin-panel_add-domain-1.en.png" "Administration interface: step 1" >}}

{{% notice info %}}
Enter the domain only, without the subdomain. For example: `example.org` and not `www.example.org`.
{{% /notice %}}

3.  Choose to **manage** it.
    {{< fig "images/admin-panel_add-domain-2.en.png" "Administration interface: step 2" >}}

This will add the domain as an *external domain* in the list.

{{< fig "images/admin-panel_domain-list2.en.png" "Administration interface: External domain" >}}

Then you can create [e-mail addresses](e-mails/create-an-e-mail-address), [websites](sites/add-a-site) and manage [DNS records](domains/add-dns).

{{% notice warning %}}
If some DNS records are to be kept - for example not to change email providers - the [DNS zone](domains/add-dns) will need to be prepared before making the DNS server change.
{{% /notice %}}
