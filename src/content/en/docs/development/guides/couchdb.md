---
title: CouchDB
eleventyNavigation:
  key: CouchDB
  parent: Guides
  order: 1
---

 [CouchDB](https://couchdb.apache.org/) is a document-oriented noSQL database program. 

In our example, we use the [SSH access](/en/docs/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `[account]`
- CouchDB directory: `/home/[account]/couchdb/`

> [!NOTE]
> Feel free to adjust according to your needs.


## Installation
### Downloading and Compiling

```sh
[account]@ssh:~$ mkdir couchdb
[account]@ssh:~$ cd couchdb
[account]@ssh:~/couchdb$ wget -O- https://dlcdn.apache.org/couchdb/source/3.4.1/apache-couchdb-3.4.1.tar.gz | tar -xz --strip-components=1
[account]@ssh:~/couchdb$ ./configure --spidermonkey-version 78
[account]@ssh:~/couchdb$ make release
```

Choose the *tar.gz* package of the latest version available from the [official CouchDB site](https://dlcdn.apache.org/couchdb/source/).

### Configuring

Create a `local.ini` file in the `/home/[account]/couchdb` directory with the following directives:

```
[admins]
admin = mysuperpassword

[couchdb]
single_node = true

[chttpd]
bind_address = ::
port = 5984
```

> [!NOTE]
> Replace `mysuperpassword` with the password of your choice.


[Public Cloud](/en/docs/admin-billing/billing/public-cloud-prices) users will need to point the service to a port between 8300 and 8499 and modify this value in the configuration file.

### Service launch

Create a [service](/en/docs/web-hosting/services) with following details:

- *Command*: `./bin/couchdb -couch_ini /home/[account]/couchdb/local.ini`
- *Working directory*: `/home/[account]/couchdb/rel/couchdb`

The address to connect to the CouchDB instance will be `services-[account].alwaysdata.net:[port]`. For example, to list the databases:

```
$ curl -X GET http://admin:mysuperpassword@services-[account].alwaysdata.net:[port]/_all_dbs
```

> [!NOTE]
> Replace `[port]` with the port indicated in the `local.ini` file.



### Firewall rule creation

[Private Cloud](/en/docs/admin-billing/billing/private-cloud-prices) users will need to open the port by creating a [firewall rule](/en/docs/technical-specifications/configure-firewall) if they want to access it from the external network:

|Title|Value|
|--- |--- |
|Protocol|UDP/TCP|
|Type|ACCEPT|
|Direction|Input|
|Hosts|\<specify nothing>|
|Ports|5984|
|IP version|IPv4/IPv6|
