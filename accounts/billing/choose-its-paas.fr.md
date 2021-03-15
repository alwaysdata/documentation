+++
url = "/fr/comptes/facturation/choisir-son-plan/"
title = "Quelle offre choisir ?"
menuTitle = "Choisir son plan d'hébergement"
layout = "man"
weight = 1
tags = ["cloud public", "facturation", "serveur dédié", "serveur vps"]
+++

L'offre d'hébergement d'alwaysdata est qualifiée de [Platform-as-a-Service](https://fr.wikipedia.org/wiki/Plate-forme_en_tant_que_service)[^1] : elle fournit l'infrastructure (data cen­ter , réseau, machines phy­siques, etc.) et la pile système (OS[^2], inter­pré­teurs, biblio­thèques, bases de don­nées, sécu­ri­té, etc.). Les utilisateurs n'ont à s'occuper que des déploiements, sécurisations et mises à jours de leurs applications.

alwaysdata propose plusieurs types d'environnement :

| Nom || Description |
|---|---|---|
| [Cloud public]({{< ref "accounts/billing/cloud-prices" >}})[^3] || Compte d'hébergement dispatché sur plusieurs serveurs - hébergeants des centaines d'utilisateurs |
||| GTI 1h, GTR 4h, Taux de disponibilité 99.7 % |
| [Catalyst]({{< ref "accounts/billing/catalyst-prices" >}}) | VPS | Serveur virtuel sur serveur physique - serveur physique hébergeant moins de 10 utilisateurs |
||| Isolation par compte sans facturation supplémentaire |
||| GTI 30min, GTR 2h, Taux de disponibilité 99.8 % |
|| Dédié | Serveur physique réservé à un seul utilisateur |
||| Isolation par compte sans facturation supplémentaire |
||| GTI 15min, GTR 1h, Taux de disponibilité 99.9 % |
|| Gold | Serveur physique réservé à un seul utilisateur, **redondé** dans un autre datacenter |
||| Isolation par compte sans facturation supplémentaire |
||| GTI 15min, GTR 1h, Taux de disponibilité 99.95 % |

Pour toutes ces offres le nombre de sites, domaines, bases de données, emails (...) est illimité.

---

| Services || Cloud public | Catalyst |
|---|---|---|---|---|---|
|||| **VPS** | **Dédié** | **Gold** |
| Support | Tickets |✔️|✔️|✔️|✔️|
|| [Tickets urgents]({{< ref "accounts/urgent-ticket" >}}) |❌|❌|✔️|✔️|
|| Téléphone |❌|❌|✔️|✔️|
| Sites web | Serveur HTTP configurable |✔️|✔️|✔️|✔️|
|| [Applithèque]({{< ref "marketplace" >}}) |✔️|✔️|✔️|✔️|
|| [SSL Let's Encrypt]({{< ref "security/ssl-tls/lets-encrypt" >}}) |✔️|✔️|✔️|✔️|
|| [Cache HTTP]({{< ref "sites/http-cache" >}}) |✔️|✔️|✔️|✔️|
|| [WAF]({{< ref "sites/waf" >}}) |✔️|✔️|✔️|✔️|
|| [Statistiques de visites]({{< ref "analytics" >}})|✔️|✔️|✔️|✔️|
|| [Sondes de monitoring]({{< ref "sites/use-probes" >}}) |❌|❌|✔️|✔️|
|| Conseils d'optimisation |❌|❌|✔️|✔️|
| Langages | [PHP]({{< ref "languages/php" >}}) |✔️|✔️|✔️|✔️|
|| [Python]({{< ref "languages/python" >}}) |✔️|✔️|✔️|✔️|
|| [Ruby]({{< ref "languages/ruby" >}}) |✔️|✔️|✔️|✔️|
|| [Node.js]({{< ref "languages/nodejs" >}}) |✔️|✔️|✔️|✔️|
|| [Java]({{< ref "languages/java" >}}) |✔️|✔️|✔️|✔️|
|| [Deno]({{< ref "languages/deno" >}}) |✔️|✔️|✔️|✔️|
|| [Elixir]({{< ref "languages/elixir" >}}) |✔️|✔️|✔️|✔️|
|| [Lua]({{< ref "languages/lua" >}}) |✔️|✔️|✔️|✔️|
|| [Go]({{< ref "languages/go" >}}) |✔️|✔️|✔️|✔️|
|| [Tout autre langage](https://www.alwaysdata.com/fr/langage/personnalise/) |✔️|✔️|✔️|✔️|
| Bases de données | [MariaDB (MySQL)]({{< ref "databases/mariadb" >}}) |✔️|✔️|✔️|✔️|
|| [PostgreSQL]({{< ref "databases/postgresql" >}}) |✔️|✔️|✔️|✔️|
|| [CouchDB]({{< ref "databases/couchdb" >}}) |✔️|✔️|✔️|✔️|
|| [RabbitMQ]({{< ref "databases/rabbitmq" >}}) |✔️|✔️|✔️|✔️|
|| [Elasticsearch]({{< ref "databases/elasticsearch" >}}) |❌|✔️|✔️|✔️|
|| [Memcached]({{< ref "databases/memcached" >}}) |❌|✔️|✔️|✔️|
|| [Redis]({{< ref "databases/redis" >}}) |❌|✔️|✔️|✔️|
|| Autres|❌| À la demande | À la demande | À la demande |
| Emails | Configuration personnalisable |✔️|✔️|✔️|✔️|
|| [Filtrage via scripts Sieve]({{< ref "e-mails/use-sieve-scripts" >}}) |✔️|✔️|✔️|✔️|
|| Listes de diffusion |✔️|✔️|✔️|✔️|
|| File d'attente SMTP |❌|✔️|✔️|✔️|
|| Relais SMTP |❌|✔️|✔️|✔️|
| Accès distant | [FTP]({{< ref "remote-access/ftp" >}}) |✔️|✔️|✔️|✔️|
|| [SFTP]({{< ref "remote-access/sftp" >}}) |✔️|✔️|✔️|✔️|
|| [SSH]({{< ref "remote-access/ssh" >}}) |✔️|✔️|✔️|✔️|
|| [WebDAV]({{< ref "remote-access/webdav" >}}) |✔️|✔️|✔️|✔️|
| Sauvegardes[^4] ||✔️|✔️|✔️|✔️|
| Autres services | [API]({{< ref "api" >}}) |✔️|✔️|✔️|✔️|
|| [Tâches planifiées]({{< ref "tasks" >}}) |✔️|✔️|✔️|✔️|
|| [Gestion du pare-feu]({{< ref "security/network/configure-firewall" >}}) |❌|✔️|✔️|✔️|
|| [VPN](https://www.alwaysdata.com/fr/services/vpn/) |❌|❌|✔️|✔️|

La migration vers une offre supérieure est possible et gratuite : dans l'onglet _Comptes_ dans le cas d'un changement de pack en Cloud public ou en contactant le [support](https://admin.alwaysdata.com/support/add/) pour passer sur un autre environnement.

{{% notice note %}}
Une application bien _optimisée_ aura les mêmes performances quel que soit le type d'environnement sur lequel elle se trouve. Toutefois _moins_ d'utilisateurs sur un serveur amène plus de **stabilité** et de **confort** (élimination de variations de performances à cause d'autres utilisateurs).
{{% /notice %}}

[^1]: De ce fait, les utilisateurs n'ont pas les droits root et ne peuvent utiliser `sudo`. L'installation de nombreux services peut se faire directement au niveau du compte et les utilisateurs VPS et dédiés peuvent solliciter le support pour des services dont ce ne serait pas le cas.
[^2]: Notre infrastructure est basée sur le système d'exploitation Debian.
[^3]: Le plan gratuit du Cloud public offre 100 Mo d'espace disque à usage non lucratif.
[^4]: [Sauvegardes]({{< ref "backups" >}}) quotidiennes, conservées durant 30 jours et directement accessibles dans le compte.
