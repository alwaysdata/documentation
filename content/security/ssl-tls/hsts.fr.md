+++
url = "/fr/sécurité/ssl-tls/hsts/"
title = "Comment implémenter HSTS"
layout = "howto"
hidden = true
tags = ["https", "sécurité", "ssl"]
+++

La politique [HTTP Strict Transport Security](https://fr.wikipedia.org/wiki/HTTP_Strict_Transport_Security) permet de protéger les utilisateurs en déclarant aux navigateurs qu'ils doivent interagir avec le serveur web en utilisant une connexion sécurisée.

Sa mise en place passe par l'ajout de `headers`.

## Apache

- L'ajouter pour tous les sites Apache du compte via les directives globales (menu **Web > Configuration > Apache**) :

```txt
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
```

- Ou pour chaque site via l'ajout au début du `.htaccess` créé à la racine des sites :

```txt
<IfModule mod_headers.c>

Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"

</IfModule>
```


## uWSGI

Ajouter dans les paramètres supplémentaires uWSGI (menu **Web > Sites > Modifier le [site] - ⚙️ > Configuration avancée**) :

```txt
plugins = router_redirect
route-if-not = equal:${HTTPS};on redirect-permanent:https://${HTTP_HOST}${REQUEST_URI}
route-if = equal:${HTTPS};on addheader:Strict-Transport-Security: max-age=31536000
```

- [Documentation](https://uwsgi-docs.readthedocs.io/en/latest/Snippets.html)

## Node.js

À mettre avant tout autre controller :

```txt
app.use(function(req, res, next) {
  if (req.secure) {
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains') // 2 years
  }
  next()
})
```

Autre méthode avec le paquet NPM `helmet` :

```txt
var helmet = require('helmet')
    ... 
    app.use(helmet.hsts({
          maxAge: 31536000000,
          includeSubdomains: true,
          force: true
    }));
```

## Directives

* `max-age` définit la période d'application d'une politique HSTS par les navigateurs (31536000 = pour un an) ;
* `includeSubDomains` permet d'appliquer HSTS à la fois au domaine et à ses sous-domaines ;
* `preload` permet d'autoriser l'ajout du site dans les listes HSTS préchargées.

`max-age` est obligatoire contrairement aux autres.

---
- [RFC 6797](https://tools.ietf.org/html/rfc6797)
- Vérifier sa configuration HSTS via [HSTS preload](https://hstspreload.org/)

