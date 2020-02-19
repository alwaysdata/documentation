+++
title = "Using External Addresses"
layout = "howto"
hidden = true
tags = ["dns", "http", "site"]
+++

To use your own addresses without managing your domain at alwaysdata, proceed as follows:

- From the domain DNS provider, create [DNS records](https://en.wikipedia.org/wiki/List_of_DNS_record_types) pointing to your alwaysdata account,

{{% notice tip %}}
As the server where your account is located may change, we recommend creating a *CNAME* type record with an `<account>.alwaysdata.net` value (where `<account>` is the name of your account) rather than *A*/*AAAA* type records. As a *CNAME* is only available for a blank subdomain, *A*/*AAAA* or *ALIAS* types can be used.
{{% /notice %}}

- From the alwaysdata administration interface [declare the addresses]({{< ref "sites/add-a-site" >}}) in **Web > Sites**.

{{% notice info %}}
The IP addresses of the servers that an account points to are visible from the **Advanced > Service status** tab in the administration interface.
{{% /notice %}}
