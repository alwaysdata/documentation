+++
url = "/fr/admin-facturation/comptes/renommer-compte/"
title = "Renommer un compte"
tags = ["compte"]
+++

Si le nom d'un compte ne convient plus (changement de dénomination, faute d'orthographe, etc.), il est possible d'en changer.

{{% notice warning %}}
C'est une fonctionnalité **avancée**. Renommer un compte change de nombreux éléments : les adresses par défaut, les noms d'hôtes aux différents services, les bases de données, les utilisateurs, ou encore le chemin du répertoire racine...

En conséquence, il faudra *certainement* faire des modifications de configuration dans vos applications et cela peut rendre des services *temporairement indisponibles*.
{{% /notice %}}

Rendez-vous :

- dans le menu **Abonnements** de votre **Espace client** pour les comptes sur le *Cloud Public*
{{< fig "images/public-cloud-list.fr.png" "" >}}

- dans le menu **Comptes** du menu du **serveur** pour les comptes sur le *Cloud Privé*
{{< fig "images/private-cloud-list.fr.png" "" >}}

Le nouveau nom de compte sera alors demandé :

{{< fig "images/account-rename.fr.png" "" >}}

{{% notice note %}}
Seul le **propriétaire du compte** peut effectuer cette action.
{{% /notice %}}
