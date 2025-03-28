+++
title = "Migrating E-mail Addresses to alwaysdata"
layout = "howto"
hidden = true
tags = ["e-mail"]
+++

This article explains how to move e-mails addresses to alwaysdata.

## Manual transfer

1. [Create e-mail addresses](e-mails/create-an-e-mail-address) in your admin interface, **Emails > Addresses** menu,

2. Migrate e-mails already existing with the current provider:
    - by retrieving a [Maildir](https://en.wikipedia.org/wiki/Maildir) formatted e-mailbox (if they are available) and copying by using [FTP](remote-access/ftp) or [SSH](remote-access/ssh) in the `$HOME/admin/mail/domain/mailbox/` directory,
    - by using an external tool like `imapcopy` or `imapsync` - installed on our servers,
    - by exporting/importing with an e-mail client.

3. Change MX records to use alwaysdata servers: `mx1.alwaysdata.com` and `mx2.alwaysdata.com`.

This migration can be paired with a [website migration](sites/transfer-in) or a [domain transfer](domains/transfer-a-domain).
