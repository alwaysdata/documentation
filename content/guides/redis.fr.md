+++
url = "/fr/guides/redis/"
title = "Comment installer Redis"
layout = "howto"
hidden = true
tags = ["http", "redis", "site"]
+++

[Redis](https://redis.io/) est système de gestion de base de données clé-valeur extensible.

Voici un guide d'installation sur le Cloud Public.

{{% notice info %}}
*Redis* peut être [installé au niveau serveur]({{< ref "databases/redis">}}) pour les utilisateurs du Cloud Privé.
{{% /notice %}}

Dans notre exemple, nous utilisons un [accès SSH]({{< ref "remote-access/ssh" >}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de Redis : `$HOME/redis/`
- Port : 8300 (les ports entre 8300 et 8499 peuvent être utilisés)

{{% notice note %}}
`[foo]` doit être remplacé par le nom de compte correct.
{{% /notice %}}

## Étape 1 : Installation

```sh
foo@ssh:~/redis$ wget -O- https://download.redis.io/redis-stable.tar.gz | tar -xz --strip-components=1
foo@ssh:~/redis$ make
```

## Étape 2 : Lancement du service

Créez le [service]({{< ref "services" >}}) suivant :

- *Commande* : `./src/redis-server --bind :: --port 8300`
- *Commande de monitoring* : `./src/redis-cli -h services-[compte].alwaysdata.net -p 8300 ping`
- *Répertoire de travail* : `/home/[foo]/redis`

Plus d'options via `$HOME/redis/src/redis-cli -h`.

{{% notice warning %}}
Par défaut n'importe qui peut se connecter au Redis ; il n'y a aucune sécurité. Une [authentification](https://redis.io/commands/auth/) peut être mise en place.
{{% /notice %}}

Il restera ensuite la configuration de l'application qui pour se connecter à Redis devra utiliser `services-[foo].alwaysdata.net` et le port `8300`.
