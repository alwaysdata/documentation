+++
title = "Restricted mode Overview"
menuTitle = "Restricted mode"
date = 2019-09-12T12:38:11+02:00
layout = "man"
weight = 5
draft = false
+++

We always wanted to offer a free and full-featured service for users that need a low consumption profile. This way we're allowed to give to our upcoming users an unlimited testing platform. We never regret it, but this offer comes with some disadvantages, starting with malicious users that try to abuse the service.

The Restricted Mode that we have deployed allows us to isolate valid and trusted users from others. Those formers get access to a high-level layer of their hosted services, in terms of performances. It also limits the impact malicious users could have on their services (because naughty neighbors also exist in shared hosting environments).

## Remove Restricted Mode limitations

Becoming a trusted user is really simple. You must fit one of those cases:

- get your credit card filled in your account (even for a free plan);
- already have paid for a service on our platform.

That's all. We guess that this process will allow us to filter a vast majority of malicious users. If you fit one of those conditions, your profile will be restricted-free.

## Limitations

If you have never paid for an alwaysdata service, nor filled your credit card in your account, some technical limitations will be applied to your profile.

Those limitations allow you to use the whole platform and our offer, but prevent abusive uses:

- HTTP: the requests are pre-processed by more aggressive filters, so the time-to-respond may increase a bit;
- E-mails: messages sent from our SMTP servers could be limited in quantity, per batch or during a timeframe.
