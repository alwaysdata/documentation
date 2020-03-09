+++
title = "Transfering a Domain to Another Provider"
layout = "howto"
hidden = true
tags = ["domains"]
+++

To transfer a domain to another host services provider, initiate the command from the new provider.

## Preparation

Before starting the operation the owner needs to:
  - remove the protection against transfers,
  - check that the owner’s information is correct and visible in the `whois` [^1],
  - retrieve the authorization code.

This information is retrieved from the **Domains > Details** tab for domain: 

{{< fig "images/admin-panel_domain-details.en.png" "Prepare a transfer" >}}

A transfer cannot be made during the first 60 days after creation or after a previous transfer.

[^1]: More informations on [whois](https://en.wikipedia.org/wiki/Whois)
