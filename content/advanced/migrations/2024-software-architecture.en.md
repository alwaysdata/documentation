+++
title = "2024 Software Architecture"
layout = "man"
hidden = true
tags = ["infrastructure", "migration"]
+++

## Major Changes

* SSL is now required for mail protocols (IMAP, SMTP, POP3) and remote access (FTP, WebDAV) protocols
* MongoDB and CouchDB databases are removed
* MariaDB has been upgraded to version 10.11
* PostgreSQL has been upgraded to version 16

## SSL Encryption Required for Mail and Remote Access

SSL encryption is now mandatory for connecting to the following protocols:

* Mail: IMAP, SMTP, POP3
* Remote access: FTP and WebDAV

This does not apply to your websites, which are still accessible without encryption (although you can choose to [force encryption](security/ssl-tls/redirect-http-to-https/)).

### Supported TLS Versions

* TLS 1.2 and 1.3 are supported.
* TLS 1.0 and 1.1 are no longer supported.

This does not affect your websites, where you can still [configure TLS yourself](security/ssl-tls/configure-tls/).

## End of MongoDB Support

**MongoDB** has switched to the [SSPL license](https://www.mongodb.com/licensing/server-side-public-license/faq), which legally prevents us from continuing to offer MongoDB database hosting. Consequently, MongoDB databases will be removed during the migration, and no new ones can be created.

You can:

* run MongoDB yourself [in a service](guides/mongodb). *MongoDB will no longer be managed by alwaysdata.* If you're a private cloud customer, we can help you do this.
* migrate your databases to [MongoDB Atlas](https://www.mongodb.com/atlas).

## End of CouchDB Support

We introduced support for **CouchDB** [in 2011](https://blog.alwaysdata.com/2011/05/12/official-support-of-couchdb/), but its use has remained limited (less than 0.4% of our clients in 2024). Therefore, we are ending support for CouchDB: databases will be removed during the migration, and no new ones can be created.

You can:

* run CouchDB yourself [in a service](guides/couchdb). *CouchDB will no longer be managed by alwaysdata.* If you're a private cloud customer, we can help you do this.
* migrate your databases to third-party hosting service such as [Cloudant](https://www.ibm.com/products/cloudant).


## MariaDB Upgrade

**MariaDB** has been upgraded to [version 10.11](https://mariadb.com/kb/en/release-notes-mariadb-1011-series/).

You can check the release notes (your current version is displayed under *Databases > MySQL*):

* From [10.6 to 10.11](https://mariadb.com/kb/en/upgrading-from-mariadb-10-6-to-mariadb-10-11/)
* From [10.5 to 10.6](https://mariadb.com/docs/server/server-management/install-and-upgrade-mariadb/upgrading/upgrading-from-to-specific-versions/upgrading-from-mariadb-10-5-to-mariadb-10-6)
* From [10.4 to 10.5](https://mariadb.com/docs/server/server-management/install-and-upgrade-mariadb/upgrading/upgrading-from-to-specific-versions/upgrading-from-mariadb-10-4-to-mariadb-10-5)

## PostgreSQL Upgrade

**PostgreSQL** has been upgraded to [version 16](https://www.postgresql.org/docs/16/release-16.html). You can view the [release notes](https://www.postgresql.org/docs/release/) (your current version is displayed under *Databases > PostgreSQL*).

**PostGIS** has been upgraded to [version 3.4](https://postgis.net/docs/manual-3.4/) (previously 3.1).

## Language Versions

### Switch to Major Versions

[A few months ago](https://changelog.alwaysdata.com/409/detail/), we introduced the possibility to select a major version of a language instead of a specific minor version. This automatically uses the latest available minor version, including the latest fixes.

The migration will automatically replace all selected versions with the corresponding major version. For example, PHP 8.3.1 will be replaced by PHP 8.3, which runs the latest available 8.3.x version. When new versions of PHP 8.3 are added, they will replace the previous version.

You will still have the option, after the migration, to select a specific minor version, which will then run without automatic updates.

### Available Versions

Here is the list of available minor versions:

| Language   | Available Versions                                                                                                                                                              |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PHP        | `4.4.9` `5.2.17` `5.3.29` `5.4.45` `5.5.38` `5.6.40` `7.0.33` `7.1.33` `7.2.34` `7.3.33` `7.4.33` `8.0.30` `8.1.28` `8.2.19` `8.3.7`                                                |
| Python     | `2.4.6` `2.5.6` `2.6.9` `2.7.18` `3.3.7` `3.4.10` `3.5.10` `3.6.15` `3.7.17` `3.8.19` `3.9.19` `3.10.14` `3.11.9` `3.12.3`                                                          |
| Ruby       | `1.8.7-p374` `1.9.3-p551` `2.0.0-p648` `2.1.10` `2.2.10` `2.3.8` `2.4.10` `2.5.9` `2.6.10` `2.7.8` `3.0.7` `3.1.6` `3.2.4` `3.3.2`                                                 |
| Node.js    | `6.17.1` `8.17.0` `10.24.1` `12.22.12` `14.21.3` `16.20.2` `18.20.3` `20.14.0`                                                                                                     |
| Elixir     | `1.13.4` `1.14.5` `1.15.8` `1.16.3`                                                                                                                                               |
| Java       | `8.0.412` `11.0.23` `17.0.11` `21.0.3`                                                                                                                                           |
| Deno       | `1.43.5`                                                                                                                                                                         |
| .NET       | `6.0.31` `8.0.6`                                                                                                                                                                |

In particular, several non-LTS versions have been removed:

* Node.js: 9, 11, 13, 15, 17, 19, 21
* Java: 14
* .NET: 5

If you were using one of these versions, it will be replaced by the next major version.

## Miscellaneous Updates

The operating system is being upgraded from *Debian 10 (Buster)* to *Debian 12 (Bookworm)*. Consequently, many software and libraries will be upgraded. Among the notable upgraded:

* Erlang 25.2 (previously 21.2)
* GDAL 3.9 (previously 2.4)
* git 2.45 (previously 2.20)
* Go 1.22 (previously 1.17)
* MapServer 8.0 (previously 7.4)
* PROJ 9.4 (previously 5.2)
* QGIS 3.34 (previously 3.4)
* RabbitMQ 3.10 (previously 3.7)

### On Private Cloud

* **Redis**, if installed on your server, is upgraded to [version 7.0](https://github.com/redis/redis/blob/7.0/00-RELEASENOTES) (previously 6.0).
* **MySQL**, if installed on your server, is upgraded to [version 8.0](https://dev.mysql.com/doc/relnotes/mysql/8.0/en/).
* **Elasticsearch**, if installed on your server, is upgraded to version 8.17.

## Miscellaneous

* The `composer` command now runs **Composer** 2. You can start Composer 1 with the `composer1` command.
* The [default HTTP log format](/sites/formatting-http-logs) is now the **Advanced** format.
* Sites of type **Transparent Redirect** are converted to **Reverse Proxy**.
* The IP 185.31.40.10 is an old, deprecated IP and will be removed.

## Tips & Common Issues

* You can make some changes yourself *before the migration*, such as selecting major language versions, using the *Advanced* log format, or modifying your sites from *Transparent Redirect* to *Reverse Proxy*.

* In [Public cloud](accounts/billing/public-cloud-prices), your account will be moved to new servers during the migration, all services will change their IP. The IPs used by each server are listed in the **Advanced > Server Status** menu.
    - Addresses of type `[service]-[account].alwaysdata.net` may not be immediately accessible from outside due to DNS propagation,
    - For domains not using our DNS servers, the previous HTTP server will redirect requests to the new HTTP server. However, the redirection may stop working, and it is advisable to update the IP to point to the correct server.

* It will be necessary to update your local `known_hosts` file to connect via SSH. You can do this using the following command (*[account] should be replaced with your account name*):

```sh
$ ssh-keygen -R ssh-[account].alwaysdata.net
```

### Errors following Migration

1. `cannot open shared object file: No such file or directory`

Updating certain system libraries requires recompilation of the code that uses them. The following libraries are affected:

* `libtiff`

Generally, these libraries are not used directly by applications but via dependencies (PHP extension, Python module, Ruby gem, etc.). Simply reinstall these dependencies on the new infrastructure to resolve the issue.

## Why Enforce a Migration?

The main goal of architecture migrations is to update our servers to a more recent version of their operating system (Debian). These updates are essential for two reasons:

* Security. Old software versions are not supported indefinitely by their developers or distributors. When a software version reaches its end-of-life, it continues to function, but new security vulnerabilities are no longer patched. Continuing to use old versions would pose a risk to the security and reliability of your applications and data.

* Ability to run recent software versions. The older the operating system, the more difficult it becomes to run recent software. To continue offering the latest versions of software (or for you to install the latest versions yourself in your account), it is important to be on a relatively recent version of the operating system.

These infrastructure migrations are carried out every four years, which corresponds to the lifespan of a Debian version (which is [five years](https://wiki.debian.org/LTS), but we account for the unavoidable internal development time before switching to new versions). This provides a good balance, avoiding too frequent migrations while ensuring support for nearly all recent software.
