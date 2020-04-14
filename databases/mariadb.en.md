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

```
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

## Other informations
MySQL blocks the size of the user name; if your account's name is too long, an *ID* will be assigned to it. You will find this in **Databases > MySQL > Users**.

MySQL events are not supported on alwaysdata's servers.

{{% notice info %}}
MariaDB is offered by default on our servers but the VPS and dedicated client may request to use MySQL.
{{% /notice %}}

---

- [MariaDB documentation](https://mariadb.com/kb/en/library/documentation/)
- [MySQL documentation](https://dev.mysql.com/doc/)
