+++
title = "CouchDB"
layout = "howto"
hidden = true
tags = ["databases", "couchdb"]
+++

 [CouchDB](https://couchdb.apache.org/) is a document-oriented noSQL database program. 

In our example, we use the [SSH access](remote-access/ssh) and consider the following information:

- Account name: `foo`
- CouchDB directory: `$HOME/couchdb/`

{{% notice note %}}
`[foo]` must be replaced by the name of your account.
{{% /notice %}}

## Installation
### Downloading and Compiling

```sh
foo@ssh:~$ mkdir couchdb
foo@ssh:~$ cd couchdb
foo@ssh:~/couchdb$ wget -O- https://dlcdn.apache.org/couchdb/source/3.4.1/apache-couchdb-3.4.1.tar.gz | tar -xz --strip-components=1
foo@ssh:~/couchdb$ ./configure --spidermonkey-version 78
foo@ssh:~/couchdb$ make release
```

Choose the *tar.gz* package of the latest version available from the [official CouchDB site](https://dlcdn.apache.org/couchdb/source/).

### Configuring

Create a `local.ini` file in the `$HOME/couchdb` directory with the following directives:

```
[admins]
admin = mysuperpassword

[couchdb]
single_node = true

[chttpd]
bind_address = ::
port = 5984
```

{{% notice note %}}
Replace `mysuperpassword` with the password of your choice.
{{% /notice %}}

[Public Cloud](accounts/billing/public-cloud-prices) users will need to point the service to a port between 8300 and 8499 and modify this value in the configuration file.

### Service launch

Create a [service](services) with following details:

- *Command*: `./bin/couchdb -couch_ini /home/[foo]/couchdb/local.ini`
- *Working directory*: `/home/[foo]/couchdb/rel/couchdb`

The address to connect to the CouchDB instance will be `services-[foo].alwaysdata.net:[port]`. For example, to list the databases:

```
$ curl -X GET http://admin:mysuperpassword@services-[foo].alwaysdata.net:[port]/_all_dbs
```

{{% notice note %}}
Replace `[port]` with the port indicated in the `local.ini` file.
{{% /notice %}}


### Firewall rule creation

[Private Cloud](accounts/billing/private-cloud-prices) users will need to open the port by creating a [firewall rule](security/network/configure-firewall) if they want to access it from the external network:

|Title|Value|
|--- |--- |
|Protocol|UDP/TCP|
|Type|ACCEPT|
|Direction|Input|
|Hosts|\<specify nothing>|
|Ports|5984|
|IP version|IPv4/IPv6|
