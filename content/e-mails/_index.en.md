+++
title = "E-mails"
pre = "<i class='fas fa-fw fa-paper-plane'></i> "
weight = 20
archetype = "chapter"
tags = ["e-mail"]
+++

We provide SMTP, IMAP and POP3 access, the addresses of which are indicated in the menu **Emails > Addresses**. If not from our servers directly (for example, from an HTTP application), it is *necessary* to authenticate with an email address to send emails.

Our e-mail servers are conventional ones, we use [Exim](https://www.exim.org/) and [Dovecot](https://www.dovecot.org/).

You can [create an e-mail address](/e-mails/create-an-e-mail-address) from the **E-mails > Addresses** tab in your alwaysdata administration interface and [view your e-mails](/e-mails/use-an-e-mail-address) via the e-mail client mail of your choice or our [webmail](https://webmail.alwaysdata.com) system.

Once the mailbox is created, it is possible to send e-mails via our SMTP servers. To receive them, the domain must have [MX DNS records](https://en.wikipedia.org/wiki/MX_record). To use our mail servers set `mx1.alwaysdata.com` and `mx2.alwaysdata.com`.

* [Mailing lists](/e-mails/mailing-lists)

## Resources

- [API](https://api.alwaysdata.com/v1/mailbox/doc/)
- [Add Several Mailboxes using CSV](/e-mails/create-mailboxes-using-csv)
* [Add a filter rule](/e-mails/add-a-filter-rule)
* [Use Sieve scripts](/e-mails/use-sieve-scripts)
* [Incoming whitelist](e-mails/whitelist)
- [Change hosting provider](/e-mails/transfer-in)
- [Use external MX](/domains/use-external-mx)
- [SMTP relay](/e-mails/smtp-relay)
* [Deliverability: best practices](/e-mails/delivery)
* [Configure SPF/DKIM/DMARC](/e-mails/set-up-spf-dkim-dmarc)
* [Check email's sending](/e-mails/check-email-sending)
* [SMTP waiting queue](/e-mails/smtp-queue)
* [Read an e-mail source](/e-mails/read-an-e-mail-source)
* [React to spam mailing](/e-mails/react-to-spam-mailing)
- [Restore e-mails](/web-hosting/backups/restore-e-mails)
- [Sender Rewriting Scheme](/e-mails/srs)
- [Catch-all](/e-mails/catch-all)
- [Miscellaneous questions](/e-mails/misc)

## E-mail clients

- [iOS](/e-mails/clients/apple-ios)
- [Gmail](/e-mails/clients/gmail)
- [Outlook](/e-mails/clients/outlook)
- [Thunderbird](/e-mails/clients/thunderbird)
