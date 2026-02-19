+++
url = "/fr/admin-facturation/profil/authentification-2-facteurs/"
title = "Admin : Authentification 2 facteurs"
linkTitle = "Authentification 2 facteurs"
tags = ["2fa", "profil", "sécurité"]
+++


L'[authentification à deux facteurs](https://fr.wikipedia.org/wiki/Authentification_forte) permet de _sécuriser l'accès à un portail_ en vérifiant l'identité de la personne se connectant par l'enchaînement de _deux méthodes_.

La technologie choisie par alwaysdata est l'algorithme [Time-based One Time Password](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm) (TOTP) : **partage d'un code secret individuel et à usage unique** entre notre base de données et les applications d'authentification forte clientes.

Pour l'utiliser, rendez-vous dans **Profil** pour activer l'_Authentification à deux facteurs_.
{{< fig "images/profile-security.fr.png" >}}
Cela vous donnera accès à vos codes personnels (code secret et QR code).

Vous pourrez alors _paramétrer votre application TOTP_ qui vous renverra un code de sécurité à usage unique à indiquer lors des prochaines connexions à l'interface d'administration. Ce code de sécurité est renouvelé toutes les _30 secondes_ (calcul basé sur l'heure ou un compteur).

{{% notice note %}}
En cas de perte de l'authentification à deux facteurs, envoyez un email à *contact[at]alwaysdata.com* pour la désactiver. [Une vérification sera effectuée](/admin-billing/profile/admin-access-loss#blocage-lié-à-lauthentification-2-facteurshahahugoshortcode-s0-hbhb).
{{% /notice %}}

## OTP applications

- **[2FAS Auth](https://2fas.com/)** : [Google Play](https://apps.apple.com/us/app/2fas-auth/id1217793794) et [Apple Store](https://apps.apple.com/us/app/2fas-auth/id1217793794)
- **[EnteAuth](https://ente.io/auth/)** : [Google Play](https://play.google.com/store/apps/details?id=io.ente.auth), [Apple Store](https://apps.apple.com/us/app/ente-auth/id6444121398) et [F-Droid](https://f-droid.org/packages/io.ente.auth/).

---
Une authentification à deux facteurs est aussi disponible [en SSH](/web-hosting/remote-access/ssh/ssh-two-factor-authentication) pour les utilisateurs des [offres Cloud Privés](/admin-billing/billing/private-cloud-prices) d'alwaysdata.
