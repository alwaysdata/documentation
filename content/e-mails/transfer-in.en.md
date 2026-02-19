+++
title = "Migrating E-mail Addresses to alwaysdata"
linkTitle = "Transfer your Emails"
tags = ["e-mail"]
+++

Here is how to move e-mails addresses to alwaysdata.


1. [Create e-mail addresses](/e-mails/create-an-e-mail-address) in your admin interface, **Emails > Addresses** menu,

2. Migrate e-mails already existing with the current provider via **Emails > Addresses > Modify [example@example.org] -  ⚙️ > Import emails**.

This import is carried out with a classic [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) authentication. You therefore need to know the hostname, the username and the password of the mailbox to import. Some services do not allow the use of direct access in standard IMAP. You can then:
- follow the following documentation: [Gmail](https://imapsync.lamiral.info/FAQ.d/FAQ.Gmail.txt) and [Office 365](https://imapsync.lamiral.info/FAQ.d/FAQ.Office365.txt),
- or do exports/imports via a mail client.

3. Change MX records to use alwaysdata servers: `mx1.alwaysdata.com` and `mx2.alwaysdata.com`.

This migration can be paired with a [website migration](/web-hosting/sites/transfer-in) or a [domain transfer](/domains/transfer-a-domain).
