+++
title = "Software Architecture 2020"
layout = "man"
weight = 5
tags = ["infrastructure", "migration"]
+++

This migration main objective is to upgrade all of the ready installed software. It requires to move the account to new servers - running on the 2020 architecture. ALL servers (HTTP, SSH, FTP, databases, etc.) are subject to change.

This document describes the main incompatibilities introduced by this migration. We attempt to be as complete as possible, but it is impossible to be completely exhaustive. We strongly advise you to run a migration test to detect as many incompatibilities as possible.

## Apache

Apache 2.2 isn't available anymore. Accounts using this version will automatically switch to [Apache 2.4](https://httpd.apache.org/docs/2.4/en/).

Global directives added by our customers, either in **Web > Configuration** or in the configuation of a **Apache custom** type website, will now be placed **after** the default directives. This allows to override these default directives.

## Databases

### MySQL

MariaDB is upgraded to [version 10.4]({{< ref "advanced/migrations/mariadb-10_4" >}}).

### PostgreSQL

PostgreSQL is upgrade to [version 12]({{< ref "advanced/migrations/postgresql-12" >}}).

### MongoDB

MongoDB is upgraded to [version 4.2]({{< ref "advanced/migrations/mongodb-4_2" >}}).

### CouchDB

CouchDB is upgraded to [version 3.0]({{< ref "advanced/migrations/couchdb-3_0" >}}).

## Languages

### PHP

- Following minor versions are removed, and automatically replaced by the last available minor version: 5.6.37, 5.6.38, 7.0.31, 7.0.32, 7.1.21, 7.1.23, 7.1.24, 7.1.26, 7.1.32, 7.2.9, 7.2.11, 7.2.12, 7.2.14, 7.2.22, 7.3.0, 7.3.1, 7.3.9, 7.4.0 and 7.4.3.
- `bcmath`, `calendar`, `exif`, `ftp`, `soap`, `xmlreader`, `xmlrpc` and `zip` extensions are now automatically loaded. You can remove the explicit loading directives from your _custom php.ini_ if you want.

### Python

- Following minor versions are removed, and automatically replaced by the last available minor version: 2.7.16, 2.7.15, 3.4.9, 3.5.6, 3.6.8, 3.6.7, 3.7.2, 3.7.1, 3.7.0 et 3.8.0.

### Ruby

- The 1.9.2-p320 version is removed and automatically replaced by the 1.9.3-p551 version.
- Following minor versions are deleted, and automatically replaced by the last available minor version: 2.4.5, 2.4.4, 2.5.5, 2.5.3 et 2.6.0.

### Node.js®

- Following minor versions are removed, and automatically replaced by the last available minor version: 6.17.0, 6.16.0, 6.14.4, 8.15.1, 8.15.0, 8.12.0, 8.11.4, 9.11.1, 10.15.3, 10.15.1, 10.13.0, 10.12.0, 10.9.0, 11.12.0, 11.8.0, 11.1.0, 11.0.0, 12.0.0 et 12.14.0.

### Elixir

- The 1.5.3 version is removed and automatically replaced by the 1.6.6 version.
- Following minor version is removed, and automatically replaced by the last available minor version: 1.7.3.

### Java

Java will soon become a major language, manageable via the administration interface.

- Versions now available are 8.0.41, 11.0.28 and 14.0.36. Versions 7, 9 and 10 are removed.
- The default version becomes the _11_. This is the version executed when you use the `java` binary.
- Until now to use a particular version of Java, you could fetch the binary from `/usr/lib/jvm`. This is no longer possible: now you can force a different version by setting the `JAVA_VERSION` environment variable. For example, to run version 8: `JAVA_VERSION=8 java`.

## Miscellaneous

- _TLS 1.0_ and _1.1_ are now **disabled by default**, as these old protocols have security vulnerabilities. You can reactived them via **Web > Configuration > SSL** by choosing the **Old** configuration.
- The temporary files directory **(TEMPDIR)** becomes `~/admin/tmp` instead of `/tmp`. PHP sessions, for example, are created in this directory.
- For websites using Node.js, Elixir an User programm types the internal IP (defined in the `IP` environment variable) that your application needs to listen on will change to **IPv6**.
- The `PATH` environment variable will now always contain the local paths of different languages, e.g. `~/.local/bin`, `~/npm-packages/bin`, etc., including in non-login or non-interactive SSH connections, and in your HTTP applications.

### Mises à jour diverses

A very large number of applications and libraries have also be updated (our servers are updated to Debian Buster, previously Debian Jessie). Among the most notable ones:

- Erlang 21.2 (previously 19.2)
- GDAL 2.4 (previously 1.10)
- git 2.20 (previously 2.19)
- Go 1.11 (previously 1.7)
- MapServer 7.4 (previously 7.0)
- Mercurial 4.8 (previously 3.9)
- PROJ 5.2 (previously 4.8)
- QGIS 2.18 (previously QGIS 2.4)

### Environnement VPS/dédié

The following services, installed on request, will be updated:

- _RabbitMQ_, to version 3.7.8
- _Redis_, to version 5.0

_MySQL_ (not MariaDB) and _ElasticSearch_ upgrades will be discussed with customers on a case-by-case basis.

Only the _explicitely used versions_ of the languages, in the **Web > Sites** or **Environment** sections, will now be preinstalled on the system. For exemple, if neither the Python default version (defined in **Environment > Python**), neither any of your websites (**Web > Sites**) use Python 2.4.6, then this version won't be preinstalled anymore. It will be automatically installed if you create a website with this version of Python or you change the Python default version.

## Migration test

We very strongly recommend performing a migration test prior to actual migration to ensure that your applications will continue to work and to correct them if not.

### SSH access

You can connect yourself to your SSH account on a temporary server. This server is equipped with the 2020 software architecture, but **it accesses your real file**, not a copy of them. Any change that you make will therefore immediately impact your account.

SSH may be slowed in relation to the usual SSH server. This is a consequence of the test, but this slowness will end after the actual migration.

### HTTP access

You can test your sites in a number of ways:

- by accessing it via the usual URL to which you should add the suffix `.migration.alwaysdata.net`. For example, if your website is normally accessible at `www.example.com`, then you can access it on the test infrastructure by going to `www.example.com.migration.alwaysdata.net`.

{{% notice warning %}}
The SSL certificate sent to the `*.migration.alwaysdata.net` address will not be valid so you will need to explicitly permit it via your browser. This only relates to the migration test, not the actual migration for which the certificates will not change.
{{% /notice %}}

{{% notice warning %}}
Some applications perform a redirect to the nominal URL, meaning that it is not possible to test them using this method.
{{% /notice %}}

- using a browser extension to force the `Host` header (and therefore the requested site). For example, in Chrome, the [Virtual Hosts](https://chrome.google.com/webstore/detail/virtual-hosts/aiehidpclglccialeifedhajckcpedom) extension. You need to connect using the HTTP test server address (e.g. `migration-test1.paris1.alwaysdata.com`), but requesting the address of your website.
- by changing your `hosts` file to force it to use the IP address of the HTTP test server to connect to your websites. This can be done by directly editing the relevant file or through a browser extension, e.g. [LiveHosts](https://addons.mozilla.org/en_US/firefox/addon/livehosts/) in Firefox.

Then your applications will be started on a temporary server running on the 2020 software infrastructure as if the migration had taken place. Just like in SSH, the files in your account that this server has access to are your actual files. Accesses may also be slowed, but ignore this.

{{% notice warning %}}
The internal configuration of your alwaysdata account on this temporary server is generated when you run the test migration. It is not changed later on. For example, if you run the test migration when the PHP version defined in your environment is 7.1.26, then you go on to change this version level, this change will not be passed on to the temporary migration server. You will therefore need to run a test migration for the change to take effect. The same applies to the changes that you can make from the **Web > Sites** section.
{{% /notice %}}

### Databases

When you run the test migration, all of your databases and database users are copied to a temporary server that runs the new versions. You can then access the data copied to this server using your usual identification data to perform your tests. Unlike the files used by the SSH and HTTP servers, here you are therefore working on a copy of your data. Every time the test migration is run, previous copies are overwritten with the new ones.
