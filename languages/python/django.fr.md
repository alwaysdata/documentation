+++
url = "/fr/langages/python/django/"
title = "Comment installer une application Django"
hidden = true
layout = "howto"
tags = ["django", "python"]
+++

Une application [Django](https://www.djangoproject.com/) se déploie chez alwaysdata comme n'importe quelle application WSGI.

## Créer un environnement virtuel

Utiliser un [environnement virtuel]({{< ref "languages/python/configuration" >}}#environnement) n'est pas obligatoire, mais c'est une bonne pratique.

```
$ python -m venv myenv
$ source myenv/bin/activate
```

## Installer l'application

Il existe plusieurs manières d'installer une application Django. Voyons plusieurs exemples.

### Via pip

Si l'application à déployer est disponible sous forme de paquet, on peut l'installer avec `pip` :

```sh
$ python -m pip install wagtail
$ wagtail start myapp
```

### Via Git

Si le code de votre application est disponible sur un dépôt *Git* (ou *Mercurial*, *SVN*…) :

```sh
$ git clone https://path/to/myapp.git
```

## Nouveau projet

Si vous démarrez une nouvelle application, vous pouvez utiliser `django-admin` :

```sh
$ python -m pip install Django
$ django-admin startproject myapp
```

## Autres méthodes

Vous pouvez installer votre application par de nombreux autres biais : `rsync`, FTP…

## Installer les dépendances

Si votre application a des dépendances, vous pouvez les installer :

```sh
$ python -m pip install -r requirements.txt
```

## Configurer l'application

Vous aurez probablement besoin de modifier les settings de votre application, par exemple en configurant une base de données (retrouvez vos informations de connexion dans la section adéquate de l'administration, par exemple **Bases de données > PostgreSQL**).

```txt
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydatabase',
        'USER': 'mydatabaseuser',
        'PASSWORD': 'mypassword',
        'HOST': 'postgresql-superman.alwaysdata.net',
        'PORT': '5432',
    }
}
```

## Ajouter un site WSGI

Ajoutez un site WSGI dans la section **Web > Sites** de l'administration :

* adresses : www.example.com (par exemple)
* type : `Python WSGI`
* chemin de l'application : `/myapp/myapp/wsgi.py`
* répertoire de travail : `/myapp/`
* répertoire du virtualenv : `/myenv/`
* chemins statiques : `/static=static`
