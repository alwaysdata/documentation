+++
title = "Deleting a DNS Record"
layout = "howto"
hidden = true
tags = ["dns", "domains"]
+++

1.  Go to **Domains > Details for [example.org] domain - 🔎 > DNS records**,

2.  Click on the **trash** corresponding to the record to delete.
    {{< fig "images/admin-panel_dns-record-list.en.png" "Administration interface: list of DNS records" >}}

{{% notice note %}}
The records created by default by our system (e.g. by adding an address in **Web > Sites**) cannot be *deleted* but you may *overwrite* them by [adding a DNS record]({{< ref "domains/add-dns" >}}) for the relevant host name.
{{% /notice %}}
