+++
title = "Installing Memcached"
layout = "howto"
hidden = true
tags = ["cache", "http", "memcached", "site"]
+++

[Memcached](https://www.memcached.org/) is an object-oriented cache engine.

Here is a guide to installing it on the Public Cloud.

{{% notice info %}}
For Private Cloud users *Memcached* can be [installed at server level](databases/memcached).
{{% /notice %}}

In our example, we use the [SSH access](remote-access/ssh) and consider the following information:

- Account name: `foo`
- Memcached directory: `$HOME/memcached/`
- Port: 8300 (ports between 8300 and 8499 can be used)

{{% notice note %}}
`[foo]` must be replaced by the accurate account name.
{{% /notice %}}


## Step 1: Installation

```sh
foo@ssh:~/memcached$ wget -O- http://memcached.org/latest| tar -xz --strip-components=1
foo@ssh:~/memcached$ ./configure && make
```

## Step 2: Service launch

Create the following [service](services):

- *Command* : `./memcached -p 8300`
- *Working directory* : `/home/[foo]/memcached`

More options via `$HOME/memcached/memcached -h`.

{{% notice warning %}}
By default anyone can connect to Memcached; there is no security. An [authentication](https://github.com/memcached/memcached/wiki/SASLHowto) can be set up.
{{% /notice %}}

The next step is to configure the application to connect to Memcached using `services-[foo].alwaysdata.net` and port `8300`.

- [Install the PHP extension](databases/memcached/php)
