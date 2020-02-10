+++
url = "/fr/accès-distant/ssh/clés-ssh-globales/"
title = "Comment accéder globalement à son serveur avec des clés SSH"
layout = "howto"
weight = 80
hidden = true
tags = ["accès distant", "serveur dédié", "serveur vps", "ssh"]
+++

Pour gérer facilement les comptes de son serveur, vous pouvez installer des clés SSH globales dans l'onglet **Clés SSH** de votre serveur. Elles permettent de se connecter à n'importe quel compte sans connaître son mot de passe.
{{< fig "images/admin-interface_global-ssh-keys.fr.png" "Interface d'administration : clés SSH globales" >}}

Vous retrouverez votre clé SSH publique à copier dans le fichier `$HOME/.ssh/id_rsa.pub` de votre ordinateur et si vous n'en avez pas la [générer]({{< ref "remote-access/ssh/use-keys" >}}).
