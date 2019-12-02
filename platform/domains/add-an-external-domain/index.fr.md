+++
url = "/fr/plateforme/domaines/ajouter-un-domaine-externe/"
title = "Comment ajouter un domaine externe"
menuTitle = "Ajouter un domaine externe"
layout = "howto"
weight = 20
tags = ["domaine"]
+++

Opération gratuite, elle permet de transférer la gestion _technique_ du domaine sans toucher à la gestion _administrative_ (son registrar). Si vous souhaitez passer toute la gestion chez alwaysdata, passez par un [transfert de domaine]({{< ref "platform/domains/transfer-a-domain" >}}).
Nous voulons ici ajouter le domaine et changer de [serveurs DNS]({{< ref "platform/login-details" >}}) chez votre registrar. 

1. Dans votre interface d'administration, allez dans **Domaines > Ajouter un domaine** ;
{{< fig "images/admin-panel_domain-list.fr.png" "Interface d'administration : liste des domaines" >}}
2. Renseignez les noms de domaines que vous souhaitez acheter ;
{{< fig "images/admin-panel_add-domain-1.fr.png" "Interface d'administration : étape 1" >}}
{{% notice info %}}
Saisissez uniquement le domaine, sans le sous-domaine. Par exemple : example.org et non ww.example.org.
{{% /notice %}}

3. Choisissez de le **gérer**.
{{< fig "images/admin-panel_add-domain-2.fr.png" "Interface d'administration : étape 2" >}}

Cela va ajouter le domaine en tant que _domaine externe_ dans la liste.
{{< fig "images/admin-panel_domain-list2.fr.png" "Interface d'administration : Domaine externe" >}}

Vous pourrez alors lui créer des [adresses emails]({{< ref "platform/emails/create-an-email-address" >}}) et gérer les [enregistrements DNS]({{< ref "platform/domains/add-dns" >}}).
