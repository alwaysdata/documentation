+++
url = "/fr/sites/programme-utilisateur/"
title = "Comment utiliser le type Programme utilisateur"
menuTitle = "Programme utilisateur"
layout = "howto"
weight = 20
tags = ["http", "programme utilisateur", "site"]
+++

Pour lancer un programme web n'utilisant pas un des autres types de site vous pouvez avoir recours au _Programme utilisateur_.

Il pourra être utilisé pour les langages [Erlang](https://www.erlang.org/), [Go]({{< ref "languages/go" >}}), [Java]({{< ref "languages/java" >}}), [Lua]({{< ref "languages/lua" >}}), [Rust](https://www.rust-lang.org/), [Scala](https://www.scala-lang.org/), ou encore bien d'autres...[^1]

Rendez-vous dans le menu **Web > Sites > Ajouter un site**.
{{< fig "images/admin-panel_sites-list.fr.png" "Interface d'administration : liste des sites" >}}

- Nom : utilisé pour l'affichage dans l'interface d'administration alwaysdata, purement informatif ;
- Adresses : les adresses pour joindre votre site (`*.exemple.org` pour les _catch-all_) ;

{{< fig "images/admin-panel_add-site-general.fr.png" "Ajouter un site : général" >}}

- Type : Programme utilisateur ;
- Commande : commande à effectuer pour lancer le programme. Le serveur HTTP de votre programme doit pointer sur l'IP et le port donnés dans le texte explicatif ;
- Répertoire de travail ;
- Environnement : variables d'environnement permettant le fonctionnement du programme.

{{< fig "images/admin-panel_user-program.fr.png" "Ajouter un site : Programme utilisateur" >}}

{{% notice tip %}}
Avant de mettre en place le site, vous pouvez tester le lancement du programme en [SSH]({{< ref "remote-access/ssh" >}}).
{{% /notice %}}

Si le programme ne se lance pas, les logs _sites_ disponibles dans le répertoire `$HOME/admin/logs/sites/` pourront vous aider.

[^1]: Par exemple, [Nginx](https://www.nginx.com/), [LiteSpeed](https://www.litespeedtech.com/) ou [Varnish](https://varnish-cache.org/) sont utilisables sur les serveurs *alwaysdata*. L'installation et la configuration sont à votre charge.
