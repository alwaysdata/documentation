+++
url = "/fr/sécurité/ssl-tls/"
title = "SSL/TLS"
weight = 20
chapter = true
tags = ["https", "sécurité", "ssl"]
+++

# SSL/TLS

Tous les services (HTTP, mais aussi accès distant, bases de données, emails...) sont sécurisés par une couche SSL/TLS.

- [Certificats Let's Encrypt]({{< relref "lets-encrypt" >}})
- [Rediriger HTTP vers HTTPS]({{< relref "redirect-http-to-https" >}})
- [Générer une CSR]({{< relref "csr" >}})
- [Ajouter un certificat SSL]({{< relref "add-a-ssl-certificate" >}})
- [Renouveler un certificat SSL]({{< relref "renew-a-ssl-certificate" >}})
- [Priorité des certificats]({{< relref "certificates-priorities" >}})

* [API](https://api.alwaysdata.com/v1/ssl/doc/)
* [Configurer TLS]({{< relref "configure-tls" >}})
* [Implémenter HSTS]({{< relref "hsts" >}})

- Vérifier le certificat renvoyé et la configuration d'un nom d'hôte : [SSL Labs](https://www.ssllabs.com), [SSL Tools](https://ssl-tools.net/) ou [Security Headers](https://securityheaders.com).
- Trouver le contenu mixte [^1] de son site web : [Why no Padlock](https://www.whynopadlock.com/).

[^1]: Les navigateurs renvoient l'erreur "Mixed content" lorsqu'un site web utilise le protocole HTTPS mais que des images, vidéos ou scripts/styles sont renvoyés en HTTP.
