+++
url = "/fr/hebergement-web/sites/activer-le-cache-http-sur-wordpress/"
title = "Activer le cache HTTP sur WordPress"
linkTitle = "WordPress et cache HTTP"
tags = ["cache", "http", "wordpress"]
+++

1. Installez le plugin [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/) dans l'interface d'administration WordPress. Activez-le, puis la mise en cache dans ses réglages :

{{< fig "images/activate-wp-cache.fr.png" "" >}}

Plusieurs paramètres sont modifiables ultérieurement.

2. Activez le [cache HTTP](/web-hosting/sites/http-cache) sur le site web dans **Web > Sites > Modifier le [site] - ⚙️ > Cache**.

3. Vérifiez si le cache est activé :

- une fois sur la page d’accueil du WordPress, ouvrez le panel développeur de votre navigateur, menu *Réseau*/*Network*. Effectuez une recherche sur l'en-tête `Age`.

{{< fig "images/result.fr.png" "" >}}

- ou en utilisant `curl -I` :

```sh
$ curl -I https://httpcache.alwaysdata.net
HTTP/2 200 
date: Wed, 01 Dec 2021 16:04:55 GMT
server: Apache
vary: Accept-Encoding,Cookie

cache-control: max-age=3, must-revalidate

content-type: text/html; charset=UTF-8
via: 2.0 alproxy
```

Si votre site renvoie l'en-tête `cache-control: max-age=0`, il n'est pas caché.
