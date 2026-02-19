+++
url = "/fr/admin-facturation/facturation/choisir-son-plan/"
title = "Quelle offre choisir ?"
linkTitle = "Choisir son plan d'hébergement"
tags = ["cloud public", "facturation", "serveur dédié", "serveur gold"]
+++

L'offre d'hébergement d'alwaysdata est qualifiée de [Platform-as-a-Service](https://fr.wikipedia.org/wiki/Plate-forme_en_tant_que_service)[^1] : elle fournit l'infrastructure (data cen­ter , réseau, machines phy­siques, etc.) et la pile système (OS[^2], inter­pré­teurs, biblio­thèques, bases de don­nées, sécu­ri­té, etc.). Les utilisateurs n'ont à s'occuper que des déploiements, sécurisations et mises à jours de leurs applications.

alwaysdata propose plusieurs types d'environnement :

| Nom || Description |
|---|---|---|
| [Cloud Public](/admin-billing/billing/public-cloud-prices) / Offres Free et Plus || Compte d'hébergement dispatché sur plusieurs serveurs - hébergeants des centaines d'utilisateurs |
||| GTI 1h, GTR 4h, Taux de disponibilité 99.7 % |
| [Cloud Privé](/admin-billing/billing/private-cloud-prices) / Offres Max | Dédié | Serveur physique réservé à un seul utilisateur |
||| Isolation par compte sans facturation supplémentaire |
||| GTI 15min, GTR 1h, Taux de disponibilité 99.9 % |
|| Gold | Serveur physique réservé à un seul utilisateur, **redondé** dans un autre datacenter |
||| Isolation par compte sans facturation supplémentaire |
||| GTI 15min, GTR 1h, Taux de disponibilité 99.95 % |

Pour toutes ces offres le nombre de sites, domaines, bases de données, emails (...) est illimité.

---

| Services || Cloud Public | Cloud Privé |
|---|---|---|---|---|
|||| **Dédié** | **Gold** |
| Support | Tickets |✔️|✔️|✔️|
|| [Tickets urgents](/admin-billing/urgent-ticket) |❌|✔️|✔️|
|| Téléphone |❌|✔️|✔️|
| Sites web | Serveur HTTP configurable |✔️|✔️|✔️|
|| [Applithèque](/development/marketplace) |✔️|✔️|✔️|
|| [SSL Let's Encrypt](/web-hosting/sites/ssl-tls/lets-encrypt) |✔️|✔️|✔️|
|| [Cache HTTP](/web-hosting/sites/http-cache) |✔️|✔️|✔️|
|| [WAF](/web-hosting/sites/waf) |✔️|✔️|✔️|
|| [Statistiques de visites](/web-hosting/analytics)|✔️|✔️|✔️|
|| [Sondes de monitoring](/web-hosting/sites/use-probes) |❌|✔️|✔️|
|| Conseils d'optimisation |❌|✔️|✔️|
| Langages | [PHP](/web-hosting/languages/php) |✔️|✔️|✔️|
|| [Python](/web-hosting/languages/python) |✔️|✔️|✔️|
|| [Ruby](/web-hosting/languages/ruby) |✔️|✔️|✔️|
|| [Node.js](/web-hosting/languages/nodejs) |✔️|✔️|✔️|
|| [Java](/web-hosting/languages/java) |✔️|✔️|✔️|
|| [Deno](/web-hosting/languages/deno) |✔️|✔️|✔️|
|| [Elixir](/web-hosting/languages/elixir) |✔️|✔️|✔️|
|| [Lua](/web-hosting/languages/lua) |✔️|✔️|✔️|
|| [Go](/web-hosting/languages/go) |✔️|✔️|✔️|
|| [Tout autre langage](/web-hosting/languages) |✔️|✔️|✔️|
| Bases de données[^3] | [MariaDB (MySQL)](/web-hosting/databases/mariadb) |✔️|✔️|✔️|
|| [PostgreSQL](/web-hosting/databases/postgresql) |✔️|✔️|✔️|
|| [RabbitMQ](/web-hosting/databases/rabbitmq) |✔️|✔️|✔️|
|| [Memcached](/web-hosting/databases/memcached) |❌|✔️|✔️|
|| [Redis](/web-hosting/databases/redis) |❌|✔️|✔️|
|| [ElasticSearch](/web-hosting/databases/elasticsearch) |❌|✔️|✔️|
|| Autres |❌|Sur demande et après analyse de notre équipe technique|Sur demande et après analyse de notre équipe technique|
| Emails | Configuration personnalisable |✔️|✔️|✔️|
|| [Filtrage via scripts Sieve](/e-mails/use-sieve-scripts) |✔️|✔️|✔️|
|| [Listes de diffusion](/e-mails/mailing-lists) |✔️|✔️|✔️|
|| [File d'attente SMTP](/e-mails/smtp-queue) |❌|✔️|✔️|
|| [Relais SMTP](/e-mails/smtp-relay) |❌|✔️|✔️|
| Accès distant | [FTP](/web-hosting/remote-access/ftp) |✔️|✔️|✔️|
|| [SFTP](/web-hosting/remote-access/sftp) |✔️|✔️|✔️|
|| [SSH](/web-hosting/remote-access/ssh) |✔️|✔️|✔️|
|| [WebDAV](/web-hosting/remote-access/webdav) |✔️|✔️|✔️|
| Sauvegardes[^4] ||✔️|✔️|✔️|
| Autres | [API](/development/api) |✔️|✔️|✔️|
|| [Tâches planifiées](/web-hosting/tasks) |✔️|✔️|✔️|
|| Services[^5] |✔️|✔️|✔️|
|| [Gestion du firewall](/technical-specifications/configure-firewall) |❌|✔️|✔️|
|| [Docker](/development/docker) |❌|✔️|✔️|
|| [VPN](/development/vpn) |❌|✔️|✔️|
|| Réplication SGBD |❌|Sur demande|✔️|
|| Réplication des données en temps réel |❌|❌|✔️|

La migration vers une offre supérieure est possible et gratuite : dans l'onglet _Abonnements_ dans le cas d'un changement de pack en Cloud Public ou en contactant le [support](https://admin.alwaysdata.com/support/add/) pour passer sur un autre environnement.

{{% notice note %}}
Une application bien _optimisée_ aura les mêmes performances quel que soit le type d'environnement sur lequel elle se trouve. Toutefois _moins_ d'utilisateurs sur un serveur amène plus de **stabilité** et de **confort** (élimination de variations de performances à cause d'autres utilisateurs).
{{% /notice %}}

[^1]: De ce fait, les utilisateurs n'ont pas les droits root et ne peuvent utiliser `sudo`. L'installation de nombreux services peut se faire directement au niveau du compte et les utilisateurs de [Cloud Privé](/admin-billing/billing/private-cloud-prices) peuvent solliciter le support pour des services dont ce ne serait pas le cas.
[^2]: Notre infrastructure est basée sur le système d'exploitation Debian.
[^3]: Bases de données **infogérées** par alwaysdata. Il est aussi possible d'en installer via les [services](/web-hosting/services). L'infogérance de ces services ne sera alors pas effectuée par alwaysdata. En Cloud Privé, les SGBD sont installés à la demande et peuvent être ajoutés après installation du serveur.
[^4]: [Sauvegardes](/web-hosting/backups) quotidiennes et directement accessibles dans le compte. Selon l'offre choisie, elles sont conservées jusqu'à 30 jours glissants.
[^5]: [Programmes génériques](/web-hosting/services) devant fonctionner 24h / 24.
