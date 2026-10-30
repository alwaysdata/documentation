---
permalink: /fr/docs/hebergement-web/sites/divers/
title: Questions diverses
eleventyNavigation:
  key: Sites - Questions diverses
  parent: Sites web
  order: 98
---

## Site HTTP par défaut

Cette option, des [Clouds Privé](/fr/docs/admin-facturation/facturation/prix-cloud-prive/) et paramétrée dans le menu **HTTP** du serveur, permet de renseigner un site sur lequel sera rediriger les requêtes arrivant sur le serveur, dont l'adresse ne serait pas définie dans l'interface d'administration alwaysdata. Cela remplacera le "*Site not found*" renvoyé par défaut.

Elle est utile lorsque des adresses pointent au niveau DNS sur le serveur mais qu'elles ne sont pas renseignés dans **Web > Sites**. Cela peut, par exemple, être dans le cas d'un site avec un nombre très élevé d'adresses - qu'on ne veut pas toutes déclarées dans **Sites** - ou encore d'un oubli.

## Temps d'inactivité

À paramétrer dans le menu **Web > Sites > Modifier le [site] - ⚙️ > Avancé** (30 minutes par défaut).

Le processus d'un site est démarré à la première requête reçue. Il est [arrêté](/fr/docs/caracteristiques-techniques/environnement-execution/#processus) si aucune requête n'est reçue pendant le temps d'inactivité, puis relancé automatiquement à la requête suivante. Un site ne tourne jamais en plusieurs instances simultanées, y compris pendant un redémarrage.

Pour qu'une application ne soit jamais arrêtée pour inactivité, indiquez comme valeur `0`.

Il n'y a, cependant, *aucune garantie* qu'une application tourne en permanence : elle n'est lancée qu'à la première requête reçue et peut être arrêtée à tout moment (par exemple lors d'une maintenance de notre part). S'il est *nécessaire* qu'une application web tourne 24h/24, créez un [service](/fr/docs/hebergement-web/services/) ainsi qu'un site de type [Reverse-proxy](/fr/docs/hebergement-web/sites/ajouter-un-site/#configuration) pour son accès web.
