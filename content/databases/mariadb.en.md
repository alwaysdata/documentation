+++
title = "MariaDB / MySQL"
layout = "man"
tags = ["databases", "mariadb", "mysql"]
+++

## Connection

|||
|--- |--- |
|Server|mysql-[account].alwaysdata.net|
|Port|3306 (MySQL port by default)|
|Web interface|[phpMyAdmin](https://phpmyadmin.alwaysdata.com/)|

The connection data depends on the relevant account. You can find the precise values in the administration interface section under **Databases > MySQL**.

### Example with `mysql`
In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`
- Database name: `foo_base`
- We will use the default SSH users and databases, i.e. the ones created when the accounts are opened (e.g. `foo` for the *foo* account).

```sh
foo@ssh:~$ mysql -h mysql-foo.alwaysdata.net -u foo -p foo_base
```

## Permissions

When you create your MySQL databases and users, you have the option of assigning the following permissions:

- GRANT ALL PRIVILEGES,
- GRANT READONLY,
- No privileges.

{{% notice warning %}}
If you change your user's permissions via a third party application, any validation via the administration interface (or via the API) will reset the permissions in line with the directives above.
{{% /notice %}}

## Restore a database from its daily backup

Several options :

- use our [backup recovery]({{< ref "backups/restore-a-site" >}}) feature,
- use the following command :

    ```sh
    $ zstdcat $HOME/admin/backup/[date]/mysql/[database].sql.zst | mysql -h mysql-[account].alwaysdata.net -u [user] -p [database]
    ```

- get the tarbal and use the client of your choice.

{{% notice tip %}}
The archived contents (e.g. BDD dumps) in your *backup* space are in [Zstandard](https://github.com/facebook/zstd) format, you can use the [official `zstd*` tools](https://github.com/facebook/zstd/releases/latest) or the [adapted plugin for 7zip](https://www.tc4shell.com/en/7zip/modern7z/) to manipulate them.
{{% /notice %}}

## Miscellaneous

On the Public Cloud,the maximum number of simultaneous connections per user is *40*. On request, it is possible to change this on the Private Cloud.

MySQL blocks the size of the user name; if your account's name is too long, an *ID* will be assigned to it. You will find this in **Databases > MySQL > Users**.

An [ANALYZE TABLE](https://mariadb.com/kb/en/analyze-table/) is carried out daily on all your tables to guarantee good performance, but don’t hesitate to do it yourself when your data changes drastically, for example after importing a database.

To check the MariaDB configuration use the SQL query `show variables`.

*MySQL events* are not supported on alwaysdata's servers.

In the Public Cloud, you can change `sql_mode` by [connection](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html) (SET SESSION).

{{% notice info %}}
MariaDB is offered by default on our servers but the [Private Cloud]({{< ref "accounts/billing/private-cloud-prices" >}}) users may request to use MySQL.
{{% /notice %}}

---

- [MariaDB documentation](https://mariadb.com/kb/en/library/documentation/)
- [MySQL documentation](https://dev.mysql.com/doc/)
