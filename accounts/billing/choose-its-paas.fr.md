+++
url = "/fr/comptes/facturation/choisir-son-plan/"
title = "Quelle offre choisir ?"
menuTitle = "Choisir son plan d'hébergement"
layout = "man"
weight = 1
tags = ["facturation", "serveur dédié", "serveur mutualisé", "serveur vps"]
+++

L'offre d'hébergement d'alwaysdata est qualifiée de [Platform-as-a-Service](https://fr.wikipedia.org/wiki/Plate-forme_en_tant_que_service) [^1] : elle fournit l'infrastructure (data cen­ter , réseau, machines phy­siques, etc.) et la pile système (OS, inter­pré­teurs, biblio­thèques, bases de don­nées, sécu­ri­té, etc.). Les clients n'ont à s'occuper que des déploiements, sécurisations et mises à jours de leurs applications.

alwaysdata propose quatre types d'environnement :

|                   | [Mutualisé](https://www.alwaysdata.com/fr/tarifs/#shared) [^2] | [VPS](https://www.alwaysdata.com/fr/tarifs/#vps) | [Dédié](https://www.alwaysdata.com/fr/tarifs/#dedicated) | [Gold](https://www.alwaysdata.com/fr/tarifs/#gold) |
|-------------------|-------------------------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|--------------------|
| Détail de l'offre | Compte sur serveurs hébergeants des centaines de clients                                 | Serveur virtuel sur serveur physique hébergeant moins de 10 clients              | Serveur physique réservé à un seul client                    | Serveur physique réservé à un seul client redondé dans un autre datacenter |
|                   | Compte d'hébergement divisé sur plusieurs serveurs physiques selon le service | Division par compte sans facturation supplémentaire | Division par compte sans facturation supplémentaire | Division par compte sans facturation supplémentaire |
|                   | Sites / domaines / bases de données / emails (...) illimités                  | Sites / domaines / bases de données / emails (...) illimités | Sites / domaines / bases de données / emails (...) illimités | Sites / domaines / bases de données / emails (...) illimités |
| Garanties         | GTR 1h, GTI 4h, Taux de disponibilité 99.7 %                                  | GTR 30min, GTI 2h, Taux de disponibilité 99.8 %              | GTR 15min, GTI 1h, Taux de disponibilité 99.9 %              | GTR 15min, GTI 1h, Taux de disponibilité 99.99 %                |
| Support           | Tickets                                                                       | Tickets                                                      | Tickets, [tickets urgents]({{< ref "accounts/urgent-ticket" >}}),  téléphone | Tickets, [tickets urgents]({{< ref "accounts/urgent-ticket" >}}),  téléphone |
| Sites web         | Serveur HTTP configurable, applithèque, SSL Let's Encrypt, [cache HTTP]({{< ref "sites/http-cache" >}}), [WAF]({{< ref "sites/waf" >}}), statistiques de visites | Serveur HTTP configurable, applithèque, SSL Let's Encrypt, [cache HTTP]({{< ref "sites/http-cache" >}}), [WAF]({{< ref "sites/waf" >}}), statistiques de visites | Serveur HTTP configurable, applithèque, SSL Let's Encrypt, [cache HTTP]({{< ref "sites/http-cache" >}}), [WAF]({{< ref "sites/waf" >}}), statistiques de visites | Serveur HTTP configurable, applithèque, SSL Let's Encrypt, [cache HTTP]({{< ref "sites/http-cache" >}}), [WAF]({{< ref "sites/waf" >}}), statistiques de visites |
|                   ||| [Sondes de monitoring]({{< ref "sites/use-probes" >}}) | [Sondes de monitoring]({{< ref "sites/use-probes" >}}) |
| Langages          | PHP, Python, Ruby, Node.js, Java, Elixir, Lua, Go ou tout autre langage via le [Programme utilisateur](https://www.alwaysdata.com/fr/langage/personnalise/) | PHP, Python, Ruby, Node.js, Java, Elixir, Lua, Go ou tout autre langage via le [Programme utilisateur](https://www.alwaysdata.com/fr/langage/personnalise/) | PHP, Python, Ruby, Node.js, Java, Elixir, Lua, Go ou tout autre langage via le [Programme utilisateur](https://www.alwaysdata.com/fr/langage/personnalise/) | PHP, Python, Ruby, Node.js, Java, Elixir, Lua, Go ou tout autre langage via le [Programme utilisateur](https://www.alwaysdata.com/fr/langage/personnalise/) |
| Bases de données  | MariaDB (MySQL), PostgreSQL, MongoDB, CouchDB, RabbitMQ | MariaDB (MySQL), PostgreSQL, MongoDB, CouchDB, RabbitMQ | MariaDB (MySQL), PostgreSQL, MongoDB, CouchDB, RabbitMQ | MariaDB (MySQL), PostgreSQL, MongoDB, CouchDB, RabbitMQ |
|                   |                                                         | ElasticSearch, Memcached, Redis |  ElasticSearch, Memcached, Redis |  ElasticSearch, Memcached, Redis |
| Emails            | Configuration personnalisable, filtrage via scripts Sieve, listes de diffusion | Configuration personnalisable, filtrage via scripts Sieve, listes de diffusion | Configuration personnalisable, filtrage via scripts Sieve, listes de diffusion | Configuration personnalisable, filtrage via scripts Sieve, listes de diffusion |
||| File d'attente SMTP, relais SMTP | File d'attente SMTP, relais SMTP | File d'attente SMTP, relais SMTP |
| Accès distant | FTP, SFTP, SSH, WebDAV | FTP, SFTP, SSH, WebDAV | FTP, SFTP, SSH, WebDAV | FTP, SFTP, SSH, WebDAV |
| Sauvegardes       | Quotidiennes, conservées 30 jours et disponible directement sur le compte | Quotidiennes, conservées 30 jours et disponible directement sur le compte | Quotidiennes, conservées 30 jours et disponible directement sur le compte | Quotidiennes, conservées 30 jours et disponible directement sur le compte |
| Autres services   | [API]({{< ref "api" >}}), [tâches planifiées]({{< ref "tasks" >}}) | [API]({{< ref "api" >}}), [tâches planifiées]({{< ref "tasks" >}}), gestion du pare-feu | [API]({{< ref "api" >}}), [tâches planifiées]({{< ref "tasks" >}}), gestion du pare-feu, [VPN](https://www.alwaysdata.com/fr/services/vpn/) | [API]({{< ref "api" >}}), [tâches planifiées]({{< ref "tasks" >}}), gestion du pare-feu, [VPN](https://www.alwaysdata.com/fr/services/vpn/) |


[^1]: De ce fait, les clients n'ont pas les droits root et ne peuvent utiliser `sudo`. L'installation de nombreux services peut se faire directement au niveau du compte et les clients VPS et dédiés peuvent solliciter le support pour des services dont ce ne serait pas le cas.
[^2]: Le plan gratuit en environnement mutualisé offre 100 Mo d'espace disque à usage non lucratif.
