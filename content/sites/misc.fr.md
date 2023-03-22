+++
url = "/fr/sites/divers/"
title = "Diverses questions"
layout = "faq"
hidden = true
tags = ["http", "site"]
+++

## Site HTTP par défaut

Cette option, des [Clouds Privé]({{< ref "accounts/billing/private-cloud-prices" >}}) et paramétrée dans le menu **HTTP** du serveur, permet de renseigner un site sur lequel sera rediriger les requêtes arrivant sur le serveur, dont l'adresse ne serait pas définie dans l'interface d'administration alwaysdata. Cela remplacera le "*Site not found*" renvoyé par défaut.

Elle est utile lorsque des adresses pointent au niveau DNS sur le serveur mais qu'elles ne sont pas renseignés dans **Web > Sites**. Cela peut, par exemple, être dans le cas d'un site avec un nombre très élevé d'adresses - qu'on ne veut pas toutes déclarées dans **Sites** - ou encore d'un oubli.

## Temps d'inactivité

Cela permet de choisir la durée après laquelle le système arrête l'application ; en cas d'absence d'activité prolongée. Dès qu'une requête HTTP sera exécutée, l'application sera relancée.

Pour garantir qu'une application ne soit jamais arrêtée par le système, indiquez comme valeur `0`.
