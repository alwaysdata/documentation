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

## Permissions

When you create your MySQL databases and users, you have the option of assigning the following permissions:

- GRANT ALL PRIVILEGES,
- GRANT READONLY,
- No privileges.

{{% notice warning %}}
If you change your user's permissions via a third party application, any validation via the administration interface (or via the API) will reset the permissions in line with the directives above.
{{% /notice %}}

MySQL blocks the size of the user name; if your account's name is too long, an *ID* will be assigned to it. You will find this in **Databases > MySQL > Manage user**.

{{% notice info %}}
MariaDB is offered by default on our servers but the VPS and dedicated client may request to use MySQL.
{{% /notice %}}

---

- [MariaDB documentation](https://mariadb.com/kb/en/library/documentation/)
- [MySQL documentation](https://dev.mysql.com/doc/)
