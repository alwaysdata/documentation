+++
title = "How To perform a migration"
menuTitle = "Perform a migration"
layout = "howto"
weight = 10
draft = false
hidden = true
+++

Each migration results in changes that may cause incompatibilities with your applications. For this reason, we advise you to be especially careful when performing a migration, all the more since it is not possible to go back.

## Step 1: Read the documentation

Each migration is described in a page of our documentation. Please read it carefully; in particular, the most important incompatibilities are stated.

## Step 2: Check that your applications are compatible

You may need to take some steps regarding your applications so that they continue working after the migration. For example, when migrating to a newer version of MySQL, you may need to change some of the SQL queries.

## Step 3: Test the migration

Before actually performing the migration, you have a chance to test using the **Test** button. What actually happens when you click on that button depends on the migration, but as a general rule, your account data is copied to a transit server, allowing you to access it as if the migration had been performed.

Let's take an example. For a migration to PostgreSQL version 9.6, the Test button copies all your databases to a server running PostgreSQL version 9.6. This is a duplication: your databases remain accessible as ordinarily through your usual PostgreSQL server.

You may then connect to the transit server, whose address is provided after you've clicked on the **Test** button. This will allow you, for example, to test your applications under this new PostgreSQL version. In practical terms, you should perhaps copy your applications, change their configurations to use this transit server instead of the usual one and check that they are still working.

## Step 4: Perform the migration
Once you've tested the migration and you're sure that everything is working correctly, you can actually perform the migration. During the migration, your account may become unavailable for a short period of time (for a few seconds, maybe a few minutes, depending on the amount of data on your account). _You don't need to stop your websites or databases, we take care of everything._

> WARNING: once the migration has been performed, it will not be possible to go back.


## Dedicated servers and VPS
Most migrations involve a global change on the server. For example, migration to a new version of our software infrastructure requires a complete reinstallation of the server.

In a shared environment, during a migration, the accounts are migrated to a new server running the new version. When you have a dedicated server or VPS, this is not possible: you only have a single server. To avoid a destructive migration of your server, and thus all of the accounts stored there, migrations are made in several steps:

- You test the migrations of all of your accounts (just like on a shared environment);
- When you are ready to begin the true migration of your accounts, we will make a transit server available to you with the same configuration as your dedicated server or VPS;
- You can then migrate each of your accounts, one by one. They will be moved to this transit server;
- When all of your accounts have been migrated to this transit server, your original server will be reinstalled with an update to the new version of our software infrastructure;
- All of your accounts, now located on the transit server, will finally be moved back to the original server in a transparent manner.

During the reinstallation of your server, its IP addresses will be rerouted to the transit server so that your services remain normally accessible. However, expect that these IPs will be unavailable for a short period (around a minute). If you use our DNS servers, all traffic will be preemptively redirected to the IP of the transit server, so there will be no downtime.


> The transit server will be made available to you without surcharge for a maximum period of one week. If you have not finished the migration of all your accounts within this week, the transit server will be billed at the same cost as your dedicated server/VPS (prorated daily) — in addition to the original server, which will still be billed as normal.


Availability of the transit server will depend on availability at the time of your request. Therefore, you may need to wait for a server to be free.


