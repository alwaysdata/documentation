+++
title = "PostgreSQL 10 Migration"
layout = "man"
hidden = true
tags = ["infrastructure", "migration"]
+++

{{% notice info %}}
This migration is available for VPS and dedicated servers. If you are on shared plans, turn to [PostgreSQL 12]({{< ref postgresql-12 >}} migration.)
{{% /notice %}}

This migration migrates your databases to PostgreSQL version 10 (since PostgreSQL 9.6): https://www.postgresql.org/docs/10/static/release.html.

The notable changes are :

- the `escape_string_warning` and `standard_conforming_strings` parameters are set to "on";
- the [tsearch2](https://www.postgresql.org/docs/9.6/static/tsearch2.html) extension is deprecated;
- the PostGIS update to version [2.4](https://postgis.net/docs/manual-2.4/).
