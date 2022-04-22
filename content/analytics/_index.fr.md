+++
url = "/fr/statistiques/"
title = "Statistiques"
pre = "<i class='fas fa-fw fa-chart-line'></i> "
layout = "man"
weight = 35
tags = ["http", "statistiques", "site"]
+++

À partir des logs bruts HTTP (`$HOME/admin/logs/http`) nous générons des statistiques de visite en *temps réel*. Celles-ci sont disponibles dans la section **Web > Analytics**.

{{< fig "stats-panel.fr.png" "" >}}

Vous pouvez afficher le graphe par site ou pour l'ensemble d'un compte.

## Personnalisation des statistiques

Notre plateforme est exclusivement basée sur les logs HTTP et fournit une interface simple. Il n'est pas possible d'y ajouter des paramètres personnalisés.

Tournez-vous vers l'installation de votre propre logiciel de mesure de statistiques web : [Matomo](https://matomo.org/) peut être installé via notre [marketplace](https://www.alwaysdata.com/fr/marketplace/). Si vous avez déjà un compte alwaysdata rendez-vous dans le menu **Web > Sites** pour l'installer.

{{% notice tip %}}
Les précédentes statistiques accessibles via [Matomo](https://matomo.org/) sont toujours consultables avec vos identifiants sur cette [interface](https://analytics.alwaysdata.com).
{{% /notice %}}
