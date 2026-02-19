+++
title = "How to Migrate on Private Cloud"
linkTitle = "Private Cloud Process"
tags = ["migration"]
+++

Most migrations imply a complete change on the server. For example, migration to a new version of our software infrastructure will call for the complete reinstallation of the server.

In the Public Cloud, during a migration, the accounts are migrated to a new server that runs the new version. When you use the Private Cloud, this is not possible: you only have one server.

## Required migrations

To avoid the need to suddenly migrate your server and therefore all of the accounts located there, [migrations take place in a number of steps](/technical-specifications/migrations/required-migrations-process).

## Optional migrations

Some migrations relating to only one service in our infrastructure (e.g. database management servers) may be offered.

In this case, no preparation, no test is possible and the update is performed directly on the server. You can still open an account on the Public Cloud if this service is offered there, to test some of your applications.
