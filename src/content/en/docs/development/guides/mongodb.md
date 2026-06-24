---
title: MongoDB
eleventyNavigation:
  key: MongoDB
  parent: Guides
  order: 1
---

[MongoDB](https://www.mongodb.com/) is a document-oriented noSQL database program.

In our example, we use the [SSH access](/en/docs/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `[account]`
- MongoDB directory: `/home/[account]/mongodb/`

> [!NOTE]
> Feel free to adjust according to your needs.

## Installation

### Downloading

```sh
[account]@ssh:~$ mkdir mongodb
[account]@ssh:~$ cd mongodb
[account]@ssh:~/mongodb$ wget -O- https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-debian12-8.0.1.tgz | tar -xz --strip-components=1
[account]@ssh:~/mongodb$ mkdir -p data log
```

Choose the package *tgz* and the platform *Debian* of the [last version of the tarball](https://www.mongodb.com/try/download/community).

### Service launch

Create a [service](/en/docs/web-hosting/services) with following details:

- *Command*: `./bin/mongod --dbpath ./data/ --logpath ./log/mongo.log --ipv6 --bind_ip_all --port=27017`
- *Working directory*: `/home/[account]/mongodb`

[Public Cloud](/en/docs/admin-billing/billing/public-cloud-prices) users will need to point the service to a port between 8300 and 8499 instead of the default MongoDB port.

The address to connect to the MongoDB instance will be `services-[account].alwaysdata.net:[port]`.

> [!NOTE]
> Replace `[port]` by the chosen port in the command.


### Firewall rule creation

[Private Cloud](/en/docs/admin-billing/billing/private-cloud-prices) users will need to open the port by creating a [firewall rule](/en/docs/technical-specifications/configure-firewall) if they want to access it from the external network:

|Title|Value|
|--- |--- |
|Protocol|UDP/TCP|
|Type|ACCEPT|
|Direction|Input|
|Hosts|\<specify nothing>|
|Ports|27017|
|IP version|IPv4/IPv6|

## Downloading and installing utilities

- [mongosh](https://www.mongodb.com/try/download/shell) - choose the package *tgz* and the platform *Linux x64* of the last version.

```sh
[account]@ssh:~/mongodb$ wget -O- https://downloads.mongodb.com/compass/mongosh-2.3.2-linux-x64.tgz | tar -xz --strip-components=0
[account]@ssh:~/mongodb$ mv mongosh-2.3.2-linux-x64/bin/* bin/
[account]@ssh:~/mongodb$ rm -rf mongosh-2.3.2-linux-x64
```

- [cli](https://www.mongodb.com/try/download/database-tools) - choose the package *tgz* and the platform *Debian 12.0 x86-64* of the last version.

```sh
[account]@ssh:~/mongodb$ wget -O- https://fastdl.mongodb.org/tools/db/mongodb-database-tools-debian12-x86_64-100.10.0.tgz | tar -xz --strip-components=0
[account]@ssh:~/mongodb$ mv mongodb-database-tools-debian12-x86_64-100.10.0/bin/* bin/
[account]@ssh:~/mongodb$ rm -rf mongodb-database-tools-debian12-x86_64-100.10.0
```

All executables will then be located in `/home/[account]/mongodb/bin`.

## Authentication

Here, we will create the *admin* user following [their documentation](https://www.mongodb.com/docs/manual/tutorial/configure-scram-client-authentication/#create-the-user-administrator).

```sh
[account]@ssh: ~/mongodb$ ./bin/mongosh services-[account].alwaysdata.net:[port]
Current Mongosh Log ID:	6707c8c098d8f59e6efe6910
Connecting to:		mongodb://services-[account].alwaysdata.net:[port]/?directConnection=true&appName=mongosh+2.3.2
Using MongoDB:		8.0.1
Using Mongosh:		2.3.2

------

test> use admin
switched to db admin
admin> db.createUser(
...   {
...     user: "admin",
...     pwd: "mysuperpassword",
...     roles: [
...       { role: "userAdminAnyDatabase", db: "admin" },
...       { role: "readWriteAnyDatabase", db: "admin" }
...     ]
...   }
... )
{ ok: 1 }
admin>
```

> [!NOTE]
> Replace `mysuperpassword` by the password of your choice.


You can then add the `--auth` option to the command for the [service](#service-launch).
