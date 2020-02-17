+++
title = "Configuring SPF/DKIM/DMARC"
layout = "howto"
hidden = true
tags = ["e-mail", "dns"]
+++

Here are three methods for authenticating your emails and thereby reducing abusive email use (spam, phishing, etc.).

## Sender Policy Framework

[SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) makes a *TXT* type DNS request to the sender's domain ("*MAIL FROM*" in the message headers) to find out the list of servers allowed to send emails and compare it with the IP address of the sender's server.

{{< fig "images/globalcyberalliance-spf.en.png" "SPF: explanatory diagram" >}}

### Components

|Mechanism||
|--- |--- |
|ALL|Default result|
|A|An IN A (or AAAA) record that can be resolved as the sender's address|
|IP4|IPv4 range|
|IP6|IPv6 range|
|MX|A Mail eXchanger record pointing to the sender's address|
|EXISTS|The domain is resolved at any address|
|INCLUDE|An included rule passes the test|
|PTR|The IP address domain corresponds to the specified domain and the latter points to the IP in return|

|Qualifiers||
|--- |--- |
|+|Favorable result|
|?|Neutral result|
|~|Slight "SOFTMAIL" failure (email accepted but marked)|
|-|Total failure (email normally rejected)|

|Modifiers||
|--- |--- |
|exp=some.example.com|To get the reason for the failure results|
|redirect=some.example.com|To link to a rule record in another domain|

An SPF record is created by default and can be found in the **DNS records** tab for the domain:

{{< fig "images/spf-record.png" "SPF record" >}}

This explicitly allows our servers to send emails and sends a neutral result for the other sender servers.

{{% notice warning %}}
This technology may have an impact on email redirects: as the sender server is not necessarily the email server belonging to the original email sender.
{{% /notice %}}

### Links

- [RFC 7208](https://tools.ietf.org/html/rfc7208)
- [RFC 7372 - point 3.2](https://tools.ietf.org/html/rfc7372)
- [RFC 4408](https://tools.ietf.org/html/rfc4408)

## DomainKeys Identified Mail

[DKIM](https://fr.wikipedia.org/wiki/DomainKeys_Identified_Mail) is used to authenticate the domain name by adding a signature to all of the outgoing emails.

{{< fig "images/globalcyberalliance-dkim.en.png" "DKIM: explanatory diagram" >}}

To generate a pair of keys, go to **Domains > Details** for the relevant domain name **> Configuration**.

{{< fig "images/admin-panel_domain-configuration.en.png" "Administration interface: configure DKIM" >}}
{{< fig "images/admin-panel_dkim.en.png" "Administration interface: DKIM configuration result" >}}

A TXT record will then be created and can be found in the **DNS records** tab:

{{< fig "images/dkim-record.png" "DKIM record" >}}

### Links

- [Official site](http://www.dkim.org)
- [RFC 6376](https://tools.ietf.org/html/rfc6376)
- [RFC 7372 - point 3.1](https://tools.ietf.org/html/rfc7372)

## Domain-based Message Authentication, Reporting and Conformance

[DMARC](https://en.wikipedia.org/wiki/DMARC) is a protocol that standardizes authentication by telling the addressees what actions to take should one of the authentication methods fails. It will check that:

- the domain corresponds to the pair of DKIM keys (field *d=*),
- the sender server is specified in the SPF record for the domain (*MAIL FROM*),
- the domain is in the email's *FROM* field.

{{< fig "images/globalcyberalliance-dmarc.en.png" "DMARC: explanatory diagram" >}}

{{% notice info %}}
To use DMARC, DKIM and SPF must already be implemented.
{{% /notice %}}

### Parameters

|Variables||
|--- |--- |
|v|Protocol version: v=DMARC1 (required)|
|pct|Percentage of messages to filter (default: 100)|
|adkim|Coherency with DKIM|
||s = strict mode - the DKIM signature domain must precisely match the FROM|
||r = relax mode (default)|
|aspf|Coherency with SPF (s or r)|
|p|Procedure in case of failure - main domain (required)|
||none = delivers the email normally|
||quarantine = treats the email as suspect (spam score, flag, etc.)|
||reject = rejects the email|
|sp|Procedure in case of failure - subdomain (none, quarantine or reject)|
|ruf|Addressee for the detailed failure reports|
|fo|Conditions for sending a detailed report|
||1 = DKIM and/or SPF failure|
||d = DKIM failure|
||s = SPF failure|
||0 = DKIM and SPF failure (default)|
|rua|Destination for aggregated failure reports|

To implement it, a TXT record needs to be created in the **DNS records** tab for the domain:

{{< fig "images/dmarc-record.png" "DMARC record" >}}

---

### Links

- [Official site](https://dmarc.org/)
- [RFC 7489](https://tools.ietf.org/html/rfc7489)

---

Explanatory diagrams reused from [Global Cyber Alliance](https://dmarc.globalcyberalliance.org/)
