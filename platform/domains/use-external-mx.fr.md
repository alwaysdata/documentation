+++
url = "/fr/domaines/utiliser-des-mx-externes/"
title = "Comment utiliser un serveur mail externe"
menuTitle = "Utiliser des MX externes"
layout = "howto"
weight = 10
draft = false
hidden = true
tags = ["dns", "domaine", "email"]
+++

Pour utiliser le serveur de messagerie d'un autre prestataire, il faut changer d'[enregistrements MX](https://fr.wikipedia.org/wiki/Enregistrement_Mail_eXchanger). Ils determinent le serveur de réception d'un courrier électronique.

1. Allez dans **Domaines > Details de domaine.tld (roue crantée) > enregistrements DNS** ;
![Interface d'administration : liste des enregistrements DNS](/en/platform/domains/admin-panel_dns-record-list_fr.png)
2. Choisissez **Ajouter un enregistrement DNS** ;
3. Renseignez le formulaire.
![Interface d'administration : ajouter un enregistrement MX](/en/platform/domains/admin_panel_add-mx_fr.png)

Cela désactivera automatiquement nos enregistrements MX.

> Ne mettez pas la racine dans **Nom d'hôte**. Par exemple, en indiquant _domaine.tld_ dans cette case, vous créerez un enregistrement pour _domaine.tld.domaine.tld_.

## Serveurs MX de différents prestataires

Prestataire|TTL|Priorité|Valeur
---|---|---|---
Gandi|10800|10|spool.mail.gandi.net
||10800|50|fb.mail.gandi.net
GSuite|3600|1|aspmx.l.google.com
||3600|5|alt1.aspmx.l.google.com
||3600|5|alt2.aspmx.l.google.com
||3600|10|alt3.aspmx.l.google.com
||3600|10|alt4.aspmx.l.google.com
Microsoft Outlook|3600|1|[id_mx_microsoft].mail.protection.outlook.com<br>[id_mx_microsoft] est généré aléatoirement par Microsoft selon le nom du domaine
OVH|3600|1|mx0.mail.ovh.net
||3600|5|mx1.mail.ovh.net
||3600|50|mx2.mail.ovh.net
||3600|100|mx3.mail.ovh.net
