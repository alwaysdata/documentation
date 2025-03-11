+++
url = "/fr/sites/configurer-apache/"
title = "Comment modifier la configuration de son serveur Apache"
linkTitle = "Configuration Apache"
layout = "howto"
weight = 10
tags = ["apache", "http", "site"]
+++

[Apache](http://httpd.apache.org/) 2.4 est disponible sur nos serveurs. Pour ajouter des directives globales à votre configuration Apache rendez-vous dans **Web > Configuration > Apache**.
{{< fig "images/admin-panel_apache.fr.png" "Interface d'administration : configurer Apache" >}}

L'ensemble des modifications effectuées dans le champ *Directives globales d'Apache* se répercutera dans le fichier `$HOME/admin/config/apache/sites.conf`. Les logs d'erreurs Apaches sont disponibles dans le fichier `$HOME/admin/logs/apache/apache.log`. Un extrait de ces logs est présenté dans l'interface d'administration alwaysdata (Logs - 📄).

Apache sert les sites de type PHP, Fichiers statiques et Apache personnalisé.

- [Documentation Apache 2.4](http://httpd.apache.org/docs/2.4/fr/)
- [Fichier .htaccess](sites/htaccess-file)

## Installer un module

Une fois le fichier `.so` compilé et ajouté à votre [espace de fichiers](remote-access), insérez cette ligne dans les directives globales :

```
LoadModule <MODULE> $HOME/chemin/vers/le/module.so
```

- [GeoIP](guides/geoip)
