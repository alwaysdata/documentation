+++
title = "Adding a SSL Certificate to Your Site"
layout = "howto"
weight = 10
tags = ["https", "security", "ssl"]
+++

Add your certificate to the **Advanced > SSL certificates > Add an SSL certificate** in your alwaysdata interface.

{{< fig "images/admin-panel_ssl-list.en.png" "Administration interface: SSL certificates menu" >}}

{{< fig "images/admin-panel_ssl-add.en.png""Administration interface: add a certificate" >}}

Private key, certificate and intermediate certificates must be in PEM format.

You can add certificates for a specific address, [SAN](https://en.wikipedia.org/wiki/Subject_Alternative_Name) (multi-domain) certificates or [wildcard](https://en.wikipedia.org/wiki/Wildcard_certificate) certificates.

If you do not have an SSL certificate, you can use our [Let's Encrypt certificates]({{< ref "security/ssl-tls/lets-encrypt" >}}) or buy them from an SSL certificate vendor after providing them with the [previously created CSR]({{< ref "security/ssl-tls/csr" >}}).
