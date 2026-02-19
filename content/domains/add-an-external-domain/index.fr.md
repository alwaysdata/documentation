+++
url = "/fr/domaines/ajouter-un-domaine-externe/"
title = "Ajouter un domaine externe"
tags = ["domaine"]
+++

Opération gratuite, elle permet de transférer la gestion _technique_ du domaine sans toucher à la gestion _administrative_ (son registrar). Si vous souhaitez passer toute la gestion chez alwaysdata, passez par un [transfert de domaine](/domains/transfer-a-domain).

Nous voulons ici ajouter le domaine et **changer de serveurs DNS** chez le registrar pour mettre `dns1.alwaysdata.com` et `dns2.alwaysdata.com`.

1. Dans votre interface d'administration, allez dans **Domaines > Ajouter un domaine** ;
   {{< fig "images/admin-panel_domain-list.fr.png" "Interface d'administration : liste des domaines" >}}
2. Renseignez les noms de domaines que vous souhaitez ajouter ;
   {{< fig "images/admin-panel_add-domain-1.fr.png" "Interface d'administration : étape 1" >}}
   {{% notice info %}}
   Saisissez uniquement le domaine, sans le sous-domaine. Par exemple : example.org et non www.exemple\.org.
   {{% /notice %}}
3. Choisissez de le **gérer**.
   {{< fig "images/admin-panel_add-domain-2.fr.png" "Interface d'administration : étape 2" >}}

Cela va ajouter le domaine en tant que _domaine externe_ dans la liste.

{{< fig "images/admin-panel_domain-list2.fr.png" "Interface d'administration : Domaine externe" >}}

Vous pourrez alors créer des [adresses email](/e-mails/create-an-e-mail-address), des [sites web](/web-hosting/sites/add-a-site) et gérer les [enregistrements DNS](/domains/add-dns).

{{% notice warning %}}
Si certains enregistrements DNS doivent être gardés - par exemple ne pas changer de prestataire emails - il faudra préparer la [zone DNS](/domains/add-dns) avant d'effectuer le changement de serveurs DNS.
{{% /notice %}}
