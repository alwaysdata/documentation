---
layout: layouts/indexed.njk
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
