+++
url = "/fr/avance/migrations/architecture-logicielle-2024/"
title = "Architecture Logicielle 2024"
layout = "man"
hidden = true
tags = ["infrastructure", "migration"]
+++

## Les changements majeurs

* SSL est désormais requis pour les protocoles de mail (IMAP, SMTP, POP3) et d’accès distant (FTP, WebDAV).
* Les bases de données MongoDB et CouchDB sont supprimées.
* MariaDB est mis à jour en version 10.11.
* PostgreSQL est mis à jour en version 16.


## Chiffrement SSL requis pour l'accès mail et l'accès distant

Il est désormais nécessaire d'activer le chiffrement SSL pour vous connecter aux protocoles :

* de mail (IMAP, SMTP, POP3) ;
* d'accès distant (FTP et WebDAV).

Cela ne concerne pas vos sites web qui sont toujours accessibles sans chiffrement (vous pouvez toutefois décider de [forcer le chiffrement](security/ssl-tls/redirect-http-to-https/)).

### Versions TLS supportées

* Les versions TLS 1.2 et 1.3 sont supportées.
* Les versions TLS 1.0 et 1.1 ne sont plus supportées.

Cela ne concerne pas vos sites web pour lesquels vous pouvez toujours [configurer vous-même le TLS](security/ssl-tls/configure-tls/).


## Arrêt du support de MongoDB

**MongoDB** a basculé vers une [licence SSPL](https://www.mongodb.com/licensing/server-side-public-license/faq) qui nous interdit légalement de continuer à proposer l'hébergement de bases de données MongoDB. Par conséquent, les bases MongoDB seront supprimées lors de la migration et il ne sera plus possible d'en créer.

Vous pouvez :

* faire tourner vous-même MongoDB [dans un service](guides/mongodb). *MongoDB ne sera alors plus géré par alwaysdata.* Si vous êtes sur cloud privé, nous pouvons vous aider à réaliser cette opération.
* migrer vos bases de données chez [MongoDB Atlas](https://www.mongodb.com/atlas).

## Arrêt du support de CouchDB

Nous avons lancé le support de **CouchDB** [en 2011](https://blog.alwaysdata.com/2011/05/12/official-support-of-couchdb/), mais son utilisation est restée très confidentielle (moins de 0,4 % de nos clients en 2024). Par conséquent, nous arrêtons le support de CouchDB : les bases seront supprimées lors de la migration et il ne sera plus possible d'en créer.

Vous pouvez :

* faire tourner vous-même CouchDB [dans un service](guides/couchdb). *CouchDB ne sera alors plus géré par alwaysdata.* Si vous êtes sur cloud privé, nous pouvons vous aider à réaliser cette opération.
* migrer vos bases de données chez un hébergeur tiers comme [Cloudant](https://www.ibm.com/products/cloudant).

## Mise à jour de MariaDB

**MariaDB** est mis à jour en [version 10.11](https://mariadb.com/kb/en/release-notes-mariadb-1011-series/).

Vous pouvez consulter les notes de mises à jour (votre version actuelle est indiquée dans la section *Bases de données > MySQL*):

* de la [10.6 à la 10.11](https://mariadb.com/kb/en/upgrading-from-mariadb-10-6-to-mariadb-10-11/) ;
* de la [10.5 à la 10.6](https://mariadb.com/docs/server/server-management/install-and-upgrade-mariadb/upgrading/upgrading-from-to-specific-versions/upgrading-from-mariadb-10-5-to-mariadb-10-6) ;
* de la [10.4 à la 10.5](https://mariadb.com/docs/server/server-management/install-and-upgrade-mariadb/upgrading/upgrading-from-to-specific-versions/upgrading-from-mariadb-10-4-to-mariadb-10-5).


## Mise à jour de PostgreSQL

**PostgreSQL** est mis à jour en [version 16](https://www.postgresql.org/docs/16/release-16.html). Vous pouvez consulter les [notes de mises à jour](https://www.postgresql.org/docs/release/) (votre version actuelle est indiquée dans la section *Bases de données > PostgreSQL*):

**PostGIS** est mis à jour en [version 3.4](https://postgis.net/docs/manual-3.4/) (auparavant 3.1).


## Versions des langages

### Bascule vers les versions majeures

Depuis [quelques mois](https://changelog.alwaysdata.com/409/detail/), vous pouvez choisir une version majeure d'un langage plutôt qu'une version mineure précise. Cela permet d'utiliser automatiquement la dernière version mineure disponible, avec les derniers correctifs.

La migration va automatiquement remplacer toutes les versions sélectionnées par la version majeure correspondante. Par exemple, PHP 8.3.1 sera remplacé par PHP 8.3, qui fait tourner la dernière version 8.3.x disponible. Lorsqu'une nouvelle version de PHP 8.3 sera ajoutée, elle remplacera alors la version précédente.

Vous aurez toujours la possibilité de sélectionner, après la migration, une version mineure. Ce sera alors cette version précise qui tournera, sans mise à jour automatique.

### Versions disponibles

Voici la liste des versions mineures disponibles :

Langage|Versions disponibles
---|---
PHP| `4.4.9` `5.2.17` `5.3.29` `5.4.45` `5.5.38` `5.6.40` `7.0.33` `7.1.33` `7.2.34` `7.3.33` `7.4.33` `8.0.30` `8.1.28` `8.2.19` `8.3.7`
Python|`2.4.6` `2.5.6` `2.6.9` `2.7.18` `3.3.7` `3.4.10` `3.5.10` `3.6.15` `3.7.17` `3.8.19` `3.9.19` `3.10.14` `3.11.9` `3.12.3`
Ruby|`1.8.7-p374` `1.9.3-p551` `2.0.0-p648` `2.1.10` `2.2.10` `2.3.8` `2.4.10` `2.5.9` `2.6.10` `2.7.8` `3.0.7` `3.1.6` `3.2.4` `3.3.2`
Node.js| `6.17.1` `8.17.0` `10.24.1` `12.22.12` `14.21.3` `16.20.2` `18.20.3` `20.14.0`
Elixir|`1.13.4` `1.14.5` `1.15.8` `1.16.3`
Java|`8.0.412` `11.0.23` `17.0.11` `21.0.3`
Deno|`1.43.5`
.NET|`6.0.31` `8.0.6`

En particulier, les versions non-LTS de plusieurs langages ont été supprimées :

* Node.js : 9, 11, 13, 15, 17, 19, 21
* Java : 14
* .NET : 5

Si vous utilisiez une de ces versions, elle sera remplacée par la version majeure suivante.


## Mises à jour diverses

Le système d'exploitation passe de *Debian 10 (Buster)* à *Debian 12 (Bookworm)*. Par conséquent, de très nombreux logiciels et bibliothèques seront mis à jour. Parmi les mises à jour notables :

* Erlang 25.2 (auparavant 21.2)
* GDAL 3.9 (auparavant 2.4)
* git 2.45 (auparavant 2.20)
* Go 1.22 (auparavant 1.17)
* MapServer 8.0 (auparavant 7.4)
* PROJ 9.4 (auparavant 5.2)
* QGIS 3.34 (auparavant 3.4)
* RabbitMQ 3.10 (auparavant 3.7)

### Sur cloud privé

* **Redis**, s'il est installé sur votre serveur, est mis à jour en [version 7.0](https://github.com/redis/redis/blob/7.0/00-RELEASENOTES) (auparavant 6.0).
- **MySQL**, s'il est installé sur votre serveur, est mis à jour en [version 8.0](https://dev.mysql.com/doc/relnotes/mysql/8.0/en/).
* **Elasticsearch**, s'il est installé sur votre serveur, est mis à jour en version 8.17.


## Divers

* La commande `composer` exécute désormais **Composer** 2. Vous pouvez démarrer Composer 1 avec la commande `composer1`.
* Le [format des logs HTTP](/sites/formatting-http-logs) par défaut devient le format **Avancé**.
* Les sites de type **Redirection transparente** sont transformés en **Reverse proxy**.
* L'IP 185.31.40.10 est une ancienne IP dépréciée et sera supprimée.


## Conseils & problèmes courants

* Vous pouvez effectuer vous-même, *avant la migration*, certains changements comme sélectionner les versions majeures des langages, utiliser le format de logs *Avancé* ou modifier vos sites de type *Redirection transparente*.

* En [Cloud public](accounts/billing/public-cloud-prices), votre compte sera déplacé sur de nouveaux serveurs lors de la migration, et tous les services vont donc changer d'IP. Les IP utilisées par chaque serveur sont données dans le menu **Avancé > Statut des serveurs**.
    - les adresses de type `[service]-[compte].alwaysdata.net` peuvent ne pas être immédiatement accessibles depuis l'extérieur à cause de la propagation DNS ;
    - pour les domaines n'utilisant pas nos serveurs DNS, le serveur HTTP précédent fera la redirection vers le nouveau serveur HTTP. La redirection peut ne plus fonctionner et il est pertinent de faire les changements d'IP pour pointer sur le bon serveur.

* Il sera nécessaire de mettre à jour votre fichier `known_hosts` local pour vous connecter en SSH. Vous pouvez le faire via la commande (*[compte] à remplacer par le nom du compte*) :

```sh
$ ssh-keygen -R ssh-[compte].alwaysdata.net
```

### Erreurs suite à la migration

1. `cannot open shared object file: No such file or directory`

La mise à jour de certaines bibliothèques système requiert une recompilation du code qui les utilise. Les bibliothèques suivantes sont concernées :

* `libtiff`

En général, ces bibliothèques ne sont pas utilisées directement par les applications mais par l'intermédiaire de dépendances (extension PHP, module Python, gem Ruby, etc.). Il vous suffit de réinstaller ces dépendances sur la nouvelle infrastructure pour résoudre le problème.

## Pourquoi imposer une migration ?

Les migrations d'architecture ont pour principal objectif de mettre à jour nos serveurs vers une version plus récente de leur système d'exploitation (Debian). Il est important de procéder à ces mises à jour pour deux raisons :

* la sécurité. Les vieilles versions de logiciels ne sont pas supportées éternellement par leurs auteurs ou distributeurs. Lorsqu'un logiciel cesse d'être supporté, il continue à fonctionner, mais les nouvelles failles de sécurité ne sont alors plus corrigées. Continuer à utiliser ces vieilles versions ferait donc courir un risque pour la sécurité et la fiabilité de vos applications et données.

* pouvoir utiliser des versions récentes des logiciels. Plus un système d'exploitation est ancien, plus il risque d'avoir des difficultés à faire tourner les logiciels récents. Pour continuer à vous offrir les toutes dernières versions des logiciels que nous proposons (ou que vous pouvez installer vous-même dans votre compte), il est important d'être sur une version relativement récente du système d'exploitation.

Ces migrations d'infrastructure sont effectuées tous les quatre ans. Cela correspond à la durée de vie d'une version de Debian (de [cinq ans](https://wiki.debian.org/LTS), mais il faut compter le temps incompressible de développement interne avant de basculer sur les nouvelles versions). Cela nous parait être un bon équilibre, évitant des migrations trop fréquentes, mais permettant de faire tourner la quasi-totalité des logiciels récents.
