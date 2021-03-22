+++
title = "Using Services"
layout = "howto"
hidden = true
tags = ["services"]
+++

Via the menu **Advanced > Services** in your administration interface set up background tasks or daemons.

The ports `8300` to `8499` as well as the hostname `services-[account].alwaysdata.net`[^1] can be used to run these services.

Important:

- A log is created automatically and is available from the `$HOME/admin/logs/services/` directory. It gives you the start and end of the service.
- In Public Cloud:
	- the services are run on their own server;
	- the consumption must remain reasonable.
- In Catalyst infrastructure (VPS and dedicated servers):
	- Ports are NOT open to the outside. It will be possible to do this via a [firewall rule]({{< ref "security/network/configure-firewall" >}}).

{{% notice note %}}
Even though it is contraindicated, users of dedicated and VPS servers can also listen on another port. This may cause problems during [migrations]({{< ref "advanced/migrations" >}}).
{{% /notice %}}

## Examples

### Redis

- *Command*: `redis-server -h services-[account].alwaysdata.net -p 8300`
- *Monitoring command*: `redis-cli -h services-[account].alwaysdata.net -p 8300 ping`

[^1]: `[account]` to be replace by the account name.
