+++
url = "/fr/services/"
title = "Services"
pre = "<i class='fas fa-fw fa-sitemap'></i> "
weight = 33
layout = "man"
tags = ["services"]
+++

Les Web apps ou ser­vices ont par­fois besoin d’exé­cu­ter des tâches de fonds ou démons, sans aucune inter­ac­tion uti­li­sa­teur. Pour gérer ce point, vous devez enre­gis­trer un service.

Ces services sont contrôlés via le menu **Avancé > Services** de l'[interface d'administration](https://admin.alwaysdata.com).

{{< fig "admin-panel_create-service.fr.png" "Interface d’ad­mi­nis­tra­tion : créer un service" >}}

Deux types de services peuvent être lancés :

- un service qui fonctionne seul - auquel on n'a pas besoin de se connecter. Exemples : Celery, New Relic.
- un service auquel une ou plusieurs applications doivent se connecter. Dans ce cas, il faudra écouter sur un port entre `8300` et `8499` et utiliser le nom d'hôte du compte - de la forme `services-[compte].alwaysdata.net`[^1]. À configurer au niveau du client. Exemple : Redis.

Contrairement à une tâche lancée à la main en SSH, ces services seront relancés automatiquement par le système en cas d'arrêt.

Le champ *Commande de monitoring* permet créer une commande pour relancer le service en cas de malfonctionnement. Elle peut, par exemple, vérifier que le service écoute bien sur le port qui lui est attribué en utilisant (pour un service utilisant le port 8300):

```sh
$ nc -z services-[compte].alwaysdata.net 8300
```

---
- [Utiliser les services]({{< ref "services/use-services" >}})
- [Référence API](https://api.alwaysdata.com/v1/service/doc/)

[^1]: `[compte]` à remplacer par le nom du compte.
