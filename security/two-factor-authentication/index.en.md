+++
title = "2 Factors Auth"
layout = "man"
weight = 10
tags = ["2fa", "profil", "security"]
+++

[Two factor authentication](https://en.wikipedia.org/wiki/Strong_authentication) is used to *secure access to a portal* by checking the identity of the person connecting by linking *two methods*.

The technology chosen by alwaysdata is a [Time-based One Time Password](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm) (TOTP) algorithm: **sharing an individual and single use secret code** between our database and the client secure authentication applications.

To use it, go to **Profile > Security** to activate *Two factor
authentication*.

{{< fig "images/profile-security.en.png" >}} This will allow you access to your personal secret code and QR code.

Then you can *configure your TOTP application* that will send you a single use security code to be specified the next times you connect to your administration interface. This security code is renewed every *30 seconds* (using a calculation based on the time or a meter).

- Google Authenticator: an [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) and [iOS](https://apps.apple.com/fr/app/google-authenticator/id388497605) TOTP application.
