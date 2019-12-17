+++
url = "/fr/domaines/supprimer-un-enregistrement-dns/"
title = "Comment supprimer un enregistrement DNS"
menuTitle = "Supprimer un enregistrement DNS"
layout = "howto"
weight = 9
tags = ["dns", "domaine"]
+++

1. Allez dans **Domaines > Details de domaine.tld (roue crantée) > enregistrements DNS** ;
2. Cliquez sur la **poubelle** correspondant à l'enregistrement à supprimer.
{{< fig "images/admin-panel_dns-record-list.fr.png" "Interface d'administration : liste des enregistrements DNS" >}}

{{% notice note %}}
Les enregistrements créés par défaut par notre système (par exemple en ajoutant une adresse dans **Web > Sites**) ne sont pas _supprimables_ mais vous pouvez les _écraser_ en [ajoutant un enregistrement DNS]({{< ref "domains/add-dns" >}}) pour le nom d'hôte concerné.
{{% /notice %}}
