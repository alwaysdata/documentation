---
permalink: /fr/docs/caracteristiques-techniques/limites/
title: Limites
eleventyNavigation:
  key: Limites
  parent: Caractéristiques techniques
  order: 12
---

|Élément|Limite|
|---|---|
|**HTTP**||
|Durée d'une requête|Aucune|
|Taille des requêtes et des réponses|Aucune|
|Connexions simultanées|Aucune|
|Instances simultanées d'un site|1, y compris pendant un redémarrage|
|[Temps d'inactivité](/fr/docs/hebergement-web/sites/divers/#temps-d-inactivite) avant arrêt d'un site|30 minutes par défaut, configurable|
|**Processus**||
|Délai entre `SIGTERM` et `SIGKILL`|30 secondes|
|Ports des connexions sortantes|Aucun filtrage|
|**[Tâches planifiées](/fr/docs/hebergement-web/taches-planifiees/)**||
|Intervalle minimal|1 minute|
|Durée d'exécution|Aucune|
|Exécutions simultanées d'une même tâche|1|

Les ressources (CPU, mémoire, espace disque) dépendent de l'offre : [Cloud
Public](/fr/docs/admin-facturation/facturation/prix-cloud-public/), [Cloud
Privé](/fr/docs/caracteristiques-techniques/ressources-systemes-alertes-et-limitations/).

- [Environnement d'exécution](/fr/docs/caracteristiques-techniques/environnement-execution/)
