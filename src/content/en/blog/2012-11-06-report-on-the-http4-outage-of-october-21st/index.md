---
title: "Report on the http4 outage of October 21st"
date: 2012-11-06
authors: ["Cyril Baÿ"]
---

On Sunday 21st October, the http4 server was unavailable between 01.02 and 10.17 (UTC+2). This article goes over this outage, which was abnormally long: what happened in detail, what we are going to do to ensure that it doesn't happen again and a clarification on the issue.

## What happened

On Saturday, at 16.51, the http4 server completely froze. We restarted it, then monitored the situation - the logs didn't give any indication. A freeze can be caused by a problem with either hardware or software; it was impossible at that moment to be sure of the cause.

At 22.01, the problem recurred. This time the logs allowed us to be sure that the cause was hardware-related (motherboard dying). With our provider, we therefore arranged the replacement of the board at 01.00.

At 01.02, the server was taken out of service to replace the motherboard. This type of operation would normally take less than 30 minutes.

After changing the motherboard, the server wouldn't start. The whole RAM was changed, which solved this problem. A second anomaly, the network card (Intel 10Gb) was displaying in a loop:

```
ixgbe 0000:04:00.0: eth0: Reset adaptor
ixgbe 0000:04:00.0: eth0: detected SFP+: 0
```

The rest of the system was functioning well, the kernel was behaving normally. The technician therefore tried to identify the cause of the problem, notably by:

- checking the cables
- checking the switch configuration
- changing the network card for an identical model
- reinstalling the old motherboard
- reinstalling the new motherboard
- updating the BIOS of the motherboard
- updating the firmware of the network card

Without success. The technician then decided to do an emergency set-up of a new server, with an identical configuration, and to insert our server's hard drives. This did not resolve the problem.

We must add one important detail: only our own Linux kernel (the one which we compile and maintain, with our own configuration) showed signs of the bug. The standard kernel of our provider was working correctly, which seemed to exclude a hardware/cable problem. Nevertheless, our kernel was working perfectly well up until then on this server... which makes the issue even more mysterious.

Finally, a little before 10.00, a senior technician was able to retrieve a slightly different type of network card (still an Intel 10Gb): this finally resolved the problem.

## Decreasing risks in the future

The original problem — the network card suddenly refusing to work — remains mysterious and unclear. It could have been a particularly unpredictable bug in the kernel driver, for example. It is impossible to protect against this type of anomaly, which is fortunately exceptionally rare.

It is nevertheless the first time in 6 years that we have faced such a significant downtime of the server. We can draw several conclusions from it.

### Favour the most up-to-date servers

Our provider (OVH) offers a different range of servers. The http4 server, dating from the beginning of 2010, is part of the top range, with even more protection than the more traditional servers (for example, they have a dual supply or 10 Gb/s network connections).

From experience (we have a wide range of servers), we can state that:

- the theoretically superior reliability of the high-end servers is not significantly different from that of other ranges
- the stock of high-end servers of our provider is much more limited than that of other servers. Consequently, and according to our subjective and limited experience:
    - these servers seem to be more susceptible to certain types of "rare" bugs (hardware, routers): the more there are users of equipment X, the more quickly the potential bugs will be detected and corrected
    - the technicians (level 1) being less frequently exposed to these servers, will have overall less experience with them. Invaluable experience in case of urgent problems
    - the chances of having a replacement server, ready to use, are much less

To summarise, we can state that the reliability of high-end servers will paradoxically be inferior to that of other ranges. We are therefore progressively phasing out the use of these servers (in shared hosting, http4 and http6 are involved).

*If http4 had been on a standard server, it is possible that the mysterious bug on the network card would have been discovered and resolved before it had any impact on us. In addition, the spare servers would have probably been available more quickly.*

### Ensure that our servers can start up with our provider's kernel

Our provider allows us to use their own Linux precompiled kernel. We don't use them for several reasons, notably the impossibility of choosing the version of it, of applying patches or modifying the configuration.

If it is not then a question of us using our provider's standard kernels (because of the limitations mentioned), it would be preferable that in an emergency, it would be at least possible to boot our servers with them. It would only be to help with the debugging.

In practical terms, the changes to be made to the configuration of our servers are minimal.

*If we had been able to start up http4 on the kernel of our provider, the server would have been accessible again a lot more quickly. Even if it meant that some non-essential functions were disabled.*

### Allow rapid access to data in rescue mode

In case of problems, it is possible to start up the servers in rescue mode (boot via TFTP/NFS). The hard disks are not used at all by the system, which theoretically guarantees that the rescue mode is accessible even in the the case of a configuration problem.

Henceforth, we are going to get our own spare server. In instances of serious hardware or software problems which cannot be resolved quickly, we will then have the option of starting the server in question in rescue mode, then exporting its share of data to the emergency server. So the latter will take over from the broken server, which can then be debugged calmly afterwards. We have simulated this switch over the last few days, with success.

### Level 2 technicians, 24/7

At the present time, level 2 technicians are not systematically present every night. Specifically, the issue happened on a Sunday, when the level 2 technicians did not arrive before 10.00. Our provider told us they work on this point and will proceed with numerous recruitments to reach the target of having level 2 technicians 24/7.

## And the redundancy?

Up until recently, our servers were redunded in Ireland, using the [DRBD](http://www.drbd.org/) technology. This redundancy in real time, put in place from the beginning of alwaysdata, aimed to overcome serious outages (hardware, network) by switching to the secondary datacenter. Why, therefore, have we not switched?

We've had this redundancy for several years, but we progressively started to disable it on some servers, for the following reasons:

- the stability was not sufficient. DRBD was too often the source of freezes/crashes on the primary server, and this in spite of frequent updates. It is enough to look at the [changelog](http://git.drbd.org/?p=drbd-8.4.git;a=blob;f=ChangeLog;hb=HEAD) to note that each new version fixes fairly serious bugs. We use DRBD in a WAN mode which isn't the most frequent, and this could explain the relative instability
- in 6 years, we had never had such an exceptional downtime that justified switching to the emergency datacenter (the http4 outage is the very first). This is good news: it shows that the stability of our main provider is very good
- redundancy has a cost:
   - (quite low) on the IO performance of servers
   - (not insignificant) on the complexity of our architecture
   - (low) financially
- the less we have the opportunity to really switch to the secondary datacenter, the more we run the risk that everything won't run smoothly on the day when we have to do it — in spite of simulations

In conclusion: redundancy has never served us, but has caused downtime on several occasions. It's undeniably a paradox: redundancy has lowered our average uptime.

We can however ask ourselves why redundancy was not activated during smaller downtimes (>= 30 minutes):

- the smaller downtimes of hardware or network (the only ones likely to be eliminated by switching to the secondary datacenter) are first of all very rare. Of the 64 breakdowns recorded since we began our [status page](https://status.alwaysdata.com), only 3 have lasted more than 30 minutes and could have been eligible for switching to the secondary datacenter
- switching isn't instantaneous: the secondary server has to take over, and the DNS especially have to be updated. In practice, with HTTP, nearly 30 minutes are needed for the majority of new connections to be established on the new IP
- consequence of the previous point: switching can be counter-productive. If we decide to switch after 30 minutes of downtime, but the issue is resolved 5 minutes later, we would have to switch back to the primary datacenter. At the end of the day, it would have been better to do nothing. Besides, the majority of downtimes which last more than 30 minutes last less than 60 minutes
- switching has risks of split-brain if you can't ensure that the primary machine is out of service. This makes switching rather risky, notably when there is a network outage

In the end, even if the http4 downtime would have justified switching (long downtime, server out of service), we wouldn't call into question our decision to stop the redundancy.

We made an error though: we should have publicly announced the stopping of this redundancy, albeit partial (some servers still have redundancy at the present time). From now on it's a done deed.

### Other forms of redundancy in the future?

If today we stop the redundancy via DRBD, it is possible that in the future we will head towards other forms of redundancy — for example, database replication or a systematic synchronisation of filesystems. The aim would not be, however, just to improve availability but to offer other advantages, for example in terms of performances.

Let's be clear that removing the redundancy in real time has strictly no link with backups, still done daily and kept for 30 days.

## In conclusion

We offer all our apologies to our customers for this exceptional issue. Those who were affected can open a ticket requesting total reimbursement for the month of October, as stated in our [terms of use](https://www.alwaysdata.com/en/terms-and-legal/).

Let's remember our dedication to offering the best uptime possible, even in a shared environment. It's a daily challenge, bearing in mind the great flexibility that we offer (e.g. opening an account without payment, being able to run any process on our servers).

To promise that there will be no more serious downtimes would be unrealistic: nobody can guarantee that. What we promise is total transparency, [during the incident](https://status.alwaysdata.com/operation/64/detail/) and afterwards, with concrete steps taken to avoid a recurrence. And answers to your questions, if you have any.
