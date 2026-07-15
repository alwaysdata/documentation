---
title: "Handling the Disaster as a Cloud Provider"
date: 2021-03-18
authors: ["Matthias Dugué"]
---

Cloud computing is everywhere, and is becoming more and more important as we're slowly but surely moving towards Edge Architectures in an IoT (Internet of (Terrible) Things) world.

![](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBidjd4NTY1c3BlMXh4Z25yZGw3OWx5NTN3MW54YmdpbGt2cDdndiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/81xwEHX23zhvy/giphy.gif)

Recently, the French Hosting Provider OVHCloud suffered a huge data loss after a [massive fire in one of its data centers](https://www.techradar.com/news/ovh-has-a-hunch-about-what-caused-the-fire-that-destroyed-its-data-center) in Strasbourg, FR. The fire destroyed an entire unit and caused substantial damage to another. Due to this incident and the issues raised about the provider's responsibility over the data stored on their servers, we've received a lot of questions from customers asking about their own data hosted by **alwaysdata**. Here are our answers on how we are securing our Cloud platform.

---

First off, we made a quick thread on [Twitter](https://twitter.com/alwaysdata/status/1369995609009180673?s=20) and [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:6775779122309287936) about this topic. This article is their expanded version from an operational point of view at a hosting provider company. [The technical answers are available in our documentation](/en/docs/technical-specifications/drp/).

We've known OVHCloud for a while now. They've been a big player in the French and Europe hosting arena for a long time, and [they were our first hosting service before we migrated to our own infrastructure years ago](/en/blog/2018-02-20-4-years-later-being-independent-feedback/). We were super impressed by their reaction to the fire and we are relieved the whole team and all the firefighters involved are safe.

## DRP (Disaster Recovery Plan), a critical document

A Disaster Recovery Plan is a document that describes procedures that activate in case of emergencies. This document is unique to your enterprise as it is closely related to your business and depends on the answer to two key questions: What are your threat models, and how do you plan to handle them to sustain your activity, even when things go wrong?

As the OVHCloud's CTO Octave Klaba tweeted during the fire:

> We recommend to activate your Disaster Recovery Plan.

[Tweet](https://twitter.com/olesovhcom/status/1369478732247932929)

For a lot of their customers, this came as a surprise, as spotted in the responses to Octave's tweet: What is a DRP, and how can we activate it?

The truth is you do have to be prepared for the worst. As stated by [Murphy's law](https://en.wikipedia.org/wiki/Murphy's_law):

> Anything that can go wrong will go wrong.

Your DRP is there to prevent your business going down, potentially permanently. [According to some surveys, companies that suffer data loss will often permanently lose 93%](https://www.keepersecurity.com/blog/2019/07/24/cyber-mindset-exposed-keeper-unveils-its-2019-smb-cyberthreat-study/) of it. 53% of businesses that suffer disastrous data loss will permanently close within two years. Your DRP should be updated and tested regularly, which will allow you to face any situation, even the most desperate.

Like any other company, we need our own DRP that helps us stay safe in this kind of situation. We are no exception, especially when we have customers like you who trust us to take care of the sensitive assets that power your business. As a Cloud provider, you rely on our infrastructure to run your websites, applications, services, and so on, all related to *your data*.

The Cloud is now a central piece of every business, from SMB (Small & Medium Businesses) to major corporations, schools and universities, government institutions, etc. It hosts emails, files, databases and tools. We power far more than just websites in this era of connected devices and we do have to prepare.

## When a plan comes together

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHI3bHFqeGhvYXRrYzU5ZzE5N21pbGRyd3hiZXByc3BscHd5bXE0ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vR6aasfs0Ae3qdG/giphy.gif)

**alwaysdata**, as a Cloud Platform Service, powers hundreds of servers. We're prepared to face the worst, including loss of power, hardware, or (heaven forbid!) a whole data hall or center. To mitigate these risks, we have made design decisions which are applied to our overall infrastructure:

1. **Spread the hardware**: Our servers are hosted on several racks, all located in different places. A bunch of spare servers are ready to be started in those racks. In case of material failure, we're ready to switch the services to other servers, even those located in another rack, to ensure the continuity of service.
2. **Be everywhere**: Our racks are located in different data halls: Even in a major incident involving a complete data hall, we can switch service to other racks and restore it quickly.
3. **Handle backups**: We snapshot your overall data every single day and retain these records for 30 rolling days. These snapshot backups contain your files, databases, emails, configurations, and so on. They're available read-only from your account at any time. By [saving your data by default](/en/docs/web-hosting/backups/), we ensure we can restore your content quickly in case of a disaster.
4. **Keep the backups safe**: To prevent any natural disasters from destroying everything, our backups are located in a completely separate data center. This backup DC (Data Center) is geographically distant from the production units. It's also operated by another provider, to maintain independence.
5. **Keep the nameservers**: The DNS (Domain Name Servers) architecture is as critical as the data. In case of failing hardware, we need to get it up and running to route the incoming traffic to new servers. So, we host our nameservers in different locations and with different providers so the DNS records will remain available for updates and continual maintenance of traffic flow.
6. **Stay connected**: We're committed to staying independent from any one provider, mitigating the risk of a SPoF (Single Point of Failure). Our Internet access is provided by four different ISPs (Internet Service Providers) in order to absorb any traffic issues. Our Cloud infrastructure will remain reachable by anyone, regardless of the status of these ISPs.
7. **Plumb the Network**: Inside our data centers, we manage the overall network infrastructure to provide each server with a fallback network link. If the main network trunk is unavailable for any reason, we can easily switch the link to the fallback interface and re-enable the network immediately.
8. **Stand on the shoulders of the best**: We chose [Equinix](https://www.equinix.com/) as our main data center host for our production units, [renowned for their quality and experience](https://www.equinix.com/data-centers/design/standards-compliance/) in terms of premium hosting all around the world. Our data centers benefit from the best infrastructure and certifications in terms of security and protection.
9. **Offer more to the most demanding**: You may have different needs for redundancy and scalability according to your business requirements. For all of you who need such infrastructure, we offer a [Gold Plan in Catalyst](https://www.alwaysdata.com/en/offers/max/). Your servers are distributed across geographically distant DCs (Data Centers) in redundant synced states. In case of failure of one node, all the traffic is instantly redirected to the other node(s) to keep everything up.

## What could possibly go wrong?

When everything comes together, you may think to be ready to face any situation. We have a strong architecture, well-designed processes, and we pick qualified partners to back us. We're ready. And we are no exception.

The truth is, all providers that have experienced outages in the past, from AWS to OVHCloud, thought they were as ready as we are. The reality is you can only really be ready for the worst-case scenarios you can think of. And this is where we talk about *your* responsibility.

We've considered the worst case scenarios that might occur. It also falls to you to do the same on your side. You know your business better than anyone. During the last OVHCloud outage and the fire at SBG2, OVHCloud was probably convinced they were really well prepared, but a lot of their customers still lost their data. Some weren't aware they had to pay an extra fee to back up their data. Some chose not to pay the extra.

Trusting your provider is essential. But ultimately it's about understanding the scope of the service you buy. To keep you from a major data disaster, we chose to embed all these security features by design. This is exactly what [makes us a Cloud provider (or a managed PaaS provider)](/en/blog/2018-03-05-saas-paas-iaas-what-are-the-differences-and-what-does-it-matter/). Some customers will need it, some won't. Your responsibility here is to pick an offer that matches your security needs.

## Be Prepared. Be Safe.

![](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2trOTBhNWZidzF3a2hjOXVmOGpjZjBrMzd3OGdxemJ3YWEwcW9uZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRxBeok96wnAwpy/giphy.gif)

We've seen how a DRP (Disaster Recovery Plan) is essential to keep your business up and running in the face of disaster. Picking a provider that fits your needs in terms of protections is similar to a good DRP but should not prevent you from having one. As your data is critical, you do need to have a plan in case of failure and to choose your partners accordingly.

Because you know your business better than anyone, this choice of providers is up to you: You can choose to build a DRP that doesn't depend on a single provider, letting you switch quickly to a fallback in case of emergency. Or you can pick a partner who provides you with the guarantees you require, so you can stay focused on your business continuity.

There is no right choice to make. It's your decision on how to handle a potential disaster: Will you lead the charge, or do you prefer to put the responsibility in the hands of your provider? Only you have the answer.

The worst disaster is the one you don't see coming. Be prepared. Your data is the heart of your business. Keep'em secured. Keep'em safe.
