+++
url = "/fr/bases-de-données/"
title = "Bases de données"
pre = "<i class='fas fa-fw fa-database'></i> "
weight = 20
tags = ["base de données"]
+++

Les SGBD (**S**ystèmes de **G**estion de **B**ases de **D**onnées) que nous proposons sont **entièrement infogérés**, sur toutes nos offres : nous nous chargeons de l'installation, la configuration, la maintenance et la sécurisation de vos bases de données. Ainsi, vous vous occupez uniquement des interactions entre vos applications et vos bases de données.

- [MariaDB/MySQL]({{< ref "databases/mariadb" >}})
- [PostgreSQL]({{< ref "databases/postgresql" >}})
- [CouchDB]({{< ref "databases/couchdb" >}})
- [RabbitMQ]({{< ref "databases/rabbitmq" >}})

En plans VPS et dédiés :

- [Elasticsearch]({{< ref "databases/elasticsearch" >}})
- [Memcached]({{< ref "databases/memcached" >}})
- [Redis]({{< ref "databases/redis" >}})


{{% notice info %}}
Pour des raisons de sécurité, la création des bases de données et des utilisateurs bases de données n'est possible que depuis l'interface d'administration ou depuis notre [API]({{< ref "api" >}}). Ce n'est donc pas possible par une application tierce (par exemple phpMyAdmin).
{{% /notice %}}

{{% notice warning %}}
Il est interdit d'héberger **uniquement** des bases de données sur le pack gratuit.
{{% /notice %}}

---

- Ressources API : [base de données](https://api.alwaysdata.com/v1/database/doc/), [utilisateur de base de données](https://api.alwaysdata.com/v1/database/user/doc/)
- [Problèmes fréquents]({{< ref "databases/troubleshooting" >}})
