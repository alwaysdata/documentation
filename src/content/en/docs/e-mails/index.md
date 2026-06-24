---
layout: layouts/indexed.njk
title: E-mails
eleventyNavigation:
  key: E-mails
  order: 2
---

We provide SMTP, IMAP and POP3 access, the addresses of which are indicated in the menu **Emails > Addresses**. If not from our servers directly (for example, from an HTTP application), it is *necessary* to authenticate with an email address to send emails.

Our e-mail servers are conventional ones, we use [Exim](https://www.exim.org/) and [Dovecot](https://www.dovecot.org/).

You can [create an e-mail address](/en/docs/e-mails/create-an-e-mail-address) from the **E-mails > Addresses** tab in your alwaysdata administration interface and [view your e-mails](/en/docs/e-mails/use-an-e-mail-address) via the e-mail client mail of your choice or our [webmail](https://webmail.alwaysdata.com) system.

Once the mailbox is created, it is possible to send e-mails via our SMTP servers. To receive them, the domain must have [MX DNS records](https://en.wikipedia.org/wiki/MX_record). To use our mail servers set `mx1.alwaysdata.com` and `mx2.alwaysdata.com`.

- [API resource](https://api.alwaysdata.com/v1/mailbox/doc/)
- [Restore e-mails](/en/docs/web-hosting/backups/restore-e-mails/)
- [Use external MX](/en/docs/domains/dns-management/use-external-mx/)
