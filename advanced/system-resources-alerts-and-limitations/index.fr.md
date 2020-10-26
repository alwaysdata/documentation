+++
url = "/fr/ressources-systèmes-alertes-et-limitations"
title = "Ressources système : alertes et limitations"
layout = "howto"
hidden = true
tags = ["serveur dédié", "serveur vps"]
+++

{{% notice info %}}
Fonctionnalité disponible uniquement sur les serveurs VPS et dédiés.
{{% /notice %}}



Le menu **Ressources** permet de configurer ses ressources système, comme la mémoire.

{{< fig "images/admin-panel_resources.fr.png" "Interface d'administration" >}}

- *Limite de RAM par compte* : limite maximale que peut atteindre un compte à un instant T. Si elle est atteinte un processus (pas forcément le plus consommateur) est automatiquement tué par le système.

- *Commande à exécuter en cas de dépassement du seuil de RAM* : commande/script exécuté par le système lorsque le seuil est atteint. Cela permet de ne pas tuer un processus "au hasard".

- *Seuil de RAM* : seuil auquel est effectué le script présenté dessus.
