+++
title = "VPS/Dedicated Server: Required Migrations Process"
layout = "man"
hidden = true
tags = ["migration", "dedicated", "vps"]
+++

These migrations are done in four hands with the [support](https://admin.alwaysdata.com/support/).

## Step 1 - Accounts preparation
The customer prepares the migrations for all accounts following the recommendations of the documentation page (like in public Cloud). It is possible to go back to correct problematic behaviors.

*Tests servers are available for databases.*

{{< fig "images/migration-1.en.png" "" >}}

## Step 2 - Transit server request
**All accounts are ready.** The customer has to contact the support to:

- remove from the server all the languages' versions that are no longer supported under the new architecture. This will allow the client to check that he is definitely ready. This step is reversible, if needed.
- prepare the transit server.

{{< fig "images/migration-2.en.png" "" >}}

## Step 3 - Transit server installation
The support prepare the transit server with the same configuration as the client server. This installation can take several hours and precopy files and mails in the transit server.

*This step depends on the availability of transit servers matching the client server configuration at the of the request. __Customers may therefore have to wait until a server is released.__*

{{< fig "images/migration-3.en.png" "" >}}

## Step 4 - Accounts migration to the new architecture
The transit server is ready. The customer can migrate the accounts - one by one - in the transit server, via the **Migrations** menu of the server's panel or the **Advanced > Migrations** menu of the account's panel.

The client is **independant** in this step. He can perform his migrations whenever he wants.

The migration entails a downtime per account of a few seconds to a few hours; depending on the size of each account (especially databases). Usually there is one minute of downtime per gigabyte of databases.

{{< fig "images/migration-4.en.png" "" >}}

{{% notice tip %}}
No need to change the IP - *A and AAAA records* - for domains that do not use alwaysdata's DNS. The client server will do the redirection transparently.
{{% /notice %}}

{{% notice tip %}}
For a domain that does not use alwaysdata's DNS servers but its e-mails servers (MX), the `MX 5 server.alwaysdata.net` record has to be deleted in the DNS provider panel. `MX 10 mx1.alwaysdata.com` and `MX 20 mx2.alwaysdata.com` must be kept.
{{% /notice %}}

## Step 5 - After migration verifications
The customer can make application changes once an account is migrated if necessary.

Once all the accounts have been migrated, he contacts support so that they can reinstall the client server.

{{< fig "images/migration-5.en.png" "" >}}

## Step 6 - Client server reinstallation
**All accounts are migrated in the new software architecture and are in the transit server.**

The support reinstalls the client server to run it on the new architecture. This can take several hours and precopy files and emails.

{{< fig "images/migration-6.en.png" "" >}}

{{% notice note %}}
Reinstalling the server takes several hours. During this operation, the server's IP addresses will be rerouted to the transit server to keep the services available. A short downtime for these IPs (lasting around a minute) will however need to be allowed for. *If the client uses our DNS servers, the traffic will always be redirected in no-time to the transit server's IP addresses to prevent any down time.*
{{% /notice %}}

## Step 7 - Accounts relocation to the client server
**The client server is reinstalled.** Support contacts the customer to transparently move back accounts. *This move can take place in working hours and days*.

This final relocation of accounts causes a disruption per account equivalent to the unavailability at the time of the first migration.

{{< fig "images/migration-7.en.png" "" >}}

## Step 8 - Migration officially over
All accounts had been moved back to the reinstalled client server.

{{< fig "images/migration-8.en.png" "" >}}

{{% notice note %}}
The transit server will be made available at no extra cost for a period of **up to two weeks**. If the client have not finished migrating all of accounts by the end of those weeks, the transit server will be billed at the same price as the client server (prorata to the number of days) — in addition to the normal server that is still charged normally.
{{% /notice %}}

---
Icons: The Noun Project

