+++
title = "Check If an Email Has Successfully Been Sent"
hidden = true
layout = "howto"
tags = ["e-mail"]
+++

You have access to outgoing logs in the menu **Emails > History**.

{{< fig "images/history.en.png" "List of latest sendings" >}}

- *[Score]({{< ref "e-mails/delivery#scoring-system" >}})*: score given by alwaysdata's antispam that determines if an email is sent or not[^1],
- *Blocked*: if the email has been blocked by alwaysdata's antispam.

{{< fig "images/example.en.png" "Sending example" >}}

- *Internal score*: score given by alwaysdata's antispam,
- *Internal report*: details of alwaysdata's antispam score. It takes int account the Rspamd score,
- *SPAM score*: [Rspamd](https://www.rspamd.com/) score,
- *SPAM report*: details of Rspamd score.

If the e-mail is **bounced** (unaccepted by recipient servers) for one or several recipients, the sender should have received a *Mail delivery failed* with reasons for the blockage.

[^1]: an email with a score higher than 3 will not be sent on shared servers. On VPS and dedicated servers, the default value is 5 (editable).
