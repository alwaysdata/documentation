---
title: Memcached
eleventyNavigation:
  key: Memcached
  parent: Guides
  order: 1
---

[Memcached](https://www.memcached.org/) is an object-oriented cache engine.

Here is a guide to installing it on the Public Cloud.

> [!NOTE]
> For Private Cloud users *Memcached* can be [installed at server level](/en/docs/web-hosting/databases/memcached).


In our example, we use the [SSH access](/en/docs/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `[account]`
- Memcached directory: `/home/[account]/memcached/`
- Port: 8300 (ports between 8300 and 8499 can be used)

> [!NOTE]
> Feel free to adjust according to your needs.



## Step 1: Installation

```sh
[account]@ssh:~/memcached$ wget -O- http://memcached.org/latest| tar -xz --strip-components=1
[account]@ssh:~/memcached$ ./configure && make
```

## Step 2: Service launch

Create the following [service](/en/docs/web-hosting/services):

- *Command* : `./memcached -p 8300`
- *Working directory* : `/home/[account]/memcached`

More options via `/home/[account]/memcached/memcached -h`.

> [!WARNING]
> By default anyone can connect to Memcached; there is no security. An [authentication](https://github.com/memcached/memcached/wiki/SASLHowto) can be set up.


The next step is to configure the application to connect to Memcached using `services-[account].alwaysdata.net` and port `8300`.

- [Install the PHP extension](/en/docs/web-hosting/databases/memcached/php)
