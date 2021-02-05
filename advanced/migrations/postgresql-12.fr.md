+++
url = "/fr/avancé/migrations/postgresql-12/"
title = "Migration PostgreSQL 12"
layout = "man"
hidden = true
tags = ["infrastructure", "migration"]
+++

Cette migration met à jour vos bases de données vers la version 12 de PostgreSQL (depuis PostgreSQL 9.6 ou 10) : https://www.postgresql.org/docs/12/release-12.html.

Les changements notables sont :

- les types `abstime`, `reltime`, and `tinterval` sont obsolètes ;
- l'extension [timetravel](https://www.postgresql.org/docs/10/contrib-spi.html#id-1.11.7.46.6) est obsolète ;
- la mention WITH OIDS à la création de la table pour spécifier une colonne oid invisible n'est plus possible ;
- la mise à jour de PostGIS en version [2.5](https://postgis.net/docs/manual-2.5/).
