---
title: Sender Rewriting Scheme
eleventyNavigation:
  key: Sender Rewriting Scheme
  parent: Incoming Emails
  order: 3
---

[Sender Rewriting Scheme](https://en.wikipedia.org/wiki/Sender_Rewriting_Scheme) (or SRS) allows rewriting the sender's address on email envelopes to bypass [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework)[^1] blocking and thus improve email deliverability **with redirection**.


![](images/srs.png)


## Activation at alwaysdata

To activate it, go to the menu **Emails > Addresses > Modify [email address] - ⚙️ > Redirection > Use SRS**

![](images/redirect.png)

## Notes

By enabling SRS, the `ENVELOPE FROM` and `HEADER FROM`/`FROM` no longer match. While this allows SPF validation, it will still not validate DMARC. DMARC validation will depend solely on the presence of a valid DKIM.

> Icons: The Noun Project

[^1]: [set up SPF at alwaysdata](/en/docs/emails/outgoing-emails/set-up-spf-dkim-dmarc#sender-policy-framework)
