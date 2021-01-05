+++
title = "How to Migrate to a VPS/Dedicated Server"
layout = "howto"
hidden = true
tags = ["migration", "dedicated", "vps"]
+++

Most migrations imply a complete change on the server. For example, migration to a new version of our software infrastructure will call for the complete reinstallation of the server.

In the public Cloud, during a migration, the accounts are migrated to a new server that runs the new version. When you have a dedicated or VPS server, this is not possible: you only have one server.

## Required migrations

To avoid the need to suddenly migrate your server and therefore all of the accounts located there, migrations take place in a number of steps:

- You prepare the migrations for all of your accounts (like in public Cloud). Once all your accounts are well prepared, [open a ticket](https://admin.alwaysdata.com/support/). We will remove from your server all the languages' versions that are no longer supported under the new infrastructure. This will allow you to check that you're definitely ready. This step is reversible, if needed.

- We assign you a transit server with the same configuration as your dedicated or VPS server.

- Then you can migrate each of your accounts, one by one. They will be moved to this transit server.

- Once all of your accounts have been migrated to this transit server, your initial server will be reinstalled to run on the new version of our software infrastructure.

- Lastly, all of your accounts then located on the transit server, will be transparently moved back to the initial server.

Reinstalling the server takes several hours. During this operation, the server's IP addresses will be rerouted to the transit server to keep your services available. A short down time for these IPs (lasting around a minute) will however need to be allowed for. If you use our DNS servers, the traffic will always be redirected in no-time to the transit server's IP addresses to prevent any down time.

The final relocation of accounts entails a downtime per account of a few seconds to a few minutes; depending on the size of each account (especially databases).

{{% notice note %}}
The transit server will be made available at no extra cost for a period of up to two weeks. If you have not finished migrating all of your accounts by the end of those weeks, the transit server will be billed at the same price as your dedicated/VPS server (prorata to the number of days) — in addition to the normal server that is still charged normally.
{{% /notice %}}

The availability of the transit server will depend on availability at the time of your request. You may therefore have to wait until a server is released.

{{% notice tip %}}
For a domain that does not use alwaysdata's DNS servers but its e-mails servers (MX), delete the `MX 5 server.alwaysdata.net` record in the DNS provider panel. `MX 10 mx1.alwaysdata.com` and `MX 20 mx2.alwaysdata.com` must be kept.
{{% /notice %}}

## Optional migrations

Some migrations relating to only one service in our infrastructure (e.g. database management servers) may be offered.

In this case, no preparation, no test is possible and the update is performed directly on the server. You can still open an account on the public Cloud if this service is on offer there, to test some of your applications.
