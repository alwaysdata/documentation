+++
title = "Configuring Thunderbird"
layout = "howto"
tags = ["e-mail", "thunderbird", "mozilla"]
hidden = true
+++

[Connection information reminder]({{< ref "e-mails/use-an-e-mail-address">}})

In our examples we consider the following information:

- Account name: `test`
- Mailbox: `test@alwaysdata.net`

They must be replaced by your personal login information. For instance, if you have your own domain `myfancydomain.org` and you set it up on alwaysdata, the information for the address `someone@myfancydomain.org` would be:

- Account name: `test`
- Mailbox: `someone@myfancydomain.org`
- IMAP Hostname: `imap-test.alwaysdata.net`
- SMTP Hostname: `smtp-test.alwaysdata.net`

Your connection securities might be inverse to what you see on the image below, so STARTTLS for IMAP and SSL/TLS for SMTP. The port will be automatically changed by Thunderbird. They are the stadard ports and you don't need to change them back. Test the connection and you should be all set.

Go to **Settings > Configure an account: E-mail**.

{{< fig "images/thunderbird_new-account.en.png" "Thunderbird: create an account" >}}

To change it once created, go to **Accounts > See settings for this account** or go to the **Edit > Account settings** menu bar:

-   For *incoming* mail, go to **Server settings**.
    {{< fig "images/thunderbird_imap-settings.en.png" "Thunderbird: incoming server settings" >}}

-   For *outgoing* mail, go to **outgoing SMTP server**.
    {{< fig "images/thunderbird_smtp-settings.en.png" "Thunderbird: outgoing server settings" >}}
