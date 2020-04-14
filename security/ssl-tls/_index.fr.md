+++
url = "/fr/securité/ssl-tls/"
title = "SSL/TLS"
weight = 20
chapter = true
tags = ["https", "sécurité", "ssl"]
+++

# SSL/TLS

- [API](https://api.alwaysdata.com/v1/ssl/doc/)
- [Rediriger HTTP vers HTTPS]({{< relref "redirect-http-to-https" >}})
- [Configurer TLS]({{< relref "configure-tls" >}})
- [Ajouter un certificat SSL]({{< relref "add-a-ssl-certificate" >}})
- [Certificats Let's Encrypt]({{< relref "lets-encrypt" >}})
- [Générer une CSR]({{< relref "csr" >}})
- [Utiliser un certificat SAN]({{< relref "use-san-certificate" >}})
- [Priorité des certificats]({{< relref "certificates-priorities" >}})

* Vérifier le certificat renvoyé et la configuration d'un nom d'hôte : [SSL Labs](https://www.ssllabs.com) ou [SSL Tools](https://ssl-tools.net/)
* Trouver le contenu mixte [^1] de son site web : [Why no Padlock](https://www.whynopadlock.com/)

[^1]: Les navigateurs renvoient l'erreur "Mixed content" lorsqu'un site web utilise le protocole HTTPS mais que des images, vidéos ou scripts/styles sont renvoyés en HTTP.
