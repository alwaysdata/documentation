+++
title = "Which plan to choose?"
linkTitle = "Choosing your hosting plan"
layout = "man"
weight = 1
tags = ["billing", "dedicated server", "gold server", "public cloud", "vps"]
+++

The alwaysdata hosting services is a [Platform-as-a-Service](https://en.wikipedia.org/wiki/Platform_as_a_service)[^1]: it provides the infrastructure (data center, the network...) and the system stack (OS[^2], interpreters, libraries, databases, security...). Customers need only handle deploying, securing and updating their applications.

alwaysdata proposes several kinds of environment:

| Name || Description |
|---|---|---|
| [Public Cloud](accounts/billing/public-cloud-prices) || Hosting account spread over several servers - hosting hundreds of users |
||| GRT 1hr, MTTR 4hrs, Availability rate 99.7% |
| [Private Cloud](accounts/billing/private-cloud-prices) | Dedicated | Bare-metal server exclusively for a single user |
||| Isolation per account without additional billing |
||| GRT 15mins, MTTR 1hr, Availability rate 99.9% |
|| Gold | Bare-metal server exclusively for a single user, **redundated** in another datacenter |
||| Isolation per account without additional billing |
||| GRT 15mins, MTTR 1hr, Availability rate 99.95% |

For all these offers you can have unlimited sites, domains, databases, e-mails, etc.

---

| Services || Public Cloud | Private Cloud |
|---|---|---|---|---|
|||| **Dedicated** | **Gold** |
| Support | Tickets |✔️|✔️|✔️|✔️|
|| [Prioritized tickets](accounts/urgent-ticket) |❌|✔️|✔️|
|| Phone |❌|✔️|✔️|
| Websites | Configurable HTTP server |✔️|✔️|✔️|
|| [Marketplace](marketplace) |✔️|✔️|✔️|
|| [SSL Let's Encrypt](security/ssl-tls/lets-encrypt)  |✔️|✔️|✔️|
|| [HTTP cache](sites/http-cache) |✔️|✔️|✔️|
|| [WAF](sites/waf) |✔️|✔️|✔️|
|| [Analytics](analytics)  |✔️|✔️|✔️|
|| [Monitoring probes](sites/use-probes) |❌|✔️|✔️|
|| Optimization tips |❌|✔️|✔️|
| Languages | [PHP](languages/php) |✔️|✔️|✔️|
|| [Python](languages/python) |✔️|✔️|✔️|
|| [Ruby](languages/ruby) |✔️|✔️|✔️|
|| [Node.js](languages/nodejs) |✔️|✔️|✔️|
|| [Java](languages/java) |✔️|✔️|✔️|
|| [Deno](languages/deno) |✔️|✔️|✔️|
|| [Elixir](languages/elixir) |✔️|✔️|✔️|
|| [Lua](languages/lua) |✔️|✔️|✔️|
|| [Go](languages/go) |✔️|✔️|✔️|
|| [Any other language](languages) |✔️|✔️|✔️|
| Databases[^3] | [MariaDB (MySQL)](databases/mariadb) |✔️|✔️|✔️|
|| [PostgreSQL](databases/postgresql) |✔️|✔️|✔️|
|| [RabbitMQ](databases/rabbitmq) |✔️|✔️|✔️|
|| [Memcached](databases/memcached) |❌|✔️|✔️|
|| [Redis](databases/redis) |❌|✔️|✔️|
|| [ElasticSearch](databases/elasticsearch) |❌|✔️|✔️|
|| Others |❌| Upon request and following an analysis by our technical team | Upon request and following an analysis by our technical team |
| E-mails | Customizable configuration |✔️|✔️|✔️|
|| [Filtering via Sieve](e-mails/use-sieve-scripts) scripts |✔️|✔️|✔️|
|| [Mailing-lists](e-mails/mailing-lists) |✔️|✔️|✔️|
|| [SMTP queue](e-mails/smtp-queue) |❌|✔️|✔️|
|| SMTP relay |❌|✔️|✔️|
| Remote access | [FTP](remote-access/ftp) |✔️|✔️|✔️|
|| [SFTP](remote-access/sftp) |✔️|✔️|✔️|
|| [SSH](remote-access/ssh) |✔️|✔️|✔️|
|| [WebDAV](remote-access/webdav) |✔️|✔️|✔️|
| Backups[^4] ||✔️|✔️|✔️|
| Other services | [API](api) |✔️|✔️|✔️|
|| [Scheluded tasks](tasks) |✔️|✔️|✔️|
|| Services[^5] |✔️|✔️|✔️|
|| [Firewall management](security/network/configure-firewall) |❌|✔️|✔️|
|| [Docker](advanced/docker) |❌|✔️|✔️|
|| [VPN](security/vpn) |❌|✔️|✔️|
|| Database management system replication |❌|Upon request|✔️|
|| Real-time data replication |❌|❌|✔️|

Migration to a higher offer is possible and free of charge: in the _Subscriptions_ menu for plans in the Public Cloud or by contacting [support](https://admin.alwaysdata.com/support/add/) to switch to another environment.

{{% notice note %}}
A well _optimized_ application will have the same performances regardless its environment type. However _less_ users on a server bring more **stability** and **comfort** (no more performance variations due to other users).
{{% /notice %}}

[^1]: Hence, users do not have `root` rights and cannot use `sudo`. Many services can be directly installed at the account level and [Private Cloud](accounts/billing/private-cloud-prices) users can request support for services where this is not the case.
[^2]: Our infrastructure is based on the Debian operating system.
[^3]: Databases **managed** by alwaysdata. It is also possible to install them via the [services](services). The management of these services will then not be performed by alwaysdata. In the Private Cloud, the SGBD are installed upon request and can be added after installation of the server.
[^4]: Daily [backups](backups), directly available in the account and retained for up to 30 rolling days.
[^5]: [Custom programs](services) that operate 24/7.
