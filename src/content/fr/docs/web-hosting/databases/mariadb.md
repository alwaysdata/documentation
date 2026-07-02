---
permalink: /fr/docs/hebergement-web/bases-de-donnees/mariadb/
title: MariaDB / MySQL
eleventyNavigation:
  key: MariaDB / MySQL
  parent: Bases de données
  order: 1
---

## Versions supportées

||
|---|
| 10.6 |
| 10.11 |
| 11.4 |
| 11.8 |

## Connexion

|                   |                                                  |
|-------------------|--------------------------------------------------|
| **Serveur**       | mysql-[compte].alwaysdata.net                    |
| **Port**          | 3306 (Port MySQL par défaut)                     |
| **Interface web** | [phpMyAdmin](https://phpmyadmin.alwaysdata.com/) |

Ces informations de connexion dépendent du compte concerné. Vous pouvez retrouver les valeurs précises dans la section **Bases de données > MySQL** de l'interface d'administration.

### Exemple avec `mysql`
Dans notre exemple, nous utilisons l'[accès SSH](/fr/docs/hebergement-web/acces-distant/ssh/) et considérons les informations suivantes :

- Nom du compte : `[compte]`
- Nom de la base de données : `[compte]_base`
- Nous utiliserons les utilisateurs SSH et de base de données par défaut, c'est à dire ceux créés à l'ouverture des comptes.

```sh
[compte]@ssh:~$ mysql -h mysql-[compte].alwaysdata.net -u [compte] -p [compte]_base
```

## Permissions

Lors de la création de vos bases et utilisateurs MySQL, vous avez la possibilité de donner les permissions suivantes :

* tous les droits (GRANT ALL PRIVILEGES) ;
* lecture seule (GRANT READONLY) ;
* aucun droit.

> [!WARNING] Attention
> Si vous modifiez les permissions de vos utilisateurs via une application tierce, toute validation via l'interface d'administration (ou via l'API) réinitialisera les permissions selon les directives ci-dessus.


## Restaurer une base de données depuis sa sauvegarde quotidienne

Plusieurs possibilités :

- utiliser notre fonctionnalité de [restauration de sauvegarde](/fr/docs/hebergement-web/sauvegardes/restaurer-un-site/) ;
- utiliser la commande suivante :

    ```sh
    $ zstdcat /home/[compte]/admin/backup/[date]/mysql/[base].sql.zst | mysql -h mysql-[compte].alwaysdata.net -u [utilisateur] -p [base]
    ```

- récupérer l'archive et utiliser le client de son choix.

> [!TIP] Astuce
> Les contenus archivés (e.g. les dumps de BDD) dans votre espace de *backup* sont au format [Zstandard](https://github.com/facebook/zstd), vous pouvez utiliser les [outils `zstd*` officiels](https://github.com/facebook/zstd/releases/latest) ou le [plugin adapté pour 7zip](https://www.tc4shell.com/en/7zip/modern7z/) pour les manipuler.


## Divers

En Cloud Public, le nombre de connexions simultanées maximum par utilisateur est de _40_. Il est possible à la demande de le modifier en Cloud Privé.

Un [ANALYZE TABLE](https://mariadb.com/kb/en/analyze-table/) est exécuté quotidiennement sur toutes vos tables pour garantir de bonnes performances, mais n'hésitez pas à le faire vous-même lorsque vos données changent drastiquement, par exemple après un import de base de données.

Pour connaître la configuration MariaDB, utilisez la requête SQL `show variables`.

Les *events MySQL* ne sont pas supportés sur notre Cloud Public.

Sur le Cloud Public, vous pouvez changer `sql_mode` par [connexion](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html) (SET SESSION).

Il est possible de rajouter une restriction IP au niveau d'un utilisateur MySQL. Seule une IP ou un netmask peuvent être autorisés et les autres connexions seront bloquées. Dans le cas d'un netmask, seules les IPv4 sont supportées.

> [!NOTE]
> Les utilisateurs de [Cloud Privé](/fr/docs/admin-facturation/facturation/prix-cloud-prive/) peuvent demander à utiliser MySQL à la place.


---

- [Documentation MariaDB](https://mariadb.com/kb/en/library/documentation/)
- [Documentation MySQL](https://dev.mysql.com/doc/)
