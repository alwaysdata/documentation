+++
url = "/fr/sites/divers/"
title = "Diverses questions"
layout = "faq"
hidden = true
tags = ["http", "site"]
+++

## Site HTTP par défaut

Cette option, des [Clouds Privé](accounts/billing/private-cloud-prices) et paramétrée dans le menu **HTTP** du serveur, permet de renseigner un site sur lequel sera rediriger les requêtes arrivant sur le serveur, dont l'adresse ne serait pas définie dans l'interface d'administration alwaysdata. Cela remplacera le "*Site not found*" renvoyé par défaut.

Elle est utile lorsque des adresses pointent au niveau DNS sur le serveur mais qu'elles ne sont pas renseignés dans **Web > Sites**. Cela peut, par exemple, être dans le cas d'un site avec un nombre très élevé d'adresses - qu'on ne veut pas toutes déclarées dans **Sites** - ou encore d'un oubli.

## Temps d'inactivité

À paramétrer dans le menu **Web > Sites > Modifier le [site] - ⚙️ > Avancé**. Cela permet de choisir la durée après laquelle le système arrête l'application ; en cas d'absence d'activité prolongée. Dès qu'une requête HTTP sera exécutée, l'application sera relancée.

Pour qu'une application ne soit jamais arrêtée, indiquez comme valeur `0`.

Il n'y a, cependant, *aucune garantie* qu'une application ne sera jamais arrêtée et celle-ci peut être arrêtée à tout moment. S'il est *nécessaire* qu'une application web tourne 24h/24, créez un [service](services) ainsi qu'un site de type [Redirection "reverse-proxy"](sites/redirect) pour son accès web.

## Commandes utiles

- Connaître les IP ayant fait le plus de requêtes à une date :

```
cut -d' ' -f2 $HOME/admin/logs/http/[année]/[fichier].log | sort | uniq -c | sort -rn | head
```
