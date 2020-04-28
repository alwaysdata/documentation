+++
url = "/fr/accès-distant/ftp/problèmes-fréquents/"
title = "FTP - Problèmes fréquents"
layout = "faq"
weight = 50
hidden = true
tags = ["accès distant", "dépannage", "ftp"]
+++

## Connexion

Un [blocage d'IP]({{< ref "security/network" >}}) a lieu après une dizaine de tentatives échouées de connexion au serveur.

{{% notice info %}}
alwaysdata a des logs de connexion dont vous pouvez exceptionnellement demander une copie.
{{% /notice %}}

### 530 Home Directory does not exist
Vérifiez que le répertoire racine indiqué dans **Accès distant > FTP** existe bien. Si vous n'êtes pas sûr, indiquez la racine du compte : `/`.

Cette erreur peut avoir d'autres raisons et notamment apparaître de façon sporadique. Réessayez de vous connecter ultérieurement ou contactez le [support](https://admin.alwaysdata.com/support/add).

### Réponse : 530 Login or password incorrect
Le couple login/mot de passe n'est pas bon vérifiez-le ou modifiez votre mot de passe dans **Accès distant > FTP**.

### Commande : AUTH SSL - Erreur : Impossible d'établir une connexion au serveur
Vous tentez de vous connecter en FTPS, changez pour le protocole **FTP simple**.

### ECONNREFUSED - Connexion refusée par le serveur /  ECONNRESET - Connexion réinitialisée par un pair
La connexion se bloque avant d'arriver aux serveurs alwaysdata, vérifiez :

- si vous êtes en mode **actif** ou **passif** : en mode actif le serveur FTP va déterminer le port à utiliser et initialiser la connexion, alors qu'en mode passif c'est le client FTP qui initialise la connexion. Ce dernier est donc préconisé ;
    - Pour **FileZilla** rendez-vous dans _Édition > Paramètres > Connexion > FTP_.
- que vous n'avez pas de logiciel qui ferait pare-feu ;
- en changeant d'appareil ;
- en changeant de connexion internet.

Si aucune de ces solutions ne fonctionne, essayez la connexion [SFTP]({{< ref "remote-access/sftp" >}}) ou notre interface [web](https://net2ftp.alwaysdata.com).

{{% notice info %}}
Les connexions Wi-Fi des établissements scolaires et hôtels bloquent fréquemment de tels services.
{{% /notice %}}

### ECONNABORTED - Connexion annulée
La connexion FTP est effectuée avec une IP mais une autre IP se connecte ensuite en mode passif. Assurez-vous de n'utiliser qu'une seule IP durant toute la durée de la connexion FTP.
Si vous ne pouvez corriger ce comportement, vous pouvez essayez la connexion [SFTP]({{< ref "remote-access/sftp" >}}) ou notre interface [web](https://net2ftp.alwaysdata.com).

## Accès aux fichiers
### Certains fichiers ne sont pas visibles
Les répertoires et fichiers "cachés", par exemple les `.htaccess`, ne sont pas forcément visibles par défaut ; c'est une **option de votre client FTP**.

Pour **FileZilla** rendez-vous dans _Serveur > Forcer l'affichage des fichiers cachés_.

