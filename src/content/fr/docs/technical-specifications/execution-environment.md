---
permalink: /fr/docs/caracteristiques-techniques/environnement-execution/
title: Environnement d'exécution
eleventyNavigation:
  key: Environnement d'exécution
  parent: Caractéristiques techniques
  order: 11
---

## Système

Vos programmes s'exécutent sur un Linux x64 standard ([Debian](https://www.debian.org/)).

## Isolation

Chaque compte dispose de son propre UID/GID. Il est isolé des autres comptes par les mécanismes standards de Linux :

- [cgroups](https://fr.wikipedia.org/wiki/Cgroups) pour les ressources ;
- permissions UID/GID pour les fichiers.

## Processus

- Aucune restriction sur les processus pouvant être exécutés.
- Aucun filtrage des ports pour les connexions sortantes. Les utilisateurs du [Cloud Privé](/fr/docs/admin-facturation/facturation/prix-cloud-prive/) peuvent en ajouter via le [firewall](/fr/docs/caracteristiques-techniques/configurer-le-firewall/).
- Un processus à arrêter reçoit le signal `SIGTERM`, puis `SIGKILL` s'il est toujours actif 30 secondes plus tard.

> [!TIP] Astuce
> Interceptez `SIGTERM` pour arrêter proprement votre application (fermeture des connexions, écriture des données en attente).

- [Limites](/fr/docs/caracteristiques-techniques/limites/)
- [Responsabilités](/fr/docs/caracteristiques-techniques/responsabilites/)
