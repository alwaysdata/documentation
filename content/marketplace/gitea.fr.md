+++
title = "Installation et configuration de Gitea"
layout = "howto"
hidden = true
tags= ["developpement"]
+++

## Première connexion

Gitea n'a pas de processus de création de compte administrateur lors de l'installation. Il vous suffit de pointer votre navigateur vers l'URL qui héberge votre instance Gitea fraîchement installée, et de vous d'y enregistrer votre compte.

En tant que premier utilisateur enregistré, vous disposerez des droits d'administration avec votre compte et pourrez gérer l'ensemble de l'instance.

## Configuration

Le script d'installation est fourni avec un fichier de configuration minimale dans `$HOME/[gitea/install/path]/custom/conf/app.ini`.

Le fichier de configuration suit la syntaxe de [fichiers `ini`](https://fr.wikipedia.org/wiki/Fichier_INI).

{{% notice info %}}
La [Gitea Config Cheatsheet](https://docs.gitea.io/en-us/config-cheat-sheet/) est disponible dans la documentation officielle.
{{% /notice %}}
