+++
url = "/fr/sites/stack-http/"
title = "Stack HTTP"
hidden = true
layout = "man"
tags = ["http", "site"]
+++

Un reverse-proxy frontal est installé sur tous nos serveurs. Celui-ci écoute les requêtes HTTP entrantes puis :

- lance les serveurs HTTP et programmes [définis](sites/add-a-site) pour servir vos données ;
- renvoie le bon [certificat SSL](security/ssl-tls/certificates-priorities) ;
- logue les requêtes HTTP. Ces logs sont disponibles via le [répertoire `$HOME/admin/logs`](remote-access/admin-directory#logs).

Il gère aussi le [pare-feu applicatif web (WAF)](sites/waf) et le [cache HTTP](http-cache) activables dans **Web > Sites**.

{{< fig "images/http-stack.fr.png" "Fonctionnement du reverse-proxy alwaysdata" >}}

 Nous ajoutons aux *headers* :

- `X-Forwarded-Proto`, qui vaut http ou https selon que la connexion est faite en HTTP ou HTTPS. Ainsi le reverse proxy accède aux serveurs web en HTTP que la connexion au niveau du navigateur soit HTTP ou HTTPS ;
- `X-Real-IP`, qui prend la valeur de l'adresse IP de l'utilisateur.

---
Icônes : The Noun Project
