---
title: "alwaysdata prend son indépendance"
date: 2014-02-17
authors: ["Cyril Baÿ"]
---

En mai 2013, nous avons pris une décision majeure pour l'avenir d'alwaysdata. Après bientôt 9 mois passés à chercher, comparer, calculer, acheter, installer, développer, déboguer et documenter, il est aujourd'hui temps d'annoncer.

## Notre propre infrastructure

Depuis ses débuts en 2007, alwaysdata repose sur l'infrastructure (matériel, réseau) de prestataires tiers (principalement [OVH](https://www.ovh.com), mais aussi [Online](https://www.online.net), [Hetzner](https://www.hetzner.de) et [Amazon](https://aws.amazon.com/)). Cela nous a permis de nous concentrer sur le cœur de notre architecture : le logiciel. alwaysdata n'existerait pas sans ces prestataires ; nous leur devons beaucoup.

Ne pas disposer de sa propre infrastructure présente de nombreux avantages, mais aussi des inconvénients :
 
- une partie de notre fiabilité dépend de celle de nos prestataires ;
- nous sommes limités au matériel et aux fonctionnalités proposés par nos prestataires ;
- nous sommes soumis aux changements de politique de nos prestataires.
 
Plus notre infrastructure grossit, plus ces inconvénients prennent de l'importance. Après une longue réflexion, nous avons décidé de sauter le pas et prendre notre indépendance.

## Les détails

Nous avions deux objectifs :
 
- construire une architecture fiable et résistante ;
- être totalement indépendants.
 
De nombreux choix découlent de ces objectifs. Voici les principaux :
 
- nous sommes hébergés dans un datacenter neutre (opéré par [Equinix](https://www.equinix.com)), sans intermédiaire ;
- nous avons adhéré au [RIPE](https://www.ripe.net/) (nous sommes « [LIR](https://www.ripe.net/membership/indices/data/fr.alwaysdata.html) ») pour garantir notre indépendance ;
- tous nos équipements sont en double alimentation ;
- notre réseau interne est totalement redondé : chaque serveur a une double connexion réseau vers deux switches (de marques différentes), qui sont eux-mêmes connectés à deux routeurs (de marques différentes) ;
- nous avons 3 opérateurs réseau (transit) distincts.
 
Quelques détails techniques supplémentaires :
 
- datacenter : nos équipements sont situés dans le datacenter parisien [Equinix PA3](https://www.equinix.com/locations/france-colocation/paris-data-centers) ;
- opérateurs réseau : [IELO](https://www.ielo.net/), [Cogent](https://www.cogentco.com/) et [Interoute](https://www.interoute.com/) ;
- nous sommes présents sur le point de peering [Equinix IX Paris](https://www.equinix-ix.fr/) ;
- notre numéro d'AS est le [60362](https://as60362.net/).
 
## En pratique, ça change quoi ?

Pour nos clients, rien ne change directement : notre service et nos prix restent identiques.

Nos serveurs actuels, situés chez nos prestataires, seront rapatriés sur notre infrastructure au fur et à mesure — la migration totale prendra sans doute jusqu'à deux ans. Nous annoncerons chaque migration [au préalable](https://status.alwaysdata.com/). Nos clients dédiés seront contactés personnellement et nous organiserons la migration de leur serveur ensemble.

D'ici quelques semaines, les nouveaux comptes mutualisés seront hébergés sur notre propre infrastructure. Pour les nouveaux serveurs dédiés, c'est déjà le cas.

Les véritables changements seront visibles indirectement ; quelques exemples :
 
- nous allons pouvoir proposer de nouveaux services. Saviez-vous qu'Equinix est présent dans [14 pays](https://www.equinix.com/locations) ?
- le matériel que nous utilisons est plus adapté à nos usages. Par exemple, les disques et alimentations de nos serveurs sont [échangeables à chaud](https://fr.wikipedia.org/wiki/Hot-swap) ;
- la gamme de matériel que nous pouvons utiliser est plus vaste — par exemple des SSD ou disques de très grosses capacités ;
- notre réseau, entièrement redondé et simplifié, devrait être plus fiable.
 
## Et après ?

Nous avons consacré une bonne partie de l'année 2013 à la construction de notre infrastructure, ce qui a quelque peu ralenti le rythme des nouveautés. Nous préparons de nombreuses choses pour 2014 — notre équipe a d'ailleurs accueilli un nouveau développeur, Martin, il y a quelques semaines. Plus de fiabilité, plus de nouveautés, toujours la même proximité : voilà ce qu'on vous prépare.
