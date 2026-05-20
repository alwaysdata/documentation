---
layout: layouts/indexed.njk
permalink: /fr/docs/developpement/
title: Développement
eleventyNavigation:
  key: Développement
  order: 6
---

## Questions diverses

### Rediriger les logs

Tout champ de type `command` (programme utilisateur, site Node.js, tâche planifiée, service...) peut être suffixé par `> foo/bar` (chemin de votre choix) pour rediriger les logs de la commande dans un fichier.
