+++
url = "/fr/avancé/migrations/effectuer-une-migration/"
title = "Comment effectuer une migration"
layout = "howto"
hidden = true
tags = ["infrastructure", "migration"]
+++

Chaque migration amène des changements qui peuvent provoquer des incompatibilités avec vos applications. C'est pourquoi nous vous conseillons la plus grande vigilance lorsque vous effectuez une migration, d'autant qu'il n'est pas possible de revenir en arrière.

## 1. Lire la documentation

Chaque migration est décrite dans une page de notre documentation. Lisez-la attentivement : les incompatibilités les plus importantes seront notamment indiquées.

## 2. Vérifier la compatibilité de vos applications

Vous aurez peut-être besoin d'intervenir sur vos applications pour qu'elles continuent à fonctionner après la migration. Par exemple, pour une migration vers une version plus récente de MySQL, vous devrez peut-être modifier certaines requêtes SQL.

## 3. Préparer la migration

Avant d'effectuer réellement la migration, vous aurez la possibilité d'effectuer un certain nombres d'actions. Cela vous permet de vous assurer que vos applications continueront à fonctionner, et de les corriger dans le cas contraire.

### Test des bases de données

**Certaines** migrations sont testables via l'utilisation d'un bouton **Tester**. Cela va tenter d'importer les bases de données de votre compte sur un serveur temporaire utilisant les nouvelles versions.

## 4. Effectuer la migration

Une fois que vous avez testé la migration et que vous vous êtes assuré que tout fonctionne correctement, vous pourrez réellement exécuter la migration. Durant la migration, votre compte pourra être indisponible pendant une très courte durée (quelques secondes voire minutes, selon le volume de données de votre compte). _Vous n'avez pas besoin d'arrêter vos sites ou vos bases de données : nous nous occupons de tout_.

Il est possible d'effectuer un retour en arrière _temporaire_ en cas de souci. Ce retour en arrière est possible pendant 7 jours après le lancement de la migration.

- [Spécificités concernant la migration de Cloud Privés]({{< ref "advanced/migrations/vps-and-dedicated-migrations" >}})
