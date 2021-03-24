+++
url = "/fr/services/"
title = "Services"
pre = "<i class='fas fa-fw fa-sitemap'></i> "
weight = 33
layout = "man"
tags = ["services"]
+++

Vous pouvez définir des services, c'est-à-dire des programmes génériques qui tournent 24h / 24 sans aucune inter­ac­tion uti­li­sa­teur.

Ces services sont contrôlés via le menu **Avancé > Services** de l'[interface d'administration](https://admin.alwaysdata.com).

{{< fig "admin-panel_create-service.fr.png" "Interface d'ad­mi­nis­tra­tion : créer un service" >}}

Si le service a besoin d'écouter sur un port, celui-ci *devra* être compris entre `8300` et `8499` et utiliser le nom d'hôte du compte sous la forme `services-[compte].alwaysdata.net:[PORT]`[^1]. Il doit écouter en IPv6 sur `::`.

Contrairement à une commande lancée manuellement en SSH, ces services seront relancés automatiquement par le système en cas d'arrêt.

Le champ *Commande de monitoring* — optionnel — permet de spécifier une commande qui vérifie que le service est fonctionnel. Lorsque cette commande renvoie un code d'erreur, le service est redémarré. Elle peut, par exemple, vérifier que le service est bien joignable sur le port qui lui est attribué (par exemple, pour un service utilisant le port *8300*):

```sh
$ nc -z services-[compte].alwaysdata.net 8300
```

---
- [Utiliser les services]({{< ref "services/use-services" >}})
- [Référence API](https://api.alwaysdata.com/v1/service/doc/)

[^1]: `[compte]` à remplacer par le nom du compte.
