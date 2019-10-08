+++
title = "How To restore a website's backup"
menuTitle = "Restore website's backup"
date =  2019-09-12T09:45:29+02:00
layout = "howto"
weight = 5
draft = false
+++

The backups of your files and databases are located in the _~/admin/backup_ directory of your account.  You can restore them via the **Advanced > Backup recovery** menu.

Choose the due date then:

- check the database(s);
- and/or the directory(ies) desired.


> The recovery overwrites the current configuration, so manually make a backup.
>
> Recovery time depends on the size of the files to be restored.


## By SSH ##

If you want to manually restore a backup.

- Connect to your [SSH]() account;
- Restore files:

```
$ rsync -av --delete ~/admin/backup/<date>/files/<directory>/ ~/<directory>/
```

WARNING: `--delete` will delete all files from this directory which have been created since the backup date.
To perform a test add `-n`.

* Restore a MySQL database:

```
$ xzcat ~/admin/backup/<date>/<database_type>/<database_name>.sql.xz | mysql -h mysql-<account_name>.alwaysdata.net -u <user> -p <database_name>
```

* Restore a PostgreSQL database:

```
$ xzcat ~/admin/backup/<date>/<database_type>/<database_name>.sql.xz | psql -h postgresql-<account_name>.alwaysdata.net -U <user> -d <database_name>
```
