+++
title = "Installation et configuration de Gitea"
layout = "howto"
hidden = true
tags= ["developpement"]
+++

[Gitea](https://gitea.io) est un gestionnaire de dépôts git écrit en Go.

> Gitea is a painless self-hosted Git service. It is similar to GitHub, Bitbucket, and GitLab. Gitea is a fork of Gogs.

En hébergeant vous-même Gitea dans votre compte alwaysdata, vous pourrez accéder à des dépôts privés (et publics) de git, hébergés sur le cloud alwaysdata, et réduire votre dépendance à des solutions d'hébergement centralisées comme Github.

- [Documentation](https://docs.gitea.io/en-us/)

## Installation

### Utiliser notre marketplace

La dernière version de Gitea peut être installée via notre marketplace dans le menu **Web > Sites > Installer une application**.

- [Script d'installation](https://admin.alwaysdata.com/site/application/script/2/detail/)

## Première connexion

Gitea n'a pas de processus de création de compte administrateur lors de l'installation. Il vous suffit de pointer votre navigateur vers l'URL qui héberge votre instance Gitea fraîchement installée, et de vous d'y enregistrer votre compte.

En tant que premier utilisateur enregistré, vous disposerez des droits d'administration avec votre compte et pourrez gérer l'ensemble de l'instance.

## Configuration

Le script d'installation est fourni avec un fichier de configuration minimale dans `$HOME/[gitea/install/path]/custom/conf/app.ini`.

Le fichier de configuration suit la syntaxe de [fichiers `ini`](https://fr.wikipedia.org/wiki/Fichier_INI).

{{% notice info %}}
La [Gitea Config Cheatsheet](https://docs.gitea.io/en-us/config-cheat-sheet/) est disponible dans la documentation officielle.
{{% /notice %}}
