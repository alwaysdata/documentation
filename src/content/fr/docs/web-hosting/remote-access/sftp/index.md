---
permalink: /fr/docs/hebergement-web/acces-distant/sftp/
title: SFTP
eleventyNavigation:
  key: SFTP
  parent: Accès distant
  order: 2
---

Le protocole SFTP (pour [SSH File Transfer Protocol](https://fr.wikipedia.org/wiki/SSH_File_Transfer_Protocol)) permet de sécuriser un transfert FTP en passant par un tunnel SSH. Les utilisateurs peuvent de ce fait utiliser une interface graphique simple via le client FTP de leur choix.

## Se connecter en SFTP

Dans **Accès distant > SSH/SFTP** autorisez la *connexion par mot de passe* à votre utilisateur SSH.

![](images/admin-panel_ssh-users-list.png)

Puis renseignez dans votre client FTP les informations de connexion SSH. Prenons l'exemple du compte *test* et du client FTP [FileZilla](https://filezilla-project.org/) :

* utilisateur : `[compte]`
* mot de passe
* nom d'hôte : `ssh-[compte].alwaysdata.net`
* port : `22`

![](images/filezilla_sftp-connection.png)

## Divers

Les utilisateurs choisissant le shell **SFTP uniquement** sont `chroot`. Ce shell ne permet d'accéder aux répertoires `/home/[compte]/admin/mail` et `/home/[compte]/admin/backup`.

Il ne doit pas être confondu avec le protocole [FTPS](/fr/docs/hebergement-web/acces-distant/ftp/) : transfert FTP sécurisé par les protocoles SSL ou TLS.
