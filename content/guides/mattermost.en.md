+++
title = "Installing Mattermost"
layout = "howto"
hidden = true
+++

[Mattermost](https://mattermost.com) is an instant messaging software.

In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`
- Mattermost directory: `$HOME/mattermost/`
- MySQL or PostgreSQL database[^1]: `foo_mattermost` - to be created in the **Databases** menu of the [administration interface](https://admin.alwaysdata.com)
- Port: 8300 (ports between 8300 and 8499 can be used)

{{% notice note %}}
`[foo]` and `[version]` must be replaced by accurate informations.
{{% /notice %}}

## Installation

```sh
foo@ssh:~/mattermost$ wget -O- https://releases.mattermost.com/[version]/mattermost-[version]-linux-amd64.tar.gz | tar -xz --strip-components=1
foo@ssh:~/mattermost$ mkdir data
```

[Download page](https://mattermost.com/deploy/)

## Configuration

A database and its user will have to be created in the **Databases** menu. Here we create them to be of the form `account_mattermost`.

Modify the `$HOME/mattermost/config/config.json` file to put:

```txt
"ListenAddress": ":8300",
"LocalModeSocketLocation": "$HOME/admin/tmp/mattermost_local.socket",
```

- MySQL

```txt
"DriverName": "mysql",
"DataSource": "[mysql_username]:[mysql_password]@tcp(mysql-[foo].alwaysdata.net:3306)/[foo]_mattermost?charset=utf8mb4,utf8&readTimeout=30s&writeTimeout=30s",
```

- PostgreSQL

```txt
"DriverName": "postgres",
"DataSource": "postgres://[pgsql_username]:[pgsql_password]@postgresql-[foo].alwaysdata.net:5432/[foo]_mattermost?sslmode=disable\u0026connect_timeout=10",
```

## Service launch

Create a [service]({{< ref "services" >}}) with following details:

- *Command*: `/home/[foo]/mattermost/bin/mattermost`
- *Working directory*: `/home/[foo]/mattermost`

## Site creation

Declare a [site]({{< ref "sites/add-a-site" >}}), type **[Redirect]({{< ref "sites/redirect" >}})** with:

- *Destination URL*: `services-[foo].alwaysdata.net:8300`
- *Forwarding type*: `transparent (reverse proxy)`

[^1]: Each SGBD has [limitations](https://docs.mattermost.com/install/requirements.html#database-software).
