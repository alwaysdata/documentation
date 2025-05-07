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

Vous devez connaître le nom d'hôte, l'utilisateur et son mot de passe de l'adresse email à importer.

3. Changer les enregistrements MX, pour utiliser les serveurs d'alwaysdata : `mx1.alwaysdata.com` et `mx2.alwaysdata.com`.

Cette migration peut être couplée par une [migration de site web](sites/transfer-in) ou encore un [transfert de domaine](domains/transfer-a-domain).
