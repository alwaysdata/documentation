+++
title = "Adding a DNS Record"
layout = "howto"
weight = 6
tags = ["dns", "domain"]
+++

1.  Go to **Domains > Details of [example.org] - ⚙️ > DNS records**,
    {{< fig "images/admin-panel_dns-record-list.en.png" "" >}}

2.  Choose **Add a DNS record**,

3.  Fill-in the form.
    {{< fig "images/admin_panel_add-record.en.png" "" >}}

{{% notice warning %}}
Do not put the root into the **Hostname**. For example, by putting `example.org` in this box, you will create a record for `www.example.org.example.org`.
{{% /notice %}}

{{% notice note %}}
A record with `@` as hostname for some providers is the empty subdomain. In our case, the **Hostname** box should be empty.
{{% /notice %}}

- [Add a SRV record](domains/add-srv-record)
- [Add a CAA record](add-caa-record)
- [Use external MX](domains/use-external-mx)

## Import a zone file

A DNS zone file is a text file that contains details of every DNS records. It follows a standard format, making it suitable for transferring DNS records from one provider to another.

{{< fig "images/menu.en.png" "" >}}

That will erase the previously added DNS records.

## Resources

- [List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types)
- [Add several DNS records with CSV](create-dns-records-using-csv)
