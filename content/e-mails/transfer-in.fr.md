+++
url = "/fr/emails/migrer-des-adresses-email-chez-alwaysdata/"
title = "Migrer des adresses email chez alwaysdata"
layout = "howto"
hidden = true
tags = ["email"]
+++

Cet article explique comment procéder à la migration d'adresses email chez alwaysdata.

## Transfert manuel

1. [Créer les adresses email](e-mails/create-an-e-mail-address) sur votre interface d'administration, onglet **Emails > Adresses** ;

2. Migrer les emails déjà présents chez le prestataire actuel :
    - en les récupérant au format [Maildir](https://fr.wikipedia.org/wiki/Maildir) (s'ils sont disponibles sous ce format) et en les copiant en utilisant [FTP](remote-access/ftp) ou [SSH](remote-access/ssh) dans le répertoire `$HOME/admin/mail/domaine/boîte-email/` ;
    - en utilisant un outil externe comme `imapcopy` ou `imapsync` - installés sur nos serveurs ;
    - en les exportant/important via un client mail.

3. Changer les enregistrements MX, pour utiliser les serveurs d'alwaysdata : `mx1.alwaysdata.com` et `mx2.alwaysdata.com`.

Cette migration peut être couplée par une [migration de site web](sites/transfer-in) ou encore un [transfert de domaine](domains/transfer-a-domain).
