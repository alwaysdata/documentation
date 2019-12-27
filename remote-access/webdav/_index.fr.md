+++
url = "/fr/accès-distant/webDAV/"
title = "WebDAV"
weight = 5
tags = ["accès distant", "webdav"]
chapter = true
+++

# WebDAV

WebDAV, pour [Web-based Distributed Authoring and Versioning](http://www.webdav.org/), permet aux utilisateurs de modifier et de gérer en collaboration des fichiers sur des serveurs Web distants.

- [API - WebDAV](https://api.alwaysdata.com/v1/webdav/doc/)
- [Créer un utilisateur WebDAV]({{< relref "create-a-webdav-user" >}})

{{% notice info %}}
WebDAV n'est pas activé par défaut sur les serveurs VPS et dédiés (les ports par défaut sont utilisés par les sites). Contactez le [support](https://admin.alwaysdata.com/support/add/) si vous en avez besoin.
{{% /notice %}}

## Se connecter avec WebDAV

| Informations   |                                      |
|----------------|--------------------------------------|
| Hôte           | webdav-[compte].alwaysdata.net       |
| Ports          | 80 (HTTP) ou 443 (HTTPS)             |
| Identifiant    | utilisateur et mot de passe associé  |

Ces utilisateurs sont paramétrables dans l'onglet **Accès distant > WebDAV** de votre interface d'administration alwaysdata.
{{< fig "admin-panel_list-webdav-users.fr.png" "Interface d'administration : liste des utilisateurs WebDAV" >}}

### Avec Windows

1. Faites un clic droit sur l'icône **Poste de travail** ou **Ordinateur** ;
2. Choisissez **Connecter un lecteur réseau**. Dans le champ _Dossier_, indiquez :
    - sous Vista et supérieurs : `https://webdav-[compte].alwaysdata.net/` 
3. Cliquez sur _Se connecter_ sous un nom d'utilisateur différent, puis rentrez vos identifiants. Validez et cliquez sur _Terminer_.

### Avec Mac OS X

1. Dans le **Finder**, choisissez _Aller > Se connecter au serveur_ ;
2. Dans le champ _Adresse du serveur_, entrez `http://webdav-[compte].alwaysdata.net/` ;
3. Cliquez sur _Se connecter_.

### Avec davfs2 (Linux)

**davfs2** a l'avantage de monter les partages WebDAV comme une partition locale, et de ce fait d'avoir ses fichiers accessibles depuis n'importe quelle application. Pour monter une partition dans `/mnt/alwaysdata` :

```
$ sudo mount.davfs https://webdav-[compte].alwaysdata.net/ /mnt/alwaysdata
```

{{% notice note %}}
Remplacez _webdav-[compte].alwaysdata.net_ par votre nom d'hôte WebDAV, disponible dans **Accès distant > WebDAV**.
{{% /notice %}}

