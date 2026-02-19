+++
title = "Login Information"
tags = ["account", "technical environment"]
+++

The subdomain assigned to you when your account is created will end with a **.net** extension and not a _.com_ extension like other alwaysdata domains.

Every time you encounter the `*-[account].alwaysdata.net` format, you
need to replace `[account]` with the name of your account as chosen when
it was created.

| Feature                  | Information                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| **Admin**                |                                                                                                    |
| URL                      | https://admin.alwaysdata.com                                                                       |
|                          | E-mail/password, [2-factors auth ready](/admin-billing/profile/two-factor-authentication)          |
| API                      | [api.alwaysdata.com/v1](/development/api) (with a *[rate limit](/development/api/usage#rate-limit)*) |
|                          | [Tokens](/admin-billing/profile/tokens) available in *Profile*                                     |
| **Generic**              |                                                                                                    |
| DNS                      | Primary: dns1.alwaysdata.com                                                                       |
|                          | Secondary: dns2.alwaysdata.com                                                                     |
| MX                       | Primary: mx1.alwaysdata.com (TTL: 10)                                                              |
|                          | Secondary: mx2.alwaysdata.com (TTL: 20)                                                            |
|                          | if [Private Cloud](/admin-billing/billing/private-cloud-prices): [server].alwaysdata.net (TTL: 5) |
| **Databases**            |                                                                                                    |
| MySQL                    | Host: mysql-[account].alwaysdata.net                                                               |
|                          | Port: 3306                                                                                         |
|                          | Administration interface: [phpMyAdmin](https://phpmyadmin.alwaysdata.com)                          |
| PostgreSQL               | Host: postgresql-[account].alwaysdata.net                                                          |
|                          | Port: 5432                                                                                         |
|                          | Administration interface: [phpPgAdmin](https://phppgadmin.alwaysdata.com)                          |
| RabbitMQ                 | Host: rabbitmq-[account].alwaysdata.net                                                            |
|                          | Port: 5672                                                                                         |
| Redis                    | Host: localhost or 127.0.0.1                                                                       |
|                          | Port: 6380                                                                                         |
| Memcached                | Host: localhost or 127.0.0.1                                                                       |
|                          | Port: 11211                                                                                        |
| **E-mails**              |                                                                                                    |
| Webmail                  | [RoundCube](https://webmail.alwaysdata.com)                                                        |
| Mailing-lists            | [Mailman](https://mailman.alwaysdata.com)                                                          |
| IMAP                     | Host: imap-[account].alwaysdata.net                                                                |
|                          | Ports: 993 (SSL/TLS)                                                                           |
| POP3                     | Host: pop-[account].alwaysdata.net                                                                 |
|                          | Ports: 995 (SSL/TLS)                                                                           |
| SMTP                     | Host: smtp-[account].alwaysdata.net                                                                |
|                          | Ports: 465 (SSL/TLS)                                                               |
|                          | Identification: e-mail (address and the password assigned to it)                                   |
| **Remote access**        |                                                                                                    |
| FTP                      | Host: ftp-[account].alwaysdata.net                                                                 |
|                          | Port: 990 (SSL/TLS) |
| SFTP                     | Host: ssh-[account].alwaysdata.net                                                                 |
|                          | Port: 22                                                                                           |
| SSH                      | Host: ssh-[account].alwaysdata.net                                                                 |
|                          | Port: 22                                                                                           |
|                          | Web access (via Shell in a box): https://ssh-[account].alwaysdata.net                              |
| WebDAV                   | Host: webdav-[account].alwaysdata.net                                                              |
|                          | Port: 80                                                                                           |
| **Services**             |                                                                                                    |
|                          | Host: services-[account].alwaysdata.net                                                            |
|                          | Ports: between 8300 and 8499                                                                       |

{{% notice note %}}
The default login corresponds - except for emails for which the username is the email address - to the **account name** and the password is the one indicated at the creation of the account. All passwords are encrypted - and therefore unrecoverable - but can be modified in the dedicated menus.
{{% /notice %}}
