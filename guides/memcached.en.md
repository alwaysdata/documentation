+++
title = "Installing Memcached"
layout = "howto"
hidden = true
tags = ["cache", "http", "memcached", "site"]
+++

[Memcached](https://www.memcached.org/) is an object-oriented [HTTP cache]({{< ref "sites/http-cache" >}}) engine.

Here is a guide to installing it on the public cloud. It can be [installed at server level]({{< ref "databases/memcached">}}) for Catalyst servers.

In our example, we use the [SSH access]({{< ref "remote-access/ssh" >}}) and consider the following information:

- Account name: `foo`
- Memcached directory: `$HOME/memcached/`

{{% notice note %}}
[foo] and [port] must be replaced by accurate information.
{{% /notice %}}


## Step 1: Agent download

```sh
foo@ssh:~/memcached$ wget -O- http://memcached.org/latest| tar -xz --strip-components=1
foo@ssh:~/memcached$ ./configure && make && make test && make install .
```

## Step 2: Server launch

Create the following [service]({{< ref "services" >}}):

- *Command* : `./memcached -p=[port] -l="::"`
- *Working directory* : `/home/[foo]/memcached`

More options via `./$HOME/memcached/memcached -h`.

## Step 3: Client installation

### PHP

Install [Memcache PECL extension](https://pecl.php.net/package/memcache) with:

```sh
foo@ssh:~/memcached$ ad_install_pecl memcache
```  

Then add it to the `php.ini` in the **Environment** menu of your alwaysdata [admin interface](https://admin.alwaysdata.com).

```ini
extension = /home/[foo]/memcached/memcache.so
```

[How to add PHP extensions]({{< ref "languages/php/extensions" >}})

### Python

We will use [Pymemcache](https://github.com/pinterest/pymemcache) but there are other clients.

```sh
foo@ssh:~$ pip install pymemcache
```

### Ruby

Here we install [Dalli](https://github.com/petergoldstein/dalli) but there are others.

```sh
foo@ssh:~$ gem install dalli
```

### Node.js

It install [MemJS](https://github.com/memcachier/memjs) but there are other clients.

```sh
foo@ssh:~$ npm install memjs
```
