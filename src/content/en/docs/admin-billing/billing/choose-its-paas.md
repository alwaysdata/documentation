---
title: Which plan to choose?
eleventyNavigation:
  key: Choosing your Hosting Plan
  parent: Billing
  order: 1
---

The alwaysdata hosting services is a [Platform-as-a-Service](https://en.wikipedia.org/wiki/Platform_as_a_service)[^1]: it provides the infrastructure (data center, the network...) and the system stack (OS[^2], interpreters, libraries, databases, security...). Customers need only handle deploying, securing and updating their applications.

alwaysdata proposes several kinds of environment:

| Name || Description |
|---|---|---|
| [Public Cloud](/en/docs/admin-billing/billing/public-cloud-prices) / Free & Plus Offers || Hosting account spread over several servers - hosting hundreds of users |
||| GRT 1hr, MTTR 4hrs, Availability rate 99.7% |
| [Private Cloud](/en/docs/admin-billing/billing/private-cloud-prices) / Max Offers | Dedicated | Bare-metal server exclusively for a single user |
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
|| [Prioritized tickets](/en/docs/admin-billing/urgent-ticket) |❌|✔️|✔️|
|| Phone |❌|✔️|✔️|
| Websites | Configurable HTTP server |✔️|✔️|✔️|
|| [Marketplace](/en/docs/development/marketplace) |✔️|✔️|✔️|
|| [SSL Let's Encrypt](/en/docs/web-hosting/sites/ssl-tls/lets-encrypt)  |✔️|✔️|✔️|
|| [HTTP cache](/en/docs/web-hosting/sites/customizing/http-cache) |✔️|✔️|✔️|
|| [WAF](/en/docs/web-hosting/sites/customizing/waf) |✔️|✔️|✔️|
|| [Analytics](/en/docs/web-hosting/analytics)  |✔️|✔️|✔️|
|| [Monitoring probes](/en/docs/web-hosting/sites/customizing/use-probes) |❌|✔️|✔️|
|| Optimization tips |❌|✔️|✔️|
| Languages | [PHP](/en/docs/web-hosting/languages/php) |✔️|✔️|✔️|
|| [Python](/en/docs/web-hosting/languages/python) |✔️|✔️|✔️|
|| [Ruby](/en/docs/web-hosting/languages/ruby) |✔️|✔️|✔️|
|| [Node.js](/en/docs/web-hosting/languages/nodejs) |✔️|✔️|✔️|
|| [Java](/en/docs/web-hosting/languages/java) |✔️|✔️|✔️|
|| [Deno](/en/docs/web-hosting/languages/deno) |✔️|✔️|✔️|
|| [Elixir](/en/docs/web-hosting/languages/elixir) |✔️|✔️|✔️|
|| [Lua](/en/docs/web-hosting/languages/lua) |✔️|✔️|✔️|
|| [Go](/en/docs/web-hosting/languages/go) |✔️|✔️|✔️|
|| [Any other language](/en/docs/web-hosting/languages) |✔️|✔️|✔️|
| Databases[^3] | [MariaDB (MySQL)](/en/docs/web-hosting/databases/mariadb) |✔️|✔️|✔️|
|| [PostgreSQL](/en/docs/web-hosting/databases/postgresql) |✔️|✔️|✔️|
|| [RabbitMQ](/en/docs/web-hosting/databases/rabbitmq) |✔️|✔️|✔️|
|| [Memcached](/en/docs/web-hosting/databases/memcached) |❌|✔️|✔️|
|| [Redis](/en/docs/web-hosting/databases/redis/) |❌|✔️|✔️|
|| [ElasticSearch](/en/docs/web-hosting/databases/elasticsearch) |❌|✔️|✔️|
|| Others |❌| Upon request and following an analysis by our technical team | Upon request and following an analysis by our technical team |
| E-mails | Customizable configuration |✔️|✔️|✔️|
|| [Filtering via Sieve](/en/docs/e-mails/incoming-e-mails/use-sieve-scripts) scripts |✔️|✔️|✔️|
|| [Mailing-lists](/en/docs/e-mails/mailing-lists) |✔️|✔️|✔️|
|| [SMTP queue](/en/docs/e-mails/outgoing-e-mails/smtp-queue) |❌|✔️|✔️|
|| SMTP relay |❌|✔️|✔️|
| Remote access | [FTP](/en/docs/web-hosting/remote-access/ftp) |✔️|✔️|✔️|
|| [SFTP](/en/docs/web-hosting/remote-access/sftp) |✔️|✔️|✔️|
|| [SSH](/en/docs/web-hosting/remote-access/ssh) |✔️|✔️|✔️|
|| [WebDAV](/en/docs/web-hosting/remote-access/webdav) |✔️|✔️|✔️|
| Backups[^4] ||✔️|✔️|✔️|
| Other services | [API](/en/docs/development/api) |✔️|✔️|✔️|
|| [Scheluded tasks](/en/docs/web-hosting/tasks) |✔️|✔️|✔️|
|| Services[^5] |✔️|✔️|✔️|
|| [Firewall management](/en/docs/technical-specifications/configure-firewall) |❌|✔️|✔️|
|| [Docker](/en/docs/development/docker) |❌|✔️|✔️|
|| [VPN](/en/docs/development/vpn) |❌|✔️|✔️|
|| Database management system replication |❌|Upon request|✔️|
|| Real-time data replication |❌|❌|✔️|

Migration to a higher offer is possible and free of charge: in the _Subscriptions_ menu for plans in the Public Cloud or by contacting [support](https://admin.alwaysdata.com/support/add/) to switch to another environment.

> [!NOTE]
> A well _optimized_ application will have the same performances regardless its environment type. However _less_ users on a server bring more **stability** and **comfort** (no more performance variations due to other users).


[^1]: Hence, users do not have `root` rights and cannot use `sudo`. Many services can be directly installed at the account level and [Private Cloud](/en/docs/admin-billing/billing/private-cloud-prices) users can request support for services where this is not the case.
[^2]: Our infrastructure is based on the Debian operating system.
[^3]: Databases **managed** by alwaysdata. It is also possible to install them via the [services](/en/docs/web-hosting/services). The management of these services will then not be performed by alwaysdata. In the Private Cloud, the SGBD are installed upon request and can be added after installation of the server.
[^4]: Daily [backups](/en/docs/web-hosting/backups), directly available in the account and retained for up to 30 rolling days.
[^5]: [Custom programs](/en/docs/web-hosting/services) that operate 24/7.
