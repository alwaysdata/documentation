---
layout: layouts/indexed.njk
permalink: /fr/docs/domaines/gestion-dns/
title: Gestion DNS
eleventyNavigation:
  key: Gestion DNS
  parent: Domaines
  order: 4
---

Vous pouvez gérer vos DNS, via un système classique, directement dans l'onglet **Domaines**.

Pour utiliser nos serveurs DNS, indiquez chez votre registrar `dns1.alwaysdata.com` et `dns2.alwaysdata.com`.

- [Ressource API](https://api.alwaysdata.com/v1/record/doc/)

> [!NOTE]
> L'[enregistrement SOA](https://fr.wikipedia.org/wiki/SOA_Resource_Record) comprend un numéro de série de 32 bits (compris entre 1 et 4294967295). Nous ne suivons pas la *convention* de le définir avec un format de date qui vient d'une période où les fichiers de zone étaient édités à la main. Le fait de ne pas suivre cette convention *ne doit pas* être considéré comme une erreur.
