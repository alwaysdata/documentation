+++
title = "Permissions"
weight = 12
layout = "man"
tags=["administration"]
+++

Because hosting your data often involves different players, our administration lets you grant permissions with different granularity levels.

## Overall permissions

- *Account management*: delegates account opening to your associates,
- *[Billing]({{< ref "accounts/billing" >}})*: lets accounting or administrative departments receive an alert when your account balance is negative or when a ticket relating to billing is opened by us,
- *Technical at account level*: lets technical teams manage the purely technical aspects of your hosting (sites, e-mails, databases) without worrying about its management or billing,
- *Technical at server level*: available on dedicated and VPS servers, your network administrator can manage the rules for the firewalls, e-mail send queues and many other aspects.

## Technical permissions

Whether for the purely technical aspect of your accounts or your servers, your organization imposes a breakdown in technical responsibilities internally between a number of people or groups of people or between outside contractors who need access, even if it is restricted. You can therefore define permissions by **service** and by **account** or **server**.

### By account

- *Technical contact*: be alerted when a technical ticket is opened by our services relating to the account,
- *Usage*: monitor disk space consumption,
- *[Statistics]({{< ref "analytics" >}})*: analyze the visits to your sites,
- *[Sites]({{< ref "sites" >}})*: configure the websites and the Apache environment,
- *[Domains]({{< ref "domains" >}})*,
- *[Emails]({{< ref "e-mails" >}})*,
- *[Databases]({{< ref "databases" >}})*,
- *[FTP]({{< ref "remote-access/ftp" >}})*,
- *[SSH]({{< ref "remote-access/ssh" >}})*,
- *[WebDAV]({{< ref "remote-access/webdav" >}})*,
- *[Environment]({{< ref "/languages" >}})*: configure the programming languages,
- *Processes*: HTTP processes executed that may be analyzed or killed,
- *[IP addresses]({{< ref "advanced/dedicated-ip-addresses" >}})*: rent dedicated IPs for HTTP or SMTP,
- *[SSL certificates]({{< ref "security/ssl-tls" >}})*,
- *[Migration]({{< ref "advanced/migrations" >}})*,
- *[Scheduled tasks]({{< ref "tasks" >}})*,
- *[Backups]({{< ref "backups" >}})*.

### By server

- *Technical contact*: be notified when a technical ticket is opened by our services relating to a server,
- *[SSH users]({{< ref "remote-access/ssh/install-globally-ssh-keys" >}})*: install SSH keys for simplified access to the various accounts,
- *[Firewall rules]({{< ref "security/network/configure-firewall">}})*: create firewall rules and refer to automatic IP banning,
- *SMTP configuration*: manage the e-mail send queue, SMTP relaying and spam score,
- *Database users*: permit overall access to databases for all accounts,
- *SSL configuration*: choose the SSL certificate to return to the server (`*.alwaysdata.net` by default) and the server [TLS configuration]({{< ref "security/ssl-tls/configure-tls" >}}),
- *HTTP configuration*: choose a website that will be the default home page and the log retention period,
- *Consumption*: monitor disk space consumption for your entire server,
- *[Resources]({{< ref "advanced/system-resources-alerts-and-limitations" >}})*: change the resource limits by account (e.g. RAM usage).

{{% notice note %}}
It is possible to remove the permissions we have on other profiles. The removal is not done finely, they will all be deleted.
{{% /notice %}}
