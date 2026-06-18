---
layout: layouts/indexed.njk
permalink: /fr/docs/domaines/
title: Domaines
eleventyNavigation:
  key: Domaines
  order: 3
---

Les domaines sont gérés dans l'onglet **Domaines** de votre interface d'administration. [Achetez](/fr/docs/domaines/acheter-un-domaine/), [transférez](/fr/docs/domaines/transferer-un-domaine/) ou [ajoutez en gestion](/fr/docs/domaines/ajouter-un-domaine-externe/) votre domaine. Revendeur [GANDI](https://www.gandi.net/fr), nous nous appuyons sur leur expérience pour vous proposer le plus d'extensions possible. [Contactez-nous](https://admin.alwaysdata.com/support/add/) si l'extension souhaitée n'est pas proposée par défaut.

> [!NOTE]
> Étant revendeur GANDI vous pouvez recevoir des mails de notre part, de la leur et des [registres](https://fr.wikipedia.org/wiki/Registre_de_noms_de_domaine) gérant les extensions de domaines prises.

- [Prix](https://www.alwaysdata.com/fr/domaines/#main)
- [Ressource API](https://api.alwaysdata.com/v1/domain/doc/)
- [Ressource API - DNS](https://api.alwaysdata.com/v1/record/doc/)

> [!WARNING] Attention
> Officiellement invalides (d'après [IDNA2008](http://unicode.org/faq/idn.html)), nous ne supportons pas les **emojis** dans un nom de domaine. Notre infrastructure utilise la [bibliothèque Python `idna`](https://github.com/kjd/idna), qui [respecte impérativement](https://github.com/kjd/idna/issues/18) IDNA2008 à ce stade.
