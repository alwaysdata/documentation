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

## Anciennes statistiques

Les statistiques créées avec [Matomo](https://matomo.org/) sont toujours accessible avec vos identifiants sur cette [interface](https://analytics.alwaysdata.com).

## Personnalisation des statistiques

Notre plateforme est exclusivent basée sur les logs HTTP et fournit une interface simple. Il n'est pas possible d'y ajouter des paramètres personnalisés.

Tournez-vous sur l'installation de votre propre logiciel de mesure de statistiques web : Matomo peut être installé via notre [marketplace]({{< ref "marketplace/matomo" >}}).
