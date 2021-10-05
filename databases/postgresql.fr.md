+++
url = "/fr/bases-de-données/postgresql/"
title = "PostgreSQL"
layout = "man"
tags = ["base de données", "postgresql"]
+++

## Connexion

|                   |                                                  |
|-------------------|--------------------------------------------------|
| **Serveur**       | postgresql-[compte].alwaysdata.net               |
| **Port**          | 5432 (Port PostgreSQL par défaut)                |
| **Interface web** | [phpPgAdmin](https://phppgadmin.alwaysdata.com/) |

Ces informations de connexion dépendent du compte concerné. Vous pouvez retrouver les valeurs précises dans la section **Bases de données > PostgreSQL** de l'interface d'administration.

Un *pgBouncer* tourne sur le port `5433`. Il est possible de s'y connecter à la place de PostgreSQL directement.

### Exemple avec `psql`
Dans notre exemple, nous utilisons l'[accès SSH]({{< ref "remote-access/ssh">}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Nom de la base de données : `foo_base`
- Nous utiliserons les utilisateurs SSH et de base de données par défaut, c'est à dire ceux créés à l'ouverture des comptes (c'est-à-dire `foo` pour le compte _foo_).

```sh
foo@ssh:~$ psql -h postgresql-foo.alwaysdata.net -U foo -W -d foo_base
```

## Permissions

Lors de la création de vos bases et utilisateurs PostgreSQL, vous définissez les permissions souhaitées puis notre système effectue les opérations suivantes :

* REVOKE ALL PRIVILEGES sur la base et ses schémas ;
* Si votre utilisateur doit avoir **tous les droits** :
    * GRANT ALL PRIVILEGES sur la base et ses schémas ;
    * ALTER DEFAULT PRIVILEGES : GRANT ALL PRIVILEGES sur les TABLES, SEQUENCES et FUNCTIONS ;
    * GRANT ALL PRIVILEGES sur les TABLES, SEQUENCES et FUNCTIONS.
* Si votre utilisateur doit avoir le droit **lecture seule** :
    * GRANT CONNECT sur la base ;
    * GRANT USAGE sur les schémas ;
    * ALTER DEFAULT PRIVILEGES :
        * GRANT SELECT sur les TABLES, SEQUENCES ;
        * GRANT EXECUTE sur les FUNCTIONS.
    * GRANT SELECT sur les TABLES, SEQUENCES ;
    * GRANT EXECUTE sur les FUNCTIONS.

{{% notice warning %}}
Si vous modifiez les permissions de vos utilisateurs via une application tierce, toute validation via l'interface d'administration (ou via l'API) réinitialisera les permissions selon les directives ci-dessus.
{{% /notice %}}

## Options

À la création d'une base de données, vous disposez des options suivantes :

* **locale** : détermine l'encodage, `LC_COLLATE` et `LC_CTYPE` ;
* **extensions** : vous pouvez activer d'un simple clic des extensions PostgreSQL (`hstore`, `pgcrypto`, `PostGIS`, etc.). Si vous avez besoin d'une extension non listée, vous pouvez contacter le [support](https://admin.alwaysdata.com/support/add/).
	* `plperl` est activée à la demande via le [support](https://admin.alwaysdata.com/support/add/) ;
	* `pgrouting` et `postgis_raster` sont activées à la demande via le [support](https://admin.alwaysdata.com/support/add/) pour les bases de données étant sur PostgreSQL 13.

## Restaurer une base de données depuis sa sauvegarde quotidienne

Plusieurs possibilités :

- utiliser notre fonctionnalité de [restauration de sauvegarde]({{< ref "backups/restore-a-site" >}}) ;
- utiliser la commande suivante :

    ```sh
    $ xzcat $HOME/admin/backup/[date]/postgresql/[base].sql.xz | psql -h postgresql-[compte].alwaysdata.net -U [utilisateur] -W -d [base]
    ```

- récupérer l'archive et utiliser le client de son choix.

## Autres informations

Il est possible de voir les noms de toutes les bases de données et utilisateurs sur les serveurs PostgreSQL. C'est une limitation de l'utilisation de PostgreSQL en environnement mutualisé. Les contenus des bases ne sont PAS accessibles.

Les langages PostgreSQL *untrusted*, permettant d'exécuter du code arbitraire sous les droits de l'utilisateur administrateur (faisant tourner PostgreSQL), ne peuvent être utilisés sur nos serveurs.

---

- [Documentation PostgreSQL](https://www.postgresql.org/docs/)
