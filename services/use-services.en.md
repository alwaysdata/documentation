+++
title = "Using Services"
layout = "howto"
hidden = true
tags = ["services"]
+++

Via the menu **Advanced > Services** in your administration interface set up 24h a day programs.

The ports `8300` to `8499` as well as the hostname `services-[account].alwaysdata.net`[^1] can be used to run these services.

Important:

- It must run as a [simple `systemd` service](https://www.freedesktop.org/software/systemd/man/systemd.service.html#Type=). Meaning stays in foreground and not quit.
- If it want to listen on a port it must bind in IPv6 on `::` and listen a port between 8300 and 8499.
- A log is created automatically and is available from the `$HOME/admin/logs/services/` directory. It gives you the start and end of the service.
- In Public Cloud:
	- the services are run on a distinct server from the SSH and HTTP servers,
	- the consumption must remain reasonable.
- In Catalyst infrastructure (VPS and dedicated servers):
	- 8300 to 8499 ports are NOT open to the outside. It will be possible to open them via a [firewall rule]({{< ref "security/network/configure-firewall" >}}).

{{% notice note %}}
Even though it is contraindicated, users of dedicated and VPS servers can also bind on another IP than `::` and listen on another port thant 8300-8499. This may cause problems during [migrations]({{< ref "advanced/migrations" >}}).
{{% /notice %}}

## Examples

### Redis

- *Command*: `redis-server -h services-[account].alwaysdata.net -p 8300`
- *Monitoring command*: `redis-cli -h services-[account].alwaysdata.net -p 8300 ping`

[^1]: `[account]` to be replace by the account name.
