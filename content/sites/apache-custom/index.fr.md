+++
url = "/fr/sites/apache-personnalise/"
title = "Comment utiliser le type Apache personnalisé"
layout = "howto"
hidden = true
tags = ["apache", "http", "site"]
+++

Le type Apache personnalisé permet de faire tourner des sites servis par le serveur Apache mais n'utilisant pas PHP ou HTML.

{{% notice warning %}}
Si vous voulez seulement ajouter des directives globales à Apache modifiez sa [configuration](sites/configure-apache) dans **Web > Configuration > Apache**.
{{% /notice %}}

Rendez-vous dans le menu **Web > Sites > Ajouter un site**.
{{< fig "images/admin-panel_sites-list.fr.png" "Interface d'administration : liste des sites" >}}

- Nom : utilisé pour l'affichage dans l'interface d'administration alwaysdata, purement informatif ;
- Adresses : les adresses pour joindre votre site (`*.example.org` pour les _catch-all_) ;

{{< fig "images/admin-panel_add-site-general.fr.png" "Ajouter un site : général" >}}

- Type : Apache personnalisé ;
- Directives globales : directives globales à tous les sites servis par Apache ;
- Directives du virtual host : directives Apache pour le site concerné.


{{< fig "images/admin-panel_apache-custom.fr.png" "Ajouter un site : Apache personnalisé" >}}


L'ensemble des modifications se répercutera dans le fichier `$HOME/admin/config/apache/sites.conf`. Les logs d'erreurs Apache sont disponibles dans `$HOME/admin/logs/apache/apache.log`.
