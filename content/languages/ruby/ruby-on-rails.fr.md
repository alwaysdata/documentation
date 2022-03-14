+++
url = "/fr/langages/ruby/ruby-on-rails/"
title = "Comment installer une application Ruby-on-Rails"
hidden = true
layout = "howto"
tags = ["framework", "ruby"]
+++

## Installer l'application

Il existe plusieurs manières d'installer une application Ruby on Rails. Voyons plusieurs exemples.

### Via gem

Si l'application à déployer est disponible sous forme de paquet, on peut l'installer avec `gem` :

```sh
$ gem install radiant
$ radiant myapp
```

### Via Git

Si le code de votre application est disponible sur un dépôt *Git* (ou *Mercurial*, *SVN*…) :

```sh
$ git clone git://internal.example.com/superman/myapp.git
```

### Nouveau projet

Si vous démarrez une nouvelle application, vous pouvez utiliser `rails` :

```sh
$ gem install rails
$ rails new myapp
```

### Autres méthodes

Vous pouvez installer votre application par de nombreux autres biais : *rsync*, *FTP*…

## Installer les dépendances

Si votre application a des dépendances (via un *Gemfile*), vous pouvez les installer avec *Bundler* :

```sh
$ bundle install
```

## Configurer l'application

Vous aurez probablement besoin de modifier la configuration de votre application, par exemple en configurant une base de données.

## Ajouter un site Rack

Ajoutez un site Rack dans la section **Web > Sites** de l'administration :

* adresses : par exemple www.example.com
* type : `Ruby Rack`
* chemin de l'application : `/myapp/config.ru`
* utiliser Bundler : cochez si vous utiliser Bundler (si vous avez un Gemfile)
* chemins statiques : `/static=static`

Si vous voulez déployer votre site en environnement de production, vous devrez ajouter des variables d'environnement, par exemple :

```
RAILS_ENV=production
SECRET_KEY_BASE=Biy2sah8ohsh5ov
```

{{% notice warning %}}
Ne copiez pas la clé ci-dessus mais générez la vôtre avec la commande `rake secret`.
{{% /notice %}}
