+++
title = "Which Certificate is Returned by Default?"
linkTitle = "Certificates Priority"
tags = ["https", "ssl"]
+++

Thanks to [SNI](https://datatracker.ietf.org/doc/html/rfc6066#section-3), the server will in the following priority order and if they are filled in **Advanced > SSL Certificates** and not expired, return:

- Your manually added certificate matching the host name.
- Your manually added wildcard certificate matching the domain name.
- The [automatically generated Let's Encrypt certificate](/web-hosting/sites/ssl-tls/lets-encrypt#certificats-autogénérés) matching the host name.
- The server's default certificate.

If you wish to send a certificate with a lower priority, you can attach it directly to the subdomain, **it will take priority over the others**.

The configuration of the priority of a certificate is possible *only* for certificates you have added. This option is not available for auto-generated Let's Encrypt certificates. 

To enforce a certificate, go to the SSL certificate configuration in the **Advanced > SSL Certificates** menu or the subdomain configuration in the **Domains > Details of [domain] - ⚙️ > Subdomains** menu.

{{% notice warning %}}
An expired certificate, if it is attached to a subdomain, will still be returned by the server.
{{% /notice %}}
