+++
title = "PostgreSQL 12 Migration"
layout = "man"
hidden = true
tags = ["infrastructure", "migration"]
+++

This migration upgrades your databases to PostgreSQL version 12 (from PostgreSQL 9.6 or 10): https://www.postgresql.org/docs/12/release-12.html.

The noticeable changes are:

- the `abstime`, `retime`, and `tinterval` types are deprecated;
- the [timetravel](https://www.postgresql.org/docs/10/contrib-spi.html#id-1.11.7.46.6) extension is deprecated;
- WITH OIDS when creating the table to specify an invisible oid column is no longer possible;
- the update of PostGIS to version [2.5](https://postgis.net/docs/manual-2.5/).
