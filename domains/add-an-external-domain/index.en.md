+++
title = "Adding an External Domain"
layout = "howto"
weight = 5
tags = ["domains"]
+++

An operation that is free, this allows transferring the domain’s *technical* management without touching its *administrative* management (its registrar). If you wish to move all of the management to alwaysdata, use a [domain transfer]({{< ref "domains/transfer-a-domain" >}}). Here we wish to add the domain and change the [DNS server]({{< ref "remote-access/login-details" >}}) at your registrar.

1.  From your administration interface, go to **Domains > Add a domain**;
    {{< fig "images/admin-panel_domain-list.en.png" "Administration interface: list of domains" >}}

2.  Fill-in the domain names that you wish to buy,
    {{< fig "images/admin-panel_add-domain-1.en.png" "Administration interface: step 1" >}}

{{% notice info %}}
Enter the domain only, without the subdomain. For example: `example.org` and not `www.example.org`.
{{% /notice %}}

3.  Choose to **manage** it.
    {{< fig "images/admin-panel_add-domain-2.en.png" "Administration interface: step 2" >}}

This will add the domain as an *external domain* in the list.

{{< fig "images/admin-panel_domain-list2.en.png" "Administration interface: External domain" >}}

Then you can create [email addresses]({{< ref "e-mails/create-an-email-address" >}}) for it and manage the [DNS records]({{< ref "domains/add-dns" >}}).
