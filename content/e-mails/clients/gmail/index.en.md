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
|Incoming|POP3|POP Server|pop-*[account]*.alwaysdata.net|
|||Username|Your email address - for example *contact\@example.org*|
|||Password|The password of your email address|
|||Port|995|
|Outgoing|SMTP|SMTP Server|smtp-*[account]*.alwaysdata.net|
|||Username|Your email address - for example *contact\@example.org*|
|||Password|The password of your email address|
||||Do not treat as an alias|
|||Port|465|
||||Secured connection|

{{% notice tip %}}
 *[account]* must be replaced by the name of your account and *contact\@example.org* by your email address. They are defined in the **Emails > Addresses** menu of our administration interface.
{{% /notice %}}

## Web browser

Go to **Parameters > Accounts and imports**.

{{< fig "images/gmail_interface_en.png" "Gmail: interface" >}}

{{< fig "images/gmail_interface2_en.png" "Gmail: account settings" >}}

### Incoming mails (IMAP/POP)

Go to **Add a mail account > Import e-mails from my other account (POP3)**.

{{% notice warning %}}
This is a POP3 connection that will get e-mail from the e-mail servers.
{{% /notice %}}

{{< fig "images/gmail_add-pop_en.png" "Gmail: create a POP account">}}

{{< fig "images/gmail_add-pop-final_en.png" "Gmail: create a POP account - result" >}}

### Outgoing mails (SMTP)

Go to **Add another e-mail address**.

- Uncheck the **Treat as an alias** box.

{{< fig "images/gmail_add-smtp_en.png" "Gmail: create an SMTP account" >}}

{{< fig "images/gmail_add-smtp-final_en.png" "Gmail: create an SMTP account - result" >}}

## Mobile

Go to **Settings > Add an account > Other**.

{{< fig "images/gmail_mobile_en.png" "Gmail on mobile" >}}

- For *outgoing* mail, check the **Demand a connection** box.
