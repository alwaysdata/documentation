+++
title = "Delegating a Domain"
layout = "howto"
hidden = true
tags = ["domains", "sites"]
+++

To allow another alwaysdata user to use a subdomain belonging to your domain, you need to grant them permission.

To do this, go to **Domains > Details of [example.org] - 🔎 > Delegations > Add a delegation**.

{{< fig "images/admin-panel_subdomain-delegation-list.en.png" "Delegations menu" >}}

{{< fig "images/admin-panel_subdomain-add-delegation.en.png" "Add a delegation: form" >}}

{{% notice info %}}
Do not place the root in **Subdomain**.
For example, by putting `www.example.org` in this box, you will create a delegation for `www.example.org.example.org`.
{{% /notice %}}

{{< fig "images/admin-panel_subdomain-delegation-result.en.png" "Add a delegation: result" >}}
