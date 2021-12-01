+++
url = "/fr/sites/cache-http/activer-le-cache-http-sur-wordpress"
title = "Activer le cache HTTP sur WordPress"
hidden = true
layout = "howto"
tags = ["cache", "http", "wordpress"]
+++

1. Installez les plugins [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/) ou [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) dans l'interface d'administration WordPress.

     Pour les deux plugins, la mise en cache doit être activée dans leurs réglages. Plusieurs paramètres sont modifiables.

2. Activez le [cache HTTP]({{< ref "sites/http-cache" >}}) sur le site web dans **Web > Sites > Modifier le [site] - ⚙️ > Cache**.

3. Vérifiez si le cache est activé :

- en utilisant `curl -I` :

```sh
$ curl -I https://httpcache.alwaysdata.net
HTTP/2 200 
date: Wed, 01 Dec 2021 14:51:58 GMT
server: Apache
vary: X-Forwarded-Proto,Accept-Encoding
last-modified: Wed, 01 Dec 2021 14:40:13 GMT
etag: "2d5a-5d216a6cd644a"
accept-ranges: bytes
referrer-policy: no-referrer-when-downgrade
pragma: public
cache-control: max-age=3600, public
content-type: text/html; charset=UTF-8
via: 2.0 alproxy
content-length: 11610
```

- une fois sur la page d’accueil du WordPress, ouvrez le panel développeur de votre navigateur, menu *Réseau*/*Network*. Effectuez une recherche sur l'en-tête `Age`.

{{< fig "images/result.png" "" >}}

Si votre site renvoie l'en-tête `cache-control: max-age=0`, il n'est pas caché.
