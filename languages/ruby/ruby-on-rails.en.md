+++
title = "Installing a Ruby-on-Rails Application"
hidden = true
layout = "howto"
tags = ["ruby", "ruby on rails"]
+++

A [Ruby on Rails](http://rubyonrails.org/) application is deployed at alwaysdata just like any other Rack application. If you are just starting out, this document will guide you through your deployment step by step.

## Installing the application

There are a number of ways to install Ruby on Rails application. Here are some examples.

### Via gem

If the application to deploy is available as a package, it can be installed with `gem`:

```sh
$ gem install radiant
$ radiant myapp
```

### Via Git

If the code for your application is available on a *Git* (or *Mercurial*, *SVN* etc.) deposit:

```sh
$ git clone git://internal.example.com/superman/myapp.git
```

### New project

If you start a new application, you can use `rails`:

```sh
$ gem install rails
$ rails new myapp
```

### Other methods

You can install your application in a number of other ways: *rsync*, *FTP* etc.

## Installing dependencies

If your application has dependencies (via a *Gemfile*), you can install them with *Bundler*:

```sh
$ bundle install
```

## Configuring the application

You will probably need to change the configuration of your application, e.g. by configuring a database.

## Adding a Rack site

Add a Rack site in the **Web > Sites** section of the administration heading:

- addresses: `www.example.org` (for example)
- type: `Ruby Rack`
- application path: `/myapp/config.ru`
- use Bundler: check the box if you use Bundler (if you have a Gemfile)
- static paths: `/static/=/my_static_directory/`

If you want to deploy your site in a production environment you need to add environment variables, for example:

```
RAILS_ENV=production
SECRET_KEY_BASE=Biy2sah8ohsh5ov
```

{{% notice warning %}}
Do not copy the key above but generate your own using the `rake secret` command.
{{% /notice %}}
