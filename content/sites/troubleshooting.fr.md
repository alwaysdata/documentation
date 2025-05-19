+++
url = "/fr/sites/problemes-frequents/"
title = "Sites web - Problèmes fréquents"
layout = "faq"
weight = 90
tags = ["dépannage", "http", "site"]
+++

## Connexion

Service externe permettant de vérifier la disponibilité : [Where's It Up?](https://wheresitup.com/)

- [Connection to upstream refused, Connection to upstream skipped, Upstream not ready, Cannot parse upstream response](sites/connection-to-upstream)
- [PHP](languages/php/troubleshooting)

### This site can’t be reached / server DNS address could not be found

- Vérifiez si le domaine existe, n'est pas expiré ou bloqué par l'[ICANN](https://www.icann.org/fr) via un `whois`[^1] ;
- Vérifiez la [résolution DNS](https://www.dnswatch.info/) de l'adresse.

Ajouter le domaine dans **Domaines** ne suffit pas à créer un site internet. L'ajout des adresses dans **Web > Sites** est nécessaire.

### 403 Forbidden

Pour les sites utilisant [Apache](sites/configure-apache), il va par défaut rechercher pour la page d'accueil un fichier nommé `index.html` ou `index.php`. Renommez votre fichier ou utilisez la directive [DirectoryIndex](https://httpd.apache.org/docs/2.4/fr/mod/mod_dir.html#directoryindex) dans un `.htaccess`.

### Erreurs 500

Ces erreurs peuvent être renvoyées par le serveur web (exemple Apache), le langage utilisé ou l'application elle-même. Mettre en place des logs de debogguage permet d'avoir plus d'informations pour corriger.

### Page blanche

Une page blanche sans message ni code d'erreur signifie généralement un problème applicatif : le code renvoyé par les logs HTTP est *200*, indiquant que la requête atteint l'application. Mettre en place des logs de debogguage permet d'avoir plus d'informations pour corriger.

## Logs Apache

Les logs sont disponibles dans le répertoire `$HOME/logs/apache`.

### Broken pipe / Connection reset by peer

```txt
Broken pipe: [client X.X.X.X:0] mod_fcgid: ap_pass_brigade failed in handle_request_ipc function
(104)Connection reset by peer: [client X.X.X.X:0] mod_fcgid: ap_pass_brigade failed in handle_request_ipc function
```

La connexion a été rompue par le client. Par exemple, parce que le visiteur a fermé son onglet alors que la page n'était pas complètement chargée. **Cela n'a rien d'anormal.**

### Premature end of script headers

```txt
Premature end of script headers: index.php, referer: https://example.org
```

Le *serveur* s'est arrêté subitement et Apache renvoie une erreur 500. **Cela ne doit pas arriver en situation normale.** Cela peut provenir de nombreuses raisons (bug PHP, bug applicatif, processus PHP tué par le kernel, etc.).

Il vous faut analyser tous les logs à votre disposition pour trouve la cause : logs applicatifs, [logs PHP](languages/php/configuration#logs-derreur)...

[^1]: Plus d'informations sur [whois](https://fr.wikipedia.org/wiki/Whois)
