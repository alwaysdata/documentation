+++
title = "Customizing Error Pages"
tags = ["http", "site"]
+++

We recommend creating custom for your error pages (HTTP codes 404, 500, etc.). To do this, the function can be configure at different levels.

## Web server

  - [Apache](https://httpd.apache.org/docs/2.4/en/custom-error.html),
  - [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/Options.html).

## Application

Here is a non-exhaustive list to be consulted depending on your application:

  - [CakePHP](https://book.cakephp.org/3/en/development/errors.html),
  - [Django](https://docs.djangoproject.com/en/dev/topics/http/views/#customizing-error-views),
  - [Express.js](https://expressjs.com/en/guide/error-handling.html),
  - [Flask](https://flask.palletsprojects.com/en/stable/errorhandling/#custom-error-pages),
  - [Laravel](https://laravel.com/docs/6.x/errors),
  - [Macaron](https://go-macaron.com/middlewares/templating#response-status-error-and-redirect),
  - [Phoenix](https://hexdocs.pm/phoenix/custom_error_pages.html),
  - [Sinatra](http://sinatrarb.com/intro.html): see *Error Handling* paragraph,
  - [Symfony](https://symfony.com/doc/current/controller/error_pages.html).

## Tips

- Check the traffic on these pages: if you observe a serious increase in the number of visits to your error pages then you may more easily find the origin of the problem.
- Display links to other pages so that a visitor can continue their browsing.
- Implement a contact form so that it is possible to get in touch with you if necessary.
