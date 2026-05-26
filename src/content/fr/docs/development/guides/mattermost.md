---
permalink: /fr/docs/developpement/guides/mattermost/
title: Mattermost
eleventyNavigation:
  key: Mattermost
  parent: Guides
---

[Mattermost](https://mattermost.com) est un logiciel de messagerie instantané.

Dans notre exemple, nous utilisons un [accès SSH](/fr/docs/hebergement-web/acces-distant/ssh/) et considérons les informations suivantes :

- Nom du compte : `foo`
- Répertoire de Mattermost : `$HOME/mattermost/`
- Base de données PostgreSQL : `foo_mattermost` - à créer dans le menu **Bases de données > PostgreSQL** de [l'interface d'administration](https://admin.alwaysdata.com)
- Port : 8300 (les ports entre 8300 et 8499 peuvent être utilisés)

> [!NOTE]
> `[foo]` et `[version]` doivent être remplacées par les informations correctes.


## Installation

```sh
foo@ssh:~/mattermost$ wget -O- https://releases.mattermost.com/[version]/mattermost-[version]-linux-amd64.tar.gz | tar -xz --strip-components=1
foo@ssh:~/mattermost$ mkdir data
```

[Page de téléchargement](https://mattermost.com/deploy/)

## Configuration

Une base de données et son utilisateur devront être créés dans le menu **Bases de données**. Ici nous les créons pour qu'il soient de la forme `account_mattermost`.

Modifiez le fichier `$HOME/mattermost/config/config.json` pour indiquer :

```txt
"ListenAddress": ":8300",
"LocalModeSocketLocation": "$HOME/admin/tmp/mattermost_local.socket",
```

- PostgreSQL

```txt
"DriverName": "postgres",
"DataSource": "postgres://[foo]_mattermost:[motdepasse_pgsql]@postgresql-[foo].alwaysdata.net:5432/[foo]_mattermost?sslmode=disable\u0026connect_timeout=10",
```

## Lancement du service

Créez un [service](/fr/docs/hebergement-web/services/) avec les détails suivants :

- *Commande* : `/home/[foo]/mattermost/bin/mattermost`
- *Répertoire de travail* : `/home/[foo]/mattermost`

## Création du site

Déclarez un [site](/fr/docs/hebergement-web/sites/ajouter-un-site/) de type **Reverse proxy** avec :

- *URL distante* : `services-[foo].alwaysdata.net:8300`
