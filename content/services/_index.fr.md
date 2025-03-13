+++
url = "/fr/services/"
title = "Services"
pre = "<i class='fas fa-fw fa-sitemap'></i> "
weight = 33
layout = "man"
tags = ["services"]
+++

Vous pouvez définir des services, c'est-à-dire des programmes génériques qui tournent 24h / 24 sans aucune inter­ac­tion uti­li­sa­teur. Contrairement à une commande lancée manuellement en SSH, ces services seront relancés automatiquement par le système en cas d'arrêt.

Ces services sont contrôlés via le menu **Avancé > Services** de l'[interface d'administration](https://admin.alwaysdata.com).

{{< fig "admin-panel_create-service.fr.png" "" >}}

Les ports `8300` à `8499` ainsi que le nom d'hôte `services-[compte].alwaysdata.net`[^1] peuvent être utilisés pour faire tourner ces services.

- [Référence API](https://api.alwaysdata.com/v1/service/doc/)

## Utiliser les services

- Il doit rester en avant plan (`foreground`) et non forker et quitter [^2] ;
- S'il veut écouter sur un port il doit être attaché en _IPv6_ sur `::` et écouter un port entre `8300` et `8499` ;
- Un log est automatiquement créé et disponible dans le répertoire `$HOME/admin/logs/services/`. Il vous donne le démarrage et l'arrêt du service.
	- Un extrait de ces logs est présenté dans l'interface d'administration alwaysdata (**Logs** - 📄).
- Les processus en cours sont accessible via le menu **Avancé > Processus > Services** ;
- Le redémarrage d'un service renvoie le signal `SIGHUP`;
- Si un service échoue à plusieurs reprises en peu de temps, il sera automatiquement désactivé ;
- Les versions de langages utilisées par défaut sont celles renseignées dans le menu **Environnement** de l'interface d'administration. Il est possible de choisir une autre version en utilisant les *Variables d'environnement*.

Le champ *Commande de monitoring* — optionnel — permet de spécifier une commande qui vérifie que le service est fonctionnel. Lorsque cette commande renvoie un code d'erreur, le service est redémarré. Elle peut, par exemple, vérifier que le service est bien joignable sur le port qui lui est attribué (par exemple, pour un service utilisant le port *8300*) :

```sh
$ nc -z services-[compte].alwaysdata.net 8300
```

{{% notice warning %}}
Il n'y a aucun filtrage réseau, n'importe qui peut se connecter à vos services. Assurez-vous que vos services ont un mécanisme d'authentification si nécessaire.
{{% /notice %}}

Pour les utilisateurs du [Cloud Public](accounts/billing/public-cloud-prices) :

- Les services sont exécutés sur des serveurs distinct des serveurs SSH et HTTP ;
- La consommation doit rester raisonnable ;
- Les services ne seront pas joignables en IPv4, uniquement en IPv6.

Pour les utilisateurs du [Cloud Privé](accounts/billing/private-cloud-prices) :

- Les ports `8300` à `8499` ne sont *pas* ouverts vers l'extérieur. Il est possible de les ouvrir via une [règle de parefeu](security/network/configure-firewall) ;
- Vous pouvez utiliser d'autres ports, par exemple le port par défaut de l'application.

## Exemples

- [Mattermost](guides/mattermost#lancement-du-service)
- [Memcached](guides/memcached#étape-2--lancement-du-service)
- [MongoDB](guides/mongodb#lancement-du-service)
- [Redis](guides/redis#lancement-du-service)



[^1]: `[compte]` à remplacer par le nom du compte.
[^2]: voir [service `systemd` "simple"](https://www.freedesktop.org/software/systemd/man/systemd.service.html#Type=) pour des exemples.
