---
permalink: /fr/docs/emails/
title: Emails
eleventyNavigation:
  key: Emails
  order: 2
---

Nous fournissons un accès SMTP, IMAP et POP3, dont les adresses sont indiquées dans le menu **Emails > Adresses**. Si ce n'est depuis nos serveurs directement (par exemple, depuis une application HTTP), il est *nécessaire* de s'authentifier avec une adresse mail pour envoyer des mails.

Nos serveurs emails sont classiques ; nous utilisons [Exim](https://www.exim.org/) et [Dovecot](https://www.dovecot.org/).

Vous pouvez [créer une adresse email](/fr/docs/emails/creer-une-adresse-email/) dans l'onglet **Emails > Adresses** de votre interface d'administration alwaysdata et [consulter vos emails](/fr/docs/emails/utiliser-une-adresse-email/) via un client mail de votre choix ou notre [webmail](https://webmail.alwaysdata.com).

À partir du moment où l'adresse email est créée, il sera possible d'envoyer des emails via nos serveurs SMTP. Pour en recevoir, il faut que le domaine ait des [enregistrements DNS MX](https://fr.wikipedia.org/wiki/Enregistrement_Mail_eXchanger). Pour utiliser nos serveurs de messagerie indiquez `mx1.alwaysdata.com` et `mx2.alwaysdata.com`.

* [Listes de diffusions](/fr/docs/emails/listes-de-diffusion/)

## Ressources

- [API](https://api.alwaysdata.com/v1/mailbox/doc/)
- [Ajouter plusieurs adresses email en utilisant CSV](/fr/docs/emails/creer-des-adresses-email-via-csv/)
* [Ajouter une règle de filtrage](/fr/docs/emails/ajouter-regle-filtrage/)
* [Utiliser les scripts Sieve](/fr/docs/emails/utiliser-les-scripts-sieve/)
* [Liste blanche de réception](/fr/docs/emails/liste-blanche/)
- [Changer de prestataire](/fr/docs/emails/migrer-des-adresses-email-chez-alwaysdata/)
- [Utiliser des MX externes](/fr/docs/domaines/use-external-mx)
- [Relais SMTP](/fr/docs/emails/relais-smtp/)
* [Délivrabilité : bonnes pratiques](/fr/docs/emails/delivrabilite-bonnes-pratiques/)
* [Configurer SPF/DKIM/DMARC](/fr/docs/emails/configurer-spf-dkim-dmarc/)
* [Vérifier l'envoi d'un email](/fr/docs/emails/verifier-l-envoi-d-un-email/)
* [File d'attente SMTP](/fr/docs/emails/file-dattente-smtp/)
* [Lire la source d'un email](/fr/docs/emails/lire-la-source-dun-email/)
* [Réagir à un envoi de spam](/fr/docs/emails/reagir-envoi-spam/)
- [Restaurer des emails](/fr/docs/hebergement-web/sauvegardes/restaurer-des-emails/)
- [Sender Rewriting Scheme](/fr/docs/emails/srs/)
- [Catch-all](/fr/docs/emails/adresse-collectrice/)
- [Questions diverses](/fr/docs/emails/divers/)

## Clients mails

- [iOS](/fr/docs/emails/clients/apple-ios)
- [Gmail](/fr/docs/emails/clients/gmail)
- [Outlook](/fr/docs/emails/clients/outlook)
- [Thunderbird](/fr/docs/emails/clients/thunderbird)
