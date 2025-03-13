+++
url = "/fr/sécurité/ssl-tls/"
title = "SSL/TLS"
weight = 20
archetype = "chapter"
tags = ["https", "sécurité", "ssl"]
+++

Tous les services (HTTP, mais aussi accès distant, bases de données, emails...) sont sécurisés par une couche SSL/TLS.

- [Certificats Let's Encrypt](lets-encrypt)
- [Rediriger HTTP vers HTTPS](redirect-http-to-https)
- [Générer une CSR](csr)
- [Ajouter un certificat SSL](add-a-ssl-certificate)
- [Renouveler un certificat SSL](renew-a-ssl-certificate)
- [Priorité des certificats](certificates-priorities)

* [API](https://api.alwaysdata.com/v1/ssl/doc/)
* [Configurer TLS](configure-tls)
* [Implémenter HSTS](hsts)

- Vérifier le certificat renvoyé et la configuration d'un nom d'hôte : [SSL Labs](https://www.ssllabs.com), [SSL Tools](https://ssl-tools.net/) ou [Security Headers](https://securityheaders.com).
- Trouver le contenu mixte [^1] de son site web : [Why no Padlock](https://www.whynopadlock.com/).

[^1]: Les navigateurs renvoient l'erreur "Mixed content" lorsqu'un site web utilise le protocole HTTPS mais que des images, vidéos ou scripts/styles sont renvoyés en HTTP.
