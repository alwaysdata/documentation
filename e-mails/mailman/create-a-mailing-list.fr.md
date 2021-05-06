+++
url = "/fr/listes-de-diffusion/creer-une-liste-de-diffusion/"
title = "Créer une liste de diffusion"
layout = "man"
hidden = true
tags = ["email", "mailing list"]
+++

Pour créer une liste de diffusion, vous devez vous connecter à l'interface d'administration : https://admin.alwaysdata.com/mailinglist/.

## Gestion utilisateur

{{% notice info %}}
Vous devez définir au moins un utilisateur administrateur pour gérer votre liste de diffusion.
{{% /notice %}}

Pour définir un nouvel utilisateur pour la gestion de vos listes de diffusion, rendez vous dans la section [Gestion des utilisateurs](https://admin.alwaysdata.com/mailinglist/user/), puis **Ajouter un utilisateur**.

Si des listes de diffusion ont déjà été définies, vous pouvez d'ores-et-déjà associer des permissions vers ces listes à ce nouvel utilisateur.

{{% notice tip %}}
Les adresses mails des utilisateurs n'ont pas besoin d'appartenir au même domaine que la liste de diffusion. Par exemple, vous pouvez définir un utilisateur `foo@bar.com` comme administrateur de la liste `baz@example.org`.
{{% /notice %}}

## Gestion des listes de diffusion

Pour définir une nouvelle liste de diffusion, rendez vous dans **Ajouter une liste de diffusion**.

Définissez :

- un nom pour votre liste de diffusion qui constituera la partie locale de l'adresse mail de la liste (par exemple, pour une liste de diffusion derrière l'adresse mail `foo@example.org`, le nom de la liste sera `foo`).
- le domaine auquel la liste est attachée ; ce domaine doit être disponible dans la [liste des domaines]({{< ref "domains" >}}) dont vous avez les permissions d'administration
- les permissions attachées aux utilisateurs que vous aurez défini dans la partie *Gestion utilisateurs*.
