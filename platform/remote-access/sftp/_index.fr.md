+++
url = "/fr/plate-forme/accès-distant/sftp/"
title = "SFTP"
date = 2019-09-12T12:29:59+02:00
weight = 5
chapter = true
+++

# SFTP

Le protocole SFTP (pour [SSH File Transfer Protocol](https://fr.wikipedia.org/wiki/SSH_File_Transfer_Protocol)) permet de sécuriser un transfert FTP en passant par un tunnel SSH. Les clients peuvent de ce fait utiliser une interface graphique simple via le client FTP de leur choix.

## Comment se connecter via le protocole SFTP

<div style="text-align: left">
Dans <b>Accès distant > SSH</b> autorisez la <i>connexion par mot de passe</i> à votre utilisateur SSH.<br>
Puis renseignez dans votre client FTP les informations de connexion SSH. Prenons l'exemple du compte <i>test</i> et du client FTP <a href=https://filezilla-project.org/>FileZilla</a> :
<ul>
<li> utilisateur : test</li>
<li> mot de passe</li>
<li> nom d'hôte : ssh-test.alwaysdata.net</li>
<li> port : 22</li>
</ul>
</div>

![Interface FileZilla : connexion SFTP](/en/platform/remote-access/sftp/filezilla_sftp-connection_fr.png)



> Il ne doit pas être confondu avec le protocole [FTPS] ({{< ref "platform/remote-access/ftp" >}}) : transfert FTP sécurisé par les protocoles SSL ou TLS.
