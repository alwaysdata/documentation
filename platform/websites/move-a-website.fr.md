+++
url = "/fr/plate-forme/sites/déplacer-un-site-web/"
title = "Comment déplacer un site web"
menuTitle = "Déplacer un site web"
layout = "howto"
weight = 10
draft = false
+++

Cet article explique comment procéder au déplacement d'un site vers un autre compte alwaysdata. Vous devez avoir les **permissions nécessaires** sur le compte d'origine et celui de destination pour pouvoir procéder au transfert.

Pour ce faire, nous utiliserons l'[accès SSH]() plutôt que FTP qui nécessite de rapatrier les fichiers localement pour ensuite les transférer sur le compte de destination.

Dans notre exemple, considérons les informations suivantes :

- Nom du compte d'origine : _foo_
- Nom du compte de destination : _bar_
- Nom de la base de données d'origine : _foo\_base_
- Nom de la base de données de destination : _bar\_base_
- Le site est situé dans le répertoire _~/www/_.
- Nous utiliserons les [utilisateurs SSH]() et de base de données par défaut, c'est à dire ceux créés à l'ouverture des comptes (par exemple, _foo_ pour le compte _foo_ et _bar_ pour le compte _bar_).


## 1. Copie des fichiers

Nous utilisons la commande [scp](https://linux.die.net/man/1/scp) après s'être [connecté en SSH]() sur le compte de **destination**.

```
bar@ssh:~$ scp -r foo@ssh-foo.alwaysdata.net:/home/foo/www/* ~/www/
```

## 2. Import de la base de données

Cette étape est nécessaire que si votre site est connecté à [une base de données]().
Vous devrez avoir préalablement créé la base de données sur le compte de _destination_.

- MySQL :

```
bar@ssh:~$ mysqldump -u foo -p -h mysql-foo.alwaysdata.net foo_base > foo_base.sql
bar@ssh:~$ mysql -h mysql-bar.alwaysdata.net -u bar -p bar_base < foo_base.sql
bar@ssh:~$ rm foo_base.sql
```

- PostgreSQL :

```
bar@ssh:~$ pg_dump -U foo -W -h postgresql-foo.alwaysdata.net foo_base > foo_base.sql
bar@ssh:~$ psql -h postgresql-bar.alwaysdata.net -U bar -W -d bar_base < foo_base.sql
bar@ssh:~$ rm foo_base.sql
```

- MongoDB :

```
bar@ssh:~$ mongoexport -u foo -p -h mongodb-foo.alwaysdata.net foo_base > foo_base.json
bar@ssh:~$ mongoimport -h mongodb-bar.alwaysdata.net -u bar -p -d bar_base < foo_base.json
bar@ssh:~$ rm foo_base.sql
```

**Modifiez le fichier de configuration du site copié précédemment pour qu'il pointe sur la base nouvellement importée.**

 
## 3. Déplacement des adresses

Reste à déplacer les adresses joignant le site et leur certificat auto-généré.
Rendez-vous dans la section **Web > Sites** du compte d'origine, choisissez l'action **Céder à un autre compte** et suivez les étapes.

