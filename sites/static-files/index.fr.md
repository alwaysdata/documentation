+++
url = "/fr/sites/fichiers-statiques/"
title = "Comment utiliser le type Fichiers statiques"
menuTitle = "Fichiers statiques"
layout = "howto"
weight = 15
tags = ["apache", "http", "site"]
+++

Que ce soit pour gérer un site statique, comme un site HTML, ou pour servir des médias d'un site utilisant uWSGI, vous pouvez utiliser le type Fichiers statiques.

Rendez-vous dans le menu **Web > Sites > Ajouter un site**.
{{< fig "images/admin-panel_sites-list.fr.png" "Interface d'administration : liste des sites" >}}

- Nom : utilisé pour l'affichage dans l'interface d'administration alwaysdata, purement informatif ;
- Adresses : les adresses pour joindre votre site (`*.exemple.org` pour les _catch-all_) ;

{{< fig "images/admin-panel_add-site-general.fr.png" "Ajouter un site : général" >}}

- Type : Fichiers statiques ;
- Répertoire racine : répertoire dans lequel est placé votre application.

{{< fig "images/admin-panel_static-files.fr.png" "Ajouter un site : Fichiers statiques" >}}

## Messages d'erreurs

### 403 Forbidden

Par défaut, le serveur HTTP va rechercher pour la page d'accueil un fichier nommé `index.html`. Renommez votre fichier ou utilisez la directive [DirectoryIndex](https://httpd.apache.org/docs/2.4/fr/mod/mod_dir.html#directoryindex) dans un `.htaccess`.
