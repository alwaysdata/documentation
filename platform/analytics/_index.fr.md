+++
url = "/fr/plateforme/statistiques/"
title = "Statistiques"
weight = 50
chapter = true
tags = ["http", "statistiques", "site"]
+++

# Statistiques

À partir des logs bruts HTTP (`$HOME/admin/logs/http`) nous générons des statistiques [Matomo](https://fr.matomo.org/).


## Accéder à ses statistiques
Rendez-vous dans la section **Web > Analytics**.



### Segmenter les sites
Par défaut tous les sites sont sur le même site Piwik. Vous pouvez les segmenter dans le menu **Gestion des sites Piwik** de cette section :
{{< fig "admin-panel_stats.fr.png" "Menu des statistiques Matomo" >}}

- Éditez le site par défaut pour déselectionner les sites web ;
- Ajoutez un site Piwik pour chaque site web.
{{< fig "admin-panel_section-sites.fr.png" "Segmenter les sites Matomo" >}}


### Ajouter des utilisateurs
Pour ajouter des utilisateurs et gérer leurs droits, rendez-vous dans le menu **Gestion des utilisateurs Piwik**.

----

- [Interface Matomo](https://analytics.alwaysdata.com)
- [Assistance Matomo]({{< ref "platform/analytics/troubleshooting-matomo" >}})
