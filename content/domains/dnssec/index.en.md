+++
title = "DNSSEC"
tags = ["dns", "domain", "security"]
+++

[DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) adds cryptographic signatures to existing DNS records. This allows for the authentication of the origin of the data and ensures that it has not been altered in transit.

Setting up DNSSEC is done both on authoritative DNS servers and on a domain's registrar:

- a private key must be configured on the authoritative DNS servers,
- and its public key, at the registrar.

## Implementation at alwaysdata

Go to **Domains > Details of [example.org] -  ⚙️ > DNSSEC**

### The domain is registered via alwaysdata and uses alwaysdata's DNS servers

{{< fig "images/allad-step1.en.png" "" >}}

Click on **Activate**.

{{< fig "images/allad-step2.en.png" "" >}}

This will create the key pair that will be configured on our DNS servers and at the registrar.

### The domain is registered via alwaysdata but uses external DNS servers

{{< fig "images/registerad-step1.en.png" "" >}}

Create the key pair with your DNS provider and then click on **Add a public key** using the elements provided by your DNS provider.

{{< fig "images/registerad-step2.en.png" "" >}}

We will then configure this public key at the registrar.

### The domain is not registered via alwaysdata but uses alwaysdata's DNS servers

{{< fig "images/dnsad-step1.en.png" "" >}}

Click on **Activate**. This will create the key pair.

{{< fig "images/dnsad-step2.en.png" "" >}}

Copy the key and enter it with your registrar.

## Links
- [RFC 4033](https://datatracker.ietf.org/doc/html/rfc4033)
- [RFC 4034](https://datatracker.ietf.org/doc/html/rfc4034)
- [RFC 4035](https://datatracker.ietf.org/doc/html/rfc4035)
