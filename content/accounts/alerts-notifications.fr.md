+++
url = "/fr/comptes/systeme-dalertes/"
title = "Système d'alertes"
layout = "man"
hidden = true
tags = ["interface d'administration", "suspension"]
+++

Pour de nombreuses raisons, une alerte peut-être enclenchée par notre système dont voici le fonctionnement :

- **ouverture** de l'alerte (par un événement déclencheur) avec envoi d'un email informant le(s) utilisateur(s) concerné(s) ;
- emails de **rappel** ;
- **expiration** de l'alerte (si aucune action corrective n'a été effectuée) avec une action éventuelle.

## Les types d'alerte
### Inactivité
Ce type d'alerte ne concerne que les _plans gratuits_ et a pour but de ne pas encombrer notre infrastructure avec des comptes laissés à l'abandon.

- événement déclencheur : absence de connexion à l'[interface d'administration](https://admin.alwaysdata.com) depuis un certain nombre de jours :
	- un profil ayant moins d'un an d'ancienneté doit se connecter tous les 120 jours ;
	- un profil ayant été créé entre 1 et 4 ans doit se connecter tous les 6 mois ;
	- un profil ayant 4 ans d'ancienneté, 1 connexion par an est nécessaire.
- résolution : se connecter à l'interface d'administration ;
- expiration : suspension du profil inactif et ses comptes.

### Situation financière irrégulière

- événement déclencheur : solde négatif (à l'émission d'une facture par exemple) ;
- résolution : régler afin d'avoir un solde supérieur ou égal à zéro ;
- expiration : suspension du profil concerné et ses comptes.

### Expiration de domaine

- événement déclencheur : un domaine va expirer dans X jours ;
- résolution : renouveler le domaine ;
- expiration : le domaine expirera donc risque de devenir indisponible.

### Renouvellement automatique de domaine

- événement déclencheur : le renouvellement automatique d'un domaine est activé mais le solde est insuffisant OU aucune carte de crédit / aucun compte bancaire n'a été configuré ;
- résolution : alimenter le compte prépayé d'un montant suffisant OU ajouter une carte de crédit / un compte bancaire en prélèvement automatique aux moyens de paiement ;
- expiration : ce type d'alerte n'expire pas.

### Expiration de carte de crédit

- événement déclencheur : une carte de crédit va expirer dans moins de 31 jours ;
- résolution : supprimer ou mettre à jour la carte de crédit ;
- expiration : ce type d'alerte n'expire pas.

### Migration de compte

- événement déclencheur : une [migration](advanced/migrations) concernant un compte est programmée ;
- résolution : appliquer la migration ;
- expiration : la migration sera appliquée automatiquement (pas nécessairement le jour même de l'expiration).
