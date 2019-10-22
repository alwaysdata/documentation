+++
title = "Comment effectuer une migration"
menuTitle = "Effectuer une migration"
layout = "howto"
weight = 10
draft = false
+++

Chaque migration amène des changements qui peuvent provoquer des incompatibilités avec vos applications. C'est pourquoi nous vous conseillons la plus grande vigilance lorsque vous effectuez une migration, d'autant qu'il n'est pas possible de revenir en arrière.

## Étape 1 : lire la documentation

Chaque migration est décrite dans une page de notre documentation. Lisez-la attentivement : les incompatibilités les plus importantes seront notamment indiquées.

## Étape 2 : vérifier la compatibilité de vos applications

Vous aurez peut-être besoin d'intervenir sur vos applications pour qu'elles continuent à fonctionner après la migration. Par exemple, pour une migration vers une version plus récente de MySQL, vous devrez peut-être modifier certaines requêtes SQL.

## Étape 3 : tester la migration

Avant d'effectuer réellement la migration, vous aurez la possibilité de la tester en utilisant le bouton *Tester*. Ce que fait concrètement ce bouton dépend de la migration, mais en règle générale il va copier les données de votre compte sur un serveur temporaire et vous permettre d'y accéder comme si la migration avait eu lieu.

Prenons un exemple. Pour une migration vers PostgreSQL 9.6, le bouton **Tester** va copier toutes vos bases de données vers un serveur faisant tourner PostgreSQL 9.6. Il s'agit d'une duplication : vos bases de données continuent à être accessibles normalement via votre serveur PostgreSQL habituel.

Vous pourrez alors vous connecter au serveur temporaire, dont l'adresse sera indiquée après avoir cliqué sur le bouton **Tester**. Cela vous permettra par exemple de tester vos applications avec cette nouvelle version de PostgreSQL. Concrètement, vous devrez peut-être dupliquer vos applications, modifier leur configuration pour utiliser ce serveur temporaire à la place de l'habituel et vérifier qu'elles continuent à fonctionner.

## Étape 4 : effectuer la migration

Une fois que vous avez testé la migration et que vous vous êtes assuré que tout fonctionne correctement, vous pourrez réellement exécuter la migration. Durant la migration, votre compte pourra être indisponible pendant une très courte durée (quelques secondes voire minutes, selon le volume de données de votre compte). _Vous n'avez pas besoin d'arrêter vos sites ou vos bases de données : nous nous occupons de tout_.

> Attention : une fois la migration effectuée, il ne sera pas possible de revenir en arrière.


## Serveurs dédiés et VPS

La plupart des migrations impliquent un changement global sur le serveur. Par exemple, la migration vers une nouvelle version de notre infrastructure logicielle va demander une réinstallation complète du serveur.

En environnement mutualisé, lors d'une migration, les comptes sont migrés vers un nouveau serveur faisant tourner la nouvelle version. Lorsque vous avez un serveur dédié ou VPS, ce n'est pas possible : vous n'avez qu'un seul serveur. Pour vous éviter d'avoir à effectuer la migration brutale de votre serveur, et donc de l'ensemble des comptes s'y trouvant, les migrations se font en plusieurs étapes :

- vous testez les migrations de l'ensemble de vos comptes (comme en mutualisé) ;
- lorsque vous êtes prêt à démarrer la migration réelle de vos comptes, nous vous mettrons à disposition un serveur de transit de même configuration que votre serveur dédié ou VPS ;
- vous pourrez alors effectuer la migration de chacun de vos comptes, un par un. Ils seront déplacés sur ce serveur de transit ;
- lorsque l'intégralité de vos comptes auront été migrés sur ce serveur de transit , votre serveur initial sera réinstallé pour tourner sous la nouvelle version de notre infrastructure logicielle ;
- tous vos comptes, alors situés sur le serveur de transit, seront enfin déplacés de manière transparente vers le serveur initial.

Durant la réinstallation de votre serveur, ses adresses IP seront reroutées vers le serveur de transit pour que vos services restent accessibles normalement. Une courte période d'indisponibilité de ces IP (autour d'une minute) sera toutefois à prévoir. Si vous utilisez nos serveurs DNS, le trafic aura de toute façon été redirigé préalablement vers les IP du serveur de transit, vous ne subirez donc aucune période d'indisponibilité.

> Le serveur de transit vous sera mis à disposition sans surcoût pour une période d'une semaine maximum. Si vous n'avez pas terminé la migration de l'ensemble de vos comptes au terme de cette semaine, le serveur de transit sera facturé au même coût que votre serveur dédié/VPS (au prorata, jour par jour) — en plus du serveur d'origine qui reste facturé normalement.


La mise à disposition du serveur de transit dépendra de la disponibilité au moment de votre demande. Il se peut donc que vous deviez attendre qu'un serveur soit libéré.
