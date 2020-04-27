+++
url = "/fr/comptes/version"
title = "Version du compte"
layout = "man"
hidden = true
tags = ["compte", "profil"]
+++

Au fur et à mesure de l'évolution de notre plate-forme, votre compte peut être hébergé sur différentes versions de notre PaaS, en fonction du [statut de son serveur]({{< ref "advanced/migrations" >}}).

Voici comment déterminer la version courante de votre compte : connectez-vous via [SSH]({{< ref "remote-access/ssh" >}}) et lancez la commande `lsb_release -sc`:

- `jessie` : vous êtes en [v2017]({{< ref "advanced/migrations/2017-software-architecture" >}}) ;
- `buster` : vous êtes en [v2020]({{< ref "advanced/migrations/2020-software-architecture" >}}).
