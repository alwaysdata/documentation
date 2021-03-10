+++
url = "/fr/sites/déplacer-un-site/"
title = "Comment déplacer un site web"
layout = "howto"
hidden = true
tags = ["site"]
+++

Cet article explique comment procéder au déplacement d'un site vers un autre compte alwaysdata. Vous devez avoir les **permissions nécessaires** sur le compte d'origine et celui de destination pour pouvoir procéder au transfert.

Pour ce faire, nous utiliserons l'[accès SSH]({{< ref "remote-access/ssh" >}}) plutôt que FTP qui nécessite de rapatrier les fichiers localement pour ensuite les transférer sur le compte de destination.

Dans notre exemple, considérons les informations suivantes :

- Nom du compte d'origine : `foo`
- Nom du compte de destination : `bar`
- Nom de la base de données d'origine : `foo_base`
- Nom de la base de données de destination : `bar_base`
- Le site est situé dans le répertoire `$HOME/www/`
- Nous utiliserons les utilisateurs SSH et de base de données par défaut, c'est à dire ceux créés à l'ouverture des comptes (par exemple, `foo` pour le compte _foo_ et `bar` pour le compte _bar_).


## 1. Copie des fichiers

Nous utilisons la commande [scp](https://linux.die.net/man/1/scp) après s'être connecté en SSH sur le compte de **destination**.

```sh
bar@ssh:~$ scp -r foo@ssh-foo.alwaysdata.net:/home/foo/www/* ~/www/
```

## 2. Import de la base de données

Cette étape est nécessaire que si votre site est connecté à une base de données.
Vous devrez avoir préalablement créé la base de données sur le compte de _destination_.

- MySQL :
```sh
bar@ssh:~$ mysqldump -u foo -p -h mysql-foo.alwaysdata.net foo_base > foo_base.sql
bar@ssh:~$ mysql -h mysql-bar.alwaysdata.net -u bar -p bar_base < foo_base.sql
bar@ssh:~$ rm foo_base.sql
```

- PostgreSQL :
```sh
bar@ssh:~$ pg_dump -U foo -W -h postgresql-foo.alwaysdata.net foo_base > foo_base.sql
bar@ssh:~$ psql -h postgresql-bar.alwaysdata.net -U bar -W -d bar_base < foo_base.sql
bar@ssh:~$ rm foo_base.sql
```

{{% notice info %}}
Modifiez le fichier de configuration du site copié précédemment pour qu'il pointe sur la base nouvellement importée.
{{% /notice %}}
 
## 3. Déplacement des adresses

Reste à déplacer les adresses joignant le site et leur certificat SSL auto-généré.

1. Rendez-vous dans la section **Web > Sites** du compte d'origine ;
2. Choisissez l'action **Céder à un autre compte** ;
{{< fig "images/admin-panel_move-website-1.fr.png" "Interface d'administration : déplacement de site - étape 1" >}}
3. Et suivez les étapes.
{{< fig "images/admin-panel_move-website-2.fr.png" "Interface d'administration : déplacement de site - étape 2" >}}

{{% notice tip %}}
Pour le déplacer dans un autre de _ses_ comptes il n'y a qu'à indiquer sa propre adresse email.
{{% /notice %}}
