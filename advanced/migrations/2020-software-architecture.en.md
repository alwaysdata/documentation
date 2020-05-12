+++
title = "Software Architecture 2020"
layout = "man"
weight = 5
tags = ["infrastructure", "migration"]
+++

This migration primarily entails a general update of the available software on our servers. It involves a move of the account to new servers - running with the 2020 architecture. **All** servers (HTTP, SSH, databases, etc) are likely to change.

This document presents the main incompatibilities introduced by this migration. We have tried to be as comprehensive as possible, but it is quite difficult to be absolutely exhaustive.

## Apache

Apache *2.2* will no longer be available. Accounts using this version will automatically switch to [Apache *2.4*](https://httpd.apache.org/docs/2.4/).

Global directives added by our customers, either in **Web > Configuration**, or in the configuration of a **Custom Apache** site, will now be inserted **after** the default directives. This now allows our customers to overwrite these default directives.

## Databases

### MySQL

MariaDB will be updated to [version 10.4]({{< ref "advanced/migrations/mariadb-10_4" >}}).

### PostgreSQL

PostgreSQL will be updated to [version 12]({{< ref "advanced/migrations/postgresql-12" >}}).

### MongoDB

MongoDB will be updated to [version 4.2]({{< ref "advanced/migrations/mongodb-4_2" >}}).

### CouchDB

CouchDB will be updated to [version 3.0]({{< ref "advanced/migrations/couchdb-3_0" >}}).

## Languages

### PHP

- The following minor versions will be removed, and automatically replaced by the latest available minor version

  | 5.6.40 | 7.0.33 | 7.1.33 | 7.2.29 | 7.3.16 | 7.4.4 |
  | ------ | ------ | ------ | ------ | ------ | ----- |
  | 5.6.37 | 7.0.31 | 7.1.21 | 7.2.9  | 7.3.0  | 7.4.0 |
  | 5.6.38 | 7.0.32 | 7.1.23 | 7.2.11 | 7.3.1  | 7.4.3 |
  |        |        | 7.1.24 | 7.2.12 | 7.3.9  |       |
  |        |        | 7.1.26 | 7.2.14 |        |       |
  |        |        | 7.1.32 | 7.2.22 |        |       |

- The `bcmath`, `calendar`, `exif`, `ftp`, `soap`, `xmlreader`, `xmlrpc` and `zip` extensions are now loaded automatically. You can remove explicit loading directives from your custom *php.ini* if required.

### Python

- The following minor versions will be removed and automatically replaced by the latest available minor version

  | 2.7.17 | 3.4.10 | 3.5.9 | 3.6.10 | 3.7.7 | 3.8.2 |
  | ------ | ------ | ----- | ------ | ----- | ----- |
  | 2.7.15 | 3.4.9  | 3.5.6 | 3.6.7  | 3.7.0 | 3.8.0 |
  | 2.7.16 |        |       | 3.6.8  | 3.7.1 |       |
  |        |        |       |        | 3.7.2 |       |

  If you created any virtualenvs with these versions, you will need to recreate them.

### Ruby

- Version 1.9.2-p320 will be removed and automatically replaced by version 1.9.3-p551.

- The following minor versions will be removed and automatically replaced by the latest available minor version

  | 2.4.9 | 2.5.7 | 2.6.5 |
  | ----- | ----- | ----- |
  | 2.4.4 | 2.5.3 | 2.6.0 |
  | 2.4.5 | 2.5.5 |       |

### Node.js

- The following minor versions will be removed, and automatically replaced by the latest available minor version

  | 6.17.1 | 8.17.0 | 9.11.2 | 10.19.0 | 11.15.0 | 12.16.1 |
  | ------ | ------ | ------ | ------- | ------- | ------- |
  | 6.14.4 | 8.11.4 | 9.11.1 | 10.9.0  | 11.0.0  | 12.0.0  |
  | 6.16.0 | 8.12.0 |        | 10.12.0 | 11.1.0  | 12.14.0 |
  | 6.17.0 | 8.15.0 |        | 10.13.0 | 11.8.0  |         |
  |        | 8.15.0 |        | 10.15.1 | 11.12.0 |         |
  |        |        |        | 10.15.3 |         |         |

### Elixir

- Version 1.5.3 will be removed and automatically replaced by version 1.6.6.
- The following minor version has been deleted and automatically replaced by the latest available minor version: 1.7.3.

### Java

Java will soon become a major language, manageable via the administration panel.

- The versions now available are 8.0.41, 11.0.28 and 14.0.36. Versions 7, 9 and 10 will be removed.
- The default version is now *11*. This is the version run when using the `java` binary.
- Until now, to use a particular version of Java, you could fetch the binary from `/usr/lib/jvm`. This is no longer possible: instead, you can enforce a different version by setting the `JAVA_VERSION` environment variable. For example, to run version 8: `JAVA_VERSION=8 java`.

## Miscellaneous

- *TLS 1.0* and *1.1* are now **disabled by default** for HTTP Protocol, as these older protocols have security holes. You can re-enable them by going to **Web > Configuration > SSL** and then choosing the **Old** configuration.
- The temporary files directory **(TEMPDIR)** is now `~/admin/tmp` instead of `/tmp`. PHP sessions, for example, are created in this directory.
- For sites such as Node.js, Elixir, and User Program, the internal IP (defined in the `IP` environment variable) that your application should listen on will change to **IPv6**.
- The `ALWAYSDATA_HTTPD_PORT` and `ALWAYSDATA_HTTPD_IP` environment variables are no longer available, you must use `PORT` and `IP`.
- The `PATH` environment variable now includes the local paths for all languages, e.g. `~/.local/bin`, `~/npm-packages/bin`, etc., even in non-login or non-interactive SSH connections, and in your HTTP applications.
- The own user of your `$HOME` directory (e.g. `/home/foobar`, if your account is *foobar*), previously set to your username (e.g. `foobar`), now becomes `root`. The owner group will still match your username (here, `foobar`), so it won't change anything in practice.

### Miscellaneous Updates

A lot of software and libraries will be updated (our servers are running Debian Buster, formerly Debian Jessie). Among the notable updates :

- Erlang 21.2 (previously 19.2)
- GDAL 2.4 (previously 1.10)
- git 2.20 (previously 2.19)
- Go 1.11 (previously 1.7)
- MapServer 7.4 (previously 7.0)
- Mercurial 4.8 (previously 3.9)
- PROJ 5.2 (previously 4.8)
- HQIS 2.18 (previously HQIS 2.4)

### VPS/Dedicated Environment

The following services, when installed, will be updated:

- *RabbitMQ*, version 3.7.8.
- *Redis*, version 5.0

Upgrades of *MySQL* (not MariaDB) and *ElasticSearch* will be discussed with clients on a case-by-case basis.

Only the language versions *explicitly used*, either in the **Web > Sites** section or in the **Environment** section, will now be preinstalled on the system. For example, if neither the default version of Python (defined in **Environment > Python**) nor any of your sites (**Web > Sites**) uses Python 2.4.6, then this version will no longer be preinstalled. However, it will be automatically installed if you create a site with this version of Python, or if you change the default version of Python.

## Migration preparation

A number of actions can be performed on the [2017]({{< ref "accounts/version" >}}) architecture:

- switch to *Apache 2.4* in the **Web > Configuration > Apache** menu,
- change the [TLS configuration]({{<ref "security/ssl-tls/configure-tls">}}) to *Intermediate* in the **Web > Configuration > SSL** menu,
- replace `ALWAYSDATA_HTTPD_PORT` and `ALWAYSDATA_HTTPD_IP` environment variables in your applications with `PORT` and `IP`,
- change the language versions to the *last minor*. This is done in the **Environment** menu and/or at the sites level in **Web > Sites**. You can, for example, switch to PHP 7.3.9 to replace PHP 7.3.0.

We encourage you to make these changes before you migrate.

### Databases

In parallel to the Buster migration, we provide database migrations. You can [test]({{<ref "advanced/migrations/perform-migration">}}#3-testing-the-migration) them via the **Test** button. All your databases and database users are copied to a temporary server, running the new versions.

## Migration process

When you click on the **Migrate** button the process usually starts immediately, but there may be a delay of several minutes depending on the number of clients migrating at the same time. The migration is done in several successive steps, **service by service**. For example, your files will be migrated before your databases.

- The migration of your files, performed first, will cause a downtime of your websites (which will display an *internal error*), your scheduled tasks, or your remote accesses (SSH, FTP, etc.). However, the downtime will be **short** (a few seconds in general, more if you have tens of thousands of files), as these files are **pre-copied** beforehand.
- During database migration, **connection to databases is interrupted**. On average, there will be a minute of downtime per Gb of data. It may be judicious to set up a *static maintenance page* on your websites to avoid a generic database connection error.

You can check if the migration is complete via the [*Tasks*](https://admin.alwaysdata.com/task) menu (top right corner of your administration interface).
