+++
url = "/fr/emails/migrer-des-adresses-email-chez-alwaysdata/"
title = "Migrer des adresses email chez alwaysdata"
layout = "howto"
hidden = true
tags = ["email"]
+++

Voici comment procéder à la migration d'adresses email chez alwaysdata.

1. [Créer les adresses email](e-mails/create-an-e-mail-address) sur votre interface d'administration, onglet **Emails > Adresses** ;

2. Migrer les emails déjà présents chez le prestataire actuel via **Emails > Adresses > Modifier [exemple@example.org] -  ⚙️ > Importer des emails**.

Cet import est effectué avec une authentification [IMAP](https://fr.wikipedia.org/wiki/Internet_Message_Access_Protocol) classique. Vous devez donc connaître le nom d'hôte, l'utilisateur et le mot de passe de l'adresse email à importer. Certains services ne permettent pas d'utiliser un accès direct en IMAP standard. Vous pouvez alors :
- suivre les documentations suivantes : [Gmail](https://imapsync.lamiral.info/FAQ.d/FAQ.Gmail.txt) et [Office 365](https://imapsync.lamiral.info/FAQ.d/FAQ.Office365.txt) ;
- ou faire des exports/imports via un client mail.

3. Changer les enregistrements MX, pour utiliser les serveurs d'alwaysdata : `mx1.alwaysdata.com` et `mx2.alwaysdata.com`.

Cette migration peut être couplée par une [migration de site web](sites/transfer-in) ou encore un [transfert de domaine](domains/transfer-a-domain).
