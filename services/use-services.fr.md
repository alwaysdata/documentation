+++
url = "/fr/services/utiliser-les-services/"
title = "Comment utiliser des services"
layout = "howto"
hidden = true
tags = ["services"]
+++

Via le menu **Avancé > Services** de votre interface d'administration paramétrez des tâches de fond ou des démons.

Les ports `8300` à `8499` ainsi que le nom d'hôte `services-[compte].alwaysdata.net`[^1] peuvent être utilisés pour faire tourner ces services.

Attention :

- Un log est automatiquement créé et disponible dans le répertoire `$HOME/admin/logs/services/`. Il vous donne le démarrage et l'arrêt du service.
- En Cloud public :
	- les services sont lancés sur un serveur propre ;
	- la consommation doit rester raisonnable.
- En infrastructure Catalyst (serveurs VPS et dédiés) :
	- Les ports ne sont PAS ouverts vers l'extérieur. Il sera possible de le faire via une [règle de parefeu]({{< ref "security/network/configure-firewall" >}}) ;

{{% notice note %}}
Même si c'est contre-indiqué, les utilisateurs de serveurs dédiés et VPS peuvent aussi écouter sur un autre port. Cela pourra poser des problèmes lors des [migrations]({{< ref "advanced/migrations" >}}).
{{% /notice %}}

## Exemples

### Redis

- *Commande* : `redis-server -h services-[compte].alwaysdata.net -p 8300`
- *Commande de monitoring* : `redis-cli -h services-[compte].alwaysdata.net -p 8300 ping`

[^1]: `[compte]` à remplacer par le nom du compte.
