+++
url = "/fr/services/utiliser-les-services/"
title = "Comment utiliser des services"
layout = "howto"
hidden = true
tags = ["services"]
+++

Via le menu **Avancé > Services** de votre interface d'administration paramétrez des programmes tournant 24h / 24.

Les ports `8300` à `8499` ainsi que le nom d'hôte `services-[compte].alwaysdata.net`[^1] peuvent être utilisés pour faire tourner ces services.

**Attention** :

- Il doit rester en avant plan (`foreground`) et non forker et quitter [^2] ;
- S'il veut écouter sur un port il doit être attaché en _IPv6_ sur `::` et écouter un port entre `8300` et `8499` ;
- Un log est automatiquement créé et disponible dans le répertoire `$HOME/admin/logs/services/`. Il vous donne le démarrage et l'arrêt du service.
	- Un extrait de ces logs est présenté dans l'interface d'administration alwaysdata (Logs - 📄).
* Pour les utilisateurs du Cloud Public :
	- les services sont exécutés sur des serveurs distinct des serveurs SSH et HTTP ;
	- la consommation doit rester raisonnable ;
	- les services ne seront pas joignables en IPv4, uniquement en IPv6.
* Pour les utilisateurs de [Cloud Privés]({{< ref "accounts/billing/private-cloud-prices" >}}) :
	- Les ports `8300` à `8499` ne sont *pas* ouverts vers l'extérieur. Il est possible de les ouvrir via une [règle de parefeu]({{< ref "security/network/configure-firewall" >}}).

{{% notice note %}}
Même si c'est contre-indiqué, les utilisateurs de Clouds privés peuvent aussi s'attacher sur une autre IP que `::` et écouter un autre port que `8300-8499`. Attention, cela pourra poser des problèmes lors des [migrations]({{< ref "advanced/migrations" >}}).
{{% /notice %}}

## Exemples

- [Redis]({{< ref "guides/redis#étape-2--lancement-du-service" >}})
- [Memcached]({{< ref "guides/memcached#étape-2--lancement-du-service" >}})
- [Mattermost]({{< ref "guides/mattermost#lancement-du-service" >}})

[^1]: `[compte]` à remplacer par le nom du compte.
[^2]: voir [service `systemd` "simple"](https://www.freedesktop.org/software/systemd/man/systemd.service.html#Type=) pour des exemples.
