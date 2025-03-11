+++
url = "/fr/listes-de-diffusion/ajouter-un-pied-de-page-a-une-liste-de-diffusion/"
title = "Ajouter un pied de page à une liste de diffusion"
layout = "man"
hidden = true
tags = ["email", "mailing list"]
+++

Pour ajouter un pied de page à une liste de diffusion, vous devez vous connecter à l'[interface de gestion Postorius](https://mailman.alwaysdata.com/). Connectez-vous à l'aide d'une adresse mail d'administration que vous aurez défini à la [création de votre liste de diffusion](create-a-mailing-list).

Une fois identifié, rendez vous dans la section de gestion de la liste de diffusion concernée en cliquant sur son nom.

## Utilisation des *Modèles*

Les *Modèles* vous permettent de définir des portions de contenus pouvant être injectés ou utilisés dans les messages automatiques de la liste.

Pour les définir, rendez vous dans la section *Modèles → Nouveau modèle*. La liste des modèles personnalisables s'affiche, avec leur contexte associé. Vous définissez ensuite le contenu du modèle dans la zone de saisie.

## Ajouter un pied de page avec un lien de désinscription

Par défaut, les messages diffusés aux membres ne contiennent pas de lien de désinscription. Vous pouvez ajouter ce lien en définissant un pied de page automatique.

Ajoutez un modèle de type `[list:member:regular:footer]`, avec le contenu suivant :

```txt
--
Unsubscribe: <mailto:$short_listname-unsubscribe@$domain>
```

Chaque message diffusé à la liste se verra ajouté un pied de page en signature, contenant l'adresse mail de désincription générée depuis les *placeholders* (par exemple `foo-unsubscribe@example.org`).
