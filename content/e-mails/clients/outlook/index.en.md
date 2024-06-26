+++
title = "Configuring Outlook"
layout = "howto"
tags = ["e-mail", "outlook", "microsoft"]
hidden = true
+++

In our examples we consider the following information:

- Account name: `test`
- Mailbox: `test@alwaysdata.net`

They must be replaced by your personal login information: 

|Server|Service|Information||
|---|---|---|---|
|Incoming|IMAP|Server|imap-*[account]*.alwaysdata.net|
|||Port|993|
|||Encryption method| Will be automatically set up|
|||Authentication method| Require logon using Secure Password Authentication (SPA)|
|||Email address| Your email address - for example *contact\@example.com*|
|||Password| The password of your email address|
||POP3|Server| pop-*[account]*.alwaysdata.net|
|||Port| 995|
|||Encryption method| Will be automatically set up|
|||Authentication method| Require logon using Secure Password Authentication (SPA)|
|||Email address| Your email address - for example *contact\@example.com*|
|||Password| The password of your email address|
|Outgoing|SMTP|Server|smtp-*[account]*.alwaysdata.net|
|||Port|465|
|||Encryption method| Will be automatically set up|
|||Authentication method| Require logon using Secure Password Authentication (SPA)|
|||Email address| Your email address - for example *contact\@example.com*|
|||Password| The password of your email address|

{{% notice tip %}}
 *[account]* must be replaced by the name of your account and *contact\@example.com* by your email address. They are defined in the **Emails > Addresses** menu of our administration interface.
{{% /notice %}}

## Computer

Go to **Files > Information > Add an account**.

{{< fig "images/outlook_desktop_interface2_en.png" "Outlook: e-mail interface" >}}

{{< fig "images/outlook_desktop_interface1_en.png" "Outlook: Files menu" >}}

{{< fig "images/outlook_desktop_en.png" "Outlook: add an account" >}}

- Configure the account by hand.
- Choose POP or IMAP.
- Check the **Demand Secure Password Authentication (SPA) on connection** box.

## Mobile

Go to **Go ahead > Ignore** if the **> Advanced IMAP** or **POP3** account types are offered.

{{< fig "images/outlook_mobile_en.png" "Outlook on mobile" >}}

Click on **Advanced settings** to specify the *host names*.
