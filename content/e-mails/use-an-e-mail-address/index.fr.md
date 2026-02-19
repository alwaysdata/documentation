+++
url = "/fr/emails/utiliser-une-adresse-email/"
title = "Comment consulter une adresse email"
linkTitle = "Consulter une adresse email"
tags = ["email"]
+++

Il est possible de consulter vos emails de plusieurs manières. Voici les 2 les plus courantes.

## Client email

Si vous souhaitez configurer un logiciel de messagerie sur votre ordinateur, ou tout autre appareil, voici les informations que vous devrez renseigner.

| Serveur | Service                                                                | Informations                                        |
|---------|------------------------------------------------------------------------|-----------------------------------------------------|
| Entrant | [IMAP](https://fr.wikipedia.org/wiki/Internet_Message_Access_Protocol) | Hôte : **imap-[compte].alwaysdata.net**                 |
|         |                                                                        | Port : **993 (SSL/TLS)**                               |
|||Port alternatif: 140 (STARTTLS)|
|         |                                                                        | Identifiant : **adresse email** et **mot de passe** associé |
|         | [POP3](https://fr.wikipedia.org/wiki/Post_Office_Protocol)             | Hôte : **pop-[compte].alwaysdata.net**                  |
|         |                                                                        | Port : **995 (SSL/TLS)**                               |
|||Port alternatif: 110 (STARTTLS)|
|         |                                                                        | Identifiant : **adresse email** et **mot de passe** associé |
| Sortant | [SMTP](https://fr.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)    | Hôte : **smtp-[compte].alwaysdata.net**                 |
|         |                                                                        | Port : **465 (SSL/TLS)**                              |
|||Port alternatif: 587 (STARTTLS)|
|         |                                                                        | Identifiant : **adresse email** et **mot de passe** associé |

{{% notice note %}}
Vous devez remplacer [compte] par le nom de votre compte, choisi lors de sa création.
{{% /notice %}}

L'authentification par mot de passe est **nécessaire** pour utiliser notre serveur SMTP, renseignez les mêmes identifiants que pour le serveur entrant.

Il est aussi possible d'utiliser le serveur SMTP de votre fournisseur d'internet.

* [Configurer Apple/iOS](/e-mails/clients/apple-ios)
* [Configurer Gmail](/e-mails/clients/gmail)
* [Configurer Mozilla Thunderbird](/e-mails/clients/thunderbird)
* [Configurer Outlook](/e-mails/clients/outlook)

## Webmail

Si vous désirez consulter votre boîte depuis un navigateur, nous mettons à votre disposition [notre webmail, Roundcube](https://webmail.alwaysdata.com). Connectez-vous avec l'adresse email que vous souhaitez consulter et son mot de passe associé.

Par défaut, le webmail utilise la langue du navigateur web de l'utilisateur (celle de sa première connexion). Pour changer de langue, cliquez sur **Settings** dans le coin supérieur droit, puis **User Interface > Language**.

{{< fig "images/roundcube_change-parameter-1.en.png" "Webmail : changer de paramètres - étape 1" >}}

{{< fig "images/roundcube_change-parameter-2.en.png" "Webmail : changer de paramètres - étape 2" >}}

{{% notice tip %}}
Si vous changez votre mot de passe via le webmail, vous devrez procéder à une déconnexion puis reconnexion.
{{% /notice %}}

## Remarques

- Les mails sont conservés au format [Maildir](https://fr.wikipedia.org/wiki/Maildir) dans le répertoire `$HOME/admin/mail` ;
- Si le serveur MX destinataire n'est pas disponible, l'email sera gardé pour une durée de 5 jours maximum avec des tentatives régulières de renvoi ;
- La taille limite des emails envoyés est fixée à **50 Mo** ;
- L'authentification SMTP n'est pas nécessaire dans le cas d'un service hébergé sur les serveurs alwaysdata (site internet ou tâche planifiée par exemple).
