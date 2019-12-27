+++
url = "/fr/sécurité/double-authentification/"
title = "Double authentification"
menuTitle = "Double authentification"
layout = "man"
weight = 10
tags = ["2fa", "profil", "sécurité"]
+++


L'[authentification à deux facteurs](https://fr.wikipedia.org/wiki/Authentification_forte) permet de _sécuriser l'accès à un portail_ en vérifiant l'identité de la personne se connectant par l'enchaînement de _deux méthodes_.

La technologie choisie par alwaysdata est l'algorithme [Time-based One Time Password](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm) (TOTP) : **partage d'un code secret individuel et à usage unique** entre notre base de données et les applications d'authentification forte clientes.

Pour l'utiliser, rendez-vous dans **Profil > Sécurité** pour activer l'_Authentification à deux facteurs_.
{{< fig "images/profile-security.fr.png" >}}
Cela vous donnera accès à vos code secret et QR code personnels.

Vous pourrez alors _paramétrer votre application TOTP_ qui vous renverra un code de sécurité à usage unique à indiquer lors des prochaines connexions à l'interface d'administration. Ce code de sécurité est renouvelé toutes les _30 secondes_ (calcul basé sur l'heure ou un compteur).


- Google Authenticator : application HOTP [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) et [iOS](https://apps.apple.com/fr/app/google-authenticator/id388497605)
