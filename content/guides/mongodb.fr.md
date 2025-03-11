+++
url = "/fr/guides/mongodb/"
title = "MongoDB"
layout = "howto"
hidden = true
tags = ["base de données", "mongodb"]
+++

[MongoDB](https://www.mongodb.com/) est un SGBD noSQL orienté documents.

Dans notre exemple, nous utilisons un [accès SSH](remote-access/ssh) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de MongoDB : `$HOME/mongodb/`

{{% notice note %}}
`[foo]` est à remplacer par le nom de votre compte.
{{% /notice %}}

## Installation

### Téléchargement

```sh
foo@ssh:~$ mkdir mongodb
foo@ssh:~$ cd mongodb
foo@ssh:~/mongodb$ wget -O- https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-debian12-8.0.1.tgz | tar -xz --strip-components=1
foo@ssh:~/mongodb$ mkdir -p data log
```

Choisissez le paquet *tgz* et la plateforme *Debian* de la [dernière version de la tarball](https://www.mongodb.com/try/download/community).

### Lancement du service

Créez un [service](services) avec les détails suivants :

- *Commande* : `./bin/mongod --dbpath ./data/ --logpath ./log/mongo.log --ipv6 --bind_ip_all --port=27017`
- *Répertoire de travail* : `/home/[foo]/mongodb`

Les utilisateurs du [Cloud public](accounts/billing/public-cloud-prices) devront faire pointer le service sur un port entre 8300 à 8499 à la place du port par défaut de MongoDB.

L'adresse pour se connecter à l'instance MongoDB sera `services-[foo].alwaysdata.net:[port]`.

{{% notice note %}}
Remplacez `[port]` par le port choisi au niveau de la commande.
{{% /notice %}}

### Création de la règle de parefeu

Les utilisateurs du [Cloud Privé](accounts/billing/private-cloud-prices) devront ouvrir le port utilisé en créant une règle sur le [parefeu](security/network/configure-firewall) s'ils souhaitent y accéder depuis l'extérieur :

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
foo@ssh:~/mongodb$ wget -O- https://downloads.mongodb.com/compass/mongosh-2.3.2-linux-x64.tgz | tar -xz --strip-components=0
foo@ssh:~/mongodb$ mv mongosh-2.3.2-linux-x64/bin/* bin/
foo@ssh:~/mongodb$ rm -rf mongosh-2.3.2-linux-x64
```

- [cli](https://www.mongodb.com/try/download/database-tools) - choisissez le paquet *tgz* et la plateforme *Debian 12.0 x86-64* de la dernière version.

```sh
foo@ssh:~/mongodb$ wget -O- https://fastdl.mongodb.org/tools/db/mongodb-database-tools-debian12-x86_64-100.10.0.tgz | tar -xz --strip-components=0
foo@ssh:~/mongodb$ mv mongodb-database-tools-debian12-x86_64-100.10.0/bin/* bin/
foo@ssh:~/mongodb$ rm -rf mongodb-database-tools-debian12-x86_64-100.10.0
```

Tous les exécutables seront ainsi dans `$HOME/mongodb/bin`.

## Authentification

Nous allons ici créer l'utilisateur *admin* en suivant [leur documentation](https://www.mongodb.com/docs/manual/tutorial/configure-scram-client-authentication/#create-the-user-administrator).

```sh
foo@ssh: ~/mongodb$ ./bin/mongosh services-[foo].alwaysdata.net:[port]
Current Mongosh Log ID:	6707c8c098d8f59e6efe6910
Connecting to:		mongodb://services-[foo].alwaysdata.net:[port]/?directConnection=true&appName=mongosh+2.3.2
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

{{% notice note %}}
`monsupermotdepasse` est à remplacer par le mot de passe de votre choix.
{{% /notice %}}

Vous pourrez ensuite rajouter l'option `--auth` à la commande du [service](#lancement-du-service).
