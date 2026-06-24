---
title: SSL/TLS
eleventyNavigation:
  key: SSL/TLS
  parent: Websites
  order: 5
---

All services (HTTP, but also remote access, databases, emails...) are secured by a SSL/TLS layer.

- [Let's Encrypt certificates](/en/docs/web-hosting/sites/ssl-tls/lets-encrypt)
- [Redirect HTTP to HTTPS](/en/docs/web-hosting/sites/ssl-tls/redirect-http-to-https)
- [Generate a CSR](/en/docs/web-hosting/sites/ssl-tls/csr)
- [Add a SSL certificate](/en/docs/web-hosting/sites/ssl-tls/add-a-ssl-certificate)
- [Renew a SSL certificate](/en/docs/web-hosting/sites/ssl-tls/renew-a-ssl-certificate)
- [Certificate priority](/en/docs/web-hosting/sites/ssl-tls/certificates-priorities)

* [API](https://api.alwaysdata.com/v1/ssl/doc/)
* [Configure TLS](/en/docs/web-hosting/sites/ssl-tls/configure-tls)
* [Implement HSTS](/en/docs/web-hosting/sites/ssl-tls/hsts)
* [Miscellaneous questions](/en/docs/web-hosting/sites/ssl-tls/misc)

- Verify the returned certificate and configuration of a hostname: [SSL Labs](https://www.ssllabs.com), [SSL Tools](https://ssl-tools.net/) or [Security Headers](https://securityheaders.com).
- Find the mixed content[^1] of its website: [Why no Padlock](https://www.whynopadlock.com/).

[^1]: Web browsers send the `Mixed content` error when a website use the HTTPS protocol but some assets are served in HTTP.
