+++
url = "/fr/domaines/deleguer-un-sous-domaine/"
title = "Déléguer un sous-domaine"
tags = ["domaine", "site"]
+++

Pour permettre à un autre utilisateur d'alwaysdata de pouvoir utiliser un sous-domaine de votre domaine, il faut lui donner votre permission.

Pour ce faire, rendez-vous dans **Domaines > Détails de [example.org] - 🔎 > Délégations > Ajouter une délégation**.

{{< fig "images/admin-panel_subdomain-delegation-list.fr.png" "Menu des délégations" >}}

{{< fig "images/admin-panel_subdomain-add-delegation.fr.png" "Ajout d'une délégation : formulaire" >}}

{{% notice info %}}
Ne mettez pas la racine dans **Nom d'hôte**. Par exemple, en indiquant `www.example.org` dans cette case, vous créerez une délégation pour `www.example.org.example.org`.
{{% /notice %}}

{{< fig "images/admin-panel_subdomain-delegation-result.fr.png" "Ajout d'une délégation : résultat" >}}
