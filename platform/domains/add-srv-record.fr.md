+++
url = "/fr/domaines/ajouter-un-enregistrement-srv/"
title = "Comment ajouter un enregistrement SRV"
menuTitle = "Ajouter un enregistrement SRV"
date = 2019-10-14T17:10:59+02:00
layout = "howto"
weight = 10
draft = false
hidden = true
+++

Un [enregistrement SRV](https://fr.wikipedia.org/wiki/Enregistrement_de_service) définit l'emplacement de services précis.

1. Rendez-vous sur **Domaines > Details de domaine.tld (roue crantée) > Enregistrements DNS** ;
![Interface d'administration : liste des enregistrements DNS](/en/platform/domains/admin-panel_dns-record-list_fr.png)
2. Choisissez **Ajouter un enregistrement DNS** ;
3. Renseignez le formulaire.
![Interface d'administration : ajouter un enregistrement SRV](/en/platform/domains/admin_panel_add-srv_fr.png)

> Ne mettez pas la racine dans **Nom d'hôte**. Par exemple, en indiquant _domaine.tld_ dans cette case, vous créerez un enregistrement pour _domaine.tld.domaine.tld_.

## Quelques exemples


```
-> Configurer automatiquement un client mail avec _autodiscover._tcp :
    » Nom d'hôte : _autodiscover._tcp
    » Valeur : 0 443 addresse.serveur.mail
    » Priorité : 1
    » TTL : 300
   
-> Utiliser Lync (anciennement Skype) avec _sip._tls et _sipfederationtls._tcp :
    » Nom d'hôte : _sip._tls
    » Valeur : 1 443 sipdir.online.lync.com
    » Priorité : 100
    » TTL : 3600
    
    » Nom d'hôte: _sipfederationtls._tcp
    » Valeur: 1 443 sipfed.online.lync.com
    » Priorité: 100
    » TTL : 3600
```
