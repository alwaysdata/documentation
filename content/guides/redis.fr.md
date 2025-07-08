+++
url = "/fr/guides/redis/"
title = "Redis"
layout = "howto"
hidden = true
tags = ["http", "redis", "site"]
+++

[Redis](https://redis.io/) est système de gestion de base de données clé-valeur extensible.

Voici un guide d'installation sur le [Cloud Public](accounts/billing/public-cloud-prices). Les utilisateurs du [Cloud privé](accounts/billing/private-cloud-prices) peuvent demander l'installation de *Redis* [au niveau serveur](databases/redis).

Dans notre exemple, nous utilisons un [accès SSH](remote-access/ssh) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de Redis : `$HOME/redis/`
- Port : 8300 (les ports entre 8300 et 8499 peuvent être utilisés)

{{% notice note %}}
`[foo]` doit être remplacé par le nom de compte correct.
{{% /notice %}}

## Installation

### Téléchargement et compilation

```sh
foo@ssh:~/redis$ wget -O- https://download.redis.io/redis-stable.tar.gz | tar -xz --strip-components=1
foo@ssh:~/redis$ make
```

### Lancement du service

Créez le [service](services) suivant :

- *Commande* : `./src/redis-server --bind :: --port 8300 --protected-mode no`
- *Commande de monitoring* : `./src/redis-cli  redis.conf -h services-[foo].alwaysdata.net -p 8300 ping`
- *Répertoire de travail* : `/home/[foo]/redis`

Plus d'options via `$HOME/redis/src/redis-cli -h`.

Il restera ensuite la configuration de l'application qui pour se connecter à Redis devra utiliser `services-[foo].alwaysdata.net` et le port `8300`.

- [Installer l'extension PHP](databases/redis/php)

## Authentification

Par défaut n'importe qui peut se connecter au Redis ; il n'y a aucune sécurité. Une [authentification](https://redis.io/docs/management/security/acl/) peut donc être mise en place.

Il faudra créer le fichier `users.acl` et modifier la ligne `aclfile` dans le fichier de configuration Redis `redis.conf`.

Dans l'exemple suivant, nous allons indiquer un mot de passe (`[mot de passe]`) à l'utilisateur par défaut.

```sh
foo@ssh:~/redis$ ./src/redis-cli -h services-[foo].alwaysdata.net -p 8300
services-[foo].alwaysdata.net:8300> ACL LIST
1) "user default on nopass sanitize-payload ~* &* +@all"

services-[foo].alwaysdata.net:8300> ACL SETUSER default on >[mot de passe]

services-[foo].alwaysdata.net:8300> ACL LIST
1) "user default on sanitize-payload #1ccc91f99d0c4c7a24e77941b18c0339ecb3eaf5ad7ae9ad816a7e69d83b69db ~* &* +@all"

services-[foo].alwaysdata.net:8300> ACL SAVE
OK

services-[foo].alwaysdata.net:8300> CONFIG REWRITE
OK

services-[foo].alwaysdata.net:8300> AUTH default [mot de passe]
OK
```

- [`ACL LIST`](https://redis.io/commands/acl-list/) liste les utilisateurs et donne des informations sur les droits des utilisateurs.
- [`ACL SETUSER`](https://redis.io/commands/acl-setuser/) créé ou modifie les utilisateurs.
- [`ACL SAVE`](https://redis.io/commands/acl-save/) enregistre les utilisateurs.
