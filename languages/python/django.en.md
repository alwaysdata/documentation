+++
title = "Installing a Django Application"
hidden = true
layout = "howto"
tags = ["django", "python"]
+++

A [Django](https://www.djangoproject.com/) application is deployed at alwaysdata just like any other WSGI application.

## Create a virtual environment

Using a [virtual environment]({{< ref "languages/python/configuration" >}}#environment) is not mandatory but represents good practice.

```
$ python -m venv myenv
$ source myenv/bin/activate
```

## Installing the application

There are a number of ways to install a Django application. Here are some examples.

### Via pip

If the application to deploy is available as a package, it can be installed with `pip`:

```sh
$ pip install wagtail
$ wagtail start myapp
```

### Via Git

If the code for your application is available on a *Git* (or *Mercurial*, *SVN* etc.) deposit:

```sh
$ git clone https://path/to/myapp.git
```

## New project

If you start a new application, you can use `django-admin`:

```sh
$ pip install Django
$ django-admin startproject myapp
```

## Other methods

You can install your application in a number of other ways: `rsync`, FTP etc.

## Installing dependencies

If your application has dependencies, you can install them:

```sh
$ pip install -r requirements.txt
```

## Configuring the application

You will probably need to change your application’s settings, e.g. by configuring a database (find your connection information in the relevant administration section, e.g. **Databases > PostgreSQL**).

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

## Adding a WSGI site

Add a WSGI site in the **Web > Sites** section of the administration heading:

  - addresses: `www.example.org` (for example)
  - type: `Python WSGI`
  - application path: `/myapp/myapp/wsgi.py`
  - working directory: `/myapp/`
  - virtualenv directory: `/myenv/`
  - static paths: `/static/=/my_static_directory/`
