+++
url = "/fr/domaines/ajouter-un-enregistrement-dns/"
title = "Comment ajouter un enregistrement DNS"
menuTitle = "Ajouter un enregistrement DNS"
layout = "howto"
weight = 6
tags = ["dns", "domaine"]
+++

1.   Allez dans **Domaines > Details de [exemple.org] (roue crantée) > Enregistrements DNS** ;
    {{< fig "images/admin-panel_dns-record-list.fr.png" "Interface d'administration : liste des enregistrements DNS" >}}

2.  Choisissez **Ajouter un enregistrement DNS** ;

3.  Renseignez le formulaire.
    {{< fig "images/admin_panel_add-record.fr.png" "Interface d'administration : liste des enregistrements DNS" >}}

{{% notice warning %}}
Ne mettez pas la racine dans **Nom d'hôte**. Par exemple, en indiquant `www.exemple.org` dans cette case, vous créerez un enregistrement pour `www.exemple.org.exemple.org`.
{{% /notice %}}

---

- [Ajouter un enregistrement SRV]({{< ref "domains/add-srv-record" >}})
- [Ajouter un enregistrement CAA]({{< relref "add-caa-record" >}})
- [Utiliser des MX externes]({{< ref "domains/use-external-mx" >}})

## Ressources

- [Liste des types d'enregistrements DNS](https://fr.wikipedia.org/wiki/Liste_des_enregistrements_DNS)
