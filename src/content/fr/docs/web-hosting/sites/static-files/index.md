---
permalink: /fr/docs/hebergement-web/sites/fichiers-statiques/
title: Utiliser le type Fichiers statiques
eleventyNavigation:
  key: Fichiers statiques
  parent: Sites web
---

Que ce soit pour gérer un site statique, comme un site HTML, ou pour servir des médias d'un site utilisant uWSGI, vous pouvez utiliser le type Fichiers statiques.

Rendez-vous dans le menu **Web > Sites > Ajouter un site**.
![](images/admin-panel_sites-list.png)

- Nom : utilisé pour l'affichage dans l'interface d'administration alwaysdata, purement informatif ;
- Adresses : les adresses pour joindre votre site (`*.example.org` pour les _catch-all_) ;

![](images/admin-panel_add-site-general.png)

- Type : Fichiers statiques ;
- Répertoire racine : répertoire dans lequel est placé votre application.

![](images/admin-panel_static-files.png)

## Messages d'erreurs

### 403 Forbidden

Par défaut, le serveur HTTP va rechercher pour la page d'accueil un fichier nommé `index.html`. Renommez votre fichier ou utilisez la directive [DirectoryIndex](https://httpd.apache.org/docs/2.4/fr/mod/mod_dir.html#directoryindex) dans un `.htaccess`.
