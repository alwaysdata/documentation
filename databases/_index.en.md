+++
title = "Databases"
pre = "<i class='fas fa-fw fa-database'></i> "
weight = 20
tags = ["databases"]
+++

The DBMS (**D**ata**B**ase **M**anagement **S**ystems) that we offer are **entirely hosted** in all of our offers: we install, configure, maintain and secure your databases. This way you only need to handle the interactions between your applications and your databases.

- [MariaDB/MySQL]({{< ref "databases/mariadb" >}})
- [PostgreSQL]({{< ref "databases/postgresql" >}})
- [MongoDB]({{< ref "databases/mongodb" >}})
- [CouchDB]({{< ref "databases/couchdb" >}})
- [RabbitMQ]({{< ref "databases/rabbitmq" >}})

In VPS and dedicated plans:

- [Elasticsearch]({{< ref "databases/elasticsearch" >}})
- [Memcached]({{< ref "databases/memcached" >}})
- [Redis]({{< ref "databases/redis" >}})

{{% notice info %}}
For security reasons, it is only possible to create databases from the administration interface or from our [API]({{< ref "api" >}}). Therefore this is not possible using a third party application (e.g. phpMyAdmin).
{{% /notice %}}

{{% notice warning %}}
Hosting **only** databases in a free pack is not allowed.
{{% /notice %}}

The maximum number of simultaneous connections per user is *50*. On request, it is possible to change this for VPS and dedicated servers.

---

- API resources: [database](https://api.alwaysdata.com/v1/database/doc/), [database user](https://api.alwaysdata.com/v1/database/user/doc/)
- [Frequent issues]({{< ref "databases/troubleshooting" >}})
