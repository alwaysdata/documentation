+++
title = "Adding an SRV Record"
layout = "howto"
hidden = true
+++

An [SRV record](https://en.wikipedia.org/wiki/SRV_record) defines the location of specific services.

1.  Go to **Domains > Domain [example.org] details (cog wheel) > DNS records**,
    {{< fig "images/admin-panel_dns-record-list.en.png" "Administration interface: list of DNS records" >}}

2.  Choose **Add a DNS record**,

3.  Fill-in the form. 
    {{< fig "images/admin-panel_add-srv.en.png" "Administration interface: add an SRV record" >}}

{{% notice warning %}}
Do not put the root into the **Hostname**.
For example, by putting `www.example.org` in this box, you will create a record for `www.example.org.example.org`.
{{% /notice %}}

## Some examples

-   Automatically configure a mail client with `_autodiscover._tcp`:
    ```
    » Host name: _autodiscover._tcp
    » Valeur : 0 443 addresse.serveur.mail
    » Priorité : 1
    » TTL : 300
    ```
  
-   Use Lync (formerly Skype) with `_sip._tls` and `_sipfederationtls._tcp` :
    ```
    » Host name: _sip._tls
    » Valeur : 1 443 sipdir.online.lync.com
    » Priorité : 100
    » TTL : 3600
    ```
    ```
    » Host name: _sipfederationtls._tcp
    » Valeur: 1 443 sipfed.online.lync.com
    » Priorité: 100
    » TTL : 3600
    ```
