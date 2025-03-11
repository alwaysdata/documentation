+++
url = "/fr/accès-distant/répertoire-admin/"
title = "Répertoire admin : présentation"
layout = "man"
hidden = true
tags = ["compte", "environnement technique"]
+++

Tout compte contient un répertoire `$HOME/admin` placé à sa racine et accessible en [FTP](remote-access/ftp), [SSH](remote-access/ssh), [SFTP](remote-access/sftp) ou encore [WebDAV](remote-access/webdav). 

Vous retrouverez dedans :

- _mail_ : montage [NFS](https://fr.wikipedia.org/wiki/Network_File_System) (Cloud Public) ou un lien symbolique (Cloud Privé) des [emails](e-mails) ;
- _config_ ;
- _logs_ ;
- _tmp_ : stocke les fichiers temporaires de vos applications (remplaçant /tmp) ;
- _backup_ : montage NFS des [sauvegardes](backups) qui ne sont donc PAS stockées localement.

{{% notice note %}}
Ce répertoire n'est PAS amené à recevoir vos fichiers.
{{% /notice %}}

## config

Ce répertoire héberge les fichiers de configuration Apache, uWSGI ou des langages. Vous y accédez en **lecture seule**, les changements s'effectuant directement dans votre interface d'administration alwaysdata, onglets **Environnement**, **Web > Configuration** ou **Web > Sites**.

## logs

Il recueille différents types de logs :

- _http_ : accès à vos [sites web](sites) ;
- _sites_ : lancements, arrêts et dysfonctionnements des serveurs web “upstream” ;
- _jobs_ : exécution de vos [tâches planifiées](tasks) ;
- _services_ : exécution de vos [services](services) ;
- _apache_ : un log pour toutes les applications utilisant ce serveur web (PHP et Apache personnalisé) ;
- _uwsgi_ : un log pour chaque application (Python WSGI, Ruby Rack et Ruby on Rails <= 2.x).

Un extrait de ces logs est présenté dans l'interface d'administration alwaysdata (**Logs** - 📄).

{{% notice info %}}
Une **période de rétention** des logs peut être mise en place pour chaque compte via le menu **Avancé > Logs**. Pour le Cloud Privé, il est aussi possible de le faire au niveau du serveur dans son menu **HTTP**.
*Tous les logs (http, sites, jobs...) seront supprimés une fois la période souhaitée passée.*
{{% /notice %}}

Seuls les logs *apache* et *uwsgi* du mois en cours rentrent en compte dans le quota d'espace disque d'un compte.
