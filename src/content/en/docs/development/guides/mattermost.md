---
title: Mattermost
eleventyNavigation:
  key: Mattermost
  parent: Guides
---

[Mattermost](https://mattermost.com) is an instant messaging software.

In our example, we use the [SSH access](/en/docs/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `[account]`
- Mattermost directory: `/home/[account]/mattermost/`
- PostgreSQL database: `[account]_mattermost` - to be created in the **Databases > PostgreSQL** menu of the [administration interface](https://admin.alwaysdata.com)
- Port: 8300 (ports between 8300 and 8499 can be used)

> [!NOTE]
> `[version]` must be replaced by the accurate data. Feel free to adjust according to your needs.


## Installation

```sh
[account]@ssh:~/mattermost$ wget -O- https://releases.mattermost.com/[version]/mattermost-[version]-linux-amd64.tar.gz | tar -xz --strip-components=1
[account]@ssh:~/mattermost$ mkdir data
```

[Download page](https://mattermost.com/deploy/)

## Configuration

A database and its user will have to be created in the **Databases** menu. Here we create them to be of the form `account_mattermost`.

Modify the `/home/[account]/mattermost/config/config.json` file to put:

```txt
"ListenAddress": ":8300",
"LocalModeSocketLocation": "/home/[account]/admin/tmp/mattermost_local.socket",
```

- PostgreSQL

```txt
"DriverName": "postgres",
"DataSource": "postgres://[pgsql_username]:[pgsql_password]@postgresql-[account].alwaysdata.net:5432/[account]_mattermost?sslmode=disable\u0026connect_timeout=10",
```

## Service launch

Create a [service](/en/docs/web-hosting/services) with following details:

- *Command*: `/home/[account]/mattermost/bin/mattermost`
- *Working directory*: `/home/[account]/mattermost`

## Site creation

Declare a [site](/en/docs/web-hosting/sites/add-a-site), type **Reverse proxy** with:

- *Remote URL*: `services-[account].alwaysdata.net:8300`
