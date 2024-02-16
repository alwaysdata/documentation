+++
url = "/fr/sauvegardes/restaurer-un-site/"
title = "Comment restaurer un site web"
menuTitle = "Restaurer un site"
layout = "howto"
weight = 5
tags = ["base de données", "récupération", "sauvegarde", "site"]
+++

Les sauvegardes de vos fichiers et bases de données se trouvent dans le répertoire `$HOME/admin/backup` de votre compte. Vous pouvez les restaurer via le menu **Avancé > Restauration de sauvegardes**.

1. Choisissez la date voulue ;
    {{< fig "images/admin-panel_restoration.fr.png" "Interface d'administration : restauration de sauvegarde - étape 1" >}}

2. Puis cochez la/les base(s) de données et/ou le/les répertoire(s) voulu(s) [^1].
    {{< fig "images/admin-panel_restoration-site.fr.png" "Interface d'administration : restauration de sauvegarde - étape 2" >}}

{{% notice warning %}}
La restauration va écraser la configuration actuelle, effectuez donc auparavant une sauvegarde.
{{% /notice %}}

{{% notice note %}}
Le temps de restauration dépend de la taille des fichiers à restaurer.
{{% /notice %}}

## En SSH

Si vous souhaitez restaurer une sauvegarde manuellement.

- Connectez-vous à votre compte [en SSH]({{< ref "remote-access/ssh" >}}) ;

- Restaurez des fichiers :

    ```sh
    $ rsync -av --delete $HOME/admin/backup/[date]/files/[répertoire]/ $HOME/[répertoire]/
    ```

{{% notice warning %}}
`--delete` va supprimer tous les fichiers de ce répertoire ayant été créés depuis la date de la sauvegarde.
Pour effectuer un test ajoutez `-n`.
{{% /notice %}}

- Restaurer une base de données MySQL :

    ```sh
    $ zstdcat $HOME/admin/backup/[date]/mysql/[base].sql.zst | mysql -h mysql-[compte].alwaysdata.net -u [utilisateur] -p [base]
    ```

- Restaurer une base de données PostgreSQL :

    ```sh
    $ zstdcat $HOME/admin/backup/[date]/postgresql/[base].sql.zst | psql -h postgresql-[compte].alwaysdata.net -U [utilisateur] -W -d [base]
    ```

{{% notice tip %}}
Les contenus archivés (e.g. les dumps de BDD) dans votre espace de *backup* sont au format [Zstandard](https://github.com/facebook/zstd), vous pouvez utiliser les [outils `zstd*` officiels](https://github.com/facebook/zstd/releases/latest) ou le [plugin adapté pour 7zip](https://www.tc4shell.com/en/7zip/modern7z/) pour les manipuler.
{{% /notice %}}

[^1]: Il n'est pas obligatoire de restaurer à la fois bases et fichiers.
