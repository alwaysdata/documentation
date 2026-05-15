---
title: "Admin: 2 Factors Auth"
eleventyNavigation:
  key: 2 Factors Auth
  parent: Profile Management
---

[Two factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) is used to *secure access to a portal* by checking the identity of the person connecting by linking *two methods*.

The technology chosen by alwaysdata is a [Time-based One Time Password](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm) (TOTP) algorithm: **sharing an individual and single use secret code** between our database and the client secure authentication applications.

To use it, go to **Profile** to activate *Two factor authentication*.

![](images/profile-security.png This will allow you access to your personal secret code and QR code.

Then you can *configure your TOTP application* that will send you a single use security code to be specified the next times you connect to your administration interface. This security code is renewed every *30 seconds* (using a calculation based on the time or a meter).

> [!NOTE]
> In the case of loss of two-factor authentication, send an email to *contact[at]alwaysdata.com* to deactivate it. [A verification will be carried out](/en/docs/admin-billing/profile/admin-access-loss#blockage-related-to-two-factor-authenticationhahahugoshortcode-s0-hbhb).


## OTP applications

- **[2FAS Auth](https://2fas.com/)** : [Google Play](https://apps.apple.com/us/app/2fas-auth/id1217793794) and [Apple Store](https://apps.apple.com/us/app/2fas-auth/id1217793794)
- **[EnteAuth](https://ente.io/auth/)** : [Google Play](https://play.google.com/store/apps/details?id=io.ente.auth), [Apple Store](https://apps.apple.com/us/app/ente-auth/id6444121398) and [F-Droid](https://f-droid.org/packages/io.ente.auth/).

---
Two-factor authentication is also available [in SSH](/en/docs/web-hosting/remote-access/ssh/ssh-two-factor-authentication) for users of our alwaysdata [Private Cloud offers](/en/docs/admin-billing/billing/private-cloud-prices).
