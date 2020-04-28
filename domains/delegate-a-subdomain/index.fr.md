+++
url = "/fr/domaines/déléguer-un-sous-domaine/"
title = "Comment déléguer un sous-domaine"
layout = "howto"
hidden = true
tags = ["domaine", "sites"]
+++

Pour permettre à un autre utilisateur d'alwaysdata de pouvoir utiliser un sous-domaine de votre domaine, il faut lui donner votre permission.

Pour ce faire, rendez-vous dans **Domaines > Détails** du domaine concerné **> Délégations > Ajouter une délégation**.

{{< fig "images/admin-panel_subdomain-delegation-list.fr.png" "Menu des délégations" >}}

{{< fig "images/admin-panel_subdomain-add-delegation.fr.png" "Ajout d'une délégation : formulaire" >}}

{{% notice info %}}
Ne mettez pas la racine dans **Nom d'hôte**. Par exemple, en indiquant `www.exemple.org` dans cette case, vous créerez une délégation pour `www.exemple.org.exemple.org`.
{{% /notice %}}

{{< fig "images/admin-panel_subdomain-delegation-result.fr.png" "Ajout d'une délégation : résultat" >}}
