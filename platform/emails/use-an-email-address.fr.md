+++
url = "/fr/emails/utiliser-une-adresse-email/"
title = "Comment consulter une adresse email"
menuTitle = "Consulter une adresse email"
layout = "howto"
weight = 10
draft = false
tags = ["email"]
+++


Il est possible de consulter vos emails de plusieurs manières. Voici les 2 les plus courantes.

## Rappel des informations de connexion

## Client email

Si vous souhaitez configurer un logiciel de messagerie sur votre ordinateur, ou tout autre appareil, voici les informations que vous devrez renseigner.

Serveur|Service|Informations
---|---|---
Entrant|[IMAP](https://fr.wikipedia.org/wiki/Internet_Message_Access_Protocol)|Hôte : imap-[compte].alwaysdata.net
|||Ports : 143, sécurisés : 993 ou 585
|||Identifiant : adresse email et mot de passe associé
||[POP3](https://fr.wikipedia.org/wiki/Post_Office_Protocol)|Hôte : pop-[compte].alwaysdata.net
|||Ports : 110, sécurisé : 995
|||Identifiant : adresse email et mot de passe associé
Sortant|[SMTP](https://fr.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)|Hôte : smtp-[compte].alwaysdata.net
|||Ports : 25 ou 587, sécurisé : 465
|||Identifiant : adresse email et mot de passe associé

> Vous devez remplacer [compte] par le nom de votre compte, choisi lors de sa création.

L'authentification est **nécessaire** pour utiliser notre serveur SMTP, renseignez les mêmes identifiants que pour le serveur entrant.

Il peut arriver que votre fournisseur d'accès bloque le port _25_ destiné à l'envoi de vos emails. Dans ce cas, vous pouvez modifier le port en faveur du _587_ ou utiliser le serveur SMTP de votre fournisseur.

* [Configurer Apple mail]()
* [Configurer Gmail]({{< ref "platform/emails/clients/gmail" >}})
* [Configurer Mozilla Thunderbird]({{< ref "platform/emails/clients/thunderbird" >}})
* [Configurer Outlook]()

## Webmail

Si vous désirez consulter votre boîte depuis un navigateur, nous mettons à votre disposition [notre webmail, Roundcube](https://webmail.alwaysdata.com). Connectez-vous avec l'adresse email que vous souhaitez consulter et son mot de passe associé.

Par défaut, le webmail est en anglais. Pour changer de langue, cliquez sur **Settings** dans le coin supérieur droit, puis **User Interface > Language**.
![Webmail : changer de paramètres - étape 1](/en/platform/emails/roundcube-change-parameter1_en.png)
![Webmail : changer de paramètres - étape 2](/en/platform/emails/roundcube-change-parameter2_en.png)

## Remarques

- Les mails sont sauvegardés au format [Maildir](https://fr.wikipedia.org/wiki/Maildir) dans le répertoire _~/admin/mail_ ;
- Si le serveur MX destinataire n'est pas disponible, l'email sera gardé pour une durée de 5 jours maximum avec des tentatives régulières de renvoi ;
- La taille limite des emails envoyés est fixée à* *50 Mo**.

