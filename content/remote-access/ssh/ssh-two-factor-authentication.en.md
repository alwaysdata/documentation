+++
title = "Activate the 2-Factor Authentication"
layout = "howto"
hidden = true
tags = ["2fa", "security", "ssh"]
+++

{{% notice note %}}
Feature only available on [Private Cloud]({{< ref "accounts/billing/private-cloud-prices" >}}) environments.
{{% /notice %}}

You will need to [contact the customer support team](https://admin.alwaysdata.com/support/add) to install the `google-authenticator`[^1] tool.

Once `google-authenticator` is installed on the server, here is how you activate the 2-factor authentication for each account:

1. Log in to your account with SSH;

2. Create a new secret key,

    - for [TOTP](https://en.wikipedia.org/wiki/Time-based_One-Time_Password) verification:
    ```shell
    $ google-authenticator -tDfuw 3
    ```
    - for [HOTP](https://en.wikipedia.org/wiki/HMAC-based_one-time_password) verification:
    ```shell
    $ google-authenticator -cfuw 3
    ```
    
The script will then send back to you:
 - a QR code and the new secret key to enter in your password generating application[^2],
 - several emergency codes for recovering your code.

For TOTP verifications, you will need to indicate the code sent by your software.

> The installation is complete, the SSH 2-factor authentication is now activated.

[^1]: Although it was [developed by Google](https://github.com/google/google-authenticator-libpam/), this is a **general** and **open source** [OTP](https://en.wikipedia.org/wiki/One-time_password) tool. At no time does it communicate with Google’s servers.
[^2]: Examples of applications: [FreeOTP](https://freeotp.github.io/) - [Android](https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp), [iOS](https://itunes.apple.com/us/app/freeotp-authenticator/id872559395?mt=8) and [F-Droid](https://f-droid.org/packages/org.fedorahosted.freeotp) ([Github](https://github.com/freeotp)) | Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) and [iOS](https://apps.apple.com/fr/app/google-authenticator/id388497605).
