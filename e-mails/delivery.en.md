+++
title = "Improving Your E-mail Delivery"
layout = "howto"
weight = 20
tags = ["e-mail"]
+++

Whether your email boxes are hosted in a shared or a dedicated environment, the ability to deliver your messages is very important and may be optimized by the hosting provider and their customers working together.

## Sender

- Check the sender's name and email address.
- Use [identification protocols]({{< ref "e-mails/set-up-spf-dkim-dmarc">}}).
- The *SENDER FROM* setting needs to match the *FROM* in your headers.

## Addresses

- Delete addresses that do not exist or are idle.
- Check for spelling errors in addresses.
- Avoid mass sending.
- Fill-in the email addresses in the `Cc` (or `Cci`) fields rather than one after the other in the `To` field for a mail shot.

## Content

- Avoid:
    - HTML,
    - using too much punctuation in succession,  
    - writing in red,
    - writing in block capitals,
    - using [spam words](https://blog.hubspot.com/blog/tabid/6307/bid/30684/The-Ultimate-List-of-Email-SPAM-Trigger-Words.aspx).
- Pay attention to the email subject.

## Emailing

- Check that best practices are followed by answering "yes" to the following three questions:
    - Did the addressee explicitly consent to receiving these emails?
    - Were they informed that they would receive them?
    - Was the proposed content announced?
- Make unsubscribing easy.

## Scoring system

To avoid misuse and optimize the deliverability of emails sent by its servers, alwaysdata has always implemented a scoring system based on various criteria like the content and frequency of the messages sent.

The lower the score, the better the email will be rated and the sending accepted. In shared servers, any email with a score higher than _3_ will be blocked. In VPS and dedicated servers, the default value is _5_ and you can change it in the **SMTP > Settings** tab of your server.

Based on this scoring, the message will be sent via an IP address with a more or less good reputation. This way, by optimizing the quality of your emails and their content, you will have a better chance of avoiding your message being considered undesirable.

This system uses [SpamAssassin](https://spamassassin.apache.org/). Depending on its score, it will trigger one of our anti-spam rules:

- +1` SpamAssassin score: medium => SpamAssassin's score is between 0 and 3;
- +2` SpamAssassin score: high => SpamAssassin score is between 3 and 8;
- +3` SpamAssassin score: very high => SpamAssassin score is higher than 8.

And a set of rules specific to his system :

- `+1`: Mass emails: the account has sent more than 15 emails in the last 30 minutes,
- `+1`: Customer is [restricted]({{<ref "security/restricted-mode">}}),
- `+1`: New customer: the profile was created less than 30 days ago,
- `+X`: Too many bounces (in percentile): the number of emails sent back with an error. This is updated every three hours. If the number exceeds *10%*, the system will add `+1` point and if it exceeds *30%*, `+2` points.

In order not to be dependent on abuse from other clients using the same mail server you can rent a dedicated IP in the **Advanced > IP Addresses** tab of the account. You can finally configure for which notes given by the antispam, the emails will be sent by this IP.

---

## Notes

- The maximum size of emails sent is set at **50 Mbytes**.
