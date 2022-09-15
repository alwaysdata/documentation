+++
title = "Network"
weight = 30
layout = "man"
tags = ["infrastructure", "security"]
+++

## Firewall

Users who own [Private Clouds]({{< ref "accounts/billing/private-cloud-prices" >}}) can [configure their firewall]({{< relref "configure-firewall" >}}) directly from their administration interface, via the server's **Firewall** menu.

### Incoming firewall

Users cannot listen to any port, only the necessary ones are open.

### Outgoing firewall

All of the ports are open without any filtering; you can therefore define your own uses without our help. Every connection is logged and will be temporarily blocked in case of misuse.

## Intrusion prevention

alwaysdata uses [Fail2ban](http://www.fail2ban.org/) as the intrusion system on all of its servers. This system analyzes the connection logs for the various services and will block the IP addresses for a 30-minute period after a hundred failed connection attempts.

You can also implement an [application firewall]({{< ref "sites/waf">}}) directly in your account to protect your websites from malicious attacks.

## DDoS

A [DDoS](https://en.wikipedia.org/wiki/Denial-of-service_attack) attack aims to render a server, service or infrastructure unavailable. It may take different forms: bandwidth saturation, exhausting machine system resources, etc.

All of the alwaysdata servers are configured with [OSI model](https://en.wikipedia.org/wiki/OSI_model) level 3/4 anti-DDoS protection. It is up to you to manage the application side.

Private Cloud users can contact [support](https://admin.alwaysdata.com/support/add/) to get help with installation or for support.
