+++
title = "Permissions"
weight = 12
layout = "man"
tags=["administration interface", "billing", "technical environment"]
+++

Because hosting your data often involves different players, our administration lets you grant permissions with different granularity levels.

You can configure permissions through the **Permissions** menu in your customer admin interface.

{{< fig "images/menu.en.png" "" >}}

## Overall permissions

- **Account management**: delegates account opening to your associates (*Subscriptions* menu),
- **[Billing](accounts/billing)**: lets accounting or administrative departments receive an alert when your account balance is negative or when a ticket relating to billing is opened by us, buy/renew/transfer domains (*Billing* menu),
- **Technical at account level**: lets technical teams manage the purely technical aspects of your hosting (sites, e-mails, databases) without worrying about its management or billing,
- **Technical at server level**: available on [Private Cloud](accounts/billing/private-cloud-prices), your network administrator can manage the rules for the firewalls, e-mail send queues and many other aspects.

## Technical permissions

Whether for the purely technical aspect of your accounts or your servers, your organization imposes a breakdown in technical responsibilities internally between a number of people or groups of people or between outside contractors who need access, even if it is restricted. You can therefore define permissions by **service** and by **account** or **server**.

### By account

As long as a profile has permissions on the account, it has access to the *Server Status* menu.

- **Technical contact**: be alerted when a technical ticket is opened by our services relating to the account,
- **Usage**: monitor disk space consumption (*Disk*, *Advanced > Logs* menus),
- **Resources**: permission for accounts on [Private Cloud](accounts/billing/private-cloud-prices) allows to manage [probes](sites/use-probes) (*Web > Probes* menu) and [resources](advanced/system-resources-alerts-and-limitations) (*Advanced > Resources* menu),
- **[Statistics](analytics)**: analyze the visits to your sites (*Web > Analytics* menu),
- **[Sites](sites)**: configure the websites and the Apache environment (*Web > Sites*, *Web > Configuration* menus),
- **[Domains](domains)** technically manage domains and their DNS (*Domains* menu). For all billable operations, you will also need the __Billing__ permissions on the owner profile,
- **[Emails](e-mails)** (*Emails > Addresses*, *Emails > Mailing lists*, *Emails > Configuration* menus),
- **[History of sent emails](e-mails/check-email-sending)** (*Emails > History* menu),
- **[Databases](databases)** (*Databases* menu),
- **[FTP](remote-access/ftp)** (*Remote access > FTP* menu),
- **[SSH](remote-access/ssh)** (*Remote access > SSH* menu),
- **[WebDAV](remote-access/webdav)** (*Remote access > WebDAV* menu),
- **[Environment](/languages)**: configure the programming languages (*Environment* menu),
- **Processes**: processes currently executed that may be analyzed or killed (*Advanced > Processes* menu),
- **[IP addresses](advanced/dedicated-ip-addresses)**: rent dedicated IPs for HTTP or SMTP (*Advanced > IP addresses* menu),
- **[SSL certificates](security/ssl-tls)** (*Advanced > SSL certificates* menu),
- **[Migration](advanced/migrations)** (*Advanced > Migrations* menu),
- **[Scheduled tasks](tasks)** (*Advanced > Scheduled tasks* menu),
- **[Backups](backups)** (*Advanced > Backup recovery* menu),
- **[Services](services)** (*Advanced > Services* menu).

### By server


As long as a profile has permissions on the server, it has access to the *Configuration* menu.

- **Technical contact**: be notified when a technical ticket is opened by our services relating to a server,
- **[SSH users](remote-access/ssh/install-globally-ssh-keys)**: install SSH keys for simplified access to the various accounts (*SSH keys* menu),
- **[Firewall rules](security/network/configure-firewall)**: create firewall rules and refer to automatic IP banning by the server (*Firewall* menu),
- **SMTP configuration**: manage the e-mail send queue, SMTP relaying and spam score (*SMTP* menu),
- **Database users**: permit overall access to databases for all accounts (*MySQL users* menu),
- **SSL configuration**: choose the SSL certificate to return to the server (`*.alwaysdata.net` by default) and the server [TLS configuration](security/ssl-tls/configure-tls) (*SSL* menu),
- **HTTP configuration**: choose a website that will be the [default home page](sites/misc#http-default-site) and the [log retention period](remote-access/admin-directory#logs) (*HTTP* menu),
- **Consumption**: access a set of information about your server (*Accounts*, *Server Status* menus). To open accounts on the server it will be necessary to have the __Account Management__ permission on the owner profile,
- **[Resources](advanced/system-resources-alerts-and-limitations)**: change the resource limits by account - RAM, CPU, disk space (*Resources* menu),
- **[Migration](advanced/migrations)** (*Migrations* menu) ;

## 2FA required

When the **2FA required** box is checked, the user in question must log in [with 2 factors](security/two-factor-authentication) to access the menus to which they have been given access.

## My Permissions

It is possible to remove the permissions that we have on other profiles through the **Permissions > My Permissions** menu. The removal is not performed in a detailed manner, they will all be removed.

## Miscellaneous
When creating permissions to an email address that does not have an alwaysdata profile, that person will receive an email to initialize its profile.
