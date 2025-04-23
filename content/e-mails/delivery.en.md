+++
title = "Improving Your E-mail Delivery"
layout = "howto"
weight = 20
tags = ["e-mail"]
+++

Whether your e-mail boxes are hosted in the Public Cloud or a dedicated environment, the ability to deliver your messages is very important and may be optimized by the hosting provider and their users working together.

## Sender

- Check the sender's name and e-mail address.
- Use [identification protocols](e-mails/set-up-spf-dkim-dmarc).
- The *ENVELOPE FROM* setting needs to match the *FROM/HEADER FROM* in your headers.

## Addresses

- Delete addresses that do not exist or are idle.
- Check for spelling errors in addresses.
- Avoid mass sending.
- Fill-in the e-mail addresses in the `Cc` (or `Cci`) fields rather than one after the other in the `To` field for a mail shot.

## Content

- Avoid:
    - HTML,
    - using too much punctuation in succession,
    - writing in red,
    - writing in block capitals,
    - using [spam words](https://blog.hubspot.com/blog/tabid/6307/bid/30684/The-Ultimate-List-of-Email-SPAM-Trigger-Words.aspx).
- Pay attention to the e-mail subject.

## E-mailing


Check that best practices are being followed by answering “yes” to the following questions:
- has the recipient expressly agreed to receive these emails?
- is there an unsubscribe link that is available, works and is easily identifiable?

## Scoring system

To avoid misuse and optimize the deliverability of e-mails sent by its servers, alwaysdata has always implemented a scoring system based on various criteria like the content and frequency of the messages sent.

The lower the score, the better the e-mail will be rated and the sending accepted. In the Public Cloud, any e-mail with a score higher than _3_ will be blocked. In [Private Clouds](accounts/billing/private-cloud-prices), the default value is _5_ and you can change it in the **SMTP > Settings** tab of your server. It cannot be disabled.

{{% notice note %}}
This note is only used to send the email from our servers. It has no incident in the management of the mail on the recipient server side.
{{% /notice %}}

Based on this scoring, the message will be sent via an IP address with a more or less good reputation. This way, by optimizing the quality of your e-mails and their content, you will have a better chance of avoiding your message being considered undesirable.

This system uses [Rspamd](https://rspamd.com/) and a set of rules specific to alwaysdata.

In order not to be dependent on abuse from other users being the same mail server you can rent a [dedicated IP](advanced/dedicated-ip-addresses) in the **Advanced > IP Addresses** tab of the account. You will be asked to specify emails sent by this IP according to the rating they will have received by the antispam.

## Notes

- The maximum size of e-mails sent is set at **50 Mbytes**.

---
Test its delivrability: [Mail tester](https://www.mail-tester.com/?lang=en), [Experte.com](https://www.experte.com/spam-checker)
