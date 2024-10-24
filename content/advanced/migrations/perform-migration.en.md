+++
title = "How to Perform a Migration"
layout = "howto"
hidden = true
tags = ["infrastructure", "migration"]
+++

Every migration brings changes that may cause incompatibilities with your applications. This is why we recommend that you proceed with the utmost care when performing a migration, especially as no roll back is possible.

## 1. Read the documentation

Every migration is described on a page in our documentation. Read it carefully: it especially sets out the major incompatibilities.

## 2. Check the compatibility of your applications

You may need to work on your applications so that they continue to work after migration. For example, for a migration to a more recent version of MySQL, you may need to change some SQL requests.

## 3. Preparing the migration

Before actually running a migration, you will have the opportunity to perform several actions. They will ensure that your applications will still run properly, and to fix them if not.

### Databases test

**Some** migrations can be tested using a **Test** button. This will attempt to import the databases from your account to a temporary server using the new versions.

## 4. Performing the migration

Once you have tested the migration and you are sure that everything works properly, you can actually execute the migration. During the migration, your account may be unavailable for a very short length of time (a few seconds or minutes, depending on the amount of data in your account). *You do not need to stop your sites or databases: we handle everything*.

It is possible to perform a _temporary_ rollback in case of an issue. This rollback is available for 7 days after the migration is initiated.

- [Specificities related to migration of Private Cloud]({{< ref "advanced/migrations/vps-and-dedicated-migrations" >}})
