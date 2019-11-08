+++
url = "/fr/plateforme/avancé/migration/effectuer-une-migration/"
title = "Comment effectuer une migration"
menuTitle = "Effectuer une migration"
layout = "howto"
weight = 10
tags = ["migration"]
hidden = true
+++

Chaque migration amène des changements qui peuvent provoquer des incompatibilités avec vos applications. C'est pourquoi nous vous conseillons la plus grande vigilance lorsque vous effectuez une migration, d'autant qu'il n'est pas possible de revenir en arrière.

## 1. Lire la documentation

Chaque migration est décrite dans une page de notre documentation. Lisez-la attentivement : les incompatibilités les plus importantes seront notamment indiquées.

## 2. Vérifier la compatibilité de vos applications

Vous aurez peut-être besoin d'intervenir sur vos applications pour qu'elles continuent à fonctionner après la migration. Par exemple, pour une migration vers une version plus récente de MySQL, vous devrez peut-être modifier certaines requêtes SQL.

## 3. Tester la migration

Avant d'effectuer réellement la migration, vous aurez la possibilité de la tester en utilisant le bouton *Tester*. Ce que fait concrètement ce bouton dépend de la migration, mais en règle générale il va copier les données de votre compte sur un serveur temporaire et vous permettre d'y accéder comme si la migration avait eu lieu.

Prenons un exemple. Pour une migration vers PostgreSQL 9.6, le bouton **Tester** va copier toutes vos bases de données vers un serveur faisant tourner PostgreSQL 9.6. Il s'agit d'une duplication : vos bases de données continuent à être accessibles normalement via votre serveur PostgreSQL habituel.

Vous pourrez alors vous connecter au serveur temporaire, dont l'adresse sera indiquée après avoir cliqué sur le bouton **Tester**. Cela vous permettra par exemple de tester vos applications avec cette nouvelle version de PostgreSQL. Concrètement, vous devrez peut-être dupliquer vos applications, modifier leur configuration pour utiliser ce serveur temporaire à la place de l'habituel et vérifier qu'elles continuent à fonctionner.

## 4. Effectuer la migration

Une fois que vous avez testé la migration et que vous vous êtes assuré que tout fonctionne correctement, vous pourrez réellement exécuter la migration. Durant la migration, votre compte pourra être indisponible pendant une très courte durée (quelques secondes voire minutes, selon le volume de données de votre compte). _Vous n'avez pas besoin d'arrêter vos sites ou vos bases de données : nous nous occupons de tout_.

{{% notice warning %}}
Attention : une fois la migration effectuée, il ne sera pas possible de revenir en arrière.
{{% /notice %}}
