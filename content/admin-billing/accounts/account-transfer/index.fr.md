+++
url = "/fr/admin-facturation/comptes/cession-de-compte/"
title = "Cession de compte"
tags = ["compte", "profil"]
+++

Pour certains cas, il n'est pas nécessaire de passer par le processus de cession et un changement des informations de profil suffit. En revanche, si l'historique client[^1] ne doit pas suivre, préférez la cession.

## Changement de profil

> Par exemple, pour faire suite à la vente de sa société ou au changement d'interlocuteur. C'est aussi ce qu'il faudra suivre pour un changement d'adresse.

Rendez-vous dans le menu **Profil** pour modifier les informations de profil.

{{< fig "images/profile.fr.png" "" >}}

Toute information de profil peut être modifiée que ce soit au niveau de l'authentification à l'interface d'administration alwaysdata (adresse email, mot de passe) ou de la propriété (raison sociale, nom, adresse). Les prochaines factures seront émises avec les nouvelles informations de profil.

## Cession

> Pour notamment ne céder que certains comptes, les céder à plusieurs personnes ou encore que le destinataire ne récupère pas son historique client.

Rendez-vous sur **Abonnements > Céder à un autre utilisateur**. Vous devrez indiquer l'adresse email du profil destinataire qui pourra alors l'accepter dans l'onglet **Cessions** de son interface client.

{{< fig "images/accounts.fr.png" "" >}}

{{% notice info %}}
Seul le _propriétaire du compte_ peut initier la cession.
{{% /notice %}}

**Cela ferme l'abonnement actuel et en ouvre un sur le profil destinataire**. Il est possible de céder un compte de deux manières :

- le profil destinataire est facturé *dès acceptation de la cession*. Un remboursement au prorata est automatiquement exécuté sur le profil émetteur ;
- La date d'échéance de l'ancien abonnement est gardée et le profil destinataire n'est facturé qu'*à échéance*. Aucun remboursement au prorata ne sera effectué sur le profil émetteur.

Tant que le nouveau propriétaire n'a pas validé la cession le profil émetteur reste propriétaire du compte et peut l'annuler dans l'onglet **Cessions**.

[^1]: L'historique client comprend les tickets de support, la facturation, et les actions effectuées sur l'interface d'administration alwaysdata et son API.
