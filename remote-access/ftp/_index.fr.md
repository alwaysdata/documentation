+++
url = "/fr/accès-distant/ftp/"
title = "FTP"
weight = 5
tags = ["accès distant", "ftp"]
chapter = true
+++

# FTP

FTP, pour [File Transfer Protocol](https://fr.wikipedia.org/wiki/File_Transfer_Protocol) est un protocole permettant le partage de fichiers sur un réseau TCP/IP.

- [API - FTP](https://api.alwaysdata.com/v1/ftp/doc/)
- [Créer un utilisateur FTP]({{< relref "create-a-ftp-user" >}})
- [Problèmes fréquents]({{< ref "remote-access/ftp/troubleshooting" >}})

## Se connecter en FTP

| Informations |                                     |
|--------------|-------------------------------------|
| Hôte         | ftp-[compte].alwaysdata.net         |
| Port         | 21                                  |
| Identifiant  | utilisateur et mot de passe associé |

Ces utilisateurs sont paramétrables dans l'onglet **Accès distant > FTP** de votre interface d'administration alwaysdata.
{{< fig "admin-panel_list-ftp-users.fr.png" "Interface d'administration : liste des utilisateurs FTP" >}}

{{% notice note %}}
Remplacez `ftp-[compte].alwaysdata.net` par votre nom d'hôte FTP.
{{% /notice %}}

Le nombre de connexions simultanées maximum par utilisateur est de _10_. Il est possible à la demande de le modifier en serveurs VPS et dédiés.

---
- [FileZilla](https://filezilla-project.org/download.php) : client FTP gratuit ;
- [net2ftp](https://net2ftp.alwaysdata.com/) : interface web.
