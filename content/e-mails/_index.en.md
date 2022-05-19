+++
title = "E-mails"
pre = "<i class='fas fa-fw fa-paper-plane'></i> "
weight = 15
chapter = true
tags = ["e-mail"]
+++

# E-mails

Our e-mail servers are conventional ones, we use [Exim](https://www.exim.org/) and [Dovecot](https://www.dovecot.org/).

You can [create an e-mail address]({{< relref "create-an-e-mail-address" >}}) from the **E-mails** tab in your alwaysdata administration interface and [view your e-mails]({{< relref "use-an-e-mail-address" >}}) via the e-mail client mail of your choice or our [webmail](https://webmail.alwaysdata.com) system.

{{% notice info %}}
Once the mailbox is created, it is possible to send e-mails via our SMTP servers. To receive them, the domain must have [MX DNS records](https://en.wikipedia.org/wiki/MX_record).
{{% /notice %}}

To use our mail servers set `mx1.alwaysdata.com` and `mx2.alwaysdata.com`.

* [Mailing lists]({{< relref "mailing-lists" >}})

## Resources

- [API](https://api.alwaysdata.com/v1/mailbox/doc/)
- [Add Several Mailboxes using CSV]({{< relref "create-mailboxes-using-csv" >}})
* [Add a filter rule]({{< relref "add-a-filter-rule" >}})
* [Use Sieve scripts]({{< relref "use-sieve-scripts" >}})
* [Incoming whitelist]({{< ref "e-mails/whitelist" >}})
- [Change hosting provider]({{< relref "./transfer-in" >}})
- [Use external MX]({{< ref "domains/use-external-mx" >}})
* [Deliverability: best practices]({{< relref "delivery">}})
* [Configure SPF/DKIM/DMARC]({{< relref "set-up-spf-dkim-dmarc">}})
* [Check email's sending]({{< relref "check-email-sending" >}})
* [Read an e-mail source]({{< relref "read-an-e-mail-source" >}})
* [React to spam mailing]({{< relref "react-to-spam-mailing" >}})
- [Restore e-mails]({{< ref "backups/restore-e-mails" >}})
- [Catch-all]({{< relref "./catch-all" >}})
- [Miscellaneous questions]({{< relref "./misc" >}})

## E-mail clients

- [iOS]({{< relref "clients/apple-ios" >}})
- [Gmail]({{< relref "clients/gmail" >}})
- [Outlook]({{< relref "clients/outlook" >}})
- [Thunderbird]({{< relref "clients/thunderbird" >}})
