+++
url = "/fr/avancé/migrations/architecture-logicielle-2020/"
title = "Architecture Logicielle 2020"
layout = "man"
weight = 5
tags = ["infrastructure", "migration"]
+++

Cette migration consiste principalement en une mise à jour générale des logiciels disponibles sur nos serveurs. Elle implique un déplacement du compte sur de nouveaux serveurs - fonctionnant avec l'architecture 2020. **Tous** les serveurs (HTTP, SSH, bases de données, etc) sons susceptibles de changer.

Ce document décrit les incompatibilités majeures introduites par cette migration. Nous nous efforçons d'être le plus complet possible, mais il est impossible d'être absolument exhaustif. Nous vous invitons vivement à procéder à un [test de la migration]({{< ref "advanced/migrations/2020-software-architecture#test-de-la-migration" >}}) pour détecter un maximum d'incompatibilités.

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

- Les versions mineures suivantes sont supprimées, et automatiquement remplacées par la dernière version mineure disponible : 5.6.37, 5.6.38, 7.0.31, 7.0.32, 7.1.21, 7.1.23, 7.1.24, 7.1.26, 7.1.32, 7.2.9, 7.2.11, 7.2.12, 7.2.14, 7.2.22, 7.3.0, 7.3.1, 7.3.9, 7.4.0 et 7.4.3.
- Les extensions `bcmath`, `calendar`, `exif`, `ftp`, `soap`, `xmlreader`, `xmlrpc` et `zip` sont désormais automatiquement chargées. Vous pouvez supprimer les directives de chargement explicites de vos _php.ini personnalisés_ si vous le souhaitez.

### Python

- Les versions mineures suivantes sont supprimées, et automatiquement remplacées par la dernière version mineure disponible : 2.7.16, 2.7.15, 3.4.9, 3.5.6, 3.6.8, 3.6.7, 3.7.2, 3.7.1, 3.7.0 et 3.8.0. Si vous aviez créé des virtualenvs avec ces versions, vous devrez les recréer.

### Ruby

- La version 1.9.2-p320 est supprimée et automatiquement remplacée par la version 1.9.3-p551.
- Les versions mineures suivantes sont supprimées, et automatiquement remplacées par la dernière version mineure disponible : 2.4.5, 2.4.4, 2.5.5, 2.5.3 et 2.6.0.

### Node.js

- Les versions mineures suivantes sont supprimées, et automatiquement remplacées par la dernière version mineure disponible : 6.17.0, 6.16.0, 6.14.4, 8.15.1, 8.15.0, 8.12.0, 8.11.4, 9.11.1, 10.15.3, 10.15.1, 10.13.0, 10.12.0, 10.9.0, 11.12.0, 11.8.0, 11.1.0, 11.0.0, 12.0.0 et 12.14.0.

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
- L'utilisateur propriétaire de votre répertoire personnel `$HOME` (par exemple `/home/foobar`, si votre compte s'appelle *foobar*), auparavant identique à votre nom d'utilisateur (par exemple `foobar`), devient `root`. Le groupe propriétaire reste identique à votre nom d'utilisateur (ici, `foobar`), ce qui ne changera donc rien en pratique. Attention, cette modification ne sera pas effective lors du test de la migration, uniquement après la migration réelle.

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

## Déroulement de la migration

Lorsque vous cliquez sur le bouton **Migrer** le processus s'enclenche en général immédiatement, mais parfois quelques minutes plus tard en fonction du nombre de clients qui migrent au même instant. La migration s'effectue en plusieurs étapes successives, **service par service**. Par exemple, vos fichiers seront migrés avant vos bases de données.

- La migration de vos fichiers, effectuée en premier, entrainera l'indisponibilité de vos sites web (qui afficheront une _erreur interne_), de vos tâches planifiées de vos accès distants (SSH, FTP, etc.). La coupure est toutefois de __courte durée__ (quelques secondes en général, davantage si vous avez des dizaines de milliers de fichiers), car vos fichiers sont __pré-copiés__ au préalable.
- Durant la migration des bases de données, la __connexion aux bases de données est coupée__. On compte en moyenne 1 minute d'indisponibilité par Go de données. Il peut être pertinent de mettre en place une _page de maintenance statique_ sur vos sites web pour éviter que ne s'affiche une erreur générique de connexion aux bases de données.

Il est possible de savoir si la migration est terminée via le menu des _[Tâches](https://admin.alwaysdata.com/task)_ (en haut à droite de votre interface d'administration).

## Test de la migration

Il est très fortement recommandé d'effectuer un test de migration préalablement à la migration réelle pour vous assurer que vos applications continueront à fonctionner, et pour les corriger dans le cas contraire. Pour le faire, utilisez le bouton **Tester**.

{{% notice info %}}
Les [tâches planifiées]({{<ref "tasks">}}) ne sont pas importées lors du test de migration, il n'est donc pas possible de les tester ici.
{{% /notice %}}

### Accès SSH

Vous pourrez vous connecter à votre compte en SSH sur un serveur temporaire. Ce serveur est équipé de l'architecture logicielle 2020, mais **il accède à vos vrais fichiers**, pas à une copie. Toute modification que vous effectueriez sera donc répercutée immédiatement sur votre compte.

L'accès SSH peut être ralenti par rapport au serveur SSH usuel. C'est une conséquence du test, mais cette lenteur disparaitra après la migration réelle.

### Accès HTTP

Vous pourrez tester vos sites de plusieurs manières :

- en y accédant via l'URL usuelle, à laquelle vous ajouterez le suffixe `.migration.alwaysdata.net`. Par exemple, si votre site est accessible normalement à l'adresse `www.example.com`, vous pourrez y accéder sur l'infrastructure de test en allant sur `www.example.com.migration.alwaysdata.net`.

{{% notice warning %}}
le certificat SSL renvoyé sur l'adresse `*.migration.alwaysdata.net` ne sera pas valide, vous devrez _explicitement_ l'autoriser par votre navigateur. Cela ne concerne que le test de la migration, pas la migration réelle, pour laquelle les certificats ne changeront pas.
{{% /notice %}}

{{% notice warning %}}
Certaines applications font une redirection vers l'URL nominale, ce qui empêche de les tester en utilisant cette méthode.
{{% /notice %}}

- en utilisant une extension de navigateur permettant de forcer l'en-tête `Host` (donc le site demandé). Par exemple sous Chrome, l'extension [Virtual Hosts](https://chrome.google.com/webstore/detail/virtual-hosts/aiehidpclglccialeifedhajckcpedom). Vous devrez vous connecter en indiquant l'adresse du serveur HTTP de test (par exemple, `migration-test1.paris1.alwaysdata.com`), mais en demandant l'adresse de votre site.
- en modifiant votre fichier `hosts` pour forcer à utiliser l'IP du serveur HTTP de test pour se connecter à vos sites. C'est faisable en éditant directement le fichier concerné, ou bien par l'intermédiaire d'une extension de navigateur, par exemple [LiveHosts](https://addons.mozilla.org/fr/firefox/addon/livehosts/) sous Firefox.

Vos applications seront alors démarrées sur un serveur temporaire tournant sous l'infrastructure logicielle 2020, comme si la migration avait eu lieu. Comme en SSH, les fichiers de votre compte auxquels ce serveur a accès sont vos vrais fichiers. Les accès peuvent également être ralentis, n'en tenez donc pas compte.

{{% notice warning %}}
La configuration interne de votre compte alwaysdata sur ce serveur temporaire est générée au moment où vous exécutez la migration de test. Elle n'est pas modifiée ensuite. Par exemple, si vous exécutez la migration de test alors que la version PHP définie dans votre environnement est la 7.1.26, puis que vous modifiez ensuite cette version, cette modification ne sera pas répercutée sur le serveur temporaire de migration. Vous devrez alors à nouveau exécuter une migration de test pour prendre en compte la modification. Même chose pour les modifications que vous apportez dans la section **Web > Sites**.
{{% /notice %}}

### Bases de données

Lorsque vous exécutez la migration de test, l'ensemble de vos bases et utilisateurs de bases de données sont copiés sur un serveur temporaire, faisant tourner les nouvelles versions. Vous pourrez ensuite accéder à vos données copiées sur ce serveur en utilisant vos identifiants usuels pour faire vos tests. Contrairement aux fichiers utilisés par les serveur SSH et HTTP, vous travaillez donc ici sur une copie de vos données. À chaque exécution de la migration de test, vos précédentes copies sont écrasées par de nouvelles.
