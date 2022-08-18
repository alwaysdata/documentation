+++
url = "/fr/sites/redemarrer-un-site/"
title = "Comment redémarrer un site"
layout = "howto"
hidden = true
tags = ["http", "site"]
+++

Pour prendre en compte certaines modifications, il est nécessaire de redémarrer le programme. Celui-ci est effectué :

- lorsqu'on clique sur le bouton **Redémarrer** ;
- lorsqu'on fait des modifications sur le formulaire du site dans **Web > Sites** :
	- quand une adresse est ajoutée / modifiée / supprimée ;
	- quand une option du site est modifiée ;
- lorsqu'on fait des modifications dans le menu **Environnement**.
	
{{< fig "images/site-restart.fr.png" "Bouton de redémarrage" >}}

Ces actions sont aussi accessibles via notre [API]({{< ref "api" >}}).

{{% notice info %}}
Un seul serveur Apache existe par compte. En redémarrant un site utilisant ce serveur web (PHP, Redirection, Fichiers statiques et Apache personnalisé), tous les sites Apache du compte seront redémarrés.
{{% /notice %}}

## Redémarrage à chaud

Il n'existe pas de méthode universelle pour demander un *redémarrage à chaud* (durant lequel aucune requête ne doit être perdue). Par défaut le système envoie donc un `SIGTERM`, qui va donc arrêter le processus et le relancer. Dans ce cas, des requêtes peuvent alors potentiellement être perdues.

Pour les serveurs web *Apache* et *uWSGI*, les signaux permettant d'effectuer un redémarrage à chaud sont gérés par le système.

Pour les autres programmes, le champ **Redémarrage à chaud** vous permet de préciser quel signal envoyer à l'application.

{{< fig "images/hot-restart-signal.fr.png" "" >}}

Exemples :

- serveur web Ruby [Puma](https://github.com/puma/puma/blob/master/docs/restart.md)
