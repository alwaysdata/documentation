+++
url = "/fr/emails/"
title = "Emails"
pre = "<i class='fas fa-fw fa-paper-plane'></i> "
weight = 20
archetype = "chapter"
tags = ["email"]
+++

Nous fournissons un accès SMTP, IMAP et POP3, dont les adresses sont indiquées dans le menu **Emails > Adresses**. Si ce n'est depuis nos serveurs directement (par exemple, depuis une application HTTP), il est *nécessaire* de s'authentifier avec une adresse mail pour envoyer des mails.

Nos serveurs emails sont classiques ; nous utilisons [Exim](https://www.exim.org/) et [Dovecot](https://www.dovecot.org/).

Vous pouvez [créer une adresse email](/e-mails/create-an-e-mail-address) dans l'onglet **Emails > Adresses** de votre interface d'administration alwaysdata et [consulter vos emails](/e-mails/use-an-e-mail-address) via un client mail de votre choix ou notre [webmail](https://webmail.alwaysdata.com).

À partir du moment où l'adresse email est créée, il sera possible d'envoyer des emails via nos serveurs SMTP. Pour en recevoir, il faut que le domaine ait des [enregistrements DNS MX](https://fr.wikipedia.org/wiki/Enregistrement_Mail_eXchanger). Pour utiliser nos serveurs de messagerie indiquez `mx1.alwaysdata.com` et `mx2.alwaysdata.com`.

* [Listes de diffusions](/e-mails/mailing-lists)

## Ressources

- [API](https://api.alwaysdata.com/v1/mailbox/doc/)
- [Ajouter plusieurs adresses email en utilisant CSV](/e-mails/create-mailboxes-using-csv)
* [Ajouter une règle de filtrage](/e-mails/add-a-filter-rule)
* [Utiliser les scripts Sieve](/e-mails/use-sieve-scripts)
* [Liste blanche de réception](/e-mails/whitelist)
- [Changer de prestataire](/e-mails/transfer-in)
- [Utiliser des MX externes](/domains/use-external-mx)
- [Relais SMTP](/e-mails/smtp-relay)
* [Délivrabilité : bonnes pratiques](/e-mails/delivery)
* [Configurer SPF/DKIM/DMARC](/e-mails/set-up-spf-dkim-dmarc)
* [Vérifier l'envoi d'un email](/e-mails/check-email-sending)
* [File d'attente SMTP](/e-mails/smtp-queue)
* [Lire la source d'un email](/e-mails/read-an-e-mail-source)
* [Réagir à un envoi de spam](/e-mails/react-to-spam-mailing)
- [Restaurer des emails](/web-hosting/backups/restore-e-mails)
- [Sender Rewriting Scheme](/e-mails/srs)
- [Catch-all](/e-mails/catch-all)
- [Questions diverses](/e-mails/misc)

## Clients mails

- [iOS](/e-mails/clients/apple-ios)
- [Gmail](/e-mails/clients/gmail)
- [Outlook](/e-mails/clients/outlook)
- [Thunderbird](/e-mails/clients/thunderbird)
