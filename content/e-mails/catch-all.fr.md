+++
url = "/fr/emails/adresse-collectrice/"
title = "Adresse collectrice (catch-all)"
layout = "faq"
hidden = true
tags = ["email"]
+++

Pour collecter tous les messages envoyés vers des adresses de son domaine n'existant pas (ou plus), une adresse collectrice (ou [catch-all](https://fr.wikipedia.org/wiki/Catch-all)) peut être créée.

Représentation : `*@exemple.org`

## Mise en garde

- Cela risque d'amasser une quantité importante de spam. Il est donc conseillé d'activer l'anti-spam sur cette adresse ;
- Les emails d'erreurs normalement envoyés à des adresses n'existant pas ne le seront plus. À vous d'alerter les expéditeurs pouvant croire que l'adresse est valide.

## Divers

- De part ses spécificités, il n'est pas possible de mettre en place réponse automatique. Cela pourrait sinon provoquer des vagues de spam.
	- Néanmoins il est possible de l'utiliser pour des destinataires précis via les [scripts Sieve]({{< ref "e-mails/use-sieve-scripts">}}) en ajoutant ces adresses destinataires dans les instructions `vacation` :

	```
	addresses ["foo@exemple.org", "bar@exemple.org"]
