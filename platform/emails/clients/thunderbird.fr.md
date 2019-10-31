+++
url = "/fr/emails/clients/thunderbird"
title = "Comment configurer Thunderbird"
menuTitle = "Thunderbird"
layout = "howto"
weight = 70
draft = false
tags = ["email", "thunderbird"]
hidden = true
+++

## Rappel des informations de connexion

Serveur|Service|Informations
---|---|---
Entrant|IMAP|Hôte : imap-[compte].alwaysdata.net
|||Ports : 143, sécurisés : 993 ou 585
|||Identifiant : adresse email et mot de passe associé
||POP3|Hôte : pop-[compte].alwaysdata.net
|||Ports : 110, sécurisé : 995
|||Identifiant : adresse email et mot de passe associé
Sortant|SMTP|Hôte : smtp-[compte].alwaysdata.net
|||Ports : 25 ou 587, sécurisé : 465
|||Identifiant : adresse email et mot de passe associé

> Vous devez remplacer [compte] par le nom de votre compte, choisi lors de sa création.

## Procédure

Rendez-vous dans **Comptes > Configurer un compte : Courrier électronique**.
![Thunderbird : créer un compte](/en/platform/emails/clients/thunderbird_new-account_fr.png)

Pour la modifier une fois créée, rendez-vous dans **Comptes > Voir les paramètres pour ce compte** :

- Pour le courrier _entrant_, rendez-vous dans les **Paramètres serveur** ;
![Thunderbird : paramètres serveur entrant](/en/platform/emails/clients/thunderbird_imap-settings_fr.png)
- Pour le courrier _sortant_, rendez-vous dans **Serveur sortant SMTP**.
![Thunderbird : paramètres serveurs sortant](/en/platform/emails/clients/thunderbird_smtp-settings_fr.png)
