+++
title = "Adding a DNS Record"
layout = "howto"
weight = 6
tags = ["dns", "domain"]
+++

1.  Go to **Domains > Details of [example.org] - 🔎 > DNS records**,
    {{< fig "images/admin-panel_dns-record-list.en.png" "Administration interface: list of DNS records" >}}

2.  Choose **Add a DNS record**,

3.  Fill-in the form.
    {{< fig "images/admin_panel_add-record.en.png" "Administration interface: list of DNS records" >}}

{{% notice warning %}}
Do not put the root into the **Hostname**.
For example, by putting `example.org` in this box, you will create a record for `www.example.org.example.org`.
{{% /notice %}}

{{% notice note %}}
A record with `@` as hostname for some providers is the empty subdomain. Here the **Hostname** box should be empty.
{{% /notice %}}

---

- [Add a SRV record]({{< ref "domains/add-srv-record" >}})
- [Add a CAA record]({{< relref "add-caa-record" >}})
- [Use external MX]({{< ref "domains/use-external-mx" >}})

## Resources

- [List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types)
