+++
url = "/fr/guides/mongodb/"
title = "Comment installer MongoDB"
layout = "howto"
hidden = true
tags = ["base de données", "mongodb"]
+++

[MongoDB](https://www.mongodb.com/) est un SGBD noSQL orienté documents.

Dans notre exemple, nous utilisons un [accès SSH]({{< ref "remote-access/ssh">}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de MongoDB : `$HOME/mongodb/`

{{% notice note %}}
`[foo]` et `[version]` doivent être remplacées par les informations correctes.
{{% /notice %}}

## Téléchargement

```sh
foo@ssh:~/mongodb$ wget -O- https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-debian12-[version].tgz | tar -xz --strip-components=1
foo@ssh:~/mongodb$ mkdir -p data log
```

Choisissez le paquet *tgz* et la plateforme *Debian* de la [version 7.0 de la tarball](https://www.mongodb.com/try/download/community).

## Lancement du service

Créez un [service]({{< ref "services" >}}) avec les détails suivants :

- *Commande* : `./bin/mongod --dbpath ./data/ --logpath ./log/mongo.log --ipv6 --bind_ip_all`
- *Répertoire de travail* : `/home/[foo]/mongodb`

Les utilisateurs de [Cloud public]({{< ref "accounts/billing/public-cloud-prices" >}}) devront faire pointer le service sur un port entre 8300 à 8499 et ajouter l'option `--port` à la commande.

## Création de la règle de parefeu

Les utilisateurs de [Cloud Privé]({{< ref "accounts/billing/private-cloud-prices" >}}) devront ouvrir le port utilisé en créant une règle sur le [parefeu]({{< ref "security/network/configure-firewall" >}}) s'ils souhaitent y accéder depuis l'extérieur :

| Intitulé   | Valeur                                           |
|------------|--------------------------------------------------|
| Protocole  | UDP/TCP                                          |
| Type       | ACCEPT                                           |
| Direction  | Entrée                                           |
| Hôtes      | \<ne rien indiquer>                              |
| Ports      | 27017                                            |
| Version IP | IPv4/IPv6                                        |
