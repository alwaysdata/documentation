+++
title = "Which plan to choose?"
menuTitle = "Choosing your hosting plan"
layout = "man"
weight = 1
tags = ["billing", "dedicated", "public cloud", "vps"]
+++

The alwaysdata hosting services is a [Platform-as-a-Service](https://en.wikipedia.org/wiki/Platform_as_a_service)[^1]: it provides the infrastructure (data center, the network...) and the system stack (OS[^2], interpreters, libraries, databases, security...). Customers need only handle deploying, securing and updating their applications.

alwaysdata proposes several kinds of environment:

| Name || Description |
|---|---|---|
| [Public cloud]({{< ref "accounts/billing/cloud-prices" >}})[^3] || Hosting account spread over several servers - hosting hundreds of users |
||| SRT 1hr, IRT 4hrs, Availability rate 99.7% |
| [Catalyst]({{< ref "accounts/billing/catalyst-prices" >}}) | VPS | Virtual server on bare-metal server - bare-metal server hosting less than 10 users |
||| Isolation per account without additional billing |
||| SRT 30 mins, IRT 2hrs, Availability rate 99.8% |
|| Dedicated | Bare-metal server exclusively for a single user |
||| Isolation per account without additional billing |
||| SRT 15 mins, IRT 1hr, Availability rate 99.9% |
|| Gold | Bare-metal server exclusively for a single user, **redundated** in another datacenter |
||| Isolation per account without additional billing |
||| SRT 15 mins, IRT 1hr, Availability rate 99.95% |

For all these offers you can have unlimited sites, domains, databases, e-mails, etc.

---

| Services || Public cloud | Catalyst |
|---|---|---|---|---|---|
|||| **VPS** | **Dedicated** | **Gold** |
| Support | Tickets |✔️|✔️|✔️|✔️|
|| [Prioritized tickets]({{< ref "accounts/urgent-ticket" >}}) |❌|❌|✔️|✔️|
|| Phone |❌|❌|✔️|✔️|
| Websites | Configurable HTTP server |✔️|✔️|✔️|✔️|
|| [Marketplace]({{< ref "marketplace" >}}) |✔️|✔️|✔️|✔️|
|| [SSL Let's Encrypt]({{< ref "security/ssl-tls/lets-encrypt" >}})  |✔️|✔️|✔️|✔️|
|| [HTTP cache]({{< ref "sites/http-cache" >}}) |✔️|✔️|✔️|✔️|
|| [WAF]({{< ref "sites/waf" >}}) |✔️|✔️|✔️|✔️|
|| [Analytics]({{< ref "analytics" >}})  |✔️|✔️|✔️|✔️|
|| [Monitoring probes]({{< ref "sites/use-probes" >}}) |❌|❌|✔️|✔️|
|| Optimization tips |❌|❌|✔️|✔️|
| Languages | [PHP]({{< ref "languages/php" >}}) |✔️|✔️|✔️|✔️|
|| [Python]({{< ref "languages/python" >}}) |✔️|✔️|✔️|✔️|
|| [Ruby]({{< ref "languages/ruby" >}}) |✔️|✔️|✔️|✔️|
|| [Node.js]({{< ref "languages/nodejs" >}}) |✔️|✔️|✔️|✔️|
|| [Java]({{< ref "languages/java" >}}) |✔️|✔️|✔️|✔️|
|| [Deno]({{< ref "languages/deno" >}}) |✔️|✔️|✔️|✔️|
|| [Elixir]({{< ref "languages/elixir" >}}) |✔️|✔️|✔️|✔️|
|| [Lua]({{< ref "languages/lua" >}}) |✔️|✔️|✔️|✔️|
|| [Go]({{< ref "languages/go" >}}) |✔️|✔️|✔️|✔️|
|| [Any other language](https://www.alwaysdata.com/en/language/custom/) |✔️|✔️|✔️|✔️|
| Databases[^4] | [MariaDB (MySQL)]({{< ref "databases/mariadb" >}}) |✔️|✔️|✔️|✔️|
|| [PostgreSQL]({{< ref "databases/postgresql" >}}) |✔️|✔️|✔️|✔️|
|| [CouchDB]({{< ref "databases/couchdb" >}}) |✔️|✔️|✔️|✔️|
|| [RabbitMQ]({{< ref "databases/rabbitmq" >}}) |✔️|✔️|✔️|✔️|
|| [Elasticsearch]({{< ref "databases/elasticsearch" >}}) |❌|✔️|✔️|✔️|
|| [Memcached]({{< ref "databases/memcached" >}}) |❌|✔️|✔️|✔️|
|| [Redis]({{< ref "databases/redis" >}}) |❌|✔️|✔️|✔️|
|| Others |❌| On request | On request | On request |
| E-mails | Customizable configuration |✔️|✔️|✔️|✔️|
|| [Filtering via Sieve]({{< ref "e-mails/use-sieve-scripts" >}}) scripts |✔️|✔️|✔️|✔️|
|| Mailing-lists |✔️|✔️|✔️|✔️|
|| SMTP queue |❌|✔️|✔️|✔️|
|| SMTP relay |❌|✔️|✔️|✔️|
| Remote access | [FTP]({{< ref "remote-access/ftp" >}}) |✔️|✔️|✔️|✔️|
|| [SFTP]({{< ref "remote-access/sftp" >}}) |✔️|✔️|✔️|✔️|
|| [SSH]({{< ref "remote-access/ssh" >}}) |✔️|✔️|✔️|✔️|
|| [WebDAV]({{< ref "remote-access/webdav" >}}) |✔️|✔️|✔️|✔️|
| Backups[^5] ||✔️|✔️|✔️|✔️|
| Other services | [API]({{< ref "api" >}}) |✔️|✔️|✔️|✔️|
|| [Scheluded tasks]({{< ref "tasks" >}}) |✔️|✔️|✔️|✔️|
|| Services[^6] |✔️|✔️|✔️|✔️|
|| [Firewall management]({{< ref "security/network/configure-firewall" >}}) |❌|✔️|✔️|✔️|
|| [VPN](https://www.alwaysdata.com/fr/services/vpn/) |❌|❌|✔️|✔️|


Migration to a higher offer is possible and free of charge: in the _Accounts_ menu for plans in the public Cloud or by contacting [support](https://admin.alwaysdata.com/support/add/) to switch to another environment.

{{% notice note %}}
A well _optimized_ application will have the same performances regardless its environment type. However _less_ users on a server bring more **stability** and **comfort** (no more performance variations due to other users).
{{% /notice %}}

[^1]: Hence, users do not have `root` rights and cannot use `sudo`. Many services can be directly installed at the account level and VPS and dedicated users can request support for services where this is not the case.
[^2]: Our infrastructure is based on the Debian operating system.
[^3]: The public Cloud free plan offers 100Mb of disk space for non-commercial use.
[^4]: Databases **managed** by alwaysdata. It is also possible to install them via the [services]({{< ref "services" >}}). The management of these services will then not be performed by alwaysdata.
[^5]: Daily [backups]({{< ref "backups" >}}), retained for 30 days and directly available in the account.
[^6]: [Custom programs]({{< ref "services" >}}) that operate 24/7.
