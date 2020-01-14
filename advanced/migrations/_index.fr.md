+++
url = "/fr/avancé/migrations/"
title = "Migrations"
weight = 20
chapter = true
tags = ["infrastructure", "migration"]
+++

# Migrations

Une migration est une opération qui consiste à faire évoluer une caractéristique technique de votre compte. Par exemple, une migration vers une nouvelle version de MySQL.

Les migrations disponibles apparaissent dans le menu **Avancé > Migrations** de l'administration alwaysdata. De nouvelles migrations sont ajoutées régulièrement et nous avertissons nos clients par email pour les informer.

Certaines migrations sont facultatives : nous vous laissons le choix de l'effectuer ou non. D'autres migrations sont obligatoires : vous disposez alors d'un certain temps pour les effectuer. Une fois la date limite atteinte, les migrations non effectuées le seront automatiquement.


- [Effectuer une migration]({{< ref "advanced/migrations/perform-migration" >}})
- [Migrations VPS/dédié]({{< ref "advanced/migrations/vps-and-dedicated-migrations" >}})


## Migrations actuellement proposées

- [CouchDB 2.2](http://docs.couchdb.org/en/2.2.0/whatsnew/2.2.html) depuis CouchDB 1.7.
- MariaDB 10.3 depuis [MariaDB 10.1](https://mariadb.com/kb/en/library/upgrading-from-mariadb-101-to-mariadb-102/) ou [MariaDB 10.2](https://mariadb.com/kb/en/library/upgrading-from-mariadb-102-to-mariadb-103/).
- [PostgreSQL 10](https://www.postgresql.org/docs/10/release.html) depuis PostgreSQL 9.6 ; les changements notables sont :
    - les paramètres `escape_string_warning` et `standard_conforming_strings` sont mis à "on" ;
    - l'extension [tsearch2](https://www.postgresql.org/docs/9.6/static/tsearch2.html) est obsolète ;
    - la mise à jour de PostGIS en version [2.4](https://postgis.net/docs/manual-2.4/).
- [PostgreSQL 12](https://www.postgresql.org/docs/12/release-12.html) depuis PostgreSQL 9.6 ou PostgreSQL10 ; les changements notables sont :
    - les types `abstime`, `reltime`, and `tinterval` sont obsolètes ;
    - l'extension [timetravel](https://www.postgresql.org/docs/10/contrib-spi.html#id-1.11.7.46.6) est obsolète ;
    - la mention WITH OIDS à la création de la table pour spécifier une colonne oid invisible n'est plus possible ;
    - la mise à jour de PostGIS en version [2.5](https://postgis.net/docs/manual-2.5/).

## Anciennes migrations

- [Infrastructure logicielle 2017]({{< ref "advanced/migrations/2017-software-architecture" >}}) 
