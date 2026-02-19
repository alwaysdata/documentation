+++
title = "Private Cloud: Required Migrations Procedure"
linkTitle = "Private Cloud: Required Migrations Procedure"
tags = ["migration"]
+++

These migrations are done in four hands with the [support](https://admin.alwaysdata.com/support/).

## Encouraged

### Step 1 - Accounts preparation
The user prepares the migrations for all accounts following the recommendations of the documentation page (like in Public Cloud). It is possible to go back to correct problematic behaviors.

This step is used to test the migration of databases, verify the connection settings of your software...

> Tests servers are available for databases.

Once the migration of an account to the transit server is completed, it will also be possible to perform a rollback and temporarily switch it back to the old infrastructure in case of an issue.

{{< fig "images/migration-1.en.png" "" >}}

## Mandatory

### Step 2 - Transit server request
**All accounts are ready.** The user has to contact the support to prepare the transit server.

{{< fig "images/migration-2.en.png" "" >}}

### Step 3 - Transit server installation
The support team prepares the transit server with a configuration equivalent to the client's server. This installation can take several hours and precopy files and mails in the transit server.

> This step depends on the availability of transit servers matching the client server configuration at the of the request. __Users may therefore have to wait until a server is released.__

{{< fig "images/migration-3.en.png" "" >}}

### Step 4 - Accounts migration to the new architecture
The transit server is ready. The user can migrate the accounts - one by one - in the transit server, via the **Migrations** menu of the server's panel or the **Advanced > Migrations** menu of the account's panel.

> The user is **independant** in this step. He can perform his migrations whenever he wants.

The migration entails a downtime per account of a few seconds to a few hours; depending on the size of each account (especially databases). Usually there is one minute of downtime per gigabyte of databases.

{{< fig "images/migration-4.en.png" "" >}}

{{% notice tip %}}
No need to change the IP - *A and AAAA records* - for domains that do not use alwaysdata's DNS. The client server will do the redirection transparently.
{{% /notice %}}

### Step 5 - After migration verifications
The user can make application changes once an account is migrated if necessary.

> It is also possible to perform a rollback and *temporarily* switch back to the old infrastructure in case of an issue.

Once all the accounts have been migrated, he contacts support so that they can reinstall the client server.

{{< fig "images/migration-5.en.png" "" >}}

### Step 6 - Client server reinstallation
**All accounts are migrated in the new software architecture and are in the transit server.**

The support reinstalls the client server to run it on the new architecture. This can take several hours and precopy files and emails.

> The temporary rollback is no longer possible.

{{< fig "images/migration-6.en.png" "" >}}

{{% notice note %}}
Reinstalling the server takes several hours. During this operation, the server's IP addresses will be rerouted to the transit server to keep the services available. A short downtime for these IPs (lasting around a minute) will however need to be allowed for. *If the user exploits our DNS servers, the traffic will always be redirected in no-time to the transit server's IP addresses to prevent any down time.*
{{% /notice %}}

### Step 7 - Finalization: accounts relocation to the client server
**The client server is reinstalled.** Support contacts the user to move back accounts. *This finalization step can be performed by the support in working hours and days or by the user.*

This final relocation of accounts causes a disruption per account equivalent to the unavailability at the time of the first migration.

{{< fig "images/migration-7.en.png" "" >}}

### Step 8 - Migration officially over
All accounts had been moved back to the reinstalled client server.

{{< fig "images/migration-8.en.png" "" >}}


## Notes

- The transit server is made available for migration without additional cost for a **maximum period of two weeks**. If the user has not completed the migration of all their accounts by the end of this period, the transit server will be billed at the same cost as the client server (prorated, day by day) - in addition to the original server, which remains billed normally.
- If the user wishes to test the migration on some accounts before launching the actual migration or wants access to a transit server for a longer period (*without paying*), they can use our shared transit server available to all dedicated and VPS clients. However:
    - this server may not match the client server configuration,
    - no pre-copying of files and emails is performed: the migration time may therefore be extended,
    - users do not have access to server customizations and the firewall they have configured,
    - the provision of this shared transit server is validated on a case-by-case basis by support depending on the characteristics of the client server and its accounts.
- If the user is responsible for the finalization step, they have **one week** to move all accounts without additional cost.

> Icons: The Noun Project
