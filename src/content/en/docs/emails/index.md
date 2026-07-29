---
layout: layouts/indexed.njk
title: Emails
eleventyNavigation:
  key: Emails
  order: 2
---

We provide SMTP, IMAP and POP3 access, the addresses of which are indicated in the menu **Emails > Addresses**. If not from our servers directly (for example, from an HTTP application), it is *necessary* to authenticate with an email address to send emails.

Our email servers are conventional ones, we use [Exim](https://www.exim.org/) and [Dovecot](https://www.dovecot.org/).

You can [create an email address](/en/docs/emails/create-an-email-address) from the **emails > Addresses** tab in your alwaysdata administration interface and [view your emails](/en/docs/emails/use-an-email-address) via the email client mail of your choice or our [webmail](https://webmail.alwaysdata.com) system.

Once the mailbox is created, it is possible to send emails via our SMTP servers. To receive them, the domain must have [MX DNS records](https://en.wikipedia.org/wiki/MX_record). To use our email servers set `mx1.alwaysdata.com` and `mx2.alwaysdata.com`.

- [API resource](https://api.alwaysdata.com/v1/mailbox/doc/)
- [Restore emails](/en/docs/web-hosting/backups/restore-emails/)
- [Use external MX](/en/docs/domains/dns-management/use-external-mx/)
