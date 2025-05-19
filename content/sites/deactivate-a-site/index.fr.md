+++
url = "/fr/sites/desactiver-un-site/"
title = "Comment désactiver un site web"
layout = "howto"
hidden = true
tags = ["http", "site"]
+++

Vous pourriez avoir besoin de désactiver votre site le temps d'une maintenance ou d'une indisponibilité : cette fonctionnalité n'est pas disponible dans l'interface d’administration. En revanche, des solutions simples permettant cela existent :

- la création d'un fichier index (pensez à renommer celui de votre application) indiquant que le site est actuellement en maintenance ou désactivé. Il vous suffira de faire l'opération inverse lorsque le site pourra de nouveau être accessible ;
- la suppression du site dans la section **Web > Sites** le temps de l'indisponibilité et redéclarée par la suite :
{{< fig "images/admin-panel_delete-site.fr.png" "Interface d'administration : supprimer un site" >}}
- si vous utilisez une application CMS de type Wordress, Joomla (.etc) une option est généralement disponible directement dans leur interface d'administration.
