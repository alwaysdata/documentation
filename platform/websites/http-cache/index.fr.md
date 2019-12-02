+++
url = "/fr/plateforme/sites/cache-http/"
title = "Cache HTTP"
menuTitle = "Cache HTTP"
weight = 50
tags = ["cache", "http", "site"]
+++

Le cache HTTP stocke tem­po­rai­re­ment des docu­ments web (exemples : pages HTML, docu­ments CSS, images) pour dimi­nuer la latence induite par le ser­veur lors­qu’il doit ser­vir une page et/ou réduire sa charge de tra­vail.

- [Utiliser le Cache HTTP]({{< ref "platform/websites/use-http-cache" >}})

## Concept

Lorsqu’un client tente d'accéder à une page, le serveur web correspondant va géné­rer une page et l’en­voyer sur le réseau. Le cache inter­cepte alors la réponse pour la stocker dans sa mémoire locale avant de la ser­vir au client.

{{< fig "images/http-cache_part-1.fr.png" "Mise en cache d’une res­source lors de sa reqête" >}}

Lorsqu’une requête pour la même page est émise par le même ou un autre client, le cache la restituera comme il détient alors une copie de la res­source deman­dée. Le ser­veur web ne sera plus inter­ro­gé.

{{< fig "images/http-cache_part-2.fr.png" "Restitution d’une res­source pré­cé­dement mise en cache" >}}

## Implémentation

Les spé­ci­fi­ca­tions du stan­dard sont exposées dans la [RFC 7234](https://tools.ietf.org/html/rfc7234). Le verbe HTTP _PURGE_ est aussi proposé pour supprimer une entrée dans le cache en l’ap­pe­lant sur son URL.

---
Icônes : The Noun Project
