+++
url = "/fr/accès-distant/ftp/"
title = "FTP"
weight = 5
tags = ["accès distant", "ftp"]
archetype = "chapter"
+++

FTP, pour [File Transfer Protocol](https://fr.wikipedia.org/wiki/File_Transfer_Protocol) est un protocole permettant le partage de fichiers sur un réseau distant.

- [API - FTP](https://api.alwaysdata.com/v1/ftp/doc/)
- [Créer un utilisateur FTP](create-a-ftp-user)
- [Télécharger des fichiers avec FileZilla](use-filezilla)
- [Problèmes fréquents](remote-access/ftp/troubleshooting)

## Se connecter en FTP

| Informations |                                     |
|--------------|-------------------------------------|
| Hôte         | **ftp-[compte].alwaysdata.net**         |
| Port         | **990 (SSL/TLS)**                   |
| Port alternatif | 21 (STARTTLS)                    |
| Identifiant  | **utilisateur** et **mot de passe** associé |

Ces utilisateurs sont paramétrables dans l'onglet **Accès distant > FTP** de votre interface d'administration alwaysdata.
{{< fig "admin-panel_list-ftp-users.fr.png" "Interface d'administration : liste des utilisateurs FTP" >}}

{{% notice note %}}
Remplacez `ftp-[compte].alwaysdata.net` par votre nom d'hôte FTP.
{{% /notice %}}

Le nombre de connexions simultanées maximum par utilisateur est de _10_. Il est possible à la demande de le modifier en environnements Cloud Privé.



## .ftpaccess

Il est possible de créer des fichiers [.ftpaccess](http://www.proftpd.org/docs/howto/ftpaccess.html) pour modifier la configuration FTP des dossiers concernés.

### Exemple : Bloquer l'accès en lecture seule à un utilisateur

Créez un `.ftpaccess` à la racine du dossier avec la directive suivante :

```sh
<Limit WRITE>
DenyUser [utilisateur FTP]
</Limit>
```

---
- [FileZilla](https://filezilla-project.org/download.php) : client FTP gratuit
