---
permalink: /fr/docs/emails/bloquer-lutilisation-des-emails/
title: Bloquer l'utilisation des emails
eleventyNavigation:
  key: Bloquer l'utilisation des emails
  parent: Emails
---
 
Chez alwaysdata, la gestion DNS s'effectue via le menu **Domaines > Détails de [example.org] - ⚙️ > Enregistrements DNS**.
 
Des enregistrements DNS `MX`, `SPF` et `DMARC` sont créés par défaut, l'ajout de ce type d'enregistrements prendra donc le pas sur les enregistrements créés par le système.
 
## Bloquer la réception
 
Il suffit de ne PAS créer d'adresse email chez votre prestataire mail et/ou d'ajouter, chez votre prestataire DNS, un enregistrement de type `MX` pointant sur une valeur n'existant pas. Les expéditeurs recevront une erreur.
 
Vous pouvez, par exemple, créer l'enregistrement suivant :
 
Type|Nom d'hôte|Valeur|Priorité
---|---|---|---
`MX`|[laisser vide ou @ selon le prestataire DNS]|`/dev/null`|1
 
 
## Bloquer les envois
 
On veut ici éviter que des pirates informatiques se fassent passer pour vous en envoyant des emails avec votre domaine en FROM.
 
Créez les enregistrements DNS suivants :
 
Type|Nom d'hôte|Valeur
---|---|---
`TXT`|[laisser vide ou @ selon le prestataire DNS]|`v=spf1 -all`
`TXT `|`_dmarc`|`v=DMARC1; p=reject;`
 
Cela indiquera aux serveurs destinataires d'emails utilisant votre domaine qu'ils doivent rejeter les emails. En effet :
 
- l'enregistrement `SPF` indique qu'il n'existe pas de serveurs SMTP autorisé à envoyer des mails pour votre domaine ;
- l'enregistrement `DMARC` indique que tous les emails partant de votre domaine doivent donc être à jeter.
