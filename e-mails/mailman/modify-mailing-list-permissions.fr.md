+++
url = "/fr/listes-de-diffusion/modifier-les-permissions-d-une-liste-de-diffusion/"
title = "Modifier les permissions d'une liste de diffusion"
layout = "man"
hidden = true
tags = ["email", "mailing list"]
+++

Pour modifier les permissions de diffusion d'une liste, vous devez vous connecter à l'interface de gestion Postorius : https://mailman.alwaysdata.com/. Connectez-vous à l'aide d'une adresse mail d'administration que vous aurez défini à la [création de votre liste de diffusion]({{< relref "create-a-mailing-list" >}}).

Une fois identifié, rendez vous dans la section de gestion de la liste de diffusion concernée en cliquant sur le son nom.

## Modération des contenus

Pour modifier les règles de diffusion, rendez-vous dans la rubrique **Paramètres → Message Acceptance**. Vous pouvez y définir plusieurs règles de diffusion :

- *Retenir en modération* : les messages doivent être acceptés par un administrateur ou un modérateur pour être diffusés aux membres. C'est une modération *a priori*.
- *Rejeter* : les messages sont supprimés et les administrateurs sont notifiés du rejet.
- *Éliminer* : les messages sont supprimés, sans notification.
- *Accepter immédiatement*: aucune action n'est requise et les membres recevront le message.

Ces règles peuvent s'appliquer à deux typologies d'expéditeurs :

- *abonnés* : action à prendre quand le message est envoyé par un membre de la liste.
- *non-abonnés* : action à prendre quand le message est envoyé depuis une adresse externe à la liste.

## Exemples

Pour définir une **liste de diffusion ouverte**, réglez toutes les permissions à *Accepter immédiatement* : n'importe qui pourra envoyer un message aux membres (dans le cas d'une liste de support par exemple).

Pour définir une **newsletter**, réglez toutes les permissions à *Éliminer* : seuls les administrateurs peuvent envoyer un message aux membres.

Pour définir une adresse d'une **groupe de travail**, réglez les permissions des membres à *Accepter* et les permissions des non-membres à *Retenir en modération* : les membres peuvent échanger des messages sans modération, et les utilisateurs externes au groupe peuvent demander à envoyer des messages en les faisant valider *a priori*.
