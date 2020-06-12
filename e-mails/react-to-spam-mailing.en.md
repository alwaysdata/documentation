+++
title = "Reacting to Spam"
layout = "howto"
hidden = true
tags = ["e-mail", "scam", "spam"]
+++

There are three main reasons for sending spam:

- [a website infection]({{< ref "sites/clean-up-a-site" >}}),
- a form attack on website,
- a password theft.

We will present the latter two cases here.

## Form attack

When the alwaysdata team encounters spam sent due to a form attack, they will:

- stop sending by disabling `POST` requests on the website in question,
- delete all related e-mails awaiting sending,
- warn the customer.

The customer will have to put a more efficient protection on the form, through the use of a [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA) for example.

## Password theft

In this case, they will:

- stop sending by changing the password for the affected e-mail address,
- delete all related e-mails awaiting sending,
- warn the customer.

Then the customer can provide a new, **more secure**, password to again allow access to their address.

{{% notice info %}}
In repeat cases, the alwaysdata team can always *suspend* the account until the customer returns.
{{% /notice %}}
