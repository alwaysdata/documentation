---
permalink: /fr/docs/developpement/guides/redis/
title: Redis
eleventyNavigation:
  key: Redis
  parent: Guides
  order: 1
---

[Redis](https://redis.io/) est système de gestion de base de données clé-valeur extensible.

Voici un guide d'installation sur le [Cloud Public](/fr/docs/admin-facturation/facturation/prix-cloud-public/). Les utilisateurs du [Cloud privé](/fr/docs/admin-facturation/facturation/prix-cloud-prive/) peuvent demander l'installation de *Redis* [au niveau serveur](/fr/docs/hebergement-web/bases-de-donnees/redis/).

Dans notre exemple, nous utilisons un [accès SSH](/fr/docs/hebergement-web/acces-distant/ssh/) et considérons les informations suivantes :

- Nom du compte : `[compte]`
- Répertoire de Redis : `/home/[compte]/redis/`
- Port : 8300 (les ports entre 8300 et 8499 peuvent être utilisés)

> [!NOTE]
> N'hésitez pas à ajuster en fonction de vos besoins.


## Installation

### Téléchargement et compilation

```sh
[compte]@ssh:~/redis$ wget -O- https://download.redis.io/redis-stable.tar.gz | tar -xz --strip-components=1
[compte]@ssh:~/redis$ make
```

### Lancement du service

Créez le [service](/fr/docs/hebergement-web/services/) suivant :

- *Commande* : `./src/redis-server --bind :: --port 8300 --protected-mode no`
- *Commande de monitoring* : `./src/redis-cli  redis.conf -h services-[compte].alwaysdata.net -p 8300 ping`
- *Répertoire de travail* : `/home/[compte]/redis`

Plus d'options via `/home/[compte]/redis/src/redis-cli -h`.

Il restera ensuite la configuration de l'application qui pour se connecter à Redis devra utiliser `services-[compte].alwaysdata.net` et le port `8300`.

- [Installer l'extension PHP](/fr/docs/hebergement-web/bases-de-donnees/redis/php/)

## Authentification

Par défaut n'importe qui peut se connecter au Redis ; il n'y a aucune sécurité. Une [authentification](https://redis.io/docs/management/security/acl/) peut donc être mise en place.

Il faudra créer le fichier `users.acl` et modifier la ligne `aclfile` dans le fichier de configuration Redis `redis.conf`.

Dans l'exemple suivant, nous allons indiquer un mot de passe (`[mot de passe]`) à l'utilisateur par défaut.

```sh
[compte]@ssh:~/redis$ ./src/redis-cli -h services-[compte].alwaysdata.net -p 8300
services-[compte].alwaysdata.net:8300> ACL LIST
1) "user default on nopass sanitize-payload ~* &* +@all"

services-[compte].alwaysdata.net:8300> ACL SETUSER default on >[mot de passe]

services-[compte].alwaysdata.net:8300> ACL LIST
1) "user default on sanitize-payload #1ccc91f99d0c4c7a24e77941b18c0339ecb3eaf5ad7ae9ad816a7e69d83b69db ~* &* +@all"

services-[compte].alwaysdata.net:8300> ACL SAVE
OK

services-[compte].alwaysdata.net:8300> CONFIG REWRITE
OK

services-[compte].alwaysdata.net:8300> AUTH default [mot de passe]
OK
```

- [`ACL LIST`](https://redis.io/commands/acl-list/) liste les utilisateurs et donne des informations sur les droits des utilisateurs.
- [`ACL SETUSER`](https://redis.io/commands/acl-setuser/) créé ou modifie les utilisateurs.
- [`ACL SAVE`](https://redis.io/commands/acl-save/) enregistre les utilisateurs.
