+++
title = "Software Architecture 2017"
layout = "man"
hidden = true
tags = ["infrastructure", "migration"]
+++

This migration groups a number of changes with the following main objectives:

- Updating all of the ready installed software,
- Simplifying some points of our software infrastructure.

For the oldest shared accounts, this migration also includes the migration to our own hardware infrastructure.

This document describes the main incompatibilities introduced by this migration. We attempt to be as complete as possible, but it is impossible to be completely exhaustive. We strongly advise you to run a migration test to detect as many incompatibilities as possible.

This document does not describe the new functions provided by the 2017 software infrastructure as this was done in a dedicated [blog article](https://blog.alwaysdata.com/2017/01/24/python-3-6-ruby-2-4-and-others/).

## General

- You must absolutely use the new host names for access to services [introduced in 2015](https://blog.alwaysdata.com/2015/03/05/change-of-hostname-for-access-to-our-services/). You will find the addresses to use in the alwaysdata administration information, in every relevant section. The former formats, using the `alwaysdata.com` domain (e.g. `mysql.alwaysdata.com` or `postgresql1.alwaysdata.com`) or with a dot between the service name and the account name (e.g. `mysql.compte.alwaysdata.net`) will completely stop working.

- A number of files and directories located in each account are moved or deleted. Especially:
    - The four default files (`php5.fcgi`, `php5.ini`, `php4.fcgi`, `php4.ini`) in the `$HOME/cgi-bin` directory are deleted and the directory too, if it is now empty,
    - The various internal configuration files (`$HOME/.env.*`, `$HOME/admin/apache`) are moved to a `$HOME/admin/config` directory,
    - The `$HOME/admin/ssl`, `$HOME/admin/session` and `$HOME/admin/log/awstats` directories are deleted,
    - Now the logs are stored in the `$HOME/admin/logs` directory with a sub-directory by type (`http`, `apache`, etc.). The former log directory (`$HOME/admin/log`) is moved to `$HOME/admin/logs/old`.

## Languages

### PHP

- The `.php4` and `.php5` file extensions are no longer supported, only the `.php` files are interpreted by PHP by default. You can still return to the former behavior by creating an `.htaccess` in the root of your account. For example, so that `.php5` files are interpreted by PHP, it needs to comprise:
```
AddHandler fcgid-script .php5
FCGIWrapper /usr/bin/php-cgi .php5
```

- It is no longer possible to run PHP 4 and PHP 5 at the same time on the same account. PHP 4 is now simply considered as a PHP version like any other, with no specificity.

- Versions 5.5.0, 5.5.1 and 5.5.6 are replaced with 5.5.19.

- The only PHP binary available is `php`. For example, do not use `php-cgi`.

- Non-standard extensions (APC, Xapian, Xdebug and Mapscript for PHP 5.3 and 5.2 and Fileinfo in 5.2) are deleted. You can however [install them yourself]({{< ref "languages/php/extensions" >}}) in your own account.

- Symfony is no longer pre-installed, you need to [install manually]({{< ref "languages/php/packages" >}}).

- The `calendar` and `intl` extensions are no longer activated automatically. They need to be explicitly loaded into your `php.ini` if necessary.

- Some minor compile options have been changed.

- The Apache internal directives that configure PHP (in FastCGI) have been changed. This is only important where explicit references were used, e.g. for a *customized Apache* website where Apache internal configuration directives were simply pasted in. We suggest that users replace their *customized Apache* websites with *standard Apache* websites, inserting their own directives into the *virtual host additional directives* field (in the *Advanced configuration*) or in a `.htaccess` file.

### Python

- The only Python binary available is `python`. For example, do not use `python2.6`. You will especially need to remember to replace your shebangs (the first line in a script, e.g. `#!/usr/bin/python`) if they do not already use `python`.

- The few libraries that were previously ready installed by default are now deleted, including Django. You will therefore need to [manually install]({{< ref "languages/python/configuration">}}#environment) all of the libraries that you will need.

- The *WSGI* type applications are now served by [uWSGI](http://uwsgi-docs.readthedocs.io/en/latest/) and not by [mod_wsgi](https://modwsgi.readthedocs.io/en/develop/). In the vast majority of cases this will make no difference to you. If you compiled your own mod_wsgi with a *customized Apache* type website, it will continue to work.

- Version 2.5.5 is replaced by 2.5.6, 2.6.6 by 2.6.9 and 3.1 by 3.3.6.

### Ruby

- The only Ruby binary available is `ruby`. For example, do not use `ruby1.8`. You will especially need to remember to replace your shebangs (the first line in a script, e.g. `#!/usr/bin/ruby`) if they do not already use `ruby`.

- The few libraries that were previously ready installed by default are now deleted, including Ruby on Rails. You will therefore need to [manually install]({{< ref "languages/ruby/configuration">}}#environment) all of the libraries that you will need.

- The *Ruby Rack* or *Ruby on Rails* type applications are now served by [uWSGI](http://uwsgi-docs.readthedocs.io/en/latest/) and not [Passenger](https://www.phusionpassenger.com). In the vast majority of cases this will make no difference to you. If you compiled your own Passenger with a *customized Apache* type website, it will continue to work.

- Versions 1.8.6 and 1.8.7 are replaced by 1.8.7-p374 and 1.9.2 by 1.9.2-p320.

## Databases

### MySQL

We are replacing MySQL with MariaDB 10.1 which is perfectly compatible with MySQL. MariaDB 10.1 corresponds to MySQL 5.6 or even 5.7. For further details on compatibility: https://mariadb.com/kb/en/mariadb/mariadb-vs-mysql-compatibility/

### PostgreSQL

We are updating PostgreSQL to version 9.6: https://www.postgresql.org/docs/9.6/static/release.html

We are also updating PostGIS to version 2.3: http://postgis.net/docs/manual-2.3/PostGIS_Special_Functions_Index.html#NewFunctions

### MongoDB

We are updating MongoDB to version 3.2: https://docs.mongodb.com/manual/release-notes/

Important: the authentication method changes. Users with full permissions have a `readWrite` role, users with read only permissions have a `read` role.

### CouchDB

We are updating CouchDB to version 1.6: https://docs.couchdb.org/en/stable/whatsnew/1.6.html#version-1-6-0

## Miscellaneous

### Apache

- [Apache](https://httpd.apache.org) is updated to version 2.2.32

- The `index.htm`, `index.cgi`, `index.pl` and `index.xhtml` files are no longer considered as indexes. Only `index.php` and `index.html` are indexes and `index.php` now has priority over `index.html`.

- Where no index file is present, a *Forbidden* error page will be displayed instead of listing the files. They can become index files once again if a *.htaccess* file is used to add the `Options +Indexes` directive.

- The `mod_dav_svn`, `mod_wsgi` and `Passenger` modules are deleted.

- The files for the other modules have been moved, but the migration will automatically handle changing the path for the `LoadModule` directives in *customized Apache* websites by making reference to it. You do not therefore have to worry about this.

### Miscellaneous updates

A very large number of applications and libraries have also be updated. There are too many of them to list them all, but among the most notable ones that may trigger incompatibilities there are:

- Erlang 19.1 (previously 15.b)
- Haskell 7.10 (previously 6.8)
- GDAL 1.10 (previously 1.5)
- git 2.9 (previously 1.8)
- ImageMagick 6.8 (previously 6.5)
- Java JRE 7 and 8 (previously 6)
- Lua 5.3 (previously 5.1)
- MapServer 7.0 (previously 5.6)
- Mercurial 3.9 (previously 1.3)
- OCaml 4.01 (previously 3.10)
- Perl 5.20 (previously 5.10)
- PROJ 4.8 (previously 4.7)
- Subversion 1.8 (previously 1.6)
- Texlive 2014 (previously 2007)

### VPS/dedicated environment

The following services, installed on request, will also be updated:

- RabbitMQ is updated to version 3.5
- Redis is updated to version 3.2
- Elasticsearch is updated to version 5.5

### Removal of former libraries

If you compiled your own applications, they may be linked to libraries or versions that have disappeared (due to a jump in the ABI). Your applications, or some of their functions may then stop working. You will need to recompile the relevant applications.

Among the libraries that are most likely to be affected:

- [OpenSSL](https://www.openssl.org). Version 0.9.8 does however remain installed alongside version 1.0.2, so your applications will continue to work. As version 0.9.8 is an old one, we still strongly recommend recompiling your applications so that they use a recent version of OpenSSL.

- libreadline

## Change in HTTP server IP

For some shared users that are still hosted by our former hardware infrastructure, the IP address of their HTTP server will need to change. Where applicable, this will be shown on the migration details page in the alwaysdata administration information. If you use our DNS servers or a CNAME, no action will be needed. If however you manually defined a type A or AAAA DNS record, then you will need to change them after performing the migration to show the new IP addresses.

The former IP addresses will however still work for a few weeks yet (operating in *reverse proxy* mode), but using them implies a slight increase in the latency time for your websites and an increase in the failure risk. We therefore strongly recommend changing them as quickly as possible.

## Migration test

We very strongly recommend performing a migration test prior to actual migration to ensure that your applications will continue to work and to correct them if not.

### SSH access

You can connect yourself to your SSH account on a temporary server. This server is equipped with the 2017 software architecture, but **it accesses your real file**, not a copy of them. Any change that you make will therefore immediately impact your account.

SSH may be slowed in relation to the usual SSH server. This is a consequence of the test, but this slowness will end after the actual migration.

### HTTP access

You can test your sites in a number of ways:

- by accessing it via the usual URL to which you should add the suffix `.migration.alwaysdata.net`. For example, if your website is normally accessible at `www.example.com`, then you can access it on the test infrastructure by going to `www.example.com.migration.alwaysdata.net`. Warning: the SSL certificate sent to the `*.migration.alwaysdata.net` address will not be valid so you will need to explicitly permit it via your browser. This only relates to the migration test, not the actual migration for which the certificates will not change. Important: some applications perform a redirect to the nominal URL, meaning that it is not possible to test them using this method.

- using a browser extension to force the `Host` header (and therefore the requested site). For example, in Chrome, the [Virtual Hosts](https://chrome.google.com/webstore/detail/virtual-hosts/aiehidpclglccialeifedhajckcpedom) extension. You need to connect using the HTTP test server address (e.g. `migration-test1.paris1.alwaysdata.com`), but requesting the address of your website.

- by changing your `hosts` file to force it to use the IP address of the HTTP test server to connect to your websites. This can be done by directly editing the relevant file or through a browser extension, e.g. HostAdmin in Firefox.

Then your applications will be started on a temporary server running on the 2017 software infrastructure as if the migration had taken place. Just like in SSH, the files in your account that this server has access to are your actual files. Accesses may also be slowed, but ignore this.

Important: the internal configuration of your alwaysdata account on this temporary server is generated when you run the test migration. It is not changed later on. For example, if you run the test migration when the PHP version defined in your environment is 5.6.27, then you go on to change this version level, this change will not be passed on to the temporary migration server. You will therefore need to run a test migration for the change to take effect. The same applies to the changes that you can make from the Web > Sites section.

### Databases

When you run the test migration, all of your databases and database users are copied to a temporary server that runs the new versions. You can then access the data copied to this server using your usual identification data to perform your tests. Unlike the files used by the SSH and HTTP servers, here you are therefore working on a copy of your data. Every time the test migration is run, previous copies are overwritten with the new ones.

## Help with migration

### General strategy

There may be a temptation to take advantage of the migration to make drastic changes to your web applications, to their configuration or their deployment. We therefore recommend rather that you make as few changes as possible so that the migration can take place successfully (after first testing it) and that you only make major changes afterwards, once your account is running on the new infrastructure.

The main advantage of proceeding this way is that once your account is running on the new infrastructure, you can get the benefit of new options and deployment methods that are considerably simplified, especially with Python and Ruby. For example, if you had compiled your own interpreter or your own Apache modules (mod_wsgi, Passenger), there is a strong possibility that you will no longer need them once your account is running on the new infrastructure.

### You have references to the Apache configuration relating to PHP

You have references to the PHP internal configuration in a `.htaccess` file or on a *customized Apache* type site (maybe you copied parts of the configuration from the `sites.conf` file). For example, you have references to `application/x-httpd-fastphp5`.

As our internal PHP configuration has changed, you configuration will stop working. If you use PHP and a *customized Apache* type site, we invite you to convert it into a *standard Apache* site and set out your specific Apache directives in a `.htaccess` file or in the *virtual host additional directives* field.

### Error: "cannot open shared object file: No such file or directory"

This error indicates a missing system library. Although most of the system libraries updated on the new infrastructure remain compatible with former versions (as the ABI remains the same), some are not (there is a change in ABI version level). If your applications are dependent on these libraries, they will no longer find them.

The following libraries are affected:

- [libgmp](https://gmplib.org)
- libreadline
- [libtiff](http://www.libtiff.org/)

In general, these libraries are not used directly by the applications, but through dependencies (Python module, Ruby gem, PHP extension). Recompiling these modules on the new infrastructure will generally let them use the new library version, but then they will no longer run on the former infrastructure.

Another solution is sometimes possible: when compiling the module, choosing to disable some functions to stop it from using the relevant library. For example, you can compile the [Pillow](https://python-pillow.org/) module without support for TIFF files by proceeding as follows:

```
$ pip install Pillow --global-option="build_ext" --global-option="--disable-tiff"
```

### Migrating a Python application to FastCGI

If you have a Python application (e.g. using [Django](https://www.djangoproject.com/)) that works with FastCGI, with a `.htaccess` file and a `.fcgi` script. FastCGI will continue to run on the new infrastructure like it did before, but if you do not use a virtualenv you will need to manually install the Python system libraries as they are no longer ready installed on the new infrastructure.

- In SSH, install all of the libraries that you need, for example:

    ```
    $ mkdir $HOME/python_libs; PYTHONPATH=$HOME/python_libs easy_install --always-copy --install-dir $HOME/python_libs Django==1.6 flup==1.0.3.dev-20110405 psycopg2==2.0.11
    ```

- Change your `.fcgi` file to replace the shebang (the first line), generally `#!/usr/bin/python` with `#!/usr/bin/eval PYTHONPATH=/home/foo/python_libs python`, `foo` being replaced by your account name.

### Using your own mod_wsgi module

You compiled your own Python interpreter and the [mod_wsgi](https://modwsgi.readthedocs.io/en/develop/) module that you use with a *customized Apache* type site. Make sure that you did define the Apache *WSGIPythonHome* directive or you may have errors on the new infrastructure, such as:

```
ImportError: No module named _sysconfigdata_nd
```

If your Python interpreter is in the `/home/foo/python` directory, then you need to use directive:

```
WSGIPythonHome /home/foo/python
```

### Using the system mod_wsgi module

You have a *customized Apache* type site that loads the system module `/usr/lib/apache2/modules/mod_wsgi.so-2.6`. As stated above, this module is no longer present in the new infrastructure (replaced by WSGI). To simplify the migration, you can:

- download the https://files.alwaysdata.com/migrations/software-2017/mod_wsgi.so-2.6 file to your account:

    ```
    wget https://files.alwaysdata.com/migrations/software-2017/mod_wsgi.so-2.6
    ```

- replace the `/usr/lib/apache2/modules/mod_wsgi.so-2.6` path in your *customized Apache* web site directives with the path to the file downloaded to your account, e.g. `/home/foo/mod_wsgi.so-2.6`.
