+++
title = "How To add a DNS record"
menuTitle = "Add a DNS record"
layout = "howto"
weight = 10
+++

In this example, we will consider our domain name is *domain.tld*.

1. Go in **Domains > Details of domain.tld (star wheel) > DNS records**;
![Admin interface: DNS records list](/en/platform/domains/admin-panel_dns-record-list_en.png)
2. Choose **Add DNS record**;
3. Fill in the form.
![Admin interface: add a DNS record](/en/platform/domains/admin_panel_add-record_en.png)

> Don't put the root in **Hostname**. For example, by putting _www.domain.tld_ in this box, we will create a record for _www.domain.tld.domain.tld_.

- [Add a SRV record]({{< ref "platform/domains/add-srv-record" >}})

## Links

- [List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types)
