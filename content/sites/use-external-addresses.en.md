+++
title = "Using External Addresses"
layout = "howto"
hidden = true
tags = ["dns", "http", "site"]
+++

To use your own addresses without [managing your domain]({{< ref "domains/add-an-external-domain" >}}) at alwaysdata, proceed as follows:

1. From the domain DNS provider, create [DNS records](https://en.wikipedia.org/wiki/List_of_DNS_record_types) pointing to your alwaysdata account,

	 - The server where an account is located may change. We recommend to use *CNAME* type records with an `<account>.alwaysdata.net` value (where `<account>` is the name of your account) rather than *A*/*AAAA* type records.

{{% notice tip %}}
The *CNAME* is not available for the blank subdomain, *A*/*AAAA* or *ALIAS* types will be used with the server HTTP's IP address as the value (to be found in the **Advanced > Server status** section of the alwaysdata administration interface).
{{% /notice %}}

2. From the alwaysdata administration interface [declare the addresses]({{< ref "sites/add-a-site" >}}) in **Web > Sites**.
