+++
title = "Installing MongoDB"
layout = "howto"
hidden = true
tags = ["databases", "mongodb"]
+++

 [MongoDB](https://www.mongodb.com/) is a document-oriented noSQL database program. 

In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`
- MongoDB directory: `$HOME/mongodb/`

{{% notice note %}}
`[foo]` and `[version]` must be replaced by accurate informations.
{{% /notice %}}

## Downloading

```sh
foo@ssh:~/mongodb$ wget -O- https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-debian10-[version].tgz | tar -xz --strip-components=1
foo@ssh:~/mongodb$ mkdir -p data log
```

Choose the package *tgz* and the platform *Debian* of the [version 6.0 of the tarball](https://www.mongodb.com/try/download/community)[^1].

## Service launch

Create a [service]({{< ref "services" >}}) with following details:

- *Command*: `/home/[foo]/mongodb/bin/mongod --dbpath ./data/ --logpath ./log/mongo.log --ipv6 --bind_ip_all`
- *Working directory*: `/home/[foo]/mongodb`

[Public Cloud]({{< ref "accounts/billing/public-cloud-prices" >}}) users will need to point the service to a port between 8300 and 8499 and add the `--port` option to the command.

## Firewall rule creation

[Private Cloud]({{< ref "accounts/billing/private-cloud-prices" >}}) users will need to open the port by creating a [firewall rule]({{< ref "security/network/configure-firewall" >}}) if they want to access it from the external network:

|Title|Value|
|--- |--- |
|Protocol|UDP/TCP|
|Type|ACCEPT|
|Direction|Input|
|Hosts|\<specify nothing>|
|Ports|27017|
|IP version|IPv4/IPv6|

[^1]: MongoDB 7 requires a newer version of GLIBC that will only be available after the [next software infrastructure migration]({{< ref "advanced/migrations">}}).
