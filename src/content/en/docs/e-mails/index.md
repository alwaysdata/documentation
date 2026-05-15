---
title: E-mails
eleventyNavigation:
  key: E-mails
  order: 2
---

We provide SMTP, IMAP and POP3 access, the addresses of which are indicated in the menu **Emails > Addresses**. If not from our servers directly (for example, from an HTTP application), it is *necessary* to authenticate with an email address to send emails.

Our e-mail servers are conventional ones, we use [Exim](https://www.exim.org/) and [Dovecot](https://www.dovecot.org/).

You can [create an e-mail address](/en/docs/e-mails/create-an-e-mail-address) from the **E-mails > Addresses** tab in your alwaysdata administration interface and [view your e-mails](/en/docs/e-mails/use-an-e-mail-address) via the e-mail client mail of your choice or our [webmail](https://webmail.alwaysdata.com) system.

Once the mailbox is created, it is possible to send e-mails via our SMTP servers. To receive them, the domain must have [MX DNS records](https://en.wikipedia.org/wiki/MX_record). To use our mail servers set `mx1.alwaysdata.com` and `mx2.alwaysdata.com`.

* [Mailing lists](/en/docs/e-mails/mailing-lists)

## Resources

- [API](https://api.alwaysdata.com/v1/mailbox/doc/)
- [Add Several Mailboxes using CSV](/en/docs/e-mails/create-mailboxes-using-csv)
* [Add a filter rule](/en/docs/e-mails/add-a-filter-rule)
* [Use Sieve scripts](/en/docs/e-mails/use-sieve-scripts)
* [Incoming whitelist](e-mails/whitelist)
- [Change hosting provider](/en/docs/e-mails/transfer-in)
- [Use external MX](/en/docs/domains/use-external-mx)
- [SMTP relay](/en/docs/e-mails/smtp-relay)
* [Deliverability: best practices](/en/docs/e-mails/delivery)
* [Configure SPF/DKIM/DMARC](/en/docs/e-mails/set-up-spf-dkim-dmarc)
* [Check email's sending](/en/docs/e-mails/check-email-sending)
* [SMTP waiting queue](/en/docs/e-mails/smtp-queue)
* [Read an e-mail source](/en/docs/e-mails/read-an-e-mail-source)
* [React to spam mailing](/en/docs/e-mails/react-to-spam-mailing)
- [Restore e-mails](/en/docs/web-hosting/backups/restore-e-mails)
- [Sender Rewriting Scheme](/en/docs/e-mails/srs)
- [Catch-all](/en/docs/e-mails/catch-all)
- [Miscellaneous questions](/en/docs/e-mails/misc)

## E-mail clients

- [iOS](/en/docs/e-mails/clients/apple-ios)
- [Gmail](/en/docs/e-mails/clients/gmail)
- [Outlook](/en/docs/e-mails/clients/outlook)
- [Thunderbird](/en/docs/e-mails/clients/thunderbird)
