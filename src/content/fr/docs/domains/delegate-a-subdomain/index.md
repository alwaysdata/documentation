---
permalink: /fr/docs/domaines/deleguer-un-sous-domaine/
title: Déléguer un sous-domaine
eleventyNavigation:
  key: Déléguer un sous-domaine
  parent: Domaines
---

Pour permettre à un autre utilisateur d'alwaysdata de pouvoir utiliser un sous-domaine de votre domaine, il faut lui donner votre permission.

Pour ce faire, rendez-vous dans **Domaines > Détails de [example.org] - 🔎 > Délégations > Ajouter une délégation**.

![Menu des délégations](images/admin-panel_subdomain-delegation-list.png)

![Ajout d'une délégation : formulaire](images/admin-panel_subdomain-add-delegation.png)

> [!NOTE]
> Ne mettez pas la racine dans **Nom d'hôte**. 
> Par exemple, en indiquant `www.example.org` dans cette case, vous créerez une délégation pour `www.example.org.example.org`.


![Ajout d'une délégation : résultat](images/admin-panel_subdomain-delegation-result.png)
