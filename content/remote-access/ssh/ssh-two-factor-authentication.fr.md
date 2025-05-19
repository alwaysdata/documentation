+++
url = "/fr/acces-distant/ssh/authentification-2-facteurs-ssh"
title = "Activer l'authentification 2 facteurs SSH"
layout = "howto"
hidden = true
tags = ["2fa", "sécurité", "ssh"]
+++

{{% notice note %}}
Fonctionnalité disponible uniquement sur les environnements [Cloud privé](accounts/billing/private-cloud-prices).
{{% /notice %}}

Vous devrez [contacter le support](https://admin.alwaysdata.com/support/add) pour installer l'outil `google-authenticator`[^1].

Une fois `google-authenticator` installé sur le serveur, voici comment activer l'authentification 2 facteurs pour chaque compte :

1. Connectez-vous en [SSH](remote-access/ssh) à votre compte ;

2. Créez une nouvelle clé secrète,

    - pour une vérification [TOTP](https://en.wikipedia.org/wiki/Time-based_One-Time_Password) : 
    ```shell
    $ google-authenticator -tDfuw 3
    ```
    
    - pour une vérification [HOTP](https://en.wikipedia.org/wiki/HMAC-based_one-time_password) :
    ```shell
    $ google-authenticator -cfuw 3
    ```
  
Le script vous renverra alors :
 - un QR code et la nouvelle clé secrète à rentrer sur votre application de génération de mots de passe[^2] ;
 - plusieurs codes d'urgence à récupérer de votre côté.

Pour les vérifications TOTP, il sera nécessaire d'indiquer le code renvoyé par votre logiciel.

> L'installation est terminée, l'authentification 2 facteurs SSH est maintenant activée.

[^1]: bien que [développé par Google](https://github.com/google/google-authenticator-libpam/), il s'agit d'un outil **générique** et **open source** de [OTP](https://fr.wikipedia.org/wiki/Mot_de_passe_%C3%A0_usage_unique). Il ne communique à aucun moment avec les serveurs de Google.
[^2]: Exemples d'applications : [FreeOTP](https://freeotp.github.io/) - [Android](https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp), [iOS](https://itunes.apple.com/us/app/freeotp-authenticator/id872559395?mt=8) et [F-Droid](https://f-droid.org/packages/org.fedorahosted.freeotp) ([Github](https://github.com/freeotp)) | Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) et [iOS](https://apps.apple.com/fr/app/google-authenticator/id388497605).
