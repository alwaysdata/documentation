+++
title = "Memcached"
layout = "man"
hidden = true
tags = ["databases", "memcached"]
+++

## Connection

|||
|--- |--- |
|Server|localhost or 127.0.0.1|
|Port|11211 (Memcached port by default)|


Memcached only runs in local mode with isolated permissions (separate user).

{{% notice info %}}
Memcached is only available on [Private Cloud]({{< ref "accounts/billing/private-cloud-prices" >}}) environments. On the [Public Cloud]({{< ref "accounts/billing/public-cloud-prices" >}}) you can run it by following this [guide]({{< ref "guides/memcached" >}}).
{{% /notice %}}

---

- [Memcached documentation](https://github.com/memcached/memcached/wiki)

---

Find our guides:

- [Configuring a PHP application with Memcached]({{< ref "databases/memcached/php" >}})
