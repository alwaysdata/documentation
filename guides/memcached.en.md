+++
title = "Installing Memcached"
layout = "howto"
hidden = true
tags = ["cache", "http", "memcached", "site"]
+++

[Memcached](https://www.memcached.org/) is an object-oriented cache engine.

Here is a guide to installing it on the public cloud. It can be [installed at server level]({{< ref "databases/memcached">}}) for Catalyst servers.

In our example, we use the [SSH access]({{< ref "remote-access/ssh" >}}) and consider the following information:

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

Create the following [service]({{< ref "services" >}}):

- *Command* : `./memcached -p=8300`
- *Working directory* : `/home/[foo]/memcached`

More options via `./$HOME/memcached/memcached -h`.

{{% notice warning %}}
By default anyone can connect to Memcached; there is no security. An [authentication](https://github.com/memcached/memcached/wiki/SASLHowto) can be set up.
{{% /notice %}}

It remains the application that needs to use `services-[foo].alwaysdata.net`. to connect to its Memcached.

- [Install the PHP extension]({{< ref "databases/memcached/php" >}})
