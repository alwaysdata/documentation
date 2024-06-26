+++
url = "/fr/bases-de-données/mariadb/"
title = "MariaDB / MySQL"
layout = "man"
tags = ["base de données", "mariadb", "mysql"]
+++

## Connexion

|                   |                                                  |
|-------------------|--------------------------------------------------|
| **Serveur**       | mysql-[compte].alwaysdata.net                    |
| **Port**          | 3306 (Port MySQL par défaut)                     |
| **Interface web** | [phpMyAdmin](https://phpmyadmin.alwaysdata.com/) |

Ces informations de connexion dépendent du compte concerné. Vous pouvez retrouver les valeurs précises dans la section **Bases de données > MySQL** de l'interface d'administration.

### Exemple avec `mysql`
Dans notre exemple, nous utilisons l'[accès SSH]({{< ref "remote-access/ssh">}}) et considérons les informations suivantes :

- Nom du compte : `foo`
- Nom de la base de données : `foo_base`
- Nous utiliserons les utilisateurs SSH et de base de données par défaut, c'est à dire ceux créés à l'ouverture des comptes (c'est-à-dire `foo` pour le compte _foo_).

```sh
foo@ssh:~$ mysql -h mysql-foo.alwaysdata.net -u foo -p foo_base
```

## Permissions

Lors de la création de vos bases et utilisateurs MySQL, vous avez la possibilité de donner les permissions suivantes :

* tous les droits (GRANT ALL PRIVILEGES) ;
* lecture seule (GRANT READONLY) ;
* aucun droit.

{{% notice warning %}}
Si vous modifiez les permissions de vos utilisateurs via une application tierce, toute validation via l'interface d'administration (ou via l'API) réinitialisera les permissions selon les directives ci-dessus.
{{% /notice %}}

## Restaurer une base de données depuis sa sauvegarde quotidienne

Plusieurs possibilités :

- utiliser notre fonctionnalité de [restauration de sauvegarde]({{< ref "backups/restore-a-site" >}}) ;
- utiliser la commande suivante :

    ```sh
    $ zstdcat $HOME/admin/backup/[date]/mysql/[base].sql.zst | mysql -h mysql-[compte].alwaysdata.net -u [utilisateur] -p [base]
    ```

- récupérer l'archive et utiliser le client de son choix.

{{% notice tip %}}
Les contenus archivés (e.g. les dumps de BDD) dans votre espace de *backup* sont au format [Zstandard](https://github.com/facebook/zstd), vous pouvez utiliser les [outils `zstd*` officiels](https://github.com/facebook/zstd/releases/latest) ou le [plugin adapté pour 7zip](https://www.tc4shell.com/en/7zip/modern7z/) pour les manipuler.
{{% /notice %}}

## Autres informations

En Cloud Public, le nombre de connexions simultanées maximum par utilisateur est de _40_. Il est possible à la demande de le modifier en Cloud Privé.

MySQL bloque la taille du nom des utilisateurs ; si le nom de votre compte est trop important un _ID_ lui sera alloué. Vous le retrouverez dans **Bases de données > MySQL > Utilisateurs**.

Un [ANALYZE TABLE](https://mariadb.com/kb/en/analyze-table/) est exécuté quotidiennement sur toutes vos tables pour garantir de bonnes performances, mais n'hésitez pas à le faire vous-même lorsque vos données changent drastiquement, par exemple après un import de base de données.

Pour connaître la configuration MariaDB, utilisez la requête SQL `show variables`.

Les *events MySQL* ne sont pas supportés par nos serveurs.

Sur le Cloud Public, vous pouvez changer `sql_mode` par [connexion](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html) (SET SESSION).

{{% notice info %}}
MariaDB est proposé par défaut sur nos serveurs mais les utilisateurs de [Cloud Privé]({{< ref "accounts/billing/private-cloud-prices" >}}) peuvent demander à utiliser MySQL.
{{% /notice %}}

---

- [Documentation MariaDB](https://mariadb.com/kb/en/library/documentation/)
- [Documentation MySQL](https://dev.mysql.com/doc/)
