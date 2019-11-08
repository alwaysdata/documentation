+++
url = "/fr/plateforme/emails/clients/gmail"
title = "Comment configurer Gmail"
menuTitle = "Gmail"
layout = "howto"
weight = 65
hidden = true
tags = ["email", "gmail"]
+++

## Rappel des informations de connexion

| Serveur | Service | Informations                                        |
|---------|---------|-----------------------------------------------------|
| Entrant | IMAP    | Hôte : imap-[compte].alwaysdata.net                 |
|         |         | Ports : 143, sécurisés : 993 ou 585                 |
|         |         | Identifiant : adresse email et mot de passe associé |
|         | POP3    | Hôte : pop-[compte].alwaysdata.net                  |
|         |         | Ports : 110, sécurisé : 995                         |
|         |         | Identifiant : adresse email et mot de passe associé |
| Sortant | SMTP    | Hôte : smtp-[compte].alwaysdata.net                 |
|         |         | Ports : 25 ou 587, sécurisé : 465                   |
|         |         | Identifiant : adresse email et mot de passe associé |

{{% notice tip %}}
Vous devez remplacer [compte] par le nom de votre compte, choisi lors de sa création.
{{% /notice %}}

## Procédure

### Ordinateur

Rendez-vous dans **Paramètres > Comptes et importation**.

- Pour le courrier _entrant_, rendez-vous dans **Ajouter un compte de messagerie > Importer les e-mails de mon autre compte (POP3)** ;

{{% notice warning %}}
Attention c'est une connexion POP3 qui va récupérer sur ses serveurs les emails.
{{% /notice %}}

- Pour le courrier _sortant_, rendez-vous dans **Ajouter une autre adresse e-mail** ;
-  Décochez la case **Traiter comme un alias**.

### Mobile

Rendez-vous dans **Paramètres > Ajouter un compte > Autre**.

- Pour le courrier _sortant_, cochez la case **Exigez une connexion**.
