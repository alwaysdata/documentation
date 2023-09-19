+++
title = "Using Services"
layout = "howto"
hidden = true
tags = ["services"]
+++

Set up a service (i.e. headless running command) in your Administration Panel: **Advanced > Services**.

The ports' range `8300` to `8499`, as well as the hostname `services-[account].alwaysdata.net`[^1] are reserved to those services.

**Important**:

- It must runs in `foreground`, not fork and leave [^2].
- When needing to be reached from an external application, bind it to `::` (_IPv6_) and a port from `8300` to `8499`.
- Log files for running services are located at `$HOME/admin/logs/services/`, containing services' outputs.
	- An extract of these logs is presented in the administration’s interface (**Logs** - 📄).
- The restart of a service sends the `SIGHUP` signal.
- If a service fails repeatedly within a short period of time, it will be automatically disabled.
* For Public Cloud users:
  - Services are executed on a distinct servers than SSH and HTTP servers.
  - Their resources use must remain fair.
  - The services will not be available on IPv4, only on IPv6.
* For [Private Cloud]({{< ref "accounts/billing/private-cloud-prices" >}}) users:
	- Range port `8300` to `8499` are *not* accessible from the external network. You can expose them to Internet using a [firewall rule]({{< ref "security/network/configure-firewall" >}}).

## Examples

- [Mattermost]({{< ref "guides/mattermost#service-launch" >}})
- [Memcached]({{< ref "guides/memcached#step-2-service-launch" >}})
- [Redis]({{< ref "guides/redis#service-launch" >}})

[^1]: `[account]` to be replaced by the account name.
[^2]: See [simple `systemd` service](https://www.freedesktop.org/software/systemd/man/systemd.service.html#Type=) for use-cases.
