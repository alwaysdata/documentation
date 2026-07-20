---
title: "Python 3.6, Ruby 2.4 and others"
description: "Presentation of the 2017 software architecture"
date: 2017-01-24
authors: ["Cyril Baÿ"]
---

For a few days now, new shared accounts and dedicated servers are running on our brand new *software* infrastructure. What does it bring us? Let's find it out.

## (Much) more recent versions

Our new infrastructure runs under the latest version of [Debian](https://www.debian.org/) (Jessie), which brings an update of all software and libraries available, from [git](https://git-scm.com/) or [Vim](http://www.vim.org/) to [Apache](https://httpd.apache.org/) or [Java](https://java.com/). Software and languages have also been added, such as [Go](https://golang.org/) or [R](https://www.r-project.org/).

But the heart of the change is Python and Ruby: we have evolved our package management to no longer depend on the versions proposed by Debian, which allows us to offer:

- For [Python](https://www.python.org/), from version 3.6 to 3.3 and 2.7 to 2.4.
- For [Ruby](https://www.ruby-lang.org/), from version 2.4 to 1.8.7.
- For [PHP](http://php.net/), nothing changes: we were already offering the latest version (7.1), and we keep all the versions since 5.2, and even 4.4 for the (slightly) latecomers.

## Simplified package installation

Whether for Python or Ruby, the installation of packages (via [pip](https://pip.pypa.io/) or [gem](https://rubygems.org/)) required some efforts, minimal but sometimes confusing for the least experienced. It was sometimes necessary to specify an option or define an environment variable, or even create a file (*.bash_profile*) for new commands to be executed directly.

Now **pip install** and **gem install** work directly without any configuration. Even better: you will not even need to add any path for your applications to find libraries: it is automatic.

We also thought of PHP and its [PECL](https://pecl.php.net/) extensions: indicate in the command **ad_install_pecl** (a home-made script) the name of the PECL extension you want to install, it will deal with the download/configure/compile steps: all you will have to worry about is uploading the .so file from the section *Environment > PHP* in the alwaysdata administration.

## A pristine environment

Again, this applies mainly to Python and Ruby: so far, some libraries were installed globally on our systems, including [Django](https://www.djangoproject.com/) and [Ruby on Rails](http://rubyonrails.org/). This posed a number of problems, so we decided to remove them. You will now start with a pristine environment, but we saw in the previous section that installing libraries was now trivial.

## UWSGI-powered Python and Ruby sites

*WSGI* (Python) or *Ruby Rack* and *Ruby on Rails* sites were managed by Apache (via [mod_wsgi](https://modwsgi.readthedocs.io/) or [Passenger](https://www.phusionpassenger.com/)). They are now managed by [uWSGI](https://github.com/unbit/uwsgi), an application server with several advantages. This change is largely transparent for our customers, but new options (all optional) appear in the configuration form of a site:

- Force a particular version of Python or Ruby.
- Environment variables to be defined.
- Working directory.
- For Python, the *virtualenv* to be used.
- For Ruby, use the application's *Gemfile*.

## Soon, new languages

This new infrastructure paves the way for supporting new languages, in particular for running web applications. [Node.js](https://nodejs.org/) will definitely be the first, but others should follow very soon.

## How to benefit?

Right now, by opening a new shared account or dedicated server. Older customers will have to wait a little longer: we are preparing the migration phase that will start in the coming weeks, together with the migration to our [own hardware infrastructure](/en/blog/2014-02-17-alwaysdata-becomes-independent/) (for the oldest shared accounts). Every customer will be notified by email beforehand and will have at their disposal:

- A documentation page listing major changes that may cause incompatibilities.
- Tools to partially simulate their account under the new infrastructure.

The more adventurous, however, can ask for a migration via a support ticket now, but at their own risk and without the possibility of going back. Needless to say, if you have anything in production, go your way and wait for the official migration. If you want thrills, jump in parachute.

## And after?

We designed this new infrastructure to be much more flexible than the previous one, and no longer find ourselves in a situation with old software. Although we cannot always offer the latest versions as soon as they are released, for many reasons (lack of stability, blocking bugs, unavailable dependencies), this new flexibility will allow us, for example, to reduce the wait for Python 3.7 and Ruby 2.5 to just a few days!
