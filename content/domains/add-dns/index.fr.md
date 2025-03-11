+++
url = "/fr/domaines/ajouter-un-enregistrement-dns/"
title = "Comment ajouter un enregistrement DNS"
linkTitle = "Ajouter un enregistrement DNS"
layout = "howto"
weight = 6
tags = ["dns", "domaine"]
+++

1.   Allez dans **Domaines > Details de [example.org] -  ⚙️ > Enregistrements DNS** ;
    {{< fig "images/admin-panel_dns-record-list.fr.png" "" >}}

2.  Choisissez **Ajouter un enregistrement DNS** ;

3.  Renseignez le formulaire.
    {{< fig "images/admin_panel_add-record.fr.png" "" >}}

{{% notice warning %}}
Ne mettez pas la racine dans **Nom d'hôte**. Par exemple, en indiquant `www.example.org` dans cette case, vous créerez un enregistrement pour `www.example.org.example.org`.
{{% /notice %}}

{{% notice note %}}
Un enregistrement ayant `@` comme nom d'hôte pour certains prestataires correspond au sous-domaine vide. Dans notre cas, la case **Nom d'hôte** devra être vide.
{{% /notice %}}

- [Ajouter un enregistrement SRV](domains/add-srv-record)
- [Ajouter un enregistrement CAA](add-caa-record)
- [Utiliser des MX externes](domains/use-external-mx)

## Importer un fichier de zone

Un fichier de zone DNS est un fichier texte qui contient les détails de tous les enregistrements DNS contenus. Il suit un format standard, ce qui permet le transfert simple des enregistrements DNS d'un prestataire à un autre.

{{< fig "images/menu.fr.png" "" >}}

Cela supprimera les enregistrements DNS précédemment ajoutés.

## Ressources

- [Liste des types d'enregistrements DNS](https://fr.wikipedia.org/wiki/Liste_des_enregistrements_DNS)
- [Ajouter des enregistrements DNS avec CSV](create-dns-records-using-csv)
