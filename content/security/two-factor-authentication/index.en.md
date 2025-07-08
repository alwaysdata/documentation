+++
title = "Admin: 2 Factors Auth"
linkTitle = "2 Factors Auth"
layout = "man"
weight = 10
tags = ["2fa", "profil", "security"]
+++

[Two factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) is used to *secure access to a portal* by checking the identity of the person connecting by linking *two methods*.

The technology chosen by alwaysdata is a [Time-based One Time Password](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm) (TOTP) algorithm: **sharing an individual and single use secret code** between our database and the client secure authentication applications.

To use it, go to **Profile** to activate *Two factor authentication*.

{{< fig "images/profile-security.en.png" >}} This will allow you access to your personal secret code and QR code.

Then you can *configure your TOTP application* that will send you a single use security code to be specified the next times you connect to your administration interface. This security code is renewed every *30 seconds* (using a calculation based on the time or a meter).

{{% notice note %}}
In the case of loss of two-factor authentication, send an email to *contact[at]alwaysdata.com* to deactivate it. [A verification will be carried out](accounts/admin-access-loss#blockage-related-to-two-factor-authenticationhahahugoshortcode-s0-hbhb).
{{% /notice %}}

## OTP applications

- **[FreeOTP](https://freeotp.github.io/)**: [Android](https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp), [iOS](https://itunes.apple.com/us/app/freeotp-authenticator/id872559395?mt=8) and [F-Droid](https://f-droid.org/packages/org.fedorahosted.freeotp) ([Github](https://github.com/freeotp))
- **Google Authenticator**: [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) and [iOS](https://apps.apple.com/fr/app/google-authenticator/id388497605)

---
Two-factor authentication is also available [in SSH](remote-access/ssh/ssh-two-factor-authentication) for users of our alwaysdata [Private Cloud offers](accounts/billing/private-cloud-prices)
