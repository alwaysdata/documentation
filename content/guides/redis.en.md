+++
title = "Installing Redis"
layout = "howto"
hidden = true
tags = ["http", "redis", "site"]
+++

[Redis](https://redis.io/) is an in-memory data structure store.

Here is a guide to installing it on the Public Cloud.

{{% notice info %}}
For Private Cloud users *Redis* can be [installed at server level]({{< ref "databases/redis">}}).
{{% /notice %}}

In our example, we use the [SSH access]({{< ref "remote-access/ssh" >}}) and consider the following information:

- Account name: `foo`
- Redis directory: `$HOME/redis/`
- Port: 8300 (ports between 8300 and 8499 can be used)

{{% notice note %}}
`[foo]` must be replaced by the accurate account name.
{{% /notice %}}


## Step 1: Installation

```sh
foo@ssh:~/redis$ wget -O- https://download.redis.io/redis-stable.tar.gz | tar -xz --strip-components=1
foo@ssh:~/redis$ make
```

## Step 2: Service launch

Create the following [service]({{< ref "services" >}}):


- *Command*: `./src/redis-server --bind :: --port 8300`
- *Monitoring command*: `./src/redis-cli -h services-[account].alwaysdata.net -p 8300 ping`
- *Working directory* : `/home/[foo]/redis`

More options via `$HOME/redis/src/redis-cli -h`.

{{% notice warning %}}
By default anyone can connect to Redis; there is no security. An [authentication](https://redis.io/commands/auth/) can be set up.
{{% /notice %}}

The next step is to configure the application to connect to Redis using `services-[foo].alwaysdata.net` and port `8300`.
