+++
title = "Using an E-mail Address"
layout = "howto"
weight = 10
tags = ["e-mail"]
+++

You can access your e-mails in a number of ways. Here are two most used.

## Email client

If you wish to configure a mail program on your computer or any other device, here is the information you will need to provide.

|Server|Service|Information|
|--- |--- |--- |
|Incoming|IMAP|Host: imap-[account].alwaysdata.net|
|||Ports: 143, secure: 993 or 585|
|||Identifier: email address and the password assigned to it|
||POP3|Host: pop-[account].alwaysdata.net|
|||Ports: 110, secure: 995|
|||Identifier: email address and the password assigned to it|
|Outgoing|SMTP|Host: smtp-[account].alwaysdata.net|
|||Ports: 25 or 587, secure: 465|
|||Identifier: email address and the password assigned to it|

{{% notice note %}}
You need to replace `[account]` with the name of your account, the one chosen when it was created.
{{% /notice %}}

Authentication is **mandatory** to use our SMTP server, fill-in the same identifiers as for the incoming server.

Your access provider may block port *25* intended for sending your e-mails. In this case you can change the port to *587* or use your provider's SMTP server.

- [Configure Apple/iOS]({{< ref "e-mails/clients/apple-ios" >}})
- [Configure Gmail]({{< ref "e-mails/clients/gmail" >}})
- [Configure Mozilla Thunderbird]({{< ref "e-mails/clients/thunderbird" >}})
- [Configure Outlook]({{< ref "e-mails/clients/outlook" >}})

## Webmail

If you wish to access your mailbox from a browser, we make available [our webmail, Roundcube](https://webmail.alwaysdata.com). Connect with the email address you wish to view and its password.

By default, the webmail is in English. To change the language, click on **Settings** in the top right corner, then **User Interface > Language**.

{{< fig "images/roundcube_change-parameter-1.en.png" "Webmail: change parameters - step 1" >}}

{{< fig "images/roundcube_change-parameter-2.en.png" "Webmail: change parameters - step 2" >}}

## Notes

- The e-mails are saved in [Maildir](https://en.wikipedia.org/wiki/Maildir) format in directory `$HOME/admin/mail`,
- If the destination MX server is not available, the email will be kept for a maximum of five days, with regular attempts made to resend it,
- The maximum size of e-mails sent is set at **50 Mb**.
