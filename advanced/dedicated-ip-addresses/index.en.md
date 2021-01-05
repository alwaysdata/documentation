+++
title = "Dedicated IP Addresses"
layout = "man"
hidden = true
tags = [""]
+++

Regardless of the environment taken [^1], IPv4 addresses are offered for rent via the menu **Advanced > IP Addresses**. These IPs - not shared - are charged 5 € TTC per month or 60 € TTC per year [^2].

## HTTP

Once the IP is taken :

- If the domain uses our DNS servers, go to the sub-domain level to allocate the IP to it. This is done via **Web > Sites > Edit [site] > Configure (in front of addresses)** or via **Domains > Details of [example.org] (cogwheel) > Subdomains**.
- If the domain uses other DNS servers, create a **A DNS record** pointing to the private IP at your DNS provider.

{{% notice info %}}
This IP will be used for incoming requests but outgoing requests will always go through the IP of the HTTP server on which the account is located. This IP is given in the menu **Advanced > Service Status**.
{{% /notice %}}

It is necessary if you want to change [TLS profile]({{< ref "security/ssl-tls/configure-tls" >}}) for an account or one or more addresses. 

## SMTP

This IP will be used to send emails.

Once the IP taken you will be able to tell him which emails should go through this IP according to the [score they received by the antispam]({{< ref "e-mails/delivery#scoring-system" >}}):

{{< fig "images/dedicated-ip-smtp.en.png" "" >}}

The lower the score, the better the e-mail will be rated.

[^1]: Available on all our offers, these IP are not to be confused with our [Catalyst dedicated server offer]({{< ref "accounts/billing/choose-its-paas" >}}).
[^2]: For a annual subscription, contact the [support](https://admin.alwaysdata.com/support/add).
