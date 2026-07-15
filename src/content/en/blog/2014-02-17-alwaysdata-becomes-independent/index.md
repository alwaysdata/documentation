---
title: "alwaysdata becomes independent"
date: 2014-02-17
authors: ["Cyril Baÿ"]
---

In May 2013, we have made a major decision for the future of alwaysdata.  After taking nearly nine months to research, compare, calculate,  purchase, install, develop, debug, and document, it's now time to  announce it.

## Our own infrastructure

Since its inception in 2007, alwaysdata has relied on third-party  providers (mainly [OVH](https://www.ovh.com), [Online](https://www.online.net), [Hetzner](https://www.hetzner.de) and [Amazon](https://aws.amazon.com/)) for its infrastructure  (hardware, network). This has allowed us to concentrate on the heart of  our architecture: the software. alwaysdata would not exist without these  providers; we owe them a lot.

Not having our own infrastructure has many advantages, but it also has drawbacks:

- Part of our reliability depends on our providers
- We are limited to equipment and features offered by our providers
- We are subject to changes in their service policy

As our infrastructure grows, these drawbacks become more important.  After a long discussion, we have decided to take the plunge and become independent.

## Details
We have two objectives:

- Build a reliable and durable architecture
- Be completely independent

These objectives result in many choices that must be made. Here are the key ones:

- We are hosted in a neutral data center (operated by [Equinix](https://www.equinix.com)), without intermediary
- We joined the [RIPE](https://www.ripe.net/) (we are "[LIR](https://www.ripe.net/membership/indices/data/fr.alwaysdata.html)") to ensure our independence
- All our equipment is doubled in power
- Our internal network is fully redundant: each server has two network  connections (of different brands), which are themselves connected to two  different routers (of different brands)
- We have three different network operators (transit)

Some additional technical details:

- Data center: our equipment is located in the [Equinix PA3](https://www.equinix.com/data-centers/europe-colocation/france-colocation/paris-data-centers) data center in Paris
- Network operators; [IELO](https://www.ielo.net/), [Cogent](https://www.cogentco.com/) and [Interoute](https://www.interoute.com/)
- We are on the [Equinix IX Paris](https://www.equinix-ix.fr/) peering point
- Our AS number is [60362](https://as60362.net/)

## In practice, what changes?

For our customers, nothing changes directly: our service and our price remain the same.

Our current servers, located with our providers, will be moved to our  infrastructure progressively over time — the total migration is likely  to take up to two years. We will announce each migration beforehand. Our  dedicated customers will be contacted personally and we will organize  the whole server migration.

In a few weeks, new accounts will be hosted to our own  infrastructure. For new dedicated servers, this is already the case.

The real changes will be visible indirectly; some examples:

- We will be able to offer new services. Did you know that Equinix operates in [14 countries](https://www.equinix.com/locations)?
- The equipment we use is more suitable for our purposes. For example, the drives and power supplies of our servers can be [hot swapped](https://en.wikipedia.org/wiki/Hot_swapping)
- The range of equipment that we can use is broader — for example, SSD or drives with very high capacity
- Our network, fully redundant and simplified, should be more reliable

## And after?

We spend much of 2013 in the construction of our infrastructure, which  has somewhat slowed the pace of new developments. We are planning  several things for 2014 — our team has also welcomed a new developer,  Martin, a few weeks ago. Our goal is to provide more reliability, more  features, and to remain available to quickly answer all questions and  concerns from customers.
