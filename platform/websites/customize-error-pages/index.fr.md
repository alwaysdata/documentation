+++
url = "/fr/plateforme/sites/personnaliser-les-pages-derreurs/"
title = "Comment personnaliser les pages d'erreurs"
menuTitle = "Personnaliser les pages d'erreurs"
layout = "howto"
weight = 110
hidden = true
tags = ["http", "site"]
+++

Il est conseillé de créer des pages personnalisées pour vos pages d'erreurs (codes HTTP 404, 500, etc.). Pour ce faire, il est possible de configurer cela à différents niveaux.

## Serveur web

- [Apache](https://httpd.apache.org/docs/2.4/fr/custom-error.html) ;
- [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/Options.html).

## Application

Voici une liste non-exhaustive à consulter selon votre application :

- [CakePHP](https://book.cakephp.org/3/fr/development/errors.html) ;
- [Django](https://docs.djangoproject.com/en/dev/topics/http/views/#customizing-error-views) ;
- [Express.js](https://expressjs.com/fr/guide/error-handling.html) ;
- [Flask](https://flask.palletsprojects.com/en/1.1.x/patterns/errorpages/) ;
- [Laravel](https://laravel.com/docs/6.x/errors) ;
- [Macaron](https://go-macaron.com/middlewares/templating#response-status-error-and-redirect) ;
- [Phoenix](https://hexdocs.pm/phoenix/errors.html) ;
- [Sinatra](http://sinatrarb.com/intro.html) : paragraphe _Error Handling_ ;
- [Symfony](https://symfony.com/doc/current/controller/error_pages.html).

## Conseils

- Suivez le trafic sur ces pages : si vous observez une forte augmentation de visites de vos pages d'erreur, vous pourrez plus facilement trouver l'origine du problème ;
- Affichez des liens vers d'autres pages afin que le visiteur puisse poursuivre sa navigation ;
- Mettez en place un formulaire de contact afin de pouvoir éventuellement vous joindre.
