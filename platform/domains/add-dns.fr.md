+++
url = "/fr/domaines/ajouter-un-enregistrement-dns/"
title = "Comment ajouter un enregistrement DNS"
menuTitle = "Ajouter un enregistrement DNS"
layout = "howto"
weight = 10
draft = false
tags = ["dns", "domaine"]
+++

1. Allez dans **Domaines > Details de domaine.tld (roue crantée) > enregistrements DNS** ;
![Interface d'administration : liste des enregistrements DNS](/en/platform/domains/admin-panel_dns-record-list_fr.png)
2. Choisissez **Ajouter un enregistrement DNS** ;
3. Renseignez le formulaire.
![Interface d'administration : ajouter un enregistrement DNS](/en/platform/domains/admin_panel_add-record_fr.png)

> Ne mettez pas la racine dans **Nom d'hôte**. Par exemple, en indiquant _www.domaine.tld_ dans cette case, vous créerez un enregistrement pour _www.domaine.tld.domaine.tld_.

- [Ajouter un enregistrement SRV]({{< ref "platform/domains/add-srv-record" >}})
- [Utiliser des MX externes]({{< ref "platform/domains/use-external-mx" >}})

## Liens

- [Liste des types d'enregistrements DNS](https://fr.wikipedia.org/wiki/Liste_des_enregistrements_DNS)
