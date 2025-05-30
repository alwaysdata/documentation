+++
url = "/fr/acces-distant/informations-de-connexion/"
title = "Informations de connexion"
linkTitle = "Informations de connexions"
layout = "faq"
weight = 1
tags = ["compte", "environnement technique"]
+++

Le sous-domaine qui vous est attribué à la création de votre compte se termine par l'extension **.net** et non _.com_ comme les autres domaines d'alwaysdata.

Chaque fois que vous rencontrez la forme `*-[compte].alwaysdata.net`, vous devez remplacer `[compte]` par le nom de votre compte, choisi lors de sa création.



| Fonctionnalité                    | Informations                                                                                       |
|:---------------------------|-----------------------------------------------------------------------------------------------------------|
| **Administration**         |                                                                                                           |
| URL                        | https://admin.alwaysdata.com                                                                              |
|                            | Email/mot de passe, [Double authentification possible](security/two-factor-authentication)  |
| API                        | [api.alwaysdata.com/v1](api) (soumis à un *[rate limit](api/usage#rate-limit)*) |
|                            | [Tokens](accounts/tokens) disponibles via *Profil*                                          |
| **Générique**              |                                                                                                           |
| DNS                        | Primaire : dns1.alwaysdata.com                                                                            |
|                            | Secondaire : dns2.alwaysdata.com                                                                          |
| MX                         | Primaire : mx1.alwaysdata.com (TTL : 10)                                                                  |
|                            | Secondaire : mx2.alwaysdata.com (TTL : 20)                                                                |
|                            | si [Cloud Privé](accounts/billing/private-cloud-prices) : [serveur].alwaysdata.net (TTL : 5) |
| **Bases de données**       |                                                                                                           |
| MySQL                      | Hôte : mysql-[compte].alwaysdata.net                                                                      |
|                            | Port : 3306                                                                                               |
|                            | Interface d'administration : [phpMyAdmin](https://phpmyadmin.alwaysdata.com)                              |
| PostgreSQL                 | Hôte : postgresql-[compte].alwaysdata.net                                                                 |
|                            | Port : 5432                                                                                               |
|                            | Interface d'administration : [phpPgAdmin](https://phppgadmin.alwaysdata.com)                              |
| RabbitMQ                   | Hôte : rabbitmq-[compte].alwaysdata.net                                                                   |
|                            | Port : 5672                                                                                               |
| Redis                      | Hôte : localhost ou 127.0.0.1                                                                             |
|                            | Port : 6380                                                                                               |
| Memcached                  | Hôte : localhost ou 127.0.0.1                                                                             |
|                            | Port : 11211                                                                                              |
| **Emails**                 |                                                                                                           |
| Webmail                    | [RoundCube](https://webmail.alwaysdata.com)                                                               |
| Listes de diffusion        | [Mailman](https://mailman.alwaysdata.com)                                                                 |
| IMAP                       | Hôte : imap-[compte].alwaysdata.net                                                                       |
|                            | Ports : 993 (SSL/TLS) |
| POP3                       | Hôte : pop-[compte].alwaysdata.net                                                                        |
|                            | Ports :  995 (SSL/TLS) |
| SMTP                       | Hôte : smtp-[compte].alwaysdata.net                                                                       |
|                            | Ports : 465 (SSL/TLS)                                                                                    |
|                            | Identification : nécessaire (adresse email et mot de passe associé)                                       |
| **Accès distant**          |                                                                                                           |
| FTP                        | Hôte : ftp-[compte].alwaysdata.net                                                                        |
|                            | Port : 990 (SSL/TLS)                                                                                      |
| SFTP                       | Hôte : ssh-[compte].alwaysdata.net                                                                        |
|                            | Port : 22                                                                                                 |
| SSH                        | Hôte : ssh-[compte].alwaysdata.net                                                                        |
|                            | Port : 22                                                                                                 |
|                            | Accès web (via Shell in a box) : https://ssh-[compte].alwaysdata.net                                      |
| WebDAV                     | Hôte : webdav-[compte].alwaysdata.net                                                                     |
|                            | Port : 80                                                                                                 |
| **Services**               |                                                                                                           |
|                            | Hôte : services-[compte].alwaysdata.net                                                                   |
|                            | Ports : entre 8300 et 8499                                                                                |

{{% notice note %}}
Le login par défaut correspond - à l'exception des mails pour lequel l'identifiant est l'adresse email - au **nom du compte** et son mot de passe est celui indiqué à la création du compte. Tous les mots des passes sont chiffrés - et donc non récupérables - mais modifiables dans les menus dédiés.
{{% /notice %}}
