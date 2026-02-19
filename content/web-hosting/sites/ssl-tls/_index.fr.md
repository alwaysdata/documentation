+++
url = "/fr/hebergement-web/sites/ssl-tls/"
title = "SSL/TLS"
tags = ["https", "sécurité", "ssl"]
+++

Tous les services (HTTP, mais aussi accès distant, bases de données, emails...) sont sécurisés par une couche SSL/TLS.

- [Certificats Let's Encrypt](/web-hosting/sites/ssl-tls/lets-encrypt)
- [Rediriger HTTP vers HTTPS](/web-hosting/sites/ssl-tls/redirect-http-to-https)
- [Générer une CSR](/web-hosting/sites/ssl-tls/csr)
- [Ajouter un certificat SSL](/web-hosting/sites/ssl-tls/add-a-ssl-certificate)
- [Renouveler un certificat SSL](/web-hosting/sites/ssl-tls/renew-a-ssl-certificate)
- [Priorité des certificats](/web-hosting/sites/ssl-tls/certificates-priorities)

* [API](https://api.alwaysdata.com/v1/ssl/doc/)
* [Configurer TLS](/web-hosting/sites/ssl-tls/configure-tls)
* [Implémenter HSTS](/web-hosting/sites/ssl-tls/hsts)

- Vérifier le certificat renvoyé et la configuration d'un nom d'hôte : [SSL Labs](https://www.ssllabs.com), [SSL Tools](https://ssl-tools.net/) ou [Security Headers](https://securityheaders.com).
- Trouver le contenu mixte [^1] de son site web : [Why no Padlock](https://www.whynopadlock.com/).

[^1]: Les navigateurs renvoient l'erreur "Mixed content" lorsqu'un site web utilise le protocole HTTPS mais que des images, vidéos ou scripts/styles sont renvoyés en HTTP.
