+++
url = "/fr/accès-distant/ssh/utiliser-des-clés-ssh/"
title = "Comment utiliser des clés SSH"
layout = "howto"
weight = 20
hidden = true
tags = ["accès distant", "ssh"]
+++

Se connecter en SSH avec sa clé publique (avec ou en désactivant la connexion par mot de passe) présente quelques avantages : sécurité renforcée, possibilité de définir un mot de passe "vide", etc. Voici les étapes à suivre pour configurer son compte SSH avec clé publique.

## Sous Windows

Les manipulations sont réalisées grâce à *PuTTY*, un client SSH [disponible gratuitement](https://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

1. Générer la clé privée :
    - Lancez **PuTTYGen** (fourni par PuTTy) ;
    - Générez une paire de clés **SSH-2 ED25519 de 2048 bits** ;
    - Sauvegardez la clé privée sur votre poste ;
2. Déclarez la clé sur le serveur en copiant cette clé dans le fichier `$HOME/.ssh/authorized_keys` de votre compte alwaysdata ;
3. Se connecter en SSH : configurez votre session **PuTTY**, dans la catégorie *Auth*, puis dans *Private Key file for auth*, chargez votre clé privée.

## Sous Unix / OS X

1. Générer les clés :

```sh
$ mkdir -p $HOME/.ssh
$ chmod 0700 $HOME/.ssh
$ ssh-keygen -t ed25519 -f $HOME/.ssh/id_ed25519
```

{{% notice tip %}}
Si vous voulez ne jamais avoir à rentrer votre mot de passe lorsque vous vous connecterez en SSH, indiquez une « passphrase » vide.
{{% /notice %}} 

2. Déclarer la clé publique (.pub) sur le serveur :

```sh
$ ssh-copy-id -i $HOME/.ssh/id_ed25519.pub [utilisateur]@ssh-[compte].alwaysdata.net
```
    
Ou en copiant le contenu de ce fichier dans le fichier `$HOME/.ssh/authorized_keys` de votre compte alwaysdata.

{{% notice note %}}
Remplacez `utilisateur` par le nom de votre utilisateur SSH et `ssh-[compte].alwaysdata.net` par votre nom d'hôte SSH.
{{% /notice %}}

Les utilisateurs du [Cloud privé]({{< ref "accounts/billing/choose-its-paas" >}}) peuvent les déclarer [directement dans l'interface d'administration]({{< ref "remote-access/ssh/install-globally-ssh-keys" >}}), elles seront alors globales au serveur et donc utilisables par tous les comptes.

3. Se connecter en SSH : à la prochaine connexion SSH, votre passphrase vous sera demandée (ou rien du tout si votre passphrase est vide).

{{% notice info %}}
Les clés DSA ne sont [pas acceptées](https://www.openssh.com/legacy.html).
{{% /notice %}}
