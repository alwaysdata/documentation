+++
url = "/fr/avancé/migrations/architecture-logicielle-2020/"
title = "Architecture Logicielle 2020"
layout = "man"
weight = 5
tags = ["infrastructure", "migration"]
+++

Cette migration consiste principalement en une mise à jour générale des logiciels disponibles sur nos serveurs. Elle implique un déplacement du compte sur de nouveaux serveurs - fonctionnant avec l'architecture 2020. **Tous** les serveurs (HTTP, SSH, bases de données, etc) sont susceptibles de changer.

Ce document décrit les incompatibilités majeures introduites par cette migration. Nous nous efforçons d'être le plus complet possible, mais il est impossible d'être absolument exhaustif.

## Apache

Apache _2.2_ n'est plus disponible. Les comptes qui utilisaient cette version basculeront automatiquement vers [Apache _2.4_](https://httpd.apache.org/docs/2.4/fr/).

Les directives globales ajoutées par nos clients, soit dans **Web > Configuration**, soit dans la configuration d'un site de type **Apache personnalisé**, seront désormais insérées **après** les directives par défaut. Cela permet désormais à nos clients d'écraser ces directives par défaut.

## Bases de données

### MySQL

MariaDB est mis à jour en [version 10.4]({{< ref "advanced/migrations/mariadb-10_4" >}}).

### PostgreSQL

PostgreSQL est mis à jour en [version 12]({{< ref "advanced/migrations/postgresql-12" >}}).

### MongoDB

MongoDB est mis à jour en [version 4.2]({{< ref "advanced/migrations/mongodb-4_2" >}}).

### CouchDB

CouchDB est mis à jour en [version 3.0]({{< ref "advanced/migrations/couchdb-3_0" >}}).

## Langages

### PHP

- Les versions mineures suivantes sont supprimées, et automatiquement remplacées par la dernière version mineure disponible

  | 5.6.40 | 7.0.33 | 7.1.33 | 7.2.29 | 7.3.16 | 7.4.4 |
  | ------ | ------ | ------ | ------ | ------ | ----- |
  | 5.6.37 | 7.0.31 | 7.1.21 | 7.2.9  | 7.3.0  | 7.4.0 |
  | 5.6.38 | 7.0.32 | 7.1.23 | 7.2.11 | 7.3.1  | 7.4.3 |
  |        |        | 7.1.24 | 7.2.12 | 7.3.9  |       |
  |        |        | 7.1.26 | 7.2.14 |        |       |
  |        |        | 7.1.32 | 7.2.22 |        |       |

- Les extensions `bcmath`, `calendar`, `exif`, `ftp`, `soap`, `xmlreader`, `xmlrpc` et `zip` sont désormais automatiquement chargées. Vous pouvez supprimer les directives de chargement explicites de vos _php.ini personnalisés_ si vous le souhaitez.

### Python

- Les versions mineures suivantes sont supprimées, et automatiquement remplacées par la dernière version mineure disponible

  | 2.7.17 | 3.4.10 | 3.5.9 | 3.6.10 | 3.7.7 | 3.8.2 |
  | ------ | ------ | ----- | ------ | ----- | ----- |
  | 2.7.15 | 3.4.9  | 3.5.6 | 3.6.7  | 3.7.0 | 3.8.0 |
  | 2.7.16 |        |       | 3.6.8  | 3.7.1 |       |
  |        |        |       |        | 3.7.2 |       |

  Si vous aviez créé des `virtualenvs` avec ces versions, vous devrez les recréer.

### Ruby

- La version 1.9.2-p320 est supprimée et automatiquement remplacée par la version 1.9.3-p551.
- Les versions mineures suivantes sont supprimées, et automatiquement remplacées par la dernière version mineure disponible
  | 2.4.9 | 2.5.7 | 2.6.5 |
  | ----- | ----- | ----- |
  | 2.4.4 | 2.5.3 | 2.6.0 |
  | 2.4.5 | 2.5.5 |       |

### Node.js

- Les versions mineures suivantes sont supprimées, et automatiquement remplacées par la dernière version mineure disponible

  | 6.17.1 | 8.17.0 | 9.11.2 | 10.19.0 | 11.15.0 | 12.16.1 |
  | ------ | ------ | ------ | ------- | ------- | ------- |
  | 6.14.4 | 8.11.4 | 9.11.1 | 10.9.0  | 11.0.0  | 12.0.0  |
  | 6.16.0 | 8.12.0 |        | 10.12.0 | 11.1.0  | 12.14.0 |
  | 6.17.0 | 8.15.0 |        | 10.13.0 | 11.8.0  |         |
  |        | 8.15.0 |        | 10.15.1 | 11.12.0 |         |
  |        |        |        | 10.15.3 |         |         |

### Elixir

- La version 1.5.3 est supprimée et automatiquement remplacée par la version 1.6.6.
- La version mineure suivante est supprimée, et automatiquement remplacée par la dernière version mineure disponible : 1.7.3.

### Java

Java deviendra prochainement un langage majeur, administrable via l'interface d'administration.

- Les versions désormais disponibles sont 8.0.41, 11.0.28 et 14.0.36. Les versions 7, 9 et 10 sont supprimées.
- La version par défaut devient la _11_. C'est cette version qui sera exécutée lorsque vous utilisez le binaire `java`.
- Jusqu'à présent, pour utiliser une version de Java précise, vous pouviez aller chercher le binaire dans `/usr/lib/jvm`. Ce n'est plus possible : désormais, vous pouvez forcer une version différente en définissant la variable d'environnement `JAVA_VERSION`. Par exemple, pour lancer la version 8 : `JAVA_VERSION=8 java`.

## Divers

- _TLS 1.0_ et _1.1_ sont maintenant **désactivés par défaut** sur le protocole HTTP, ces protocoles anciens présentant des failles de sécurité. Vous pouvez les réactiver en allant dans **Web > Configuration > SSL**, puis en choisissant la configuration **Ancien**.
- Le répertoire des fichiers temporaires **(TEMPDIR)** devient `~/admin/tmp` plutôt que `/tmp`. Les sessions PHP, par exemple, sont créées dans ce répertoire.
- Pour les sites de type Node.js, Elixir et Programme utilisateur, l'IP interne (définie dans la variable d'environnement `IP`) sur laquelle votre application doit écouter changera et passera en **IPv6**.
- Les variables d'environnement `ALWAYSDATA_HTTPD_PORT` et `ALWAYSDATA_HTTPD_IP` ne sont plus disponibles, vous devrez utiliser `PORT` et `IP`.
- La variable d'environnement `PATH` contiendra désormais toujours les chemins locaux des différents langages, par exemple `~/.local/bin`, `~/npm-packages/bin`, etc., y compris en connexion SSH non-login ou non-interactif, et dans vos applications HTTP.
- L'utilisateur propriétaire de votre répertoire personnel `$HOME` (par exemple `/home/foobar`, si votre compte s'appelle *foobar*), auparavant identique à votre nom d'utilisateur (par exemple `foobar`), devient `root`. Le groupe propriétaire reste identique à votre nom d'utilisateur (ici, `foobar`), ce qui ne changera donc rien en pratique.

### Mises à jour diverses

De très nombreux logiciels et bibliothèques seront mis à jour (nos serveurs passent sous Debian Buster, auparavant Debian Jessie). Parmi les mises à jour notables :

- Erlang 21.2 (auparavant 19.2)
- GDAL 2.4 (auparavant 1.10)
- git 2.20 (auparavant 2.19)
- Go 1.11 (auparavant 1.7)
- MapServer 7.4 (auparavant 7.0)
- Mercurial 4.8 (auparavant 3.9)
- PROJ 5.2 (auparavant 4.8)
- QGIS 2.18 (auparavant QGIS 2.4)

### Environnement VPS/dédié

Les services suivants, lorsqu'ils sont installés, seront mis à jour :

- _RabbitMQ_, en version 3.7.8
- _Redis_, en version 5.0

Les montées de versions de _MySQL_ (pas MariaDB) et _ElasticSearch_ seront vues au cas par cas avec les clients.

Seules les versions des langages _explicitement utilisées_, soit dans la section **Web > Sites**, soit dans la section **Environnement**, seront désormais préinstallées sur le système. Par exemple, si ni la version par défaut de Python (définie dans **Environnement > Python**), ni aucun de vos sites (**Web > Sites**) n'utilise Python 2.4.6, alors cette version ne sera plus préinstallée. Elle sera toutefois automatiquement installée si vous créez un site avec cette version de Python, ou bien que vous changez la version de Python par défaut.

## Préparation de la migration

Un certain nombre d'actions peuvent être effectuées sur l'architecture [2017]({{< ref "accounts/version" >}}) :

- passer sur *Apache 2.4* dans l'onglet **Web > Configuration > Apache** ;
- changer de [configuration TLS]({{<ref "security/ssl-tls/configure-tls">}}) pour passer sur la configuration *Intermédiaire* dans l'onglet **Web > Configuration > SSL** ;
- remplacer dans vos applications les variables d'environnement `ALWAYSDATA_HTTPD_PORT` et `ALWAYSDATA_HTTPD_IP` par `PORT` et `IP` ;
- changer les versions des langages pour passer sur les _dernières mineures_. Cela se passe dans le menu **Environnement** et/ou au niveau de vos sites dans **Web > Sites**. Vous pouvez, par exemple, passer sur PHP 7.3.9 en remplacement de PHP 7.3.0.

Nous vous incitons vivement à faire ces changements avant d'effectuer la migration.

### Bases de données

En parallèle de la migration Buster, nous mettons à disposition les migrations bases de données. Vous pouvez les [tester]({{<ref "advanced/migrations/perform-migration">}}#3-tester-la-migration) via le bouton **Tester**. L'ensemble de vos bases et utilisateurs de bases de données sont copiés sur un serveur temporaire, faisant tourner les nouvelles versions.

## Déroulement de la migration

Lorsque vous cliquez sur le bouton **Migrer** le processus s'enclenche en général immédiatement, mais parfois quelques minutes plus tard en fonction du nombre de clients qui migrent au même instant. La migration s'effectue en plusieurs étapes successives, **service par service**. Par exemple, vos fichiers seront migrés avant vos bases de données.

- La migration de vos fichiers, effectuée en premier, entrainera l'indisponibilité de vos sites web (qui afficheront une _erreur interne_), de vos tâches planifiées de vos accès distants (SSH, FTP, etc.). La coupure est toutefois de __courte durée__ (quelques secondes en général, davantage si vous avez des dizaines de milliers de fichiers), car vos fichiers sont __pré-copiés__ au préalable.
- Durant la migration des bases de données, la __connexion aux bases de données est coupée__. On compte en moyenne 1 minute d'indisponibilité par Go de données. Il peut être pertinent de mettre en place une _page de maintenance statique_ sur vos sites web pour éviter que ne s'affiche une erreur générique de connexion aux bases de données.

Il est possible de savoir si la migration est terminée via le menu des _[Tâches](https://admin.alwaysdata.com/task)_ (en haut à droite de votre interface d'administration).
