+++
title = "Which Certificate Is Returned by Default?"
layout = "faq"
hidden = true
tags = ["https", "ssl"]
+++

Thanks to [SNI](https://datatracker.ietf.org/doc/html/rfc6066#section-3), the server will in the following priority order and if they are filled in **Advanced > SSL Certificates** and not expired, return:

- Your manually added certificate matching the host name.
- Your manually added wildcard certificate matching the domain name.
- The [automatically generated Let's Encrypt certificate]({{< ref "security/ssl-tls/lets-encrypt#certificats-autogénérés" >}}) matching the host name.
- The server's default certificate.

If you wish to send a certificate with a lower priority, you can attach it directly to the subdomain, **it will take priority over the others**.

To do this, go to address configuration:

From **Web > Sites > Modify the [site] - ⚙️ > Configure** opposite the address:

{{< fig "images/admin-panel_site.en.png" "Administration interface: via sites">}}

Or from **Domains > Details of [domain] - ⚙️ > Subdomains**:

{{< fig "images/admin-panel_subdomain-list.en.png""Administration interface: via domains" >}}

This will lead you to the following menu:

{{< fig "images/admin-panel_subdomain-menu.en.png" "Administration interface: manage a subdomain" >}}

{{% notice warning %}}
An expired certificate, if it is attached to a subdomain, will still be returned by the server.
{{% /notice %}}
