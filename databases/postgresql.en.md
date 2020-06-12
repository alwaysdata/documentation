+++
title = "PostgreSQL"
layout = "man"
tags = ["databases", "postgresql"]
+++

## Connection

|||
|--- |--- |
|Server|postgresql-[account].alwaysdata.net|
|Port|5432 (PostgreSQL port by default)|
|Web interface|[phpPgAdmin](https://phppgadmin.alwaysdata.com/)|

The connection data depends on the relevant account. You can find the precise values in the administration interface section under **Databases > PostgreSQL**.

### Example with `psql`
In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`
- Database name: `foo_base`
- We will use the default SSH users and databases, i.e. the ones created when the accounts are opened (e.g. `foo` for the *foo* account).

```
foo@ssh:~$ psql -h postgresql-foo.alwaysdata.net -U foo -W -d foo_base
```

## Permissions

When you create your PostgreSQL databases and users, you define the desired permissions, then our performs the following operations:

- REVOKE ALL PRIVILEGES on the database and its layouts,
- If your user is to have **all privileges** then:
    - GRANT ALL PRIVILEGES on the database and its layouts,
    - ALTER DEFAULT PRIVILEGES: GRANT ALL PRIVILEGES on TABLES, SEQUENCES and FUNCTIONS,
    - GRANT ALL PRIVILEGES on TABLES, SEQUENCES and FUNCTIONS.
- If your user is to have **read only** privileges:
    - GRANT CONNECT on the database,
    - GRANT USAGE on the layouts,
    - ALTER DEFAULT PRIVILEGES:
        - GRANT SELECT on TABLES, SEQUENCES,
        - GRANT EXECUTE on FUNCTIONS.
    - GRANT SELECT on TABLES, SEQUENCES,
    - GRANT EXECUTE on FUNCTIONS.

{{% notice warning %}}
If you change your user's permissions via a third party application, any validation via the administration interface (or via the API) will reset the permissions in line with the directives above.
{{% /notice %}}

## Options

On creating a database, you have the following options:
  - **local**: determines encoding, `LC_COLLATE` and `LC_CTYPE`,
  - **extensions**: you can install PostgreSQL extensions with just a click (`hstore`, `pgcrypto`, `PostGIS`, etc.). If you need an extension that is not listed, you can contact [support](https://admin.alwaysdata.com/support/add/).

Several options :

- use our [backup recovery]({{< ref "backups/restore-a-site" >}}) feature,
- use the following command :

    ```
    $ xzcat $HOME/admin/backup/[date]/mysql/[database].sql.xz | mysql -h mysql-[account].alwaysdata.net -u [user] -p [database]
    ```

- get the tarbal and use the client of your choice.

## Other informations

It is possible to see the names of all of the databases and users on the PostgreSQL servers. This is a limitation on PostgreSQL usage in a shared environment. Databases contents are NOT reachable.

*Untrusted* PostgreSQL languages, which executes arbitrary code with administrator privileges (running PostgreSQL), cannot be used on our servers.

---

- [PostgreSQL documentation](https://www.postgresql.org/docs/)
