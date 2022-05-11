+++
url = "/fr/emails/"
title = "Emails"
pre = "<i class='fas fa-fw fa-paper-plane'></i> "
weight = 15
chapter = true
tags = ["email"]
+++

# Emails

Nos serveurs emails sont classiques ; nous utilisons [Exim](https://www.exim.org/) et [Dovecot](https://www.dovecot.org/).

Vous pouvez [créer une adresse email]({{< relref "create-an-e-mail-address" >}}) dans l'onglet **Emails** de votre interface d'administration alwaysdata et [consulter vos emails]({{< relref "use-an-e-mail-address" >}}) via un client mail de votre choix ou notre [webmail](https://webmail.alwaysdata.com).

{{% notice info %}}
À partir du moment où l'adresse email est créée, il sera possible d'envoyer des emails via nos serveurs SMTP. Pour en recevoir, il faut que le domaine ait des [enregistrements DNS MX](https://fr.wikipedia.org/wiki/Enregistrement_Mail_eXchanger).
{{% /notice %}}

Pour utiliser nos serveurs de messagerie indiquez `mx1.alwaysdata.com` et `mx2.alwaysdata.com`.

* [Listes de diffusions]({{< relref "mailing-lists" >}})

## Ressources

- [API](https://api.alwaysdata.com/v1/mailbox/doc/)
- [Ajouter plusieurs adresses emails en utilisant CSV]({{< relref "create-mailboxes-using-csv" >}})
* [Ajouter une règle de filtrage]({{< relref "add-a-filter-rule" >}})
* [Utiliser les scripts Sieve]({{< relref "use-sieve-scripts" >}})
* [Liste blanche de réception]({{< ref "e-mails/whitelist" >}})
- [Changer de prestataire]({{< relref "./transfer-in" >}})
- [Utiliser des MX externes]({{< ref "domains/use-external-mx" >}})
* [Délivrabilité : bonnes pratiques]({{< relref "delivery" >}})
* [Configurer SPF/DKIM/DMARC]({{< relref "set-up-spf-dkim-dmarc" >}})
* [Vérifier l'envoi d'un email]({{< relref "check-email-sending" >}})
* [Lire la source d'un email]({{< relref "read-an-e-mail-source" >}})
* [Réagir à un envoi de spam]({{< relref "react-to-spam-mailing" >}})
- [Restaurer des emails]({{< ref "backups/restore-e-mails" >}})
- [Catch-all]({{< relref "./catch-all" >}})
- [Questions diverses]({{< relref "./misc" >}})

## Clients mails

- [iOS]({{< relref "clients/apple-ios" >}})
- [Gmail]({{< relref "clients/gmail" >}})
- [Outlook]({{< relref "clients/outlook" >}})
- [Thunderbird]({{< relref "clients/thunderbird" >}})
