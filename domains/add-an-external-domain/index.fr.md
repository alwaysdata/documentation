+++
url = "/fr/domaines/ajouter-un-domaine-externe/"
title = "Comment ajouter un domaine externe"
menuTitle = "Ajouter un domaine externe"
layout = "howto"
weight = 5
tags = ["domaine"]
+++

Opération gratuite, elle permet de transférer la gestion _technique_ du domaine sans toucher à la gestion _administrative_ (son registrar). Si vous souhaitez passer toute la gestion chez alwaysdata, passez par un [transfert de domaine]({{< ref "domains/transfer-a-domain" >}}).
Nous voulons ici ajouter le domaine et changer de [serveurs DNS]({{< ref "remote-access/login-details" >}}) chez votre registrar. 

1. Dans votre interface d'administration, allez dans **Domaines > Ajouter un domaine** ;
   {{< fig "images/admin-panel_domain-list.fr.png" "Interface d'administration : liste des domaines" >}}
2. Renseignez les noms de domaines que vous souhaitez acheter ;
   {{< fig "images/admin-panel_add-domain-1.fr.png" "Interface d'administration : étape 1" >}}
   {{% notice info %}}
   Saisissez uniquement le domaine, sans le sous-domaine. Par exemple : exemple.org et non www.exemple\.org.
   {{% /notice %}}
3. Choisissez de le **gérer**.
   {{< fig "images/admin-panel_add-domain-2.fr.png" "Interface d'administration : étape 2" >}}

Cela va ajouter le domaine en tant que _domaine externe_ dans la liste.

{{< fig "images/admin-panel_domain-list2.fr.png" "Interface d'administration : Domaine externe" >}}

Vous pourrez alors lui créer des [adresses emails]({{< ref "e-mails/create-an-e-mail-address" >}}) et gérer les [enregistrements DNS]({{< ref "domains/add-dns" >}}).
