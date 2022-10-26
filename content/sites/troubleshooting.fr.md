+++
url = "/fr/sites/problèmes-fréquents/"
title = "Sites web - Problèmes fréquents"
layout = "faq"
weight = 90
tags = ["dépannage", "http", "site"]
+++

## Connexion

Service externe permettant de vérifier la disponibilité : [Where's It Up?](https://wheresitup.com/)

- [Connection to upstream refused, Connection to upstream skipped, Upstream not ready, Cannot parse upstream response]({{< ref "sites/connection-to-upstream" >}})
- [PHP]({{< ref "languages/php/troubleshooting" >}})

### This site can’t be reached / server DNS address could not be found

- Vérifiez si le domaine existe, n'est pas expiré ou bloqué par l'[ICANN](https://www.icann.org/fr) via un `whois`[^1] ;
- Vérifiez la [résolution DNS](https://www.dnswatch.info/) de l'adresse.

Ajouter le domaine dans **Domaines** ne suffit pas à créer un site internet. L'ajout des adresses dans **Web > Sites** est nécessaire.

### 403 Forbidden

Pour les sites utilisant [Apache]({{< ref "sites/configure-apache" >}}), il va par défaut rechercher pour la page d'accueil un fichier nommé `index.html` ou `index.php`. Renommez votre fichier ou utilisez la directive [DirectoryIndex](https://httpd.apache.org/docs/2.4/fr/mod/mod_dir.html#directoryindex) dans un `.htaccess`.

### Erreurs 500

Ces erreurs peuvent être renvoyées par le serveur web (exemple Apache), le langage utilisé ou l'application elle-même. Mettre en place des logs de debogguage permet d'avoir plus d'informations pour corriger.

### Page blanche

Une page blanche sans message ni code d'erreur signifie généralement un problème applicatif : le code renvoyé par les logs HTTP est *200*, indiquant que la requête atteint l'application. Mettre en place des logs de debogguage permet d'avoir plus d'informations pour corriger.

[^1]: Plus d'informations sur [whois](https://fr.wikipedia.org/wiki/Whois)
