---
permalink: /fr/docs/developpement/guides/mongodb/
title: MongoDB
eleventyNavigation:
  key: MongoDB
  parent: Guides
  order: 1
---

[MongoDB](https://www.mongodb.com/) est un SGBD noSQL orienté documents.

Dans notre exemple, nous utilisons un [accès SSH](/fr/docs/hebergement-web/acces-distant/ssh/) et considérons les informations suivantes :

- Nom du compte : `[compte]`
- Répertoire de MongoDB : `/home/[compte]/mongodb/`

> [!NOTE]
> N'hésitez pas à ajuster en fonction de vos besoins.


## Installation

### Téléchargement

```sh
[compte]@ssh:~$ mkdir mongodb
[compte]@ssh:~$ cd mongodb
[compte]@ssh:~/mongodb$ wget -O- https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-debian12-8.0.1.tgz | tar -xz --strip-components=1
[compte]@ssh:~/mongodb$ mkdir -p data log
```

Choisissez le paquet *tgz* et la plateforme *Debian* de la [dernière version de la tarball](https://www.mongodb.com/try/download/community).

### Lancement du service

Créez un [service](/fr/docs/hebergement-web/services/) avec les détails suivants :

- *Commande* : `./bin/mongod --dbpath ./data/ --logpath ./log/mongo.log --ipv6 --bind_ip_all --port=27017`
- *Répertoire de travail* : `/home/[compte]/mongodb`

Les utilisateurs du [Cloud public](/fr/docs/admin-facturation/facturation/prix-cloud-public/) devront faire pointer le service sur un port entre 8300 à 8499 à la place du port par défaut de MongoDB.

L'adresse pour se connecter à l'instance MongoDB sera `services-[compte].alwaysdata.net:[port]`.

> [!NOTE]
> Remplacez `[port]` par le port choisi au niveau de la commande.


### Création de la règle de parefeu

Les utilisateurs du [Cloud Privé](/fr/docs/admin-facturation/facturation/prix-cloud-prive/) devront ouvrir le port utilisé en créant une règle sur le [parefeu](/fr/docs/caracteristiques-techniques/configurer-le-firewall) s'ils souhaitent y accéder depuis l'extérieur :

| Intitulé   | Valeur                                           |
|------------|--------------------------------------------------|
| Protocole  | UDP/TCP                                          |
| Type       | ACCEPT                                           |
| Direction  | Entrée                                           |
| Hôtes      | \<ne rien indiquer>                              |
| Ports      | 27017                                            |
| Version IP | IPv4/IPv6                                        |

## Téléchargement et installation des utilitaires

- [mongosh](https://www.mongodb.com/try/download/shell) - choisissez le paquet *tgz* et la plateforme *Linux x64* de la dernière version.

```sh
[compte]@ssh:~/mongodb$ wget -O- https://downloads.mongodb.com/compass/mongosh-2.3.2-linux-x64.tgz | tar -xz --strip-components=0
[compte]@ssh:~/mongodb$ mv mongosh-2.3.2-linux-x64/bin/* bin/
[compte]@ssh:~/mongodb$ rm -rf mongosh-2.3.2-linux-x64
```

- [cli](https://www.mongodb.com/try/download/database-tools) - choisissez le paquet *tgz* et la plateforme *Debian 12.0 x86-64* de la dernière version.

```sh
[compte]@ssh:~/mongodb$ wget -O- https://fastdl.mongodb.org/tools/db/mongodb-database-tools-debian12-x86_64-100.10.0.tgz | tar -xz --strip-components=0
[compte]@ssh:~/mongodb$ mv mongodb-database-tools-debian12-x86_64-100.10.0/bin/* bin/
[compte]@ssh:~/mongodb$ rm -rf mongodb-database-tools-debian12-x86_64-100.10.0
```

Tous les exécutables seront ainsi dans `/home/[compte]/mongodb/bin`.

## Authentification

Nous allons ici créer l'utilisateur *admin* en suivant [leur documentation](https://www.mongodb.com/docs/manual/tutorial/configure-scram-client-authentication/#create-the-user-administrator).

```sh
[compte]@ssh: ~/mongodb$ ./bin/mongosh services-[compte].alwaysdata.net:[port]
Current Mongosh Log ID:	6707c8c098d8f59e6efe6910
Connecting to:		mongodb://services-[compte].alwaysdata.net:[port]/?directConnection=true&appName=mongosh+2.3.2
Using MongoDB:		8.0.1
Using Mongosh:		2.3.2

------

test> use admin
switched to db admin
admin> db.createUser(
...   {
...     user: "admin",
...     pwd: "monsupermotdepasse",
...     roles: [
...       { role: "userAdminAnyDatabase", db: "admin" },
...       { role: "readWriteAnyDatabase", db: "admin" }
...     ]
...   }
... )
{ ok: 1 }
admin>
```

> [!NOTE]
> `monsupermotdepasse` est à remplacer par le mot de passe de votre choix.


Vous pourrez ensuite rajouter l'option `--auth` à la commande du [service](#lancement-du-service).
