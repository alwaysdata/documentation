+++
url = "/fr/plateforme/bases-de-donnees/"
title = "Bases de données"
weight = 30
+++

## Généralités

Les SGBD (**S**ystèmes de **G**estion de **B**ases de **D**onnées) que nous proposons sont **entièrement infogérés**, sur toutes nos offres : nous nous chargeons de l'installation, la configuration, la maintenance et la sécurisation de vos bases de données. Ainsi, vous vous occupez uniquement des interactions entre vos applications et vos bases de données.

Certains systèmes, comme par exemple *Elasticsearch*, ne sont accessibles qu'en environnement dédié.

{{% notice info %}}
Pour des raisons de sécurité, la création des bases de données n'est possible que depuis l'interface d'administration ou depuis notre [API]({{< ref "platform/api" >}}). Ce n'est donc pas possible par une application tiers (par exemple PhpMyAdmin).
{{% /notice %}}

{{% notice warning %}}
Il est interdit d'héberger **uniquement** des bases de données sur le pack gratuit.
{{% /notice %}}

## Les SGBD supportés

* [MariaDB/MySQL]({{< ref "platform/databases/mariadb" >}})
* [PostgreSQL]({{< ref "platform/databases/postgresql" >}})
* [MongoDB]({{< ref "platform/databases/mongodb" >}})
* [CouchDB]({{< ref "platform/databases/couchdb" >}})
* Elasticsearch