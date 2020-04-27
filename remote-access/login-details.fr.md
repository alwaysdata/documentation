+++
url = "/fr/accès-distant/informations-de-connexion/"
title = "Informations de connexion"
menuTitle = "Informations de connexions"
layout = "faq"
weight = 1
tags = ["compte", "environnement technique"]
+++

Le sous-domaine qui vous est attribué à la création de votre compte se termine par l'extension **.net** et non _.com_ comme les autres domaines d'alwaysdata.

Chaque fois que vous rencontrez la forme `*-[compte].alwaysdata.net`, vous devez remplacer `[compte]` par le nom de votre compte, choisi lors de sa création.



| Service                    | Informations                                                                 |
|:---------------------------|------------------------------------------------------------------------------|
| **Administration**         |                                                                              |
| URL                        | https://admin.alwaysdata.com                                                 |
|                            | Email/mot de passe, [Double authentification possible]({{< ref "security/two-factor-authentication" >}})  |
| API                        | [api.alwaysdata.com/v1]({{< ref "api" >}}) (soumis à un *[rate limit]({{<ref "api/usage">}}#rate-limit)*)                                   |
|                            | Clé API disponible dans *Profil > Authentification*                          |
| **Générique**              |                                                                              |
| DNS                        | Primaire : dns1.alwaysdata.com                                               |
|                            | Secondaire : dns2.alwaysdata.com                                             |
| MX                         | Primaire : mx1.alwaysdata.com (TTL : 10)                                     |
|                            | Secondaire : mx2.alwaysdata.com (TTL : 20)                                   |
|                            | si serveur VPS/dédié : [serveur].alwaysdata.net (TTL : 5)                    |
| **Bases de données**       |                                                                              |
| MySQL                      | Hôte : mysql-[compte].alwaysdata.net                                         |
|                            | Port : 3306                                                                  |
|                            | Interface d'administration : [phpMyAdmin](https://phpmyadmin.alwaysdata.com) |
| PostgreSQL                 | Hôte : postgresql-[compte].alwaysdata.net                                    |
|                            | Port : 5432                                                                  |
|                            | Interface d'administration : [phpPgAdmin](https://phppgadmin.alwaysdata.com) |
| MongoDB                    | Hôte : mongodb-[compte].alwaysdata.net                                       |
|                            | Port : 27017                                                                 |
|                            | Connexion : mongodb://utilisateur:mdp@mongodb-[compte].alwaysdata.net/bdd    |
| CouchDB                    | Hôte : couchdb-[compte].alwaysdata.net                                       |
|                            | Port : 5984                                                                  |
| RabbitMQ                   | Hôte : rabbitmq-[compte].alwaysdata.net                                      |
|                            | Port : 5672                                                                  |
| ElasticSearch              | Hôte : localhost ou 127.0.0.1                                                |
|                            | Ports : 9200 & 9300                                                          |
| Redis                      | Hôte : localhost ou 127.0.0.1                                                |
|                            | Port : 6380                                                                  |
| Memcached                  | Hôte : localhost ou 127.0.0.1                                                |
|                            | Port : 11211                                                                 |
| **Emails**                 |                                                                              |
| Webmail                    | [RoundCube](https://webmail.alwaysdata.com)                                  |
| IMAP                       | Hôte : imap-[compte].alwaysdata.net                                          |
|                            | Ports : 143, sécurisés : 993 et 585                                          |
| POP3                       | Hôte : pop-[compte].alwaysdata.net                                           |
|                            | Ports : 110, sécurisé : 995                                                  |
| SMTP                       | Hôte : smtp-[compte].alwaysdata.net                                          |
|                            | Ports : 25 et 587, sécurisé : 465                                            |
|                            | Identification : nécessaire (adresse email et mot de passe associé)          |
| **Accès distant**          |                                                                              |
| FTP                        | Hôte : ftp-[compte].alwaysdata.net                                           |
|                            | Port : 21                                                                    |
|                            | Interface web : [net2ftp](https://net2ftp.alwaysdata.com/)                   |
| SFTP                       | Hôte : ssh-[compte].alwaysdata.net                                           |
|                            | Port : 22                                                                    |
| SSH                        | Hôte : ssh-[compte].alwaysdata.net                                           |
|                            | Port : 22                                                                    |
|                            | Accès web (via Shell in a box) : https://ssh-[compte].alwaysdata.net         |
| WebDAV                     | Hôte : webdav-[compte].alwaysdata.net                                        |
|                            | Port : 80                                                                    |
| **Statistiques web**       |                                                                              |
| Interface d'administration | [Matomo](https://analytics.alwaysdata.com)                                   |
