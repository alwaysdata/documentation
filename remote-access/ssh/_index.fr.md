+++
url = "/fr/accès-distant/ssh/"
title = "SSH"
weight = 5
tags = ["accès distant", "ssh"]
chapter = true
+++

# SSH

SSH, pour [Secure Shell](https://fr.wikipedia.org/wiki/Secure_Shell), est un protocole de connexion sécurisé par un échange de clés de chiffrement en début de connexion. alwaysdata le propose sur TOUS ses environnements.

- [API - SSH](https://api.alwaysdata.com/v1/ssh/doc/)
- [Créer un utilisateur SSH]({{< relref "create-a-ssh-user" >}})
- [Utiliser des clés]({{< relref "use-keys" >}})
- [Problèmes fréquents]({{< ref "remote-access/ssh/troubleshooting" >}})
- [Clés SSH globales]({{< relref "install-globally-ssh-keys" >}}) (option de serveurs VPS et dédiés)

{{% notice info %}}
Toutes nos offres sont infogérées, il n'est pas possible d'avoir un accès `root`.
{{% /notice %}}

## Se connecter en SSH

| Informations |                                                 |
|--------------|-------------------------------------------------|
| Hôte         | ssh-[compte].alwaysdata.net                     |
| Ports        | 22                                              |
| Identifiant  | utilisateur et mot de passe associé OU clés SSH |

Ces utilisateurs sont paramétrables dans l'onglet **Accès distant > SSH** de votre interface d'administration alwaysdata (dont leurs [shell](https://fr.wikipedia.org/wiki/Shell_Unix)). Vous y retrouverez aussi les _fingerprints_ du serveur SSH sur lequel est le compte.
{{< fig "admin-panel_ssh-users-list.fr.png" "Interface d'administration : liste des utilisateurs SSH" >}}

### Par un terminal

Ouvrez votre terminal et saisissez la commande suivante :

```ssh
$ ssh [utilisateur]@ssh-[compte].alwaysdata.net
```

{{% notice note %}}
Remplacez `[utilisateur]` par le nom de votre utilisateur SSH et `ssh-[compte].alwaysdata.net` par votre nom d'hôte SSH.
{{% /notice %}}


### Par le web

Utile si vous êtes derrière un firewall, notre [interface web](https://github.com/shellinabox/shellinabox) vous permet d'utiliser le protocole SSH à partir de votre navigateur. Pour l'utiliser, indiquez `https://ssh-[compte].alwaysdata.net` dans la barre d'adresse de votre navigateur web.

Attention, cette solution peu fiable et lente ne remplace pas un client SSH.


{{% notice info %}}
Cette interface n'est pas compatible avec les hébergements VPS et dédiés.
{{% /notice %}}

## Conseils

Les *fingerprints* de nos serveurs SSH sont affichés dans l’onglet **Accès distant > SSH** de votre interface d’administration.

---
- [OpenSSH](https://www.openssh.com/) ;
- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) : terminal SSH sous Windows.
