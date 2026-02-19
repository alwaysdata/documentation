+++
url = "/fr/admin-facturation/profil/tokens/"
title = "Utiliser des Tokens d'accès"
tags = ["api", "profil"]
+++

Les tokens sont des identifiants utilisés pour authentifier un utilisateur ou un programme appelant notre [API](/development/api). 

Pour en générer rendez-vous dans le menu **Profil**.

{{< fig "images/profile-token.fr.png" "Gérer les tokens">}}

Il est nécessaire d'avoir activé l'[authentification 2 facteurs](/admin-billing/profile/two-factor-authentication) pour générer/modifier ses tokens.

{{% notice tip %}}
Pour encore plus de sécurité, générez en un par application.
{{% /notice %}}

Comme pour l'interface d'administration vous pouvez ne donner accès qu'à [certaines IP](/admin-billing/profile/ip-access-authorization).

Ils ont les mêmes [permissions](/admin-billing/permissions) que le profil auquel ils sont liés.
