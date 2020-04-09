+++
title = "SSL/TLS"
weight = 20
chapter = true
tags = ["https", "security", "ssl"]
+++

# SSL/TLS

- [API](https://api.alwaysdata.com/v1/ssl/doc/)
- [Redirect HTTP to HTTPS]({{< relref "redirect-http-to-https">}})
- [Configure TLS]({{< relref "configure-tls" >}})
- [Add an SSL certificate]({{< relref "add-a-ssl-certificate" >}})
- [Let's Encrypt certificates]({{< relref "lets-encrypt" >}})
- [Generate a CSR]({{< relref "csr" >}})
- [Use a SAN certificate]({{< relref "use-san-certificate" >}})
- [Certificate priority]({{< relref "certificates-priorities" >}})

* Verify the returned certificate and configuration of a hostname: [SSL Labs](https://www.ssllabs.com) or [SSL Tools](https://ssl-tools.net/)
* Find the mixed content[^1] of its website: [Why no Padlock](https://www.whynopadlock.com/)

[^1]: web browsers send the `Mixed content` error when a website use the HTTPS protocol but some assets are served in HTTP.
