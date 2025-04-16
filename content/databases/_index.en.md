+++
title = "Databases"
pre = "<i class='fas fa-fw fa-database'></i> "
weight = 20
tags = ["databases"]
+++

The DBMS (**D**ata**B**ase **M**anagement **S**ystems) that we offer are **entirely hosted** in all of our offers: we install, configure, maintain and secure your databases. This way you only need to handle the interactions between your applications and your databases.

- [MariaDB/MySQL](databases/mariadb)
- [PostgreSQL](databases/postgresql)
- [RabbitMQ](databases/rabbitmq)

On Private Cloud plans:

- [ElasticSearch](databases/elasticsearch)
- [Memcached](databases/memcached)
- [Redis](databases/redis)

{{% notice info %}}
For security reasons, it is only possible to create databases and database users from the administration interface or from our [API](api). Therefore this is not possible using a third party application (e.g. phpMyAdmin).
{{% /notice %}}

{{% notice warning %}}
Hosting **only** databases in a free pack is not allowed.
{{% /notice %}}

---

- API resources: [database](https://api.alwaysdata.com/v1/database/doc/), [database user](https://api.alwaysdata.com/v1/database/user/doc/)
- [Duplicate a database](databases/duplicate-database)
