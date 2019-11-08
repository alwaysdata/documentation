+++
title = "How To configure Thunderbird"
menuTitle = "Thunderbird"
layout = "howto"
weight = 10
draft = false
hidden = true
tags = ["e-mail", "thunderbird"]
+++

## Reminder of login details

Server|Service|Information
---|---|---
Incoming|IMAP|Host: imap-[account].alwaysdata.net
|||Ports: 143, secured: 993 or 585
|||Identifier: email address and associated password
||POP3|Host: pop-[account].alwaysdata.net
|||Ports: 110, secured: 995
|||Indentifier: email address and associated password
Outgoing|SMTP|Host: smtp-[account].alwaysdata.net
|||Ports: 25 or 587, secured: 465
|||Identifier: email address and associated password

> you need to replace [account] by your account name, which you chose at its creation.

## Procedure

Go on **Accounts > Set up an account: Email**.
![Thunderbird: account creation](/en/platform/emails/clients/thunderbird_new-account_en.png)

To modify it once it's created go on **Accounts > View settings for this account**:

- For _incoming_ server, go on **Server Settings**;
![Thunderbird: incoming server settings](/en/platform/emails/clients/thunderbird_imap-settings_en.png)
- For _outgoing_ server, go on **Outgoing Server (SMTP)**.
![Thunderbird: outgoing server settings](/en/platform/emails/clients/thunderbird_smtp-settings_en.png)
