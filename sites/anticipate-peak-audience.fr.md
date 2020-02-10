+++
url = "/fr/sites/anticiper-un-pic-daudience/"
title = "Comment anticiper un pic d'audience"
layout = "howto"
hidden = true
tags = ["http", "site"]
+++
Vous prévoyez un passage télévision/radio qui risque d'entraîner un nombre plus important de visites et n'êtes pas sûr que votre site supporte la charge ? Voici des actions pouvant être entreprises en amont :

- **isoler le site** par compte - pour ne pas gêner d'autres sites, les ressources étant partagées au niveau du compte ;
- activer le **[cache HTTP]({{< ref "sites/http-cache" >}})** sur votre interface d'administration et/ou au niveau applicatif en utilisant Memcached, Redis [^1] ou tout autre cache logiciel ;
- passer sur les versions de langages les plus récentes possibles  - pour améliorer les performances ;
- faire une redirection vers une **[page statique]({{< ref "sites/static-files" >}})** - utilisant bien moins de ressources, elles sont plus rapides à renvoyer.

Pour observer le comportement de votre application vos pouvez aussi effecter un **test de charge** (avec `ab` par exemple).

## Liens

- [Documentation de `ab`](https://httpd.apache.org/docs/2.4/programs/ab.html)
- 2 services externes de tests de charge :
    - [Loader.io](https://loader.io/)
    - [Load impact](https://loadimpact.com/)

[^1]: Ces deux logiciels sont disponibles sur les environnements VPS et dédiés.
