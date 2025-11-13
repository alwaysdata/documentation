+++
title = "Configuring Gmail"
layout = "howto"
hidden = true
tags = ["e-mail", "gmail"]
+++

In our examples we consider the following information:

- Account name: `test`
- Mailbox: `test@alwaysdata.net`

They must be replaced by your personal login information: 

|Server|Service|Information||
|---|---|---|---|
|Incoming|IMAP|IMAP Server|imap-*[account]*.alwaysdata.net|
|||Username|Your email address - for example *contact\@example.org*|
|||Password|The password of your email address|
|||Port|993|
|Outgoing|SMTP|SMTP Server|smtp-*[account]*.alwaysdata.net|
|||Username|Your email address - for example *contact\@example.org*|
|||Password|The password of your email address|
|||Port|465|

{{% notice tip %}}
 *[account]* must be replaced by the name of your account and *contact\@example.org* by your email address. They are defined in the **Emails > Addresses** menu of our administration interface.
{{% /notice %}}

## Mobile

Go to **Settings > Add an account > Other**.

{{< fig "images/gmail_mobile_en.png" "Gmail on mobile" >}}

- For *outgoing* mail, check the **Demand a connection** box.

## Web browser

### Incoming mails

[POP connections](https://support.google.com/mail/answer/16604719) are no longer supported by Gmail, so its webmail can only be used for sending emails. Otherwise, you need to use their Google Workspace or a [redirect](/e-mails/create-an-e-mail-address#redirect) to your Gmail address.

### Outgoing mails (SMTP)

Go to **Parameters > Accounts and imports**.

{{< fig "images/gmail_interface_en.png" "Gmail: interface" >}}

{{< fig "images/gmail_interface2_en.png" "Gmail: account settings" >}}

Go to **Add another e-mail address**.

- Uncheck the **Treat as an alias** box.

{{< fig "images/gmail_add-smtp_en.png" "Gmail: create an SMTP account" >}}

{{< fig "images/gmail_add-smtp-final_en.png" "Gmail: create an SMTP account - result" >}}
