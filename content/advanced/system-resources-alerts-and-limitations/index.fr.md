+++
url = "/fr/avancé/ressources-systèmes-alertes-et-limitations"
title = "Ressources système : alertes et limitations"
layout = "howto"
hidden = true
tags = []
+++

{{% notice info %}}
Fonctionnalité disponible uniquement sur les environnements [Cloud Privé]({{< ref "accounts/billing/private-cloud-prices" >}}).
{{% /notice %}}

Le menu **Ressources** permet de configurer ses ressources système, comme  l'espace disque, le CPU ou la mémoire :

{{< fig "images/admin-panel_resources.fr.png" "" >}}

- *Limite d'espace disque* : limite maximale que peut atteindre un compte à un instant T. Si elle est atteinte, une indisponibilité est à prévoir.

- *Limite de CPU* : limite maximale que peut atteindre un compte à un instant T. Si elle est atteinte, des lenteurs ou indisponibilités sont à prévoir.

- *Limite de RAM* : limite maximale que peut atteindre un compte à un instant T. Si elle est atteinte un processus (pas forcément le plus consommateur) est automatiquement tué par le système.

Il est possible de gérer ces trois limites au niveau *serveur* ou au niveau *compte*. Les valeurs au niveau du compte **prennent l'avantage** sur les valeurs serveurs.

- *Seuil de RAM* : seuil auquel est effectué le script présenté dessous.

- *Commande à exécuter en cas de dépassement du seuil de RAM* : commande/script exécuté par le système lorsque le seuil est atteint. Cela permet de ne pas tuer un processus "au hasard".
