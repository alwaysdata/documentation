+++
url = "/fr/plateforme/domaines/ajouter-un-enregistrement-dns/"
title = "Comment ajouter un enregistrement DNS"
menuTitle = "Ajouter un enregistrement DNS"
layout = "howto"
weight = 70
tags = ["dns", "domaine"]
+++

1. Allez dans **Domaines > Details de domaine.tld (roue crantée) > enregistrements DNS** ;
{{< fig "images/admin-panel_dns-record-list.fr.png" "Interface d'administration : liste des enregistrements DNS" >}}
2. Choisissez **Ajouter un enregistrement DNS** ;
3. Renseignez le formulaire.
{{< fig "images/admin_panel_add-record.fr.png" "Interface d'administration : liste des enregistrements DNS" >}}

{{% notice warning %}}
Ne mettez pas la racine dans **Nom d'hôte**. Par exemple, en indiquant _www.domaine.tld_ dans cette case, vous créerez un enregistrement pour *www.domaine.tld.domaine.tld*.
{{% /notice %}}

- [Ajouter un enregistrement SRV]({{< ref "platform/domains/add-srv-record" >}})
- [Utiliser des MX externes]({{< ref "platform/domains/use-external-mx" >}})

## Resources

- [Liste des types d'enregistrements DNS](https://fr.wikipedia.org/wiki/Liste_des_enregistrements_DNS)
