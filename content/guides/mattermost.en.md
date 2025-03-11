+++
title = "Installing Mattermost"
layout = "howto"
hidden = true
+++

[Mattermost](https://mattermost.com) is an instant messaging software.

In our example, we use the [SSH access](remote-access/ssh) and consider the following information:

- Account name: `foo`
- Mattermost directory: `$HOME/mattermost/`
- PostgreSQL database: `foo_mattermost` - to be created in the **Databases > PostgreSQL** menu of the [administration interface](https://admin.alwaysdata.com)
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

- PostgreSQL

```txt
"DriverName": "postgres",
"DataSource": "postgres://[pgsql_username]:[pgsql_password]@postgresql-[foo].alwaysdata.net:5432/[foo]_mattermost?sslmode=disable\u0026connect_timeout=10",
```

## Service launch

Create a [service](services) with following details:

- *Command*: `/home/[foo]/mattermost/bin/mattermost`
- *Working directory*: `/home/[foo]/mattermost`

## Site creation

Declare a [site](sites/add-a-site), type **Reverse proxy** with:

- *Remote URL*: `services-[foo].alwaysdata.net:8300`
