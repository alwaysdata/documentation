---
title: Authenticate your Domain to Use Brevo
eleventyNavigation:
  key: Using Brevo
  parent: Third-Party Software
  order: 6
---
 
Brevo (formerly Sendinblue) is a well-known email marketing platform. To improve the deliverability of sent emails, you need to [authenticate](/en/docs/e-mails/outgoing-e-mails/set-up-spf-dkim-dmarc) them by creating, with your DNS provider, DNS records that they will provide. Here’s how to do it with alwaysdata.
 
Go to **Domains > Details of [example.org] - ⚙️ > DNS records > Add a DNS record**
 
Type | Hostname | Value
--- | --- | ---
TXT | [leave blank] | brevo-code:[provided value]
CNAME | brevo1._domainkey | b1.[provided value].dkim.brevo.com
CNAME | brevo2._domainkey | b2.[provided value].dkim.brevo.com
 
It is necessary to [add their servers](https://help.brevo.com/hc/en-us/articles/4414335084434-Merge-multiple-SPF-records) by adding `include:spf.brevo.com` to the SPF record already created. Here is an example:
 
Type | Hostname | Value
--- | --- | ---
TXT | [leave blank] | v=spf1 include:_spf.alwaysdata.com include:spf.brevo.com ~all

They are also requesting changes to the `DMARC` record by adding `rua=mailto:rua@dmarc.brevo.com`:
 
Type | Hostname | Value
--- | --- | ---
TXT | _dmarc | v=DMARC1; p=none; rua=mailto:rua@dmarc.brevo.com
