+++
url = "/fr/sites/configurer-apache/"
title = "Comment modifier la configuration de son serveur Apache"
menuTitle = "Configuration Apache"
layout = "howto"
weight = 10
tags = ["apache", "http", "site"]
+++

[Apache](http://httpd.apache.org/) 2.2 et 2.4 sont disponibles en [v2017]({{< ref "accounts/version" >}}). Seul Apache 2.4 est disponible en [v2020]({{< ref "accounts/version" >}}). Pour changer de version ou ajouter des directives globales à votre configuration Apache rendez-vous dans **Web > Configuration > Apache**.
{{< fig "images/admin-panel_apache.fr.png" "Interface d'administration : configurer Apache" >}}

L'ensemble des modifications effectuées dans le champ *Directives globales d'Apache* se répercutera dans le fichier `$HOME/admin/config/apache/sites.conf`. Les logs d'erreurs Apaches sont disponibles dans le fichier `$HOME/admin/logs/apache/apache.log`.

- [Documentation Apache 2.2](http://httpd.apache.org/docs/2.2/fr/)
- [Documentation Apache 2.4](http://httpd.apache.org/docs/2.4/fr/)
- [Fichier .htaccess]({{< ref "sites/htaccess-file" >}})

## Installer un module

Une fois le fichier `.so` compilé et ajouté à votre [espace de fichiers]({{< ref "remote-access" >}}), insérez cette ligne dans les directives globales :

```
LoadModule <MODULE> $HOME/chemin/vers/le/module.so
```
