+++
title = "How To add SRV records"
menuTitle = "Add SRV Records"
date = 2019-10-14T17:10:59+02:00
layout = "howto"
weight = 10
draft = false
hidden = true
+++

A [SRV record](https://en.wikipedia.org/wiki/SRV_record) defines the location of specified services.

1. Go in **Domains > Details of domain.tld (star wheel) > DNS records**;
![Admin interface: DNS records list](/en/platform/domains/admin-panel_dns-record-list_en.png)
2. Choose **Add DNS record**;
3. Fill in the form.
![Admin interface: add a SRV record](/en/platform/domains/admin_panel_add-srv_en.png)

> Don't put the root in **Hostname**. For example, by putting _domain.tld_ in this box, we will create a record for _domain.tld.domain.tld_.

## Some examples


```
-> Configure a mail client with _autodiscover._tcp:
    » Hostname: _autodiscover._tcp
    » Value: 0 443 mail.server.address
    » Priority: 1
    » TTL: 300

-> Use Lync (formerly Skype) with _sip._tls and _sipfederationtls._tcp:
    » Hostname: _sip._tls
    » Value: 1 443 sipdir.online.lync.com
    » Priority: 100
    » TTL: 3600
    
    » Hostname: _sipfederationtls._tcp
    » Value: 1 443 sipfed.online.lync.com
    » Priority: 100
    » TTL: 3600
```
