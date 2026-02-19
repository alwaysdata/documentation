+++
title = "alwaysdata Architecture"
tags = ["infrastructure", "technical environment"]
+++

## Hardware architecture

Our servers are hosted in France, in the Paris region. For our main datacenters, we rely on the expertise of [Equinix](https://www.equinix.com/). They guarantee a certified average availability in excess of 99.99999% ([Equinix certifications](https://www.equinix.co.uk/data-centers/design/standards-compliance)).

alwaysdata owns its infrastructure - servers, storage, networking equipment and everything else that supports our platform.

We operate our own *independent network*: [AS60362](http://as60362.net/).

All our network equipment, switches, routers operate in pairs (two separate manufacturers) and four independent network operators ensure the redundancy and neutrality of our network.

All our machines are equipped with *RAID1* (duplicated in real time) and *hot-swappable* SSDs. Their power supplies are *redundant* via two independent electrical chains and spare equipment is available at our production sites to replace any defective element.

We natively support the *IPv6* protocol for all our services.

To go further :
- [Network](/technical-specifications/network)
- [IP ranges](/technical-specifications/ip-ranges)
- [Disaster recovery plan](/technical-specifications/drp)

## Software architecture

We use open source solutions as much as possible and our servers run on [Linux Debian x64](https://www.debian.org/). All our services are remotely accessible and a [REST API](/development/api) is available for configuration operations on our administration interface.

Each account is isolated from each other via a containeristation based on [Cgroups](https://en.wikipedia.org/wiki/Cgroups). It runs its own programs, its own HTTP servers to provide high level security and customization.

Our system distributes the available resources equally between all accounts on a server. When an account encounters consumption peaks, the platform redistributes its resources, from accounts who don’t need them, to temporarily reallocate them.

- [HTTP stack](/web-hosting/sites/http-stack)
- [Security Upgrades](/technical-specifications/security-upgrades)

---
- [Bug Bounty](/technical-specifications/bug-bounty)
