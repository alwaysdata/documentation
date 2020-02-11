+++
url = "/fr/avancé/migrations/postgresql-10/"
title = "Migration PostgreSQL 10"
layout = "man"
hidden = true
tags = ["infrastructure", "migration"]
+++
<!-- TODO: Create EN version -->

{{% notice info %}}
Cette migration est disponible pour les serveurs VPS et dédiés. Si vous êtes en serveurs mutualisés , tournez-vous vers la migration [PostgreSQL 12]({{< ref postgresql-12 >}}).
{{% /notice %}}

Cette migration migre vos bases de données vers la version 10 de PostgreSQL (depuis PostgreSQL 9.6) : https://www.postgresql.org/docs/10/static/release.html.

Les changements notables sont :

- les paramètres `escape_string_warning` et `standard_conforming_strings` sont mis à "on" ;
- l'extension [tsearch2](https://www.postgresql.org/docs/9.6/static/tsearch2.html) est obsolète ;
- la mise à jour de PostGIS en version [2.4](https://postgis.net/docs/manual-2.4/).
