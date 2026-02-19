+++
title = "Redis"
tags = ["http", "redis", "site"]
+++

[Redis](https://redis.io/) is an in-memory data structure store.

Here is a guide to installing it on the [Public Cloud](/admin-billing/billing/public-cloud-prices). [Private Cloud](/admin-billing/billing/private-cloud-prices) users can ask us to install *Redis* [at server level](/web-hosting/databases/redis).

In our example, we use the [SSH access](/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `foo`
- Redis directory: `$HOME/redis/`
- Port: 8300 (ports between 8300 and 8499 can be used)

{{% notice note %}}
`[foo]` must be replaced by the accurate account name.
{{% /notice %}}


## Installation

### Downloading and Compiling

```sh
foo@ssh:~/redis$ wget -O- https://download.redis.io/redis-stable.tar.gz | tar -xz --strip-components=1
foo@ssh:~/redis$ make
```

### Service launch

Create the following [service](/web-hosting/services):


- *Command*: `./src/redis-server --bind :: --port 8300 --protected-mode no`
- *Monitoring command*: `./src/redis-cli -h services-[foo].alwaysdata.net -p 8300 ping`
- *Working directory* : `/home/[foo]/redis`

More options via `$HOME/redis/src/redis-cli -h`.

The next step is to configure the application to connect to Redis using `services-[foo].alwaysdata.net` and port `8300`.

- [Install the PHP extension](/web-hosting/databases/redis/php)

## Authentication

By default anyone can connect to Redis; there is no security. An [authentication](https://redis.io/docs/management/security/acl/) can be set up.

You will need to create the `users.acl` file and modify the `aclfile` line in the Redis configuration file `redis.conf`.

In the following example, we will provide a password (`[password]`) to the default user.

```sh
foo@ssh:~/redis$ ./src/redis-cli -h services-[foo].alwaysdata.net -p 8300
services-[foo].alwaysdata.net:8300> ACL LIST
1) "user default on nopass sanitize-payload ~* &* +@all"

services-[foo].alwaysdata.net:8300> ACL SETUSER default on >[password]

services-[foo].alwaysdata.net:8300> ACL LIST
1) "user default on sanitize-payload #1ccc91f99d0c4c7a24e77941b18c0339ecb3eaf5ad7ae9ad816a7e69d83b69db ~* &* +@all"

services-[foo].alwaysdata.net:8300> ACL SAVE
OK

services-[foo].alwaysdata.net:8300> CONFIG REWRITE
OK

services-[foo].alwaysdata.net:8300> AUTH default [password]
OK
```

- [`ACL LIST`](https://redis.io/commands/acl-list/) lists the users and gives information about the users' rights.
- [`ACL SETUSER`](https://redis.io/commands/acl-setuser/) creates or modifies users.
- [`ACL SAVE`](https://redis.io/commands/acl-save/) saves users.
