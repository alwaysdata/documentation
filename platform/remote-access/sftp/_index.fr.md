+++
url = "/fr/plateforme/accès-distant/sftp/"
title = "SFTP"
date = 2019-09-12T12:29:59+02:00
weight = 5
chapter = true
+++

# SFTP

Le protocole SFTP (pour [SSH File Transfer Protocol](https://fr.wikipedia.org/wiki/SSH_File_Transfer_Protocol)) permet de sécuriser un transfert FTP en passant par un tunnel SSH. Les clients peuvent de ce fait utiliser une interface graphique simple via le client FTP de leur choix.

## Comment se connecter via le protocole SFTP

Dans **Accès distant > SSH** autorisez la *connexion par mot de passe* à votre utilisateur SSH.

Puis renseignez dans votre client FTP les informations de connexion SSH. Prenons l'exemple du compte *test* et du client FTP [FileZilla](https://filezilla-project.org/) :

* utilisateur : test
* mot de passe
* nom d'hôte : ssh-test.alwaysdata.net
* port : 22

{{< fig "filezilla_sftp-connection.fr.png" "Interface FileZilla : connexion SFTP" >}}

{{% notice info %}}
Il ne doit pas être confondu avec le protocole [FTPS] ({{< ref "platform/remote-access/ftp" >}}) : transfert FTP sécurisé par les protocoles SSL ou TLS.
{{% /notice %}}
