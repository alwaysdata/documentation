+++
url = "/fr/accès-distant/ssh/utiliser-des-clefs-ssh/"
title = "Comment utiliser des clés SSH"
menuTitle = "Utiliser des clés"
layout = "howto"
weight = 20
hidden = true
tags = ["accès distant", "ssh"]
+++

Se connecter en SSH avec sa clé publique (plutôt que son mot de passe) présente quelques avantages : sécurité renforcée, possibilité de définir un mot de passe "vide", etc. Voici les étapes à suivre pour configurer son compte SSH avec clé publique.

## Sous Windows

Les manipulations sont réalisées grâce à *PuTTY*, un client SSH [disponible gratuitement](https://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

1. Générer la clé privée :
    - Lancez **PuTTYGen** (fourni par PuTTy) ;
    - Générez une paire de clés **SSH-2 RSA de 1024 bits** ;
    - Sauvegardez la clé privée sur votre poste ;
2. Déclarez la clé sur le serveur en copiant cette clé dans le fichier `$HOME/.ssh/authorized_keys` de votre compte alwaysdata ;
3. Se connecter en SSH : configurez votre session **PuTTY**, dans la catégorie *Auth*, puis dans *Private Key file for auth*, chargez votre clé privée.

## Sous Unix / OS X

1. Générer la clé privée :

```
$ mkdir -p $HOME/.ssh
$ chmod 0700 $HOME/.ssh
$ ssh-keygen -t rsa -f $HOME/.ssh/id_rsa
```

{{% notice tip %}}
Si vous voulez ne jamais avoir à rentrer votre mot de passe lorsque vous vous connecterez en SSH, indiquez une « passphrase » vide.
{{% /notice %}} 
2. Déclarer la clé sur le serveur :

```
$ ssh-copy-id -i $HOME/.ssh/id_rsa.pub [utilisateur]@ssh-[compte].alwaysdata.net
```
    
Ou en copiant le contenu de ce fichier dans le fichier `$HOME/.ssh/authorized_keys` de votre compte alwaysdata.
{{% notice note %}}
Remplacez _utilisateur_ par le nom de votre utilisateur SSH et _ssh-[compte].alwaysdata.net_ par votre nom d'hôte SSH.
{{% /notice %}}
3. Se connecter en SSH : à la prochaine connexion SSH, votre passphrase vous sera demandée (ou rien du tout si votre passphrase est vide).
