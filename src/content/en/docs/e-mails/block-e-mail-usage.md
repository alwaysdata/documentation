---
title: Block email usage
eleventyNavigation:
  key: Block email usage
  parent: E-mails
---
 
At alwaysdata, DNS management is done in the menu **Domains > Details of [example.org]- ⚙️  > DNS Records**.
 
`MX`, `SPF`, and `DMARC` DNS records are created by default; adding these types of records will override the records created by the system.
 
## Blocking Receiving Emails
 
Simply do NOT create an email address with your email provider and/or add a `MX` record with your DNS provider that points to a non-existent value. Senders will receive an error.
 
You can, for example, create the following record:
 
Type|Hostname|Value|Priority
---|---|---|---
`MX`|[leave blank or @ depending on the DNS provider]|`/dev/null`|1
 
## Block Sendings
 
The aim here is to prevent hackers from impersonating you by sending emails with your domain in the FROM address.
 
Create the following DNS records:
 
Type|Hostname|Value
---|---|---
`TXT`|[leave blank or @ depending on the DNS provider]|`v=spf1 -all`
`TXT `|`_dmarc`|`v=DMARC1; p=reject;`
 
This will tell recipient email servers using your domain to reject emails. Indeed:
 
- The `SPF` record indicates that there are no SMTP servers authorized to send emails for your domain,
- The `DMARC` record indicates that all emails sent from your domain should therefore be discarded.
