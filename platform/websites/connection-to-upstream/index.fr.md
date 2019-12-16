+++
url = "/fr/plateforme/sites/erreurs-connection-to-upstream/"
title = 'Corriger les erreurs "Connection to upstream refused/skipped"'
menuTitle = "Connection to upstream"
layout = "faq"
weight = 70
hidden = true
tags = ["http", "dépannage", "site"]
+++

Les erreurs **Connection to upstream refused** et **Connection to upstream skipped** indiquent un problème au lancement de l'application. Cela peut soit être le _serveur HTTP_ qui n'arrive pas à se lancer soit l'_application_ qui se lance mais n'écoute pas sur la bonne IP. Quelle que soit la raison plus d'informations sont disponibles dans les logs `$HOME/admin/logs/sites`.

Voici une liste non exhaustive d'exemples :

##  Apache
### Quota disque dépassé

```
=> Log sites pour un site utilisant Apache :
STDERR: (122)Disk quota exceeded: apache: could not open error log file /home/foo/admin/logs/apache/apache.log.

=> Logs Apache ($HOME/admin/logs/apache) :
[error] (122)Disk quota exceeded: Couldn't bind unix domain socket /home/foo/admin/config/apache/run/cgisoc
k.XXXXXXX
[error] (122)Disk quota exceeded: could not create /home/foo/admin/config/apache/run/apache.pid
[error] apache: could not log pid to file /home/foo/admin/config/apache/run/apache.pid
```

Passez sur le pack supérieur dans l'onglet **Comptes** de votre interface d'administration ou supprimez des fichiers. Cela concernera surtout les pack 100 Mo. 

### Log Apache introuvable

```
STDERR: (2)No such file or directory: apache: could not open error log file /home/foo/admin/logs/apache/apache.log.
STDERR: Unable to open logs
```

Tentez de redémarrer l'instance Apache (**Web > Sites > Redémarrer** un site de type PHP) pour le régénérer ou effectuez un changement notoire sur l'un des sites concerné (par exemple en ajoutant une adresse fictive).

### Caractères parasites

```
STDERR: Syntax error on line XXX of /home/foo/admin/config/apache/sites.conf:
STDERR: Invalid command 'XXX', perhaps misspelled or defined by a module not included in the server configuration
```

Des caractères parasites ou des directives n'utilisant pas la bonne syntaxe on été ajoutés dans le champ **Directives globales** d'un site de type **Apache personnalisé**, au niveau du champ **virtual host** du site concerné ou au niveau de la configuration Apache (**Web > Configuration**). Corrigez ou supprimez les.

{{% notice info %}}
Il n'y a qu'un serveur Apache par compte, préférez donc gérer les [directives Apache](https://httpd.apache.org/docs/) au niveau du virtual host ou d'un `.htaccess` lorsque c'est possible. 
{{% /notice %}}

## uWSGI

```
=> Logs sites :
STDERR: [uWSGI] getting INI configuration from /home/foo/admin/config/uwsgi/XXXXX.conf
Upstream starting failed: /usr/alwaysdata/uwsgi/2.0.17.1/bin/uwsgi --ini /home/foo/admin/config/uwsgi/XXXXX.conf (return code: 1 | reason: -)

=> Logs uWSGI ($HOME/admin/logs/uwsgi) :
chdir() to /home/foowww
chdir(): No such file or directory [core/uwsgi.c line 2631]
-----
failed to open python file /home/foo/www/app.py
unable to load app 0 (mountpoint='') (callable not found or import error)
-----
unable to find "application" callable in file /home/foo/www/manage.py
-----
ModuleNotFoundError: No module named 'XXXX'
```

Selon l'erreur corrigez le site, l'environnement virtuel ou encore le script lui-même.

## Autres serveurs HTTP

Pour les sites ne passant pas par Apache ou uWSGI, vérifiez le lancement du programme en [SSH]({{< ref "platform/remote-access/ssh" >}}). Notamment s'il écoute bien :

- en IPv4 ;
- sur l'IP et le port donné.

### Upstream not ready

```
Upstream starting failed: node ~/www/app.js (return code: - | reason: No such file or directory: '/www/')
```
Le répertoire de travail indiqué dans **Web > Sites** n'existe pas.

### Commande incorrecte (chemin)

```
STDERR: internal/modules/cjs/loader.js:589
[1STDERR:     throw err;
STDERR:     ^
STDERR: 
STDERR: Error: Cannot find module '/home/foo/www/app.js'
STDERR:     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:587:15)
STDERR:     at Function.Module._load (internal/modules/cjs/loader.js:513:25)
STDERR:     at Function.Module.runMain (internal/modules/cjs/loader.js:760:12)
STDERR:     at startup (internal/bootstrap/node.js:308:19)
STDERR:     at bootstrapNodeJSCore (internal/bootstrap/node.js:878:3)
Upstream starting failed: node ~/www/app.js
```
Le fichier _/home/foo/www/app.js_ n'existe pas.

## Cannot parse upstream response 
Cette erreur signifie qu'une réponse HTTP renvoyée par votre serveur/application est incorrecte (mal formée), et donc que notre proxy ne peut la déchiffrer (et la renvoyer).
