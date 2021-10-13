+++
url = "/fr/sites/utiliser-le-cache-http/"
title = "Comment utiliser le cache HTTP"
layout = "howto"
hidden = true
tags = ["cache", "http", "site"]
+++

Pour accélérer sensiblement l'accès à votre site internet, vous pouvez mettre en place le cache HTTP. Voici les étapes à suivre pour le faire :

## 1. Vérifiez que votre application gère le cache

Pour que le cache puisse interroger l'upstream dans le but de savoir si la ressource visée n'a pas été modifiée, l'application **doit** fournir l'en-tête `Etag` et/ou `Last-Modified`.

Une réponse ne peut **PAS** être cachée si :

1. l'en-tête `Vary` vaut  `*` ;
2. l'en-tête `Content-Type` n'est pas présent ;
3. Le `Content-Type` de la ressource n'est pas une des valeurs :
    - `text/html`, 
    - `text/xml`, 
    - `application/xml`,
    - `application/html+xml`, 
    - `application/rss+xml`,
    - `application/rdf+xml`,
    - `application/atom+xml`,
    - -`text/javascript` ;
4. l'en-tête `Cache-Control` vaut une des valeurs : 
    - `private`,
    - `no-store`,
    - `no-cache`,
    - `no-transform` ;
5. l'en-tête `Set-Cookie` est présent ;
6. l'en-tête `Authorization` existe, mais que `Cache-Control` n'a aucune des valeurs suivantes :
    - `public`,
    - `must-revalidate`, 
    - `proxy-revalidate`,
    - `s-maxage` ;
7. Le _code de status HTTP_ n'est pas l'un des suivants :
    - 200
    - 203
    - 204
    - 206
    - 300
    - 301
    - 404
    - 405
    - 410
    - 414
    - 501

## 2. Activez le cache HTTP

Rendez vous dans **Web > Sites > Modifier le [site] - ⚙️ > Cache**.

{{< fig "images/admin-panel_add-site-cache.fr.png" "Ajouter un site : cache HTTP" >}}

## Utilisation de `PURGE`

`PURGE` peut être exécuté de trois manières différentes chez alwaysdata :

1. en utilisant l'URL complète de la ressource (ex : `https://test.alwaysdata.net/foo/bar`). Cela supprimera l'entrée de cache qui lui est liée et ses variations (générées par l'en-tête `Vary`) ;
2. en ajoutant l'entête `X-Cache-Purge-Match : wildcard` et en ajoutant un wildcard à votre URL (ex : `https://test.alwaysdata.net/*`). Cela supprimera toutes les entrées correspondant au modèle d'URL ;
3. en ajoutant l'entête `X-Cache-Purge-Match : startswith` et en ajoutant un chemin partiel à votre URL (ex : `https://test.alwaysdata.net/foo`). Cela supprimera toutes les entrées correspondant au modèle d'URL (et donc `https://test.alwaysdata.net/foo/bar`).
