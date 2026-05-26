---
permalink: /fr/docs/hebergement-web/sites/ssl-tls/
title: SSL/TLS
eleventyNavigation:
  key: SSL/TLS
  parent: Sites web
---

Tous les services (HTTP, mais aussi accès distant, bases de données, emails...) sont sécurisés par une couche SSL/TLS.

- [Certificats Let's Encrypt](/fr/docs/hebergement-web/sites/ssl-tls/certificats-lets-encrypt/)
- [Rediriger HTTP vers HTTPS](/fr/docs/hebergement-web/sites/ssl-tls/rediriger-HTTP-vers-HTTPS/)
- [Générer une CSR](/fr/docs/hebergement-web/sites/ssl-tls/csr)
- [Ajouter un certificat SSL](/fr/docs/hebergement-web/sites/ssl-tls/ajouter-certificat-ssl/)
- [Renouveler un certificat SSL](/fr/docs/hebergement-web/sites/ssl-tls/renew-a-ssl-certificate)
- [Priorité des certificats](/fr/docs/hebergement-web/sites/ssl-tls/certificates-priorities)

* [API](https://api.alwaysdata.com/v1/ssl/doc/)
* [Configurer TLS](/fr/docs/hebergement-web/sites/ssl-tls/configurer-tls/)
* [Implémenter HSTS](/fr/docs/hebergement-web/sites/ssl-tls/hsts)

- Vérifier le certificat renvoyé et la configuration d'un nom d'hôte : [SSL Labs](https://www.ssllabs.com), [SSL Tools](https://ssl-tools.net/) ou [Security Headers](https://securityheaders.com).
- Trouver le contenu mixte [^1] de son site web : [Why no Padlock](https://www.whynopadlock.com/).

[^1]: Les navigateurs renvoient l'erreur "Mixed content" lorsqu'un site web utilise le protocole HTTPS mais que des images, vidéos ou scripts/styles sont renvoyés en HTTP.
