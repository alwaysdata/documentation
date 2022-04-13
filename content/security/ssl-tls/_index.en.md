+++
title = "SSL/TLS"
weight = 20
chapter = true
tags = ["https", "security", "ssl"]
+++

# SSL/TLS

All services (HTTP, but also remote access, databases, emails...) are secured by a SSL/TLS layer.

- [Let's Encrypt certificates]({{< relref "lets-encrypt" >}})
- [Redirect HTTP to HTTPS]({{< relref "redirect-http-to-https">}})
- [Generate a CSR]({{< relref "csr" >}})
- [Add a SSL certificate]({{< relref "add-a-ssl-certificate" >}})
- [Certificate priority]({{< relref "certificates-priorities" >}})

* [API](https://api.alwaysdata.com/v1/ssl/doc/)
* [Configure TLS]({{< relref "configure-tls" >}})
* [Implement HSTS]({{< relref "hsts" >}})

- Verify the returned certificate and configuration of a hostname: [SSL Labs](https://www.ssllabs.com), [SSL Tools](https://ssl-tools.net/) or [Security Headers](https://securityheaders.com).
- Find the mixed content[^1] of its website: [Why no Padlock](https://www.whynopadlock.com/).

[^1]: web browsers send the `Mixed content` error when a website use the HTTPS protocol but some assets are served in HTTP.
