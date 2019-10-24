+++
url = "/fr/plate-forme/sauvegardes/restaurer-un-site/"
title = "Comment restaurer un site web"
menuTitle = "Restaurer un site"
layout = "howto"
weight = 5
draft = false
+++

Les sauvegardes de vos fichiers et bases de données se trouvent dans le répertoire _~/admin/backup_ de votre compte. Vous pouvez les restaurer via le menu **Avancé > Restauration de sauvegardes**.

Choisissez la date voulue puis cochez :

- la/les base(s) de données ;
- et/ou le/les répertoire(s) voulu(s).


> La restauration va écraser la configuration actuelle, effectuez donc auparavant une sauvegarde.
>
>Le temps de restauration dépend de la taille des fichiers à restaurer.


## En SSH

Si vous souhaitez restaurer une sauvegarde manuellement.

- Connectez-vous à votre compte [en SSH]() ;
- Restaurer des fichiers :

```
$ rsync -av --delete ~/admin/backup/<date>/files/<répertoire>/ ~/<répertoire>/
```

Attention, `--delete` va supprimer tous les fichiers de ce répertoire ayant été créés depuis la date de la sauvegarde.
Pour effectuer un test ajoutez `-n`.


- Restaurer une base de données MySQL : 

```
$ xzcat ~/admin/backup/<date>/mysql/<base>.sql.xz | mysql -h mysql-<compte>.alwaysdata.net -u <utilisateur> -p <base>
```

- Restaurer une base de données PostgreSQL : 

```
$ xzcat ~/admin/backup/<date>/postgresql/<base>.sql.xz | psql -h postgresql-<compte>.alwaysdata.net -U <utilisateur> -W -d <base>
```

- Restaurer une base de données MongoDB :

```
$ xzcat ~/admin/backup/<date>/mongodb/<base>.xz | mongorestore -h mongodb-<compte>.alwaysdata.net -u <utilisateur> -p -d <base>
```

