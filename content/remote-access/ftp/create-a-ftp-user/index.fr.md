+++
url = "/fr/accès-distant/ftp/créer-un-utilisateur-ftp/"
title = "Comment créer un utilisateur FTP"
layout = "howto"
weight = 30
hidden = true
tags = ["accès distant", "ftp"]
+++

Afin de vous connecter à votre compte en _FTP_, il est nécessaire de disposer d'un utilisateur. Par défaut, un utilisateur du nom de votre _compte_ est crée à sa création. Vous pouvez créer autant d'utilisateurs FTP que vous le souhaitez que vous pouvez administrer depuis votre interface d'administration, onglet **Accès distant > FTP**.

{{< fig "images/admin-panel_list-ftp-users.fr.png" "Interface d'administration : liste des utilisateurs FTP">}}

- Nom : nom de l'utilisateur FTP, préfixé du nom de votre compte ;
- Mot de passe : mot de passe associé à l'utilisateur ;
- Répertoire racine : répertoire dans lequel l'utilisateur arrive à sa connexion.

{{< fig "images/admin-panel_add-ftp-user.fr.png" "Interface d'administration : ajout d'utilisateur FTP">}}

{{% notice note %}}
FTP propose une isolation : l'utilisateur ne pourra pas circuler librement sur les répertoires parents de son répertoire racine.
{{% /notice %}}

