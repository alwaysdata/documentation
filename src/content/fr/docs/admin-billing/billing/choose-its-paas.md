---
permalink: /fr/docs/admin-facturation/facturation/choisir-son-plan/
title: Quelle offre choisir ?
eleventyNavigation:
  key: Choisir son plan d'hébergement
  parent: Facturation
---

L'offre d'hébergement d'alwaysdata est qualifiée de [Platform-as-a-Service](https://fr.wikipedia.org/wiki/Plate-forme_en_tant_que_service)[^1] : elle fournit l'infrastructure (data cen­ter , réseau, machines phy­siques, etc.) et la pile système (OS[^2], inter­pré­teurs, biblio­thèques, bases de don­nées, sécu­ri­té, etc.). Les utilisateurs n'ont à s'occuper que des déploiements, sécurisations et mises à jours de leurs applications.

alwaysdata propose plusieurs types d'environnement :

| Nom || Description |
|---|---|---|
| [Cloud Public](/fr/docs/admin-facturation/facturation/prix-cloud-public/) / Offres Free et Plus || Compte d'hébergement dispatché sur plusieurs serveurs - hébergeants des centaines d'utilisateurs |
||| GTI 1h, GTR 4h, Taux de disponibilité 99.7 % |
| [Cloud Privé](/fr/docs/admin-facturation/facturation/prix-cloud-prive/) / Offres Max | Dédié | Serveur physique réservé à un seul utilisateur |
||| Isolation par compte sans facturation supplémentaire |
||| GTI 15min, GTR 1h, Taux de disponibilité 99.9 % |
|| Gold | Serveur physique réservé à un seul utilisateur, **redondé** dans un autre datacenter |
||| Isolation par compte sans facturation supplémentaire |
||| GTI 15min, GTR 1h, Taux de disponibilité 99.95 % |

Pour toutes ces offres le nombre de sites, domaines, bases de données, emails (...) est illimité.

---

| Services || Cloud Public | Cloud Privé ||
|---|---|---|---|---|
|||| **Dédié** | **Gold** |
| Support | Tickets |✔️|✔️|✔️|
|| [Tickets urgents](/fr/docs/admin-facturation/ticket-urgent/) |❌|✔️|✔️|
|| Téléphone |❌|✔️|✔️|
| Sites web | Serveur HTTP configurable |✔️|✔️|✔️|
|| [Applithèque](/fr/docs/developpement/marketplace) |✔️|✔️|✔️|
|| [SSL Let's Encrypt](/fr/docs/hebergement-web/sites/ssl-tls/certificats-lets-encrypt/) |✔️|✔️|✔️|
|| [Cache HTTP](/fr/docs/hebergement-web/sites/cache-http/) |✔️|✔️|✔️|
  || [WAF](/fr/docs/hebergement-web/sites/waf/) |✔️|✔️|✔️|
|| [Statistiques de visites](/fr/docs/hebergement-web/statistiques/)|✔️|✔️|✔️|
|| [Sondes de monitoring](/fr/docs/hebergement-web/sites/utiliser-les-sondes-de-monitoring/) |❌|✔️|✔️|
|| Conseils d'optimisation |❌|✔️|✔️|
| Langages | [PHP](/fr/docs/hebergement-web/langages/php/) |✔️|✔️|✔️|
|| [Python](/fr/docs/hebergement-web/langages/python/) |✔️|✔️|✔️|
|| [Ruby](/fr/docs/hebergement-web/langages/ruby/) |✔️|✔️|✔️|
|| [Node.js](/fr/docs/hebergement-web/langages/nodejs/) |✔️|✔️|✔️|
|| [Java](/fr/docs/hebergement-web/langages/java/) |✔️|✔️|✔️|
|| [Deno](/fr/docs/hebergement-web/langages/deno/) |✔️|✔️|✔️|
|| [Elixir](/fr/docs/hebergement-web/langages/elixir/) |✔️|✔️|✔️|
|| [Lua](/fr/docs/hebergement-web/langages/lua/) |✔️|✔️|✔️|
|| [Go](/fr/docs/hebergement-web/langages/go/) |✔️|✔️|✔️|
|| [Tout autre langage](/fr/docs/hebergement-web/languages/) |✔️|✔️|✔️|
| Bases de données[^3] | [MariaDB (MySQL)](/fr/docs/hebergement-web/bases-de-donnees/mariadb/) |✔️|✔️|✔️|
|| [PostgreSQL](/fr/docs/hebergement-web/bases-de-donnees/postgresql/) |✔️|✔️|✔️|
|| [RabbitMQ](/fr/docs/hebergement-web/bases-de-donnees/rabbitmq/) |✔️|✔️|✔️|
|| [Memcached](/fr/docs/hebergement-web/bases-de-donnees/memcached/) |❌|✔️|✔️|
|| [Redis](/fr/docs/hebergement-web/bases-de-donnees/redis/) |❌|✔️|✔️|
|| [ElasticSearch](/fr/docs/hebergement-web/bases-de-donnees/elasticsearch/) |❌|✔️|✔️|
|| Autres |❌|Sur demande et après analyse de notre équipe technique|Sur demande et après analyse de notre équipe technique|
| Emails | Configuration personnalisable |✔️|✔️|✔️|
|| [Filtrage via scripts Sieve](/fr/docs/emails/utiliser-les-scripts-sieve/) |✔️|✔️|✔️|
|| [Listes de diffusion](/fr/docs/emails/listes-de-diffusion/) |✔️|✔️|✔️|
|| [File d'attente SMTP](/fr/docs/emails/file-dattente-smtp/) |❌|✔️|✔️|
|| [Relais SMTP](/fr/docs/emails/relais-smtp/) |❌|✔️|✔️|
| Accès distant | [FTP](/fr/docs/hebergement-web/acces-distant/ftp/) |✔️|✔️|✔️|
|| [SFTP](/fr/docs/hebergement-web/acces-distant/sftp/) |✔️|✔️|✔️|
|| [SSH](/fr/docs/hebergement-web/acces-distant/ssh/) |✔️|✔️|✔️|
|| [WebDAV](/fr/docs/hebergement-web/acces-distant/webdav/) |✔️|✔️|✔️|
| Sauvegardes[^4] ||✔️|✔️|✔️|
| Autres | [API](/fr/docs/developpement/api) |✔️|✔️|✔️|
|| [Tâches planifiées](/fr/docs/hebergement-web/taches-planifiees/) |✔️|✔️|✔️|
|| Services[^5] |✔️|✔️|✔️|
|| [Gestion du firewall](/fr/docs/caracteristiques-techniques/configurer-le-firewall) |❌|✔️|✔️|
|| [Docker](/fr/docs/developpement/docker) |❌|✔️|✔️|
|| [VPN](/fr/docs/developpement/vpn) |❌|✔️|✔️|
|| Réplication SGBD |❌|Sur demande|✔️|
|| Réplication des données en temps réel |❌|❌|✔️|

La migration vers une offre supérieure est possible et gratuite : dans l'onglet _Abonnements_ dans le cas d'un changement de pack en Cloud Public ou en contactant le [support](https://admin.alwaysdata.com/support/add/) pour passer sur un autre environnement.

> [!NOTE]
> Une application bien _optimisée_ aura les mêmes performances quel que soit le type d'environnement sur lequel elle se trouve. Toutefois _moins_ d'utilisateurs sur un serveur amène plus de **stabilité** et de **confort** (élimination de variations de performances à cause d'autres utilisateurs).


[^1]: De ce fait, les utilisateurs n'ont pas les droits root et ne peuvent utiliser `sudo`. L'installation de nombreux services peut se faire directement au niveau du compte et les utilisateurs de [Cloud Privé](/fr/docs/admin-facturation/facturation/prix-cloud-prive/) peuvent solliciter le support pour des services dont ce ne serait pas le cas.
[^2]: Notre infrastructure est basée sur le système d'exploitation Debian.
[^3]: Bases de données **infogérées** par alwaysdata. Il est aussi possible d'en installer via les [services](/fr/docs/hebergement-web/services/). L'infogérance de ces services ne sera alors pas effectuée par alwaysdata. En Cloud Privé, les SGBD sont installés à la demande et peuvent être ajoutés après installation du serveur.
[^4]: [Sauvegardes](/fr/docs/hebergement-web/sauvegardes/) quotidiennes et directement accessibles dans le compte. Selon l'offre choisie, elles sont conservées jusqu'à 30 jours glissants.
[^5]: [Programmes génériques](/fr/docs/hebergement-web/services/) devant fonctionner 24h / 24.
