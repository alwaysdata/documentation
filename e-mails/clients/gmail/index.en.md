+++
title = "Configuring Gmail"
layout = "howto"
hidden = true
tags = ["e-mail", "gmail"]
+++

[Connection information reminder]({{< ref "e-mails/use-an-e-mail-address">}})

In our examples we consider the following information:

- Account name: `test`
- Mailbox: `test@alwaysdata.net`

They must be replaced by your personal login information.

## Computer

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
