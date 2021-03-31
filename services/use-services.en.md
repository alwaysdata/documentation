+++
title = "Using Services"
layout = "howto"
hidden = true
tags = ["services"]
+++

Set up a service (i.e. headless running command) in your Administration Panel: **Advanced > Services**.

The ports' range `8300` to `8499`, as well as the hostname `services-[account].alwaysdata.net`[^1] are reserved to those services.

**Important**:

- It must runs in foreground (forbid *deamon* modes) and not exit[^2].
- When needing to be reached from an external application, bind it to `::` (IPv6 only) and a port from `8300` to `8499`.
- Log files for running services are located at `$HOME/admin/logs/services/`, containing services' outputs.
- For Public Cloud users:
  - Services are executed on a distinct servers than SSH and HTTP servers.
  - Their resources use must remain fair.
- For Catalyst infrastructure (*VPS* and *Dedicated Servers*):
	- Range port `8300` to `8499` are *not* accessible from the external network. You can expose them to Internet using a [firewall rule]({{< ref "security/network/configure-firewall" >}}).

{{% notice note %}}
Catalyst users can also bind on another IP than `::` and listen on ports outside of the range `8300-8499`, but this is *not recommended* as it may lead to issues during [migrations]({{< ref "advanced/migrations" >}}).
{{% /notice %}}

## Examples

### Redis

- *Command*: `redis-server -h services-[account].alwaysdata.net -p 8300`
- *Monitoring command*: `redis-cli -h services-[account].alwaysdata.net -p 8300 ping`

[^1]: `[account]` to be replaced by the account name.
[^2]: See [simple `systemd` service](https://www.freedesktop.org/software/systemd/man/systemd.service.html#Type=) for use-cases.
