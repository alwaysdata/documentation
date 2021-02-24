+++
url = "/fr/bases-de-données/mongodb/"
title = "MongoDB"
layout = "man"
hidden = true
tags = ["base de données", "mongodb"]
+++

## Connexion

|               |                                                               |
|---------------|---------------------------------------------------------------|
| **Serveur**   | mongodb-[compte].alwaysdata.net                               |
| **Port**      | 27017 (Port MongoDB par défaut)                               |
| **Connexion** | mongodb://utilisateur:mdp@mongodb-[compte].alwaysdata.net/bdd |

Ces informations de connexion dépendent du compte concerné. Vous pouvez retrouver les valeurs précises dans la section **Bases de données > MongoDB** de l'interface d'administration.

### Exemple avec `mongo`
Dans notre exemple, nous utilisons l'[accès SSH]({{< ref "remote-access/ssh">}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Nom de la base de données : `foo_base`
- Nous utiliserons les utilisateurs SSH et de base de données par défaut, c'est à dire ceux créés à l'ouverture des comptes (c'est-à-dire `foo` pour le compte _foo_).

```sh
foo@ssh:~$ mongo "mongodb://foo:mdp@mongodb-foo.alwaysdata.net/foo_base"
```

## Permissions

La création d'un utilisateur MongoDB correspond à une entrée dans la collection `system.users`.

---

- [Documentation MongoDB](https://docs.mongodb.com/)

---

Retrouvez nos guides :

- [Configurer une application PHP avec MongoDB]({{< ref "databases/mongodb/php" >}})
