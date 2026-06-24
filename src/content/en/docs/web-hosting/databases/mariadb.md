---
title: MariaDB - MySQL
eleventyNavigation:
  key: MariaDB - MySQL
  parent: Databases
  order: 1
---

## Supported versions

||
|---|
| 10.6 |
| 10.11 |
| 11.4 |
| 11.8 |

## Connection

|||
|--- |--- |
|Server|mysql-[account].alwaysdata.net|
|Port|3306 (MySQL port by default)|
|Web interface|[phpMyAdmin](https://phpmyadmin.alwaysdata.com/)|

The connection data depends on the relevant account. You can find the precise values in the administration interface section under **Databases > MySQL**.

### Example with `mysql`
In our example, we use the [SSH access](/en/docs/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `[account]`
- Database name: `[account]_base`
- We will use the default SSH users and databases, i.e. the ones created when the accounts are opened.

```sh
[account]@ssh:~$ mysql -h mysql-[account].alwaysdata.net -u [account] -p [account]_base
```

## Permissions

When you create your MySQL databases and users, you have the option of assigning the following permissions:

- GRANT ALL PRIVILEGES,
- GRANT READONLY,
- No privileges.

> [!WARNING]
> If you change your user's permissions via a third party application, any validation via the administration interface (or via the API) will reset the permissions in line with the directives above.


## Restore a database from its daily backup

Several options :

- use our [backup recovery](/en/docs/web-hosting/backups/restore-a-site) feature,
- use the following command :

    ```sh
    $ zstdcat /home/[account]/admin/backup/[date]/mysql/[database].sql.zst | mysql -h mysql-[account].alwaysdata.net -u [user] -p [database]
    ```

- get the tarball and use the client of your choice.

> [!TIP]
> The archived contents (e.g. BDD dumps) in your *backup* space are in [Zstandard](https://github.com/facebook/zstd) format, you can use the [official `zstd*` tools](https://github.com/facebook/zstd/releases/latest) or the [adapted plugin for 7zip](https://www.tc4shell.com/en/7zip/modern7z/) to manipulate them.


## Miscellaneous

On the Public Cloud,the maximum number of simultaneous connections per user is *40*. On request, it is possible to change this on the Private Cloud.

An [ANALYZE TABLE](https://mariadb.com/kb/en/analyze-table/) is carried out daily on all your tables to guarantee good performance, but don’t hesitate to do it yourself when your data changes drastically, for example after importing a database.

To check the MariaDB configuration use the SQL query `show variables`.

*MySQL events* are not supported on alwaysdata's Public Cloud.

In the Public Cloud, you can change `sql_mode` by [connection](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html) (SET SESSION).

> [!NOTE]
> MariaDB is offered by default on our servers but the [Private Cloud](/en/docs/admin-billing/billing/private-cloud-prices) users may request to use MySQL 8.0.


---

- [MariaDB documentation](https://mariadb.com/kb/en/library/documentation/)
- [MySQL documentation](https://dev.mysql.com/doc/)
