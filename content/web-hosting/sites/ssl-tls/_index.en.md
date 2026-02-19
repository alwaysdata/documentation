+++
title = "SSL/TLS"
tags = ["https", "security", "ssl"]
+++

All services (HTTP, but also remote access, databases, emails...) are secured by a SSL/TLS layer.

- [Let's Encrypt certificates](/web-hosting/sites/ssl-tls/lets-encrypt)
- [Redirect HTTP to HTTPS](/web-hosting/sites/ssl-tls/redirect-http-to-https)
- [Generate a CSR](/web-hosting/sites/ssl-tls/csr)
- [Add a SSL certificate](/web-hosting/sites/ssl-tls/add-a-ssl-certificate)
- [Renew a SSL certificate](/web-hosting/sites/ssl-tls/renew-a-ssl-certificate)
- [Certificate priority](/web-hosting/sites/ssl-tls/certificates-priorities)

* [API](https://api.alwaysdata.com/v1/ssl/doc/)
* [Configure TLS](/web-hosting/sites/ssl-tls/configure-tls)
* [Implement HSTS](/web-hosting/sites/ssl-tls/hsts)

- Verify the returned certificate and configuration of a hostname: [SSL Labs](https://www.ssllabs.com), [SSL Tools](https://ssl-tools.net/) or [Security Headers](https://securityheaders.com).
- Find the mixed content[^1] of its website: [Why no Padlock](https://www.whynopadlock.com/).

[^1]: Web browsers send the `Mixed content` error when a website use the HTTPS protocol but some assets are served in HTTP.
