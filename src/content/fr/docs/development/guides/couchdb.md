---
permalink: /fr/docs/developpement/guides/couchdb/
title: CouchDB
eleventyNavigation:
  key: CouchDB
  parent: Guides
---

[CouchDB](https://couchdb.apache.org/) est un SGBD noSQL orienté documents.

Dans notre exemple, nous utilisons un [accès SSH](/web-hosting/remote-access/ssh) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de CouchDB : `$HOME/couchdb/`

> [!NOTE]
> `[foo]` doit être remplacé par le nom de votre compte.


## Installation
### Téléchargement et compilation

```sh
foo@ssh:~$ mkdir couchdb
foo@ssh:~$ cd couchdb
foo@ssh:~/couchdb$ wget -O- https://dlcdn.apache.org/couchdb/source/3.4.1/apache-couchdb-3.4.1.tar.gz | tar -xz --strip-components=1
foo@ssh:~/couchdb$ ./configure --spidermonkey-version 78
foo@ssh:~/couchdb$ make release
```

Choisissez le paquet *tar.gz* de la dernière version disponible sur [le site institutionnel de CouchDB](https://dlcdn.apache.org/couchdb/source/).

### Configuration

Créez un fichier `local.ini` dans le répertoire `$HOME/couchdb` avec les directives suivantes :

```
[admins]
admin = monsupermotdepasse

[couchdb]
single_node = true

[chttpd]
bind_address = ::
port = 5984
```

> [!NOTE]
> `monsupermotdepasse` est à remplacer par le mot de passe de votre choix.


Les utilisateurs du [Cloud public](/fr/docs/admin-facturation/facturation/prix-cloud-public/) devront faire pointer le service sur un port entre 8300 à 8499 et modifier cette valeur dans le fichier de configuration.

### Lancement du service

Créez un [service](/web-hosting/services) avec les détails suivants :

- *Commande* : `./bin/couchdb -couch_ini /home/[foo]/couchdb/local.ini`
- *Répertoire de travail* : `/home/[foo]/couchdb/rel/couchdb`

L'adresse pour se connecter à l'instance CouchDB sera `services-[foo].alwaysdata.net:[port]`. Par exemple, pour lister les bases de données :

```
$ curl -X GET http://admin:monsupermotdepasse@services-[foo].alwaysdata.net:[port]/_all_dbs
```

> [!NOTE]
> `[port]` est à remplacer par le port indiqué dans le fichier `local.ini`.


### Création de la règle de parefeu

Les utilisateurs du [Cloud Privé](/fr/docs/admin-facturation/facturation/prix-cloud-prive/) devront ouvrir le port utilisé en créant une règle sur le [parefeu](/fr/docs/caracteristiques-techniques/configurer-le-firewall) s'ils souhaitent y accéder depuis l'extérieur :

| Intitulé   | Valeur                                           |
|------------|--------------------------------------------------|
| Protocole  | UDP/TCP                                          |
| Type       | ACCEPT                                           |
| Direction  | Entrée                                           |
| Hôtes      | \<ne rien indiquer>                              |
| Ports      | 5984                                             |
| Version IP | IPv4/IPv6                                        |
