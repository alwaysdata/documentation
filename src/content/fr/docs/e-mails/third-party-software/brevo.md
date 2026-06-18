---
permalink: /fr/docs/emails/logiciels-tiers/brevo/
title: Authentifier son domaine pour utiliser Brevo
eleventyNavigation:
  key: Utiliser Brevo
  parent: Logiciels tiers
  order: 6
---
 
Brevo (anciennement Sendinblue) est une plateforme d'emailing connue. Pour améliorer la délivrabilité des emails envoyés, il faut les [authentifier](/fr/docs/emails/emails-sortants/configurer-spf-dkim-dmarc/) en créant, chez votre prestataire, des enregistrements DNS qu'ils vous donneront. Voici comment le faire chez alwaysdata.
 
Rendez-vous dans **Domaines > Details de [example.org] -  ⚙️ > Enregistrements DNS > Ajouter un enregistrement DNS**
 
Type | Nom d'hôte | Valeur
--- | --- | ---
TXT | [laisser vide] | brevo-code:[valeur donnée]
CNAME | brevo1._domainkey | b1.[valeur donnée].dkim.brevo.com
CNAME | brevo2._domainkey | b2.[valeur donnée].dkim.brevo.com
 
Il est nécessaire de [rajouter leurs serveurs](https://help.brevo.com/hc/fr/articles/4414335084434-Fusionner-des-enregistrements-SPF) en ajoutant `include:spf.brevo.com` à l'enregistrement SPF déjà créé. Voici un exemple :
 
Type | Nom d'hôte | Valeur
--- | --- | ---
TXT | [laisser vide] | v=spf1 include:_spf.alwaysdata.com include:spf.brevo.com ~all

Ils demandent aussi des changements sur l'enregistrement DMARC et l'ajout de `rua=mailto:rua@dmarc.brevo.com` :
 
Type | Nom d'hôte | Valeur
--- | --- | ---
TXT | _dmarc | v=DMARC1; p=none; rua=mailto:rua@dmarc.brevo.com
