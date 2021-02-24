+++
title = "Software Architecture 2020"
layout = "man"
hidden = true
tags = ["infrastructure", "migration"]
+++

This migration primarily entails a general update of the available software on our servers. It involves a move of the account to new servers - running with the 2020 architecture. **All** servers (HTTP, SSH, databases, etc) are likely to change.

## Why should there be migration?

The main purpose of architecture migrations is to update our servers to a newer version of their operating system (Debian). It is important to proceed with these updates for two reasons:

- Security: Older software versions are not supported forever by their authors or maintainers. When such software ceases to be supported, it continues to run, but new vulnerabilities are no longer fixed. Continuing to use these old versions would therefore create a serious safety and reliability risk for your applications and data.

- Be able to use recent software versions: The older an operating system is, the more likely it is to have issues in running recent software. In order to continue to provide you with the latest versions of software that we offer (or that you can install yourself in your account), it is important to be on a fairly recent version of the operating system.

These infrastructure migrations are performed approximately every four years. This is roughly the lifetime of a Debian version ([five years](https://wiki.debian.org/LTS), but you should allow for the incompressible amount of internal development time before switching to the newer version). This seems to be a fair balance, avoiding too frequent migrations, but allowing you to run almost all recent software releases.

---

This document presents the main incompatibilities introduced by this migration. We have tried to be as comprehensive as possible, but it is quite difficult to be absolutely exhaustive.

## Apache

Apache *2.2* will no longer be available. Accounts using this version will automatically switch to [Apache *2.4*](https://httpd.apache.org/docs/2.4/).

Global directives added by our users, either in **Web > Configuration**, or in the configuration of a **Custom Apache** site, will now be inserted **after** the default directives. This now allows our users to overwrite these default directives.

## Databases

### MySQL

MariaDB will be updated to [version 10.4](https://mariadb.com/kb/en/release-notes-mariadb-104-series/).

### PostgreSQL

PostgreSQL will be updated to [version 12](https://www.postgresql.org/docs/12/release-12.html).

### MongoDB

MongoDB will be updated to [version 4.2](https://docs.mongodb.com/manual/release-notes/4.2/).

### CouchDB

CouchDB will be updated to [version 3.0](https://docs.couchdb.org/en/3.0.0/whatsnew/3.0.html).

## Languages

### PHP

| Available versions on [v2020]({{< ref "accounts/version" >}}) | Available version on [v2017]({{< ref "accounts/version" >}}) |
| ------------------------------------------------------------- | ------------------------------------------------------------ |
| `4.4.9`                                                       | `4.4.9`                                                      |
| `5.2.17`                                                      | `5.2.17`                                                     |
| `5.3.29`                                                      | `5.3.29`                                                     |
| `5.4.45`                                                      | `5.4.45`                                                     |
| `5.5.38`                                                      | `5.5.38`                                                     |
| `5.6.40`                                                      | `5.6.38` `5.6.37`                                            |
| `7.0.33`                                                      | `7.0.31` `7.0.32`                                            |
| `7.1.33`                                                      | `7.1.21` `7.1.23` `7.1.24` `7.1.26` `7.1.32`                 |
| `7.2.29` `7.2.31` `7.2.32` `7.2.33` `7.2.34`                  | `7.2.9`  `7.2.11` `7.2.12` `7.2.14` `7.2.22`                 |
| `7.3.16` `7.3.18` `7.3.20` `7.3.22` `7.3.24` `7.3.26`         | `7.3.0`  `7.3.1`  `7.3.9`                                    |
| `7.4.4`  `7.4.6`  `7.4.8`  `7.4.10` `7.4.12` `7.4.14`         | `7.4.0`  `7.4.3`                                             |
| `8.0.0`  `8.0.1`                                              | `-`                                                          |

- Minor removed versions will automatically be replaced by the closest minor version (e.g. 7.4.4 for 7.4).
- The `bcmath`, `calendar`, `exif`, `ftp`, `soap`, `xmlreader`, `xmlrpc` and `zip` extensions are now loaded automatically. You can remove explicit loading directives from your custom *php.ini* if required.

### Python

| Available versions on [v2020]({{< ref "accounts/version" >}}) | Available version on [v2017]({{< ref "accounts/version" >}}) |
| ------------------------------------------------------------- | ------------------------------------------------------------ |
| `2.4.6`                                                       | `2.4.6`                                                      |
| `2.5.6`                                                       | `2.5.6`                                                      |
| `2.6.9`                                                       | `2.6.9`                                                      |
| `2.7.17` `2.7.18`                                             | `2.7.15` `2.7.16` `2.7.18`                                   |
| `3.3.7`                                                       | `3.3.7`                                                      |
| `3.4.10`                                                      | `3.4.9`  `3.4.10`                                            |
| `3.5.9`  `3.5.10`                                             | `3.5.6`  `3.5.9`                                             |
| `3.6.10` `3.6.11` `3.6.12`                                    | `3.6.7`  `3.6.8`  `3.6.10`                                   |
| `3.7.7`  `3.7.8`  `3.7.9`                                     | `3.7.0`  `3.7.1`  `3.7.2`  `3.7.7`                           |
| `3.8.2`  `3.8.3`  `3.8.4` `3.8.5` `3.8.6` `3.8.7`             | `3.8.0`  `3.8.3`                                             |
| `3.9.0`  `3.9.1`                                              | `-`                                                          |

- Minor removed versions will automatically be replaced by the closest minor version (e.g. 3.8.2 for 3.8). If you created any `virtualenvs` with these versions, you will need to recreate them.

When changing the minor, rather than recreating the virtual environment, you can use the following command:

```
python -m venv --upgrade [myenv]/
```

### Ruby

| Available versions on [v2020]({{< ref "accounts/version" >}}) | Available version on [v2017]({{< ref "accounts/version" >}}) |
| ------------------------------------------------------------- | ------------------------------------------------------------ |
| `1.8.7-p374`                                                  | `1.8.7-p374`                                                 |
| `1.9.3-p551`                                                  | `1.9.2-p3201` `1.9.3-p551`                                   |
| `2.0.0-p648`                                                  | `2.0.0-p648`                                                 |
| `2.1.10`                                                      | `2.1.10`                                                     |
| `2.2.10`                                                      | `2.2.10`                                                     |
| `2.3.8`                                                       | `2.3.8`                                                      |
| `2.4.9` `2.4.10`                                              | `2.4.5`                                                      |
| `2.5.7` `2.5.8`                                               | `2.5.3`      `2.5.5`                                         |
| `2.6.5` `2.6.6`                                               | `2.6.0`      `2.6.2`                                         |
| `2.7.0` `2.7.1` `2.7.2`                                       | `-`                                                          |
| `3.0.0`                                                       | `-`                                                          |

- Minor removed versions will automatically be replaced by the closest minor version (e.g. 2.6.5 for 2.6).

### Node.js

| Available versions on [v2020]({{< ref "accounts/version" >}}) | Available version on [v2017]({{< ref "accounts/version" >}}) |
| ------------------------------------------------------------- | ------------------------------------------------------------ |
| `6.17.1`                                                      | `6.14.4` `6.16.0`  `6.17.0`                                  |
| `8.17.0`                                                      | `8.11.4` `8.12.0`  `8.15.0`  `8.15.0`                        |
| `9.11.2`                                                      | `9.11.1`                                                     |
| `10.19.0` `10.20.1` `10.23.1`                                 | `10.9.0` `10.12.0` `10.13.0` `10.15.1` `10.15.3`             |
| `11.15.0`                                                     | `11.0.0` `11.1.0`  `11.8.0`  `11.12.0`                       |
| `12.16.1` `12.16.3` `12.20.1`                                 | `12.0.0` `12.14.0`                                           |
| `13.11.0` `13.14.0`                                           | `-`                                                          |
| `14.2.0`  `14.5.0` `14.11.0` `14.15.1` `14.15.4               | `-`                                                          |
| `15.0.0`  `15.2.1` `15.6.0`                                   | `-`                                                          |

- Minor removed versions will automatically be replaced by the closest minor version (e.g. 12.16.1 for 12).
`
### Elixir

| Available versions on [v2020]({{< ref "accounts/version" >}}) | Available version on [v2017]({{< ref "accounts/version" >}}) |
| ------------------------------------------------------------- | ------------------------------------------------------------ |
| `1.11.1` `1.11.2` `1.11.3`                                    | `-`                                                          |
| `1.10.2` `1.10.3` `1.10.4`                                    | `-`                                                          |
| `1.9.4`                                                       | `-`                                                          |
| `1.8.2`                                                       | `-`                                                          |
| `1.7.4`                                                       | `1.7.3` `1.7.4`                                              |
| `1.6.6`                                                       | `1.5.3` `1.6.6`                                              |

- Minor removed versions will automatically be replaced the closest minor version.

### Java

Java will soon become a major language, manageable via the administration panel.

- The versions now available are 8.0.41, 11.0.28 and 14.0.36. Versions 7, 9 and 10 will be removed.

- The default version is now *11*. This is the version run when using the `java` binary.

- Until now, to use a particular version of Java, you could fetch the binary from `/usr/lib/jvm`. This is no longer possible: instead, you can enforce a different version by setting the `JAVA_VERSION` environment variable. For example, to run version 8: `JAVA_VERSION=8 java`.

## Miscellaneous

- *TLS 1.0* and *1.1* are now **disabled by default** for HTTP Protocol, as these older protocols have security holes. You can re-enable them by going to **Web > Configuration > SSL** and then choosing the **Old** configuration.

- The temporary files directory **(TEMPDIR)** is now `~/admin/tmp` instead of `/tmp`. PHP sessions, for example, are created in this directory.

- For sites such as Node.js, Elixir, and User Program, the internal IP (defined in the `IP` environment variable) that your application should listen on will change to **IPv6**. The new IP will be given in the helptext of the website command.

- The `ALWAYSDATA_HTTPD_PORT` and `ALWAYSDATA_HTTPD_IP` environment variables are no longer available, you must use `PORT` and `IP`.

- The `PATH` environment variable now includes the local paths for all languages, e.g. `~/.local/bin`, `~/npm-packages/bin`, etc., even in non-login or non-interactive SSH connections, and in your HTTP applications.

- The own user of your `$HOME` directory (e.g. `/home/foobar`, if your account is *foobar*), previously set to your username (e.g. `foobar`), now becomes `root`. The owner group will still match your username (here, `foobar`), so it won't change anything in practice. Your home directory permissions will therefore be reset to 0770.

- Language binaries are now installed on-demand. In case your would need, for instance, `/usr/alwaysdata/python/2.7.18/lib/libpython2.7.so`, make sure you have launched `python` in version 2.7.18 at least once.

### Miscellaneous Updates

A lot of software and libraries will be updated (our servers are running Debian Buster, formerly Debian Jessie). Among the notable updates :

- Erlang 21.2 (previously 19.2)
- GDAL 2.4 (previously 1.10)
- git 2.20 (previously 2.19)
- Go 1.11 (previously 1.7)
- MapServer 7.4 (previously 7.0)
- Mercurial 4.8 (previously 3.9)
- PROJ 5.2 (previously 4.8)
- QGIS 3.4 (previously QGIS 2.4)

### VPS/Dedicated Environment

The following services, when installed, will be updated:

- *RabbitMQ*, version 3.7.8.
- *Redis*, version 5.0

Upgrades of *MySQL* (not MariaDB) and *ElasticSearch* will be discussed with users on a case-by-case basis.

Only the language versions *explicitly used*, either in the **Web > Sites** section or in the **Environment** section, will now be preinstalled on the system. For example, if neither the default version of Python (defined in **Environment > Python**) nor any of your sites (**Web > Sites**) uses Python 2.4.6, then this version will no longer be preinstalled. However, it will be automatically installed if you create a site with this version of Python, or if you change the default version of Python.

## Migration preparation

A number of actions can be performed on the [2017]({{< ref "accounts/version" >}}) architecture:

- switch to *Apache 2.4* in the **Web > Configuration > Apache** menu,

- change the [TLS configuration]({{<ref "security/ssl-tls/configure-tls">}}) to *Intermediate* in the **Web > Configuration > SSL** menu,

- replace `ALWAYSDATA_HTTPD_PORT` and `ALWAYSDATA_HTTPD_IP` environment variables in your applications with `PORT` and `IP`,

- change the language versions to the *last minor*. This is done in the **Environment** menu and/or at the sites level in **Web > Sites**. You can, for example, switch to PHP 7.3.9 to replace PHP 7.3.0.

We encourage you to make these changes in production, before you migrate.

### Databases

In parallel to the Buster migration, we provide database migrations. You can [test]({{<ref "advanced/migrations/perform-migration">}}) them via the **Test** button. All your databases and database users are copied to a temporary server, running the new versions.

Users on shared servers can perform these tests in parallel to the Buster migration. The Buster migration will close the other migrations.

For users of VPS and dedicated servers, the database migration test is associated to the Buster migration. The **Test** button will only **copy** the databases to the test server. Regarding HTTP deployment refer to the [Migration preparation]({{< ref "advanced/migrations/2020-software-architecture#migration-preparation" >}}) section.

## Migration process

When you click on the **Migrate** button the process usually starts immediately, but there may be a delay of several minutes depending on the number of users migrating at the same time. The migration is done in several successive steps, **service by service**. For example, your files will be migrated before your databases.

- The migration of your files, performed first, will cause a downtime of your websites (which will display an *internal error*), your scheduled tasks, or your remote accesses (SSH, FTP, etc.). However, the downtime will be **short** (a few seconds in general, more if you have tens of thousands of files), as these files are **pre-copied** beforehand.

- During database migration, **connection to databases is interrupted**. On average, there will be a minute of downtime per Gb of data. It may be judicious to set up a *static maintenance page* on your websites to avoid a generic database connection error.

You can check if the migration is complete via the [*Tasks*](https://admin.alwaysdata.com/task) menu (top right corner of your administration interface).

## Tips & common issues

- Accounts are relocated during the migration. There may be a DNS propagation delay and it is necessary to update its `known_hosts` file for the SSH connection. You can do this via the command (*[account] to be replaced by the account name*):

```sh
$ ssh-keygen -R ssh-[account].alwaysdata.net
```

- Drupal
    - [CSS and JS files precompression]({{< ref "marketplace/drupal#cssjs-files-precompression" >}}) in versions prior to **8.9**.

- Segmentation fault issues with [psycopg2](https://github.com/psycopg/psycopg2/issues/543).
