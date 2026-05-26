---
permalink: /fr/docs/hebergement-web/acces-distant/repertoire-admin/
title: "Répertoire admin : présentation"
eleventyNavigation:
  key: "Répertoire admin : présentation"
  parent: Accès distant
---

Tout compte contient un répertoire `$HOME/admin` placé à sa racine et accessible en [FTP](/fr/docs/hebergement-web/acces-distant/ftp/), [SSH](/fr/docs/hebergement-web/acces-distant/ssh/), [SFTP](/fr/docs/hebergement-web/acces-distant/sftp/) ou encore [WebDAV](/fr/docs/hebergement-web/acces-distant/webdav/). 

Vous retrouverez dedans :

- _mail_ : montage [NFS](https://fr.wikipedia.org/wiki/Network_File_System) (Cloud Public) ou un lien symbolique (Cloud Privé) des [emails](/e-mails) ;
- _config_ ;
- _logs_ ;
- _tmp_ : stocke les fichiers temporaires de vos applications (remplaçant /tmp) ;
- _backup_ : montage NFS des [sauvegardes](/fr/docs/hebergement-web/sauvegardes/) qui ne sont donc PAS stockées localement.

> [!NOTE]
> Ce répertoire n'est PAS amené à recevoir vos fichiers.


## config

Ce répertoire héberge les fichiers de configuration Apache, uWSGI ou des langages. Vous y accédez en **lecture seule**, les changements s'effectuant directement dans votre interface d'administration alwaysdata, onglets **Environnement**, **Web > Configuration** ou **Web > Sites**.

## logs

Il recueille différents types de logs :

- _http_ : accès à vos [sites web](/fr/docs/hebergement-web/sites/) ;
- _sites_ : lancements, arrêts et dysfonctionnements des serveurs web “upstream” ;
- _jobs_ : exécution de vos [tâches planifiées](/fr/docs/hebergement-web/taches-planifiees/) ;
- _services_ : exécution de vos [services](/fr/docs/hebergement-web/services/) ;
- _apache_ : un log pour toutes les applications utilisant ce serveur web (PHP et Apache personnalisé) ;
- _php_ : un log pour toutes les applications utilisant le langage de programmation PHP ;
- _uwsgi_ : un log pour chaque application (Python WSGI, Ruby Rack et Ruby on Rails <= 2.x).

Un extrait de ces logs est présenté dans l'interface d'administration alwaysdata (**Logs** - 📄).

> [!NOTE]
> Une **période de rétention** des logs peut être mise en place pour chaque compte via le menu **Avancé > Logs**. Pour le Cloud Privé, il est aussi possible de le faire au niveau du serveur dans son menu **HTTP**.
> *Tous les logs (http, sites, jobs...) seront supprimés une fois la période souhaitée passée.*


Seuls les logs *apache*, *php* et *uwsgi* du mois en cours rentrent en compte dans le quota d'espace disque d'un compte.
