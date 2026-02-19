+++
url = "/fr/hebergement-web/statistiques/"
title = "Statistiques"
tags = ["http", "statistiques", "site"]
+++

À partir des logs bruts HTTP (`$HOME/admin/logs/http`) nous générons des statistiques de visites uniques[^1] en *temps réel*. Celles-ci sont disponibles dans la section **Web > Analytics**.

{{< fig "images/stats-panel.fr.png" "" >}}

Vous pouvez afficher le graphe par site ou pour l'ensemble d'un compte.

Un graphe au niveau serveur est disponible dans le menu **HTTP > Analytics** pour le [Cloud Privé](/admin-billing/billing/private-cloud-prices).

## Personnalisation des statistiques

Notre plateforme est exclusivement basée sur les logs HTTP et fournit une interface simple. Il n'est pas possible d'y ajouter des paramètres personnalisés.

Tournez-vous vers l'installation de votre propre logiciel de mesure de statistiques web : [Matomo](https://matomo.org/) peut être installé via notre [marketplace](https://www.alwaysdata.com/fr/marketplace/). Si vous avez déjà un compte alwaysdata rendez-vous dans le menu **Web > Sites > Installer une application** pour l'installer.

[^1]: Estimation sur l'IP : à partir de quelques minutes sans requêtes une même IP repasse en visite unique.
