+++
url = "/fr/plateforme/accès-distant/sftp/"
title = "SFTP"
weight = 5
tags = ["accès distant", "sftp"]
chapter = true
+++

# SFTP

Le protocole SFTP (pour [SSH File Transfer Protocol](https://fr.wikipedia.org/wiki/SSH_File_Transfer_Protocol)) permet de sécuriser un transfert FTP en passant par un tunnel SSH. Les clients peuvent de ce fait utiliser une interface graphique simple via le client FTP de leur choix.

## Se connecter en SFTP

Dans **Accès distant > SSH** autorisez la *connexion par mot de passe* à votre utilisateur SSH.

{{< fig "admin-panel_ssh-users-list.fr.png" "Interface d'administration : liste des utilisateurs SSH">}}

Puis renseignez dans votre client FTP les informations de connexion SSH. Prenons l'exemple du compte *test* et du client FTP [FileZilla](https://filezilla-project.org/) :

* utilisateur : _test_
* mot de passe
* nom d'hôte : _ssh-test.alwaysdata.net_
* port : _22_

{{< fig "filezilla_sftp-connection.fr.png" "Interface FileZilla : connexion SFTP" >}}

{{% notice info %}}
Il ne doit pas être confondu avec le protocole [FTPS] ({{< ref "platform/remote-access/ftp" >}}) : transfert FTP sécurisé par les protocoles SSL ou TLS.
{{% /notice %}}
