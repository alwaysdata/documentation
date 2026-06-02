---
permalink: /fr/docs/developpement/guides/mattermost/
title: Mattermost
eleventyNavigation:
  key: Mattermost
  parent: Guides
---

[Mattermost](https://mattermost.com) est un logiciel de messagerie instantané.

Dans notre exemple, nous utilisons un [accès SSH](/fr/docs/hebergement-web/acces-distant/ssh/) et considérons les informations suivantes :

- Nom du compte : `[compte]`
- Répertoire de Mattermost : `/home/[compte]/mattermost/`
- Base de données PostgreSQL : `[compte]_mattermost` - à créer dans le menu **Bases de données > PostgreSQL** de [l'interface d'administration](https://admin.alwaysdata.com)
- Port : 8300 (les ports entre 8300 et 8499 peuvent être utilisés)

> [!NOTE]
> `[version]` doit être remplacée par les informations correctes. N'hésitez pas à ajuster en fonction de vos besoins.


## Installation

```sh
[compte]@ssh:~/mattermost$ wget -O- https://releases.mattermost.com/[version]/mattermost-[version]-linux-amd64.tar.gz | tar -xz --strip-components=1
[compte]@ssh:~/mattermost$ mkdir data
```

[Page de téléchargement](https://mattermost.com/deploy/)

## Configuration

Une base de données et son utilisateur devront être créés dans le menu **Bases de données**. Ici nous les créons pour qu'il soient de la forme `[compte]_mattermost`.

Modifiez le fichier `/home/[compte]/mattermost/config/config.json` pour indiquer :

```txt
"ListenAddress": ":8300",
"LocalModeSocketLocation": "/home/[compte]/admin/tmp/mattermost_local.socket",
```

- PostgreSQL

```txt
"DriverName": "postgres",
"DataSource": "postgres://[compte]_mattermost:[motdepasse_pgsql]@postgresql-[compte].alwaysdata.net:5432/[compte]_mattermost?sslmode=disable\u0026connect_timeout=10",
```

## Lancement du service

Créez un [service](/fr/docs/hebergement-web/services/) avec les détails suivants :

- *Commande* : `/home/[compte]/mattermost/bin/mattermost`
- *Répertoire de travail* : `/home/[compte]/mattermost`

## Création du site

Déclarez un [site](/fr/docs/hebergement-web/sites/ajouter-un-site/) de type **Reverse proxy** avec :

- *URL distante* : `services-[compte].alwaysdata.net:8300`
