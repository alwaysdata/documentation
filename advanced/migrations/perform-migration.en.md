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

### Test

**Some** migrations can be tested by using the **Test** button. What this button actually does depends on the migration, but as a general rule, it will copy the data from your account to a temporary server and allow you to access it as if the migration had taken place.

E.g.: For a migration to PostgreSQL 12, the *Test* button will copy all of your databases to a server running PostgreSQL 12. This is a clone: your databases continue to be accessible normally via your usual PostgreSQL server. Then you can connect to the temporary server and its address will be shown after clicking on the *Test* button. This will let you test your new applications with the new version of PostgreSQL. In practice, you may have to duplicate your applications or change their configuration to use this temporary server in place of the regular one and check that they continue to work.

## 4. Performing the migration

Once you have tested the migration and you are sure that everything works properly, you can actually execute the migration. During the migration, your account may be unavailable for a very short length of time (a few seconds or minutes, depending on the amount of data in your account). *You do not need to stop your sites or databases: we handle everything*.

{{% notice warning %}}
Once the migration is done, there is no going back.
{{% /notice %}}

- [Specificities related to migration of VPS and dedicated servers]({{< ref "advanced/migrations/vps-and-dedicated-migrations" >}})
