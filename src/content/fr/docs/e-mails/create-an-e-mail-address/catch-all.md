---
permalink: /fr/docs/emails/creer-une-adresse-email/adresse-collectrice/
title: Adresse collectrice (catch-all)
eleventyNavigation:
  key: Catch-all
  parent: Créer une adresse email
  order: 3
---

Pour collecter tous les messages envoyés vers des adresses de son domaine n'existant pas (ou plus), une adresse collectrice (ou [catch-all](https://fr.wikipedia.org/wiki/Catch-all)) peut être créée.

Représentation : `*@example.org`

## Mise en garde

- Cela risque d'amasser une quantité importante de spam. Il est donc conseillé d'activer l'anti-spam sur cette adresse ;
- Les emails d'erreurs normalement envoyés à des adresses n'existant pas ne le seront plus. À vous d'alerter les expéditeurs pouvant croire que l'adresse est valide.

## Divers

- De part ses spécificités, il n'est pas possible de mettre en place réponse automatique. Cela pourrait sinon provoquer des vagues de spam.
	- Néanmoins il est possible de l'utiliser pour des destinataires précis via les [scripts Sieve](/fr/docs/emails/emails-entrants/utiliser-les-scripts-sieve/) en ajoutant ces adresses destinataires dans les instructions `vacation` :

	```
	addresses ["foo@example.org", "bar@example.org"]
