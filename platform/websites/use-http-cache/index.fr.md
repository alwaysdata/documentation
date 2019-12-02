+++
url = "/fr/plateforme/sites/utiliser-le-cache-http/"
title = "Comment utiliser le cache HTTP"
menuTitle = "Utiliser le cache HTTP"
layout = "howto"
hidden = true
weight = 30
tags = ["cache", "http", "site"]
+++
Pour accélérer sensiblement l'accès à votre site internet, vous pouvez mettre en place le cache HTTP. Voici les étapes à suivre pour le faire :

## 1. Vérifiez que votre application gère le cache

Pour que le cache puisse interroger l'upstream dans le but de savoir si la resource visée n'a pas été modifiée, l'application **doit** fournir l'en-tête `Etag` et/ou `Last-Modified`.

Une réponse ne peut **PAS** être cachée si :

1. l'en-tête `Vary` vaut  `*` ;
2. l'en-tête `Content-Type` n'est pas présent ;
3. Le `Content-Type` de la ressource n'est pas une des valeurs : `text/html`, `text/xml`, `application/xml`, `application/html+xml`, `application/rss+xml`, `application/rdf+xml`, `application/atom+xml`, `text/javascript` ;
4. l'en-tête `Cache-Control` vaut une des valeurs : `private`, `no-store`, `no-cache`, `no-transform` ;
5. l'en-tête `Set-Cookie` est présent ;
6. l'en-tête `Authorization` existe, mais que `Cache-Control` n'a aucune des valeurs suivantes : `public`, `must-revalidate`, `proxy-revalidate`, `s-maxage` ;
7. Le _code de status_ n'est pas contenu dans : 200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501.

## 2. Activez le cache HTTP

Cela se passe dans **Web > Sites > Modifier** le site **> Cache**.
{{< fig "images/admin-panel_add-site-cache.fr.png" "Ajouter un site : cache HTTP" >}}
