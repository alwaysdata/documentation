+++
title = "Permissions"
weight = 5
chapter = true
+++

# Permissions

As it is usual to involve several different players in its data hosting, our administration interface allows to give permissions different granular levels.

- [QuickStart]()
- [How-Tos]()
- [Troubleshooting and FAQs]()

## Global permissions

- _Account management_: delegate the account opening to your partners;
- _[Billing]()_: allows accounting or administrative departments to receive alert when your account balance is negative or when a ticket regarding billing is opening by our services;
- _Technical at accounts level_: allows technical teams to handle the purely technical aspect of your hosting (websites, emails, databases...) without taking care of its management and billing;
- _Technical at servers level_: available on VPS and dedicated servers, your network administrator would be able to manage firewall rules, email waiting queue among other things...

## Technical permissions

<div style="text-align: left">
Whether for the purely technical aspect of your accounts or your servers, your organization imposes a division of technical responsibilities internally between several people or groups of people or between external subcontractors who even need restricted access. You can then define permissions per <b>service</b> and per <b>account</b> or <b>server</b>.
</div>

### Per account

- _Technical contact_: be alerted when our services open a technical ticket regarding the concerned account;
- _Usage_: track the disk space consumption;
- _[Statistics]()_: analyze websites's visits;
- _[Sites]()_: configure websites and Apache environment;
- _[Domains]()_;
- _[Emails]()_;
- _[Databases]()_;
- _[FTP]()_;
- _[SSH]()_;
- _[WebDAV]()_;
- _[Environment]()_: configure programming languages;
- _[Processes]()_: ongoing HTTP processes that can be analyzed or killed;
- _IP addresses_: buy dedicated IP addresses for HTTP or SMTP;
- _[SSL Certificates]()_;
- _[Migration]()_;
- _[Scheduled tasks]()_;
- _[Backups]("Backups")_.

### Per server

- _Technical contact_: be alerted when our services open a technical ticket regarding the server in question;
- _SSH users_: install [SSH keys]() to simplify access to the server's different accounts;
- _[Firewall rules]()_: create firewall rules and check the automatic IP bans;
- _SMTP configuration_: manage some SMTP parameters and check the email waiting queue;
- _Database users_: give server's databases global accesses;
- _SSL configuration_: choose SSL certificates to returned globally (*.alwaysdata.net per default);
- _HTTP configuration_: choose a website which will be the default home;
- _Usage_: track the disk space consumption on the whole server;
- _Resources_: change resources's restrictions per account (ex: RAM consumption).
