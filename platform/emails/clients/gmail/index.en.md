+++
title = "How To configure Gmail"
menuTitle = "Gmail"
layout = "howto"
weight = 10
hidden = true
tags = ["e-mail", "gmail"]
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

### Desktop

Go on **Settings > Accounts and Import**.

- For _incoming_ server, go on **Add a mail account > Import emails from my other account (POP3)**;
    - Warning it's a POP3 connection which will fetch emails on its servers.
- For _outgoing_ server, go on **Add another email address**;
    - Deselect the box **Treat as an alias**.

### Mobile

Go on **Settings > Add an account > Other**.

- For _outgoing_ server, check the box **Require signin**.
