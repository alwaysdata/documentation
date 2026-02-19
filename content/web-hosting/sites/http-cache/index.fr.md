+++
url = "/fr/hebergement-web/sites/cache-http/"
title = "Cache HTTP"
tags = ["cache", "http", "site"]
+++

Le cache HTTP stocke tem­po­rai­re­ment des docu­ments web (exemples : pages HTML, docu­ments CSS, images) pour dimi­nuer la latence induite par le ser­veur lors­qu’il doit ser­vir une page et/ou réduire sa charge de travail.

- [Activer le cache HTTP sur WordPress](/web-hosting/sites/activate-http-cache-on-wordpress)

## Concept

Lorsqu’un utilisateur tente d'accéder à une page, le serveur web correspondant va géné­rer une page et l’en­voyer sur le réseau. Le cache inter­cepte alors la réponse pour la stocker dans sa mémoire locale avant de la ser­vir à l'utilisateur.

{{< fig "images/http-cache_part-1.fr.png" "Mise en cache d’une res­source lors de sa requête" >}}

Lorsqu’une requête pour la même page est émise par le même ou un autre utilisateur, le cache la restituera comme il détient alors une copie de la res­source deman­dée. Le ser­veur web ne sera plus inter­ro­gé.

{{< fig "images/http-cache_part-2.fr.png" "Restitution d’une res­source pré­cé­dement mise en cache" >}}

Les spé­ci­fi­ca­tions du stan­dard sont exposées dans la [RFC 7234](https://tools.ietf.org/html/rfc7234).

## Utiliser le cache HTTP

### 1. Vérifiez que votre application gère le cache

Pour que le cache puisse interroger l'upstream dans le but de savoir si la ressource visée n'a pas été modifiée, l'application **doit** fournir l'en-tête `Etag` et/ou `Last-Modified`.

Une réponse ne peut **PAS** être cachée si :

- l'en-tête **`Vary`** vaut `*` ;
- l'en-tête **`Content-Type`** n'est pas présent ;
- l'en-tête **`Content-Type`** n'est pas une des valeurs : `text/html`, `text/xml`, `text/plain`, `application/xml`, `application/html+xml`, `application/rss+xml`, `application/rdf+xml`, `application/atom+xml`, `text/css`, `text/javascript` ;
- l'en-tête **`Cache-Control`** vaut une des valeurs : `private`, `no-store`, `no-cache`, `no-transform` ;
- l'en-tête **`Set-Cookie`** est présent ;
- l'en-tête **`Authorization`** existe mais que **`Cache-Control`** n'a aucune des valeurs suivantes : `public`, `must-revalidate`, `proxy-revalidate`, `s-maxage` ;
- le **_code de status HTTP_** n'est pas l'un des suivants : 200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501.

### 2. Activez le cache HTTP

Rendez vous dans **Web > Sites > Modifier le [site] - ⚙️ > Cache**.

{{< fig "images/admin-panel_add-site-cache.fr.png" "" >}}

### Utilisation de `PURGE`

`PURGE` peut être exécuté de trois manières différentes chez alwaysdata :

1. en utilisant l'URL complète de la ressource (ex : `https://test.alwaysdata.net/foo/bar`). Cela supprimera l'entrée de cache qui lui est liée et ses variations (générées par l'en-tête `Vary`) ;
2. en ajoutant l'entête `X-Cache-Purge-Match : wildcard` et en ajoutant un wildcard à votre URL (ex : `https://test.alwaysdata.net/*`). Cela supprimera toutes les entrées correspondant au modèle d'URL ;
3. en ajoutant l'entête `X-Cache-Purge-Match : startswith` et en ajoutant un chemin partiel à votre URL (ex : `https://test.alwaysdata.net/foo`). Cela supprimera toutes les entrées correspondant au modèle d'URL (et donc `https://test.alwaysdata.net/foo/bar`).

{{% notice note %}}
Bien que le cache HTTP convienne dans l'immense majorité des cas, vous pouvez également [faire tourner Varnish](/web-hosting/sites/user-program) sur votre compte alwaysdata.
{{% /notice %}}

> Icônes : The Noun Project
