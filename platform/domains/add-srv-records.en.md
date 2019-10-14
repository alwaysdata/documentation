+++
title = "How To add srv records"
menuTitle = "Add Srv Records"
date = 2019-10-14T17:10:59+02:00
layout = "howto"
weight = 10
draft = true
+++

A [SRV record](https://en.wikipedia.org/wiki/SRV_record) defines the location of specified services.

1. Go in **Domains > Details of domain.tld (star wheel) > DNS records**;
2. Choose **Add DNS record**;
3. Fill in the form.

## Some examples



\_autodiscover.\_tcp to automatically configure a mail client:
    Hostname: \_autodiscover.\_tcp
    Value: 0 443 mail.server.address
    Priority: 1
    TTL: 300


\_sip.\_tls and \_sipfederationtls.\_tcp to use Lync (formerly Skype):
    Hostname: \_sip.\_tls
    Value: 1 443 sipdir.online.lync.com
    Priority: 100
    TTL: 3600
    
    Hostname: \_sipfederationtls.\_tcp
    Value: 1 443 sipfed.online.lync.com
    Priority: 100
    TTL: 3600

