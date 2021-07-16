+++
title = "alwaysdata Architecture"
pre = "<i class='fas fa-fw fa-atom'></i> "
weight = 75
tags = ["infrastructure"]
+++
## Hardware architecture

alwaysdata owns its infrastructure - servers, storage, networking equipment and everything else that supports our platform. For datacenters, we rely on the expertise of [Equinix](https://www.equinix.com/). Our servers are hosted in France in their Parisian datacenters ([Equinix certifications](https://www.equinix.co.uk/data-centers/design/standards-compliance)).

All our machines are equipped with *RAID1* (duplicated in real time) and *hot-swappable* SSDs. Their power supplies are *redundant* via two independent electrical chains and spare equipment is available at our production sites to replace any defective element.

We operate our own *independent network*: [AS60362](http://as60362.net/). All our network equipment, switches, routers operate in pairs and four independent network operators ensure the redundancy of our connection.

We natively support the *IPv6* protocol for all our services.

To go further :
- [Network]({{< ref "security/network" >}})
- [IP ranges]({{< ref "security/ip-ranges" >}})
- [Disaster recovery plan]({{< ref "security/drp" >}})

## Software architecture

We use open source solutions as much as possible and our servers run on [Linux Debian](https://www.debian.org/).

Each account is isolated from each other via a containeristation based on [Cgroups](https://en.wikipedia.org/wiki/Cgroups). It runs its own programs, its own HTTP servers to provide high level security and customization.

The main upgrade of our operating systems is done via an [automation tool]({{< ref "advanced/migrations" >}}) allowing to do it in an autonomous and flexible way per account. Minor upgrades are regular, and even immediate (< 24 hours) when a severe security flaw is published.

- [HTTP stack]({{< ref "sites/http-stack" >}})
