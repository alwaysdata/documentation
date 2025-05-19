+++
url = "/fr/avance/migrations/architecture-logicielle-2020/"
title = "Architecture Logicielle 2020"
layout = "man"
hidden = true
tags = ["infrastructure", "migration"]
+++

Cette migration consiste principalement en une mise à jour générale des logiciels disponibles sur nos serveurs. Elle implique un déplacement du compte sur de nouveaux serveurs - fonctionnant avec l'architecture 2020. **Tous** les serveurs (HTTP, SSH, bases de données, etc) sont susceptibles de changer.

## Pourquoi imposer une migration ?

Les migrations d'architecture ont pour principal objectif de mettre à jour nos serveurs vers une version plus récente de leur système d'exploitation (Debian). Il est important de procéder à ces mises à jour pour deux raisons :

- la sécurité. Les vieilles versions de logiciels ne sont pas supportées éternellement par leurs auteurs ou distributeurs. Lorsqu'un logiciel cesse d'être supporté, il continue à fonctionner, mais les nouvelles failles de sécurité ne sont alors plus corrigées. Continuer à utiliser ces vieilles versions ferait donc courir un risque grave pour la sécurité et la fiabilité de vos applications et données.

- pouvoir utiliser des versions récentes des logiciels. Plus un système d'exploitation est ancien, plus il risque d'avoir des difficultés à faire tourner les logiciels récents. Pour continuer à vous offrir les toutes dernières versions des logiciels que nous proposons (ou que vous pouvez installer vous-même dans votre compte), il est important d'être sur une version relativement récente du système d'exploitation.

Ces migrations d'infrastructure sont effectuées approximativement tous les quatre ans. Cela correspond à la durée de vie d'une version de Debian (de [cinq ans](https://wiki.debian.org/LTS), mais il faut compter le temps incompressible de développement interne avant de basculer sur les nouvelles versions). Cela nous parait être un bon équilibre, évitant des migrations trop fréquentes, mais permettant de faire tourner la quasi-totalité des logiciels récents.

---

Ce document décrit les incompatibilités majeures introduites par cette migration. Nous nous efforçons d'être le plus complet possible, mais il est impossible d'être absolument exhaustif.

## Apache

Apache _2.2_ n'est plus disponible. Les comptes qui utilisaient cette version basculeront automatiquement vers [Apache _2.4_](https://httpd.apache.org/docs/2.4/fr/).

Les directives globales ajoutées par nos utilisateurs, soit dans **Web > Configuration**, soit dans la configuration d'un site de type **Apache personnalisé**, seront désormais insérées **après** les directives par défaut. Cela permet désormais à nos utilisateurs d'écraser ces directives par défaut.

## Bases de données

### MySQL

MariaDB est mis à jour en [version 10.4](https://mariadb.com/kb/en/release-notes-mariadb-104-series/).

### PostgreSQL

PostgreSQL est mis à jour en [version 12](https://www.postgresql.org/docs/12/release-12.html).

### MongoDB

MongoDB est mis à jour en [version 4.2](https://www.mongodb.com/docs/v5.3/release-notes/4.2/).

### CouchDB

CouchDB est mis à jour en [version 3.0](https://docs.couchdb.org/en/stable/whatsnew/3.0.html#version-3-0-0).

## Langages

Pour déterminer la version courante de votre compte : connectez-vous via [SSH](remote-access/ssh) et lancez la commande `cat /etc/debian_version`.

### PHP

| Versions disponibles sur v2020 - Debian Buster (10.X) | Versions disponibles sur v2017- Debian Jessie (8.X) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `4.4.9`                                                          | `4.4.9`                                                          |
| `5.2.17`                                                         | `5.2.17`                                                         |
| `5.3.29`                                                         | `5.3.29`                                                         |
| `5.4.45`                                                         | `5.4.45`                                                         |
| `5.5.38`                                                         | `5.5.38`                                                         |
| `5.6.40`                                                         | `5.6.38` `5.6.37`                                                |
| `7.0.33`                                                         | `7.0.31` `7.0.32`                                                |
| `7.1.33`                                                         | `7.1.21` `7.1.23` `7.1.24` `7.1.26` `7.1.32`                     |
| `7.2.29` `7.2.31` `7.2.32` `7.2.33` `7.2.34`                     | `7.2.9`  `7.2.11` `7.2.12` `7.2.14` `7.2.22`                     |
| `7.3.16` `7.3.18` `7.3.20` `7.3.22` `7.3.24` `7.3.26`            | `7.3.0`  `7.3.1`  `7.3.9`                                        |
| `7.4.4`  `7.4.6`  `7.4.8`  `7.4.10` `7.4.12` `7.4.14`            | `7.4.0`  `7.4.3`                                                 |
| `8.0.0`  `8.0.1`                                                 | `-`                                                              |

- Les versions mineures supprimées sont automatiquement remplacées par la version mineure la plus proche (7.4.4 par exemple pour 7.4).
- Les extensions `bcmath`, `calendar`, `exif`, `ftp`, `soap`, `xmlreader`, `xmlrpc` et `zip` sont désormais automatiquement chargées. Vous pouvez supprimer les directives de chargement explicites de vos _php.ini personnalisés_ si vous le souhaitez.

### Python

| Versions disponibles sur v2020 - Debian Buster (10.X) | Versions disponibles sur v2017- Debian Jessie (8.X) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `2.4.6`                                                          | `2.4.6`                                                          |
| `2.5.6`                                                          | `2.5.6`                                                          |
| `2.6.9`                                                          | `2.6.9`                                                          |
| `2.7.17` `2.7.18`                                                | `2.7.15` `2.7.16` `2.7.18`                                       |
| `3.3.7`                                                          | `3.3.7`                                                          |
| `3.4.10`                                                         | `3.4.9`  `3.4.10`                                                |
| `3.5.9`  `3.5.10`                                                | `3.5.6`  `3.5.9`                                                 |
| `3.6.10` `3.6.11` `3.6.12`                                       | `3.6.7`  `3.6.8`  `3.6.10`                                       |
| `3.7.7`  `3.7.8`  `3.7.9`                                        | `3.7.0`  `3.7.1`  `3.7.2`  `3.7.7`                               |
| `3.8.2`  `3.8.3`  `3.8.4` `3.8.5` `3.8.6` `3.8.7`                | `3.8.0`  `3.8.3`                                                 |
| `3.9.0`  `3.9.1`                                                 | `-`                                                              |

- Les versions mineures supprimées sont automatiquement remplacées par la version mineure la plus proche (3.8.2 par exemple pour 3.8). Si vous aviez créé des `virtualenvs` avec ces versions, vous devrez les recréer.

Lors d'un changement de mineure, plutôt que de recréer l'environnement virtuel, vous pouvez utiliser la commande suivante :

```
python -m venv --upgrade [myenv]/
```

### Ruby

| Versions disponibles sur v2020 - Debian Buster (10.X) | Versions disponibles sur v2017- Debian Jessie (8.X) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `1.8.7-p374`                                                     | `1.8.7-p374`                                                     |
| `1.9.3-p551`                                                     | `1.9.2-p3201` `1.9.3-p551`                                       |
| `2.0.0-p648`                                                     | `2.0.0-p648`                                                     |
| `2.1.10`                                                         | `2.1.10`                                                         |
| `2.2.10`                                                         | `2.2.10`                                                         |
| `2.3.8`                                                          | `2.3.8`                                                          |
| `2.4.9` `2.4.10`                                                 | `2.4.5`                                                          |
| `2.5.7` `2.5.8`                                                  | `2.5.3`      `2.5.5`                                             |
| `2.6.5` `2.6.6`                                                  | `2.6.0`      `2.6.2`                                             |
| `2.7.0` `2.7.1` `2.7.2`                                          | `-`                                                              |
| `3.0.0`                                                          |                                                                  |

- Les versions mineures supprimées sont automatiquement remplacées par la version mineure la plus proche (2.6.5 par exemple pour 2.6).

### Node.js

| Versions disponibles sur v2020 - Debian Buster (10.X) | Versions disponibles sur v2017- Debian Jessie (8.X) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `6.17.1`                                                         | `6.14.4` `6.16.0`  `6.17.0`                                      |
| `8.17.0`                                                         | `8.11.4` `8.12.0`  `8.15.0`  `8.15.0`                            |
| `9.11.2`                                                         | `9.11.1`                                                         |
| `10.19.0` `10.20.1` `10.23.1`                                    | `10.9.0` `10.12.0` `10.13.0` `10.15.1` `10.15.3`                 |
| `11.15.0`                                                        | `11.0.0` `11.1.0`  `11.8.0`  `11.12.0`                           |
| `12.16.1` `12.16.3` `12.20.1`                                    | `12.0.0` `12.14.0`                                               |
| `13.11.0` `13.14.0`                                              | `-`                                                              |
| `14.2.0`  `14.5.0` `14.11.0` `14.15.1` `14.15.4                  | `-`                                                              |
| `15.0.0`  `15.2.1` `15.6.0`                                      | `-`                                                              |

- Les versions mineures supprimées sont automatiquement remplacées par la version mineure la plus proche (12.16.1 par exemple pour 12).

### Elixir

| Versions disponibles sur v2020 - Debian Buster (10.X) | Versions disponibles sur v2017- Debian Jessie (8.X) |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `1.11.1` `1.11.2` `1.11.3`                                       | `-`                                                              |
| `1.10.2` `1.10.3` `1.10.4`                                       | `-`                                                              |
| `1.9.4`                                                          | `-`                                                              |
| `1.8.2`                                                          | `-`                                                              |
| `1.7.4`                                                          | `1.7.3` `1.7.4`                                                  |
| `1.6.6`                                                          | `1.5.3` `1.6.6`                                                  |

- Les versions mineures supprimées sont automatiquement remplacées par la version mineure la plus proche.

### Java

Java deviendra prochainement un langage majeur, administrable via l'interface d'administration.

- Les versions désormais disponibles sont `8.0.41`, `11.0.28` et `14.0.36`. Les versions 7, 9 et 10 sont supprimées.

- La version par défaut devient la `11`. C'est cette version qui sera exécutée lorsque vous utilisez le binaire `java`.

- Jusqu'à présent, pour utiliser une version de Java précise, vous pouviez aller chercher le binaire dans `/usr/lib/jvm`. Ce n'est plus possible : désormais, vous pouvez forcer une version différente en définissant la variable d'environnement `JAVA_VERSION`. Par exemple, pour lancer la version 8 : `JAVA_VERSION=8 java`.

## Divers

- _TLS 1.0_ et _1.1_ sont maintenant **désactivés par défaut** sur le protocole HTTP, ces protocoles anciens présentant des failles de sécurité. Vous pouvez les réactiver en allant dans **Web > Configuration > SSL**, puis en choisissant la configuration **Ancien**.

- Le répertoire des fichiers temporaires **(TEMPDIR)** devient `~/admin/tmp` plutôt que `/tmp`. Les sessions PHP, par exemple, sont créées dans ce répertoire.

- Pour les sites de type Node.js, Elixir et Programme utilisateur, l'IP interne (définie dans la variable d'environnement `IP`) sur laquelle votre application doit écouter changera et passera en **IPv6**. La nouvelle IP sera donnée dans le helptext de la commande du site web.

- Les variables d'environnement `ALWAYSDATA_HTTPD_PORT` et `ALWAYSDATA_HTTPD_IP` ne sont plus disponibles, vous devrez utiliser `PORT` et `IP`.

- La variable d'environnement `PATH` contiendra désormais toujours les chemins locaux des différents langages, par exemple `~/.local/bin`, `~/npm-packages/bin`, etc., y compris en connexion SSH non-login ou non-interactif, et dans vos applications HTTP.

- L'utilisateur propriétaire de votre répertoire personnel `$HOME` (par exemple `/home/foobar`, si votre compte s'appelle *foobar*), auparavant identique à votre nom d'utilisateur (par exemple `foobar`), devient `root`. Le groupe propriétaire reste identique à votre nom d'utilisateur (ici, `foobar`), ce qui ne changera donc rien en pratique. Les permissions de votre répertoire personnel seront en conséquence réinitialisées à 0770.

- Les binaires des langages sont désormais installés à la demande. Dans le cas où vous auriez besoin, par exemple, de `/usr/alwaysdata/python/2.7.18/lib/libpython2.7.so`, assurez-vous d'avoir lancé préalablement `python` en version 2.7.18 au moins une fois.

### Mises à jour diverses

De très nombreux logiciels et bibliothèques seront mis à jour (nos serveurs passent sous Debian Buster, auparavant Debian Jessie). Parmi les mises à jour notables :

- Erlang 21.2 (auparavant 19.2)
- GDAL 2.4 (auparavant 1.10)
- git 2.20 (auparavant 2.19)
- Go 1.11 (auparavant 1.7)
- MapServer 7.4 (auparavant 7.0)
- Mercurial 4.8 (auparavant 3.9)
- PROJ 5.2 (auparavant 4.8)
- QGIS 3.4 (auparavant QGIS 2.4)

### Environnement VPS/dédié

Les services suivants, lorsqu'ils sont installés, seront mis à jour :

- _RabbitMQ_, en version 3.7.8
- _Redis_, en version 5.0

Les montées de versions de _MySQL_ (pas MariaDB) et _ElasticSearch_ seront vues au cas par cas avec les utilisateurs.

Seules les versions des langages _explicitement utilisées_, soit dans la section **Web > Sites**, soit dans la section **Environnement**, seront désormais préinstallées sur le système. Par exemple, si ni la version par défaut de Python (définie dans **Environnement > Python**), ni aucun de vos sites (**Web > Sites**) n'utilise Python 2.4.6, alors cette version ne sera plus préinstallée. Elle sera toutefois automatiquement installée si vous créez un site avec cette version de Python, ou bien que vous changez la version de Python par défaut.

## Préparation de la migration

Un certain nombre d'actions peuvent être effectuées sur l'architecture 2017 - Debian Jessie (8.X) :

- passer sur *Apache 2.4* dans l'onglet **Web > Configuration > Apache** ;

- changer de [configuration TLS](security/ssl-tls/configure-tls) pour passer sur la configuration *Intermédiaire* dans l'onglet **Web > Configuration > SSL** ;

- remplacer dans vos applications les variables d'environnement `ALWAYSDATA_HTTPD_PORT` et `ALWAYSDATA_HTTPD_IP` par `PORT` et `IP` ;

- changer les versions des langages pour passer sur les _dernières mineures_. Cela se passe dans le menu **Environnement** et/ou au niveau de vos sites dans **Web > Sites**. Vous pouvez, par exemple, passer sur PHP 7.3.9 en remplacement de PHP 7.3.0.

Nous vous incitons vivement à faire ces changements en production, avant d'effectuer la migration.

### Bases de données

En parallèle de la migration Buster, nous mettons à disposition les migrations bases de données. Vous pouvez les [tester](advanced/migrations/perform-migration) via le bouton **Tester**. L'ensemble de vos bases et utilisateurs de bases de données sont copiés sur un serveur temporaire, faisant tourner les nouvelles versions.

Les utilisateurs en serveurs mutualisés peuvent faire ces tests en parallèle de la migration Buster. La migration Buster fermera les autres migrations.

Pour les utilisateurs de serveurs VPS et dédiés, le test des migrations bases de données est lié à à la migration Buster. Le bouton **Tester** ne fera que la **copie** des bases de données sur le serveur de test. Concernant le déployement HTTP référez-vous au paragraphe [Préparation de la migration](advanced/migrations/2020-software-architecture#préparation-de-la-migration).

## Déroulement de la migration

Lorsque vous cliquez sur le bouton **Migrer** le processus s'enclenche en général immédiatement, mais parfois quelques minutes plus tard en fonction du nombre d'utilisateurs qui migrent au même instant. La migration s'effectue en plusieurs étapes successives, **service par service**. Par exemple, vos fichiers seront migrés avant vos bases de données.

- La migration de vos fichiers, effectuée en premier, entrainera l'indisponibilité de vos sites web (qui afficheront une _erreur interne_), de vos tâches planifiées de vos accès distants (SSH, FTP, etc.). La coupure est toutefois de __courte durée__ (quelques secondes en général, davantage si vous avez des dizaines de milliers de fichiers), car vos fichiers sont __pré-copiés__ au préalable.

- Durant la migration des bases de données, la __connexion aux bases de données est coupée__. On compte en moyenne 1 minute d'indisponibilité par Go de données. Il peut être pertinent de mettre en place une _page de maintenance statique_ sur vos sites web pour éviter que ne s'affiche une erreur générique de connexion aux bases de données.

Il est possible de savoir si la migration est terminée via le menu des _[Tâches](https://admin.alwaysdata.com/task)_ (en haut à droite de votre interface d'administration).

## Conseils & problèmes courants

- Les comptes changent de serveurs lors de la migration. Il peut y avoir un temps de propagations DNS et il est nécessaire de mettre à jour son fichier `known_hosts` pour la connexion SSH. Vous pouvez le faire via la commande (*[compte] à remplacer par le nom du compte*) :

```sh
$ ssh-keygen -R ssh-[compte].alwaysdata.net
```
- Drupal
    - [Précompression des fichiers CSS et JS](marketplace/drupal#précompression-des-fichiers-css) sur les versions inférieures à la **8.9**.

- Problèmes de failles de segmentation avec [psycopg2](https://github.com/psycopg/psycopg2/issues/543).
