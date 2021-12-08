+++
title = "Websites"
pre = "<i class='fas fa-fw fa-globe'></i> "
chapter = true
weight = 10
tags = ["http", "site"]
+++

# Websites

Any website address hosted on alwaysdata servers **must** be declared in **Web > Sites**. Choose the [language]({{< ref "languages" >}}) or type of you choice and configure them.

You can have as many sites as you wish in a single account. Note that this does entail a security risk as isolation takes place at the account level.

{{% notice note %}}
If your script needs to allow some IPs, allow these [IP adresses ranges]({{< ref "security/ip-ranges" >}}).
{{% /notice %}}

## Resources

- [API](https://api.alwaysdata.com/v1/site/doc/)
- [Declare a site]({{< relref "./add-a-site" >}})
- [External HTTP addresses]({{< relref "./use-external-addresses">}}) (domains that do not use our DNS servers)
* [User program]({{< relref "./user-program" >}})
* [Address redirect]({{< relref "./redirect" >}})
* [Custom Apache]({{< relref "./apache-custom" >}})
* [Static files]({{< relref "./static-files" >}})
- [HTTP stack]({{< relref "http-stack" >}})
- [Apache configuration]({{< relref "./configure-apache" >}})
- [File .htaccess]({{< relref "./htaccess-file" >}})
* [Change of hosting provider]({{< relref "./transfer-in" >}})
* [Change a website address]({{< ref "sites/change-a-website-address" >}})
* [Move a site]({{< relref "./move-a-site" >}})
* [Deactivate a site]({{< relref "./deactivate-a-site" >}})
- [Catch-all]({{< relref "./catch-all" >}})
- [Legal obligations on Internet]({{<ref "./legal-requirements-on-internet">}})
* [Clean up a site]({{< relref "./clean-up-a-site" >}})
* [Restore a site]({{< ref "backups/restore-a-site" >}})
* [Connection to upstream]({{< relref "./connection-to-upstream">}})
* [Troubleshooting]({{< relref "./troubleshooting" >}})
* [Miscellaneous questions]({{< relref "./misc" >}})

## Internet communications protection

- [Redirect HTTP to HTTPS]({{< ref "security/ssl-tls/redirect-http-to-https">}})
- [TLS configuration]({{< ref "security/ssl-tls/configure-tls" >}})
- [Add an SSL certificate]({{< ref "security/ssl-tls/add-a-ssl-certificate" >}})
- [Let's Encrypt certificates]({{< ref "security/ssl-tls/lets-encrypt" >}})

## Customizing

- [Customize error pages]({{< relref "./custom-error-pages">}})
- [Analyze processes]({{< relref "./analyze-processes" >}})
- [Web performances]({{< relref "web-performances" >}})
- [Peak audience]({{< relref "./anticipate-peak-audience" >}})
- [Format HTTP logs]({{< relref "./formatting-http-logs" >}})
* [HTTP cache]({{< ref "sites/http-cache" >}})
* [Use the HTTP cache]({{< ref "sites/http-cache/use-http-cache" >}})
* [Activate HTTP cache on WordPress]({{< ref "sites/http-cache/activate-http-cache-on-wordpress" >}})
- [WAF]({{< ref "sites/waf" >}})
- [Use WAF]({{< ref "sites/waf/use-waf" >}})
* [Monitoring probes]({{< relref "./use-probes" >}})

## External links

- Website uptime: [Down for everyone or just me](https://downforeveryoneorjustme.com/), [Screenshot Guru](https://screenshot.guru/) (with screenshot)
- Know the DNS resolution of an address: [DNSwatch](https://www.dnswatch.info/)
