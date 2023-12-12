+++
title = "Migrations"
weight = 20
chapter = true
tags = ["infrastructure", "migration"]
+++

# Migrations

Migration refers to an operation where a technical characteristic of your account is changed. For example, a migration to a new version of MySQL.

The migrations available appear in the [alwaysdata administration](https://admin.alwaysdata.com) **Advanced > Migrations** menu. New migrations are added regularly and we bring this information to our users by e-mail.

{{< fig "migrations-menu.en.png" "Administration interface: Migrations menu" >}}

Some migrations are optional: you choose whether or not to migrate. Other migrations are mandatory ones: you have a period of time to migrate. Once the deadline is reached, any remaining migrations are done automatically.

- [Perform a migration]({{< ref "advanced/migrations/perform-migration" >}})
- [Private Cloud migrations]({{< ref "advanced/migrations/vps-and-dedicated-migrations" >}})

## Migrations currently offered

Public Cloud :

- [MariaDB 10.11]({{< ref "advanced/migrations/mariadb-10_11" >}})
- [PostgreSQL 14]({{< ref "advanced/migrations/postgresql-14" >}})

Private Cloud:

- [MariaDB 10.5]({{< ref "advanced/migrations/mariadb-10_5" >}})
- [MariaDB 10.6]({{< ref "advanced/migrations/mariadb-10_6" >}})
- [MariaDB 10.11]({{< ref "advanced/migrations/mariadb-10_11" >}})
- [PostgreSQL 13]({{< ref "advanced/migrations/postgresql-13" >}})
- [PostgreSQL 14]({{< ref "advanced/migrations/postgresql-14" >}})

## Former migrations

* [2020 software infrastructure]({{< ref "advanced/migrations/2020-software-architecture" >}})
* [2017 software infrastructure]({{< ref "advanced/migrations/2017-software-architecture" >}})

