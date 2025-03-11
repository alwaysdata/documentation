+++
title = "Catch-all Address"
layout = "faq"
hidden = true
tags = ["e-mail"]
+++

To collect every message that is sent to addresses that do not (or no longer) exist in your domain, you can create a [catch-all](https://en.wikipedia.org/wiki/Email_filtering#Methods) address.

Illustration: `*@example.org`

## Warning

- This address may collect plenty of spam. We therefore recommend enabling the anti-spam function on this address.
- Error e-mails normally sent for addresses that do not exist will no longer be sent. It is up to you to warn senders who may believe that the address is a valid one.

## Miscellaneous
- Due to its specificities, it is not possible to set up an automatic response. This could otherwise cause waves of spam.
    However, it is possible to use it for specific recipients via [Sieve scripts](e-mails/use-sieve-scripts) by adding these recipient addresses to the vacation instructions:

	```
	addresses ["foo@example.org", "bar@example.org"]
