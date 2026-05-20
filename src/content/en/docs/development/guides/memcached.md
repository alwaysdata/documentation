---
title: Memcached
eleventyNavigation:
  key: Memcached
  parent: Guides
---

[Memcached](https://www.memcached.org/) is an object-oriented cache engine.

Here is a guide to installing it on the Public Cloud.

> [!NOTE]
> For Private Cloud users *Memcached* can be [installed at server level](/en/docs/web-hosting/databases/memcached).


In our example, we use the [SSH access](/en/docs/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `foo`
- Memcached directory: `$HOME/memcached/`
- Port: 8300 (ports between 8300 and 8499 can be used)

> [!NOTE]
> `[foo]` must be replaced by the accurate account name.



## Step 1: Installation

```sh
foo@ssh:~/memcached$ wget -O- http://memcached.org/latest| tar -xz --strip-components=1
foo@ssh:~/memcached$ ./configure && make
```

## Step 2: Service launch

Create the following [service](/en/docs/web-hosting/services):

- *Command* : `./memcached -p 8300`
- *Working directory* : `/home/[foo]/memcached`

More options via `$HOME/memcached/memcached -h`.

> [!WARNING]
> By default anyone can connect to Memcached; there is no security. An [authentication](https://github.com/memcached/memcached/wiki/SASLHowto) can be set up.


The next step is to configure the application to connect to Memcached using `services-[foo].alwaysdata.net` and port `8300`.

- [Install the PHP extension](/en/docs/web-hosting/databases/memcached/php)
