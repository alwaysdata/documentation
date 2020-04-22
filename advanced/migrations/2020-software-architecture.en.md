+++
title = "Software Architecture 2020"
layout = "man"
weight = 5
tags = ["infrastructure", "migration"]
+++

This migration primarily entails a general update of the available software on our servers. It involves a move of the account to new servers - running with the 2020 architecture. **All** servers (HTTP, SSH, databases, etc) are likely to change.

This document presents the main incompatibilities introduced by this migration. We try to be as comprehensive as possible, but it is quite difficult to be absolutely exhaustive. We urge you to [test the migration]({{< ref "advanced/migrations/2020-software-architecture#testing-the-migration" >}}) to detect as much incompatibilities as possible.

## Apache

Apache _2.2_ is no longer available. Accounts using this version will automatically switch to [Apache _2.4_](https://httpd.apache.org/docs/2.4/).

Global directives added by our customers, either in **Web > Configuration**, or in the configuration of a **Custom Apache** site, will now be inserted **after** the default directives. This now allows our customers to overwrite these default directives.

## Databases

### MySQL

MariaDB is updated to [version 10.4]({{< ref "advanced/migrations/mariadb-10_4" >}}).

### PostgreSQL

PostgreSQL is updated to [version 12]({{< ref "advanced/migrations/postgresql-12" >}}).

### MongoDB

MongoDB is updated to [version 4.2]({{< ref "advanced/migrations/mongodb-4_2" >}}).

### CouchDB

CouchDB is updated to [version 3.0]({{< ref "advanced/migrations/couchdb-3_0" >}}).

## Languages

### PHP

- The following minor versions are removed, and automatically replaced by the latest available minor version: 5.6.37, 5. 6.38, 7.0.31, 7.0.32, 7.1.21, 7.1.23, 7.1.24, 7.1.26, 7.1.32, 7.2.9, 7.2.11, 7.2.12, 7.2.14, 7.2.22, 7.3.0, 7.3.1, 7.3.9, 7.4.0 and 7.4.3.
- The `bcmath`, `calendar`, `exif`, `ftp`, `soap`, `xmlreader`, `xmlrpc` and `zip` extensions are now loaded automatically. You can remove explicit loading directives from your custom _php.ini_ if you want.

### Python

- The following minor versions are removed and automatically replaced by the latest available minor version: 2.7.16, 2.7.15, 3.4.9, 3.5.6, 3.6.8, 3.6.7, 3.7.2, 3.7.1, 3.7.0 and 3.8.0.

### Ruby

- Version 1.9.2-p320 is removed and automatically replaced by version 1.9.3-p551.
- The following minor versions are removed and automatically replaced by the latest available minor version: 2.4.5, 2.4.4, 2.5.5, 2.5.3 and 2.6.0.

### Node.js

- The following minor versions are removed, and automatically replaced by the latest available minor version: 6.17.0, 6.16. 0, 6.14.4, 8.15.1, 8.15.0, 8.12.0, 8.11.4, 9.11.1, 10.15.3, 10.15.1, 10.13.0, 10.12.0, 10.9.0, 11.12.0, 11.8.0, 11.1.0, 11.0.0, 12.0.0 and 12.14.0.

### Elixir

- Version 1.5.3 is removed and automatically replaced by version 1.6.6.
- The following minor version is deleted and automatically replaced by the latest available minor version: 1.7.3.

### Java

Java will soon become a major language, manageable via the administration panel.

- The versions now available are 8.0.41, 11.0.28 and 14.0.36. Versions 7, 9 and 10 are removed.
- The default version becomes _11_. This is the version run when using the `java` binary.
- Until now, to use a particular version of Java, you could fetch the binary from `/usr/lib/jvm`. This is no longer possible: instead, you can enforce a different version by setting the `JAVA_VERSION` environment variable. For example, to run version 8: `JAVA_VERSION=8 java`.

## Miscellaneous

- _TLS 1.0_ and _1.1_ are now **disabled by default**, as these older protocols have security holes. You can re-enable them by going to **Web > Configuration > SSL** and then choosing the **Old** configuration.
- The temporary files directory **(TEMPDIR)** becomes `~/admin/tmp` instead of `/tmp`. PHP sessions, for example, are created in this directory.
- For sites such as Node.js, Elixir, and User Program, the internal IP (defined in the `IP` environment variable) that your application should listen on will change to **IPv6**.
- The `ALWAYSDATA_HTTPD_PORT` and `ALWAYSDATA_HTTPD_IP` environment variables are no longer available, you must use `PORT` and `IP`.
- The `PATH` environment variable now includes the local paths for all languages, e.g. `~/.local/bin`, `~/npm-packages/bin`, etc., even in non-login or non-interactive SSH connections, and in your HTTP applications.

### Miscellaneous Updates

A lot of software and libraries will be updated (our servers are running Debian Buster, formerly Debian Jessie). Among the notable updates :

- Erlang 21.2 (formerly 19.2)
- GDAL 2.4 (formerly 1.10)
- git 2.20 (formerly 2.19)
- Go 1.11 (previously 1.7)
- MapServer 7.4 (previously 7.0)
- Mercurial 4.8 (previously 3.9)
- PROJ 5.2 (previously 4.8)
- HQIS 2.18 (formerly HQIS 2.4)

### VPS/Dedicated Environment

The following services, when installed, will be updated:

- _RabbitMQ_, version 3.7.8.
- _Redis_, version 5.0

Upgrades of _MySQL_ (not MariaDB) and _ElasticSearch_ will be discussed with clients on a case-by-case basis.

Only the versions of the _explicitly used_ languages, either in the **Web > Sites** section or in the **Environment** section, will now be preinstalled on the system. For example, if neither the default version of Python (defined in **Environment > Python**) nor any of your sites (**Web > Sites**) uses Python 2.4.6, then this version will no longer be preinstalled. However, it will be automatically installed if you create a site with this version of Python, or if you change the default version of Python.

## Migration process

When you click on the **Migrate** button the process usually starts immediately, but sometimes a few minutes later depending on the number of clients migrating at the same time. The migration is done in several successive steps, **service by service**. For example, your files will be migrated before your databases.

- The migration of your files, performed as first, will cause a downtime of your websites (which will display an _internal error_), of your scheduled tasks of your remote accesses (SSH, FTP, etc.). However, the downtime is __short__ (a few seconds in general, more if you have tens of thousands of files), because your files are __pre-copied__ beforehand.
- During the databases migration, __connection to databases is cut__. On average, there is 1 minute of downtime per Gb of data. It may be judicious to set up a _static maintenance page_ on your websites to avoid a generic database connection error.

It is possible to know if the migration is complete via the _[Tasks](https://admin.alwaysdata.com/task)_ menu (top right corner of your administration interface).

## Migration test

It is highly recommended that you perform a migration test prior to the actual migration to ensure that your applications will continue to work, and to correct them if they do not. To do so use the **Test** button.

### SSH access

You will be able to connect to your account in SSH on a temporary server. This server is equipped with the 2020 software architecture, but **accesses your original files**, not a copy. Any changes you make will therefore be immediately reflected in your account.

SSH access can be slowed down compared to the usual SSH server. This is a consequence of the test, but this slowness will disappear after the actual migration.

### HTTP access

You can test your sites in several ways:

- by accessing them via the usual URL, to which you will add the suffix `.migration.alwaysdata.net`. For example, if your site is normally accessible at `www.example.com`, you will be able to access it on the testing infrastructure by going to `www.example.com.migration.alwaysdata.net`.

{{% notice warning %}}
the SSL certificate served on `*.migration.alwaysdata.net` may not be valid, you will need to _explicitly_ authorize it through your browser. This only concerns the migration test, not the actual migration, for which the certificates will not change.
{{% /notice %}}

{{% notice warning %}}
Some applications redirect to the nominal URL, which prevents them from being tested using this method.
{{% /notice %}}

- by using a browser extension to force the `Host` header (i.e. the requested site). For example under Chrome, the [Virtual Hosts](https://chrome.google.com/webstore/detail/virtual-hosts/aiehidpclglccialeifedhajckcpedom) extension. You'll need to connect by giving the address of the test HTTP server (for example, `migration-test1.paris1.alwaysdata.com`), but asking for the address of your site.
- by modifying your `hosts` file to force you to use the IP of the test HTTP server to connect to your sites. This can be done by editing the file directly, or by using a browser extension, for example [LiveHosts](https://addons.mozilla.org/en_US/firefox/addon/livehosts/) in Firefox.

Your applications will then be started on a temporary server running under the 2020 software infrastructure, as if the migration had taken place. As with SSH, the files in your account that this server has access to are your original files. Access can also be slowed down, so please disregard this.

{{% notice warning %}}
The internal configuration of your alwaysdata account on this temporary server is generated when you run the test migration. It is not modified afterwards. For example, if you run the test migration when the PHP version defined in your environment is 7.1.26, and then modify this version afterwards, this modification will not be reflected on the temporary migration server. You will need to run a test migration again to take the change into account. The same applies to changes you make in the section **Web > Sites**.
{{% /notice %}}

### Databases

When you run the test migration, all your databases and database users are copied to a temporary server, running the new versions. You will then be able to access your data copied to this server using your usual credentials to run your tests. Unlike the files used by SSH and HTTP servers, you are working on a copy of your data here. Each time you run the test migration, your previous copies are overwritten by new ones.
