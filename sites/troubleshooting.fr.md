+++
url = "/fr/sites/problèmes-fréquents/"
title = "Sites web - Problèmes fréquents"
layout = "faq"
weight = 90
tags = ["dépannage", "http", "site"]
+++

## Connexion

Service externe permettant de vérifier la disponibilité : [Down for everyone or just me](https://downforeveryoneorjustme.com/)

- [Connection to upstream refused, Connection to upstream skipped, Upstream not ready, Cannot parse upstream response]({{< ref "sites/connection-to-upstream" >}})
- [PHP]({{< ref "languages/php/troubleshooting" >}})

### This site can’t be reached / server DNS address could not be found

- Vérifiez si le domaine existe, n'est pas expiré ou bloqué par l'[ICANN](https://www.icann.org/fr) via un `whois`[^1] ;
- Vérifiez la [résolution DNS](https://www.dnswatch.info/) de l'adresse.

### Erreurs 500

Ces erreurs peuvent être renvoyées par le serveur web (exemple Apache), le langage utilisé ou l'application elle-même. Mettre en place des logs de debogguage permet d'avoir plus d'informations pour corriger.

### Page blanche

Une page blanche sans message ni code d'erreur signifie généralement un problème applicatif : le code renvoyé par les logs HTTP est *200*, indiquant que la requête atteint l'application. Mettre en place des logs de debogguage permet d'avoir plus d'informations pour corriger.

[^1]: Plus d'informations sur [whois](https://fr.wikipedia.org/wiki/Whois)
