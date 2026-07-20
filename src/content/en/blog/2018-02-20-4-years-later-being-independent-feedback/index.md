---
title: "4 years later: being independent, feedback"
description: "Feedback on our hardware autonomy initiative"
date: 2018-02-20
authors: ["Matthias Dugué"]
---

In 2013, we decided to [stop contracting out our physical infrastructure](/en/blog/2014-02-17-alwaysdata-becomes-independent/). With the benefit of hindsight, we wanted to share our experience with you.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjA3OGxnYzk1d3R3M2ZmdmN6MzZ2ZW80bnIxMW5oOTI1dGE5cWRsdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PlnQNcQ4RYOhG/giphy.gif)

## First and foremost, high quality, all-inclusive/user-friendly

If you are an *alwaysdata* customer, then you are already familiar with the cockpit! If you aren't, then take five minutes to try [our shared hosting plan](https://www.alwaysdata.com/en/offers/) and explore our services and interface.

We see our management interface as a cockpit. We designed it so that you are able to administer everything in one place: domains, websites, databases, distant access, configurations — everything is there. You can also contact us directly from the cockpit via our ticketing system. And it has a lot more features!

![alwaysdata's cockpit - status view - screenshot [en]](images/alwaysdatas-cockpit-status-view-screenshot-en.png)

In 2006, no hosting offer fit our needs. This is why we built one and developed our own tools internally. Ten years later, we regret nothing. Our customers have access to the most flexible and user-friendly service on the market. These are two of our main strengths.

We host everything, but the core of our business is offering managed services. When you open an account at *alwaysdata*, you have access to a [wide range of services](/en/docs/admin-billing/billing/choose-its-paas/): interpreters, databases, brokers, e-mails, backups, etc. And you have nothing to worry about. Everything is managed, safe, and kept up-to-date.

Nevertheless, one can only do so much work. Developing a software structure and getting a physical infrastructure that fit our ambitions was too great of a challenge at the time. We had to choose, and we chose software, leaving the physical infrastructure management to trusted third parties.

Or so we thought. For the first few years, we relied on the *OVH* infrastructure, using extra servers at *Amazon EC2*, *Hertzner*, and *Online*. This architecture allowed us to focus on developing our project: management interface, monitoring, support, *alproxy*, account management, and more.

Then, four years ago, we became fed up by the poor quality of our subcontractors. We had come a long way, but the subcontractors had seriously impacted our customers' experiences. It was then that we decided to become our own hardware and network operator.

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmprZnFjMzNybG9mYWRtc2FwZGducXpzZzY5ZDdheGgydWlvNzcwOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xQQP4ahKiyuxHy/giphy.gif)

## No compromises

We stopped subcontracting because they provided you with substandard experiences. Our physical infrastructure service had to fit our ambition to provide you with the best services.

### The first servers

It started with a few machines. We chose, configured, and installed them, but, of course, this wasn't easy. We had to learn the hosting business in depth. But we began to see results: no global breakdown, ever[^1].

During this process, we've stood by our principles:

- **Neutrality**, always. From the data centers handled by [Equinix](http://www.equinix.com/), a neutral operator, to the network operators [IELO-LIAZO](http://www.ielo-liazo.com/), [Nerim](http://www.nerim.fr/), [Cogent](http://www.cogentco.com/), and [Interoute](http://www.interoute.com/), we guarantee the independence of your data, traffic, and operations. We are a member of [RIPE](http://www.ripe.net/), which ensures that you are independent as an operator on our IP range.
- **Quality**, always. We use high-end servers that are equipped with *data centers* that were labeled SSDs in production. They all have dual-power blocks on separate electrical circuits and dual-network interfaces that are connected to *switches* from different brands. Our years with subcontracting have taught us that the details matter[^2]. This was the right choice! No major breakdowns during all these years is a great achievement.

### Redundancy: at any cost?

We often are asked about data redundancy at *alwaysdata*. Back in the day, we duplicated data on two distinct infrastructures. However, this method was extremely costly to maintain, and the massive unavailability of the first point could not justify the associated costs. We [talked about this decision](/en/blog/2012-11-06-report-on-the-http4-outage-of-october-21st/#and-the-redundancy) back in 2012.

Our goal is not a zero Recovery Time Objective (RTO). We tried real-time redundancy, and it actually decreased our quality of service by introducing bugs and making the whole system unstable. Our availability rate is excellent, with only a negligible incidence of breakdown. Such a complex and risky architecture is not justifiable given our successes.

What matters to us is the Recovery Point Objective (RPO). We ensure that our backups are easy to recover and are not corrupted. Local data are mirrored (RAID1) on every server. In case of emergency, we have the ability move data from an unavailable server to a spare one in the same bay, guaranteeing a functioning system in fewer than 30 minutes. This solution gives us the flexibility to recover the original server in a calm and unhurried manner.

This is not real-time redundancy, but you will have the insurance of continuity of service[^3] in case of any incident.

### Backups

Your data continuity matters. We ensure 30 last-day backups in a second data center operated by [Online](https://www.online.net/en/datacenter) and on our own servers. Ensuring quality is our main goal. Our physical infrastructure has resulted in fewer corrupted disks: only two during the last four years[^4] compared to three or four per month with our last subcontractor.

### Be free, for the best

Our freedom allows us to provide you with more choices for our server configurations. We're no longer limited by our subcontractors. We choose only the material and suppliers that we trust. We manage our own supply chain, which allows us to prevent delays. Within hours, we can deploy servers on production in standard configurations.

As an independent operator, we are freer than we were with subcontractors. With our own IP ranges, we no longer suffer from the blacklisting that impacted our subcontractors. In addition, we are able to do advanced filtering on access on our side.

We finally have better control: [deploying IPv6](/en/blog/2018-02-01-ipv6-to-rule-them-all/) wouldn't have been possible if we didn't have our own infrastructure. Now, we are ready to offer something unique: a hosting platform with software solutions that perfectly fit your needs.

## 2018, an all-inclusive offer

In 2013, *alwaysdata* started with only three devices. Now, we have nearly fifty times that number of servers and devices to power your apps and websites. That migration took some time, but we learned a lot about our skills and your needs. With our final servers finally running on our side, we're free.

We're free to provide you with a solution that you're happy to work with. We often say that *alwaysdata* is *conceived by devs, for devs*. Now more than ever, that's our main incentive. We will continue to offer you with more and more features on the hardware and software sides. This adventure wouldn't have happened without you. Thank you for your confidence in our ability to change the hosting world.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExajVpMDE0ZWNuMXAwbjJodWRvbW44NjZkZWg4bGV0M2NpdjVsYWZhaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8KKRIP5ZHUo2k/giphy.gif)

We at *alwaysdata* will never run out of ideas about new features. Let's play in the comments: which technologies — unlikely or wacky, hardware or software — can you imagine coming in the *alwaysdata* platform?

[^1]: unless you count this Sunday at 1 a.m., which lasted for fewer than five minutes
[^2]: a breakdown due to something as basic as overheating was simply not an option
[^3]: if you need more, stay tuned! A **gold** offer will be introduced soon, featuring all the high availability options you could possibly need and a physical redundancy in another data center. You will have practically a 99.95% availability rate
[^4]: and only in the last month with two new disks, which were probably because they come from a bad batch
