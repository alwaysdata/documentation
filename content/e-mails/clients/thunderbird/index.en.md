+++
title = "Configuring Thunderbird"
layout = "howto"
tags = ["e-mail", "thunderbird", "mozilla"]
hidden = true
+++

In our examples we consider the following information:

- Account name: `test`
- Mailbox: `test@alwaysdata.net`

They must be replaced by your personal login information: 

|Server|Service|Information||
|---|---|---|---|
|Incoming|IMAP|Hostname|imap-*[account]*.alwaysdata.net|
|||Port|993|
|||Connection security| Will be automatically set up|
|||Authentication method| Normal password|
|||Username| Your email address - for example *contact\@example.com*|
|||Password| The password of your email address|
||POP3|Host| pop-*[account]*.alwaysdata.net|
|||Port| 995|
|||Connection security|Will be automatically set up|
|||Authentication method|Normal password|
|||Username|Your email address - for example *contact\@example.com*|
|||Password|The password of your email address|
|Outgoing|SMTP|Host|smtp-*[account]*.alwaysdata.net|
|||Port|587|
|||Connection security|Will be automatically set up|
|||Authentication method|Normal password|
|||Username|Your email address - for example *contact\@example.com*|
|||Password|The password of your email address|

{{% notice tip %}}
 *[account]* must be replaced by the name of your account and *contact\@example.com* by your email address. They are defined in the **Emails > Addresses** menu of our administration interface.
{{% /notice %}}

Go to **Settings > Configure an account: E-mail**.

{{< fig "images/thunderbird_new-account.en.png" "Thunderbird: create an account" >}}

To change it once created, go to **Accounts > See settings for this account** or go to the **Edit > Account settings** menu bar:

-   For *incoming* mail, go to **Server settings**.
    {{< fig "images/thunderbird_imap-settings.en.png" "Thunderbird: incoming server settings" >}}

-   For *outgoing* mail, go to **outgoing SMTP server**.
    {{< fig "images/thunderbird_smtp-settings.en.png" "Thunderbird: outgoing server settings" >}}
