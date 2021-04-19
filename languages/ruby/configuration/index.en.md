+++
title = "Configuring Ruby"
hidden = true
layout = "man"
tags = ["ruby"]
+++

`[package]` and `[version]` have to be replaced by the name of the package and version to be installed.

## Supported Versions (Major Versions)

|       |
| ----- |
| 3.0   |
| 2.7   |
| 2.6   |
| 2.5   |
| 2.4   |
| 2.3   |
| 2.2   |
| 2.1   |
| 2.0   |
| 1.9   |
| 1.8   |

The default version can be changed from the administration section, under **Environment > Ruby**. This is the version that is especially used when you start `ruby`.

Versions are not necessarily [already installed]({{< ref "languages#versions" >}}).

## Error logs

You can view the error logs in the `$HOME/admin/logs/uwsgi/[id].log` file where [id] is the identifier for your site, shown in the Web > Sites section.

## Binary to use

You need to always use `ruby` (or `/usr/bin/ruby`). Never use `ruby2.4` or any other command.

To force the use of a different version of Ruby other than the default one, define the environment variable `RUBY_VERSION`:

```sh
$ RUBY_VERSION=2.3 ruby
```

In your scripts, use `/usr/bin/ruby` as *shebang*:

```
#!/usr/bin/ruby
```

To force the use of a specific version of Ruby:

```
#!/usr/bin/eval RUBY_VERSION=2.3 ruby
```

The other binaries included in Ruby (`gem`, `irb`, `ri`, etc.) work the same way.

## Environment

Your Ruby environment starts off empty, with no ready installed libraries other than the standard library.

### Installing a package

You can use `gem` to install packages:

```sh
$ gem install [package]
```

Packages are installed in the standard `$HOME/.gem` directory and they are automatically added to load path by Ruby.

Note that you will need to re-install the packages if you change the major Ruby version (versions 2.3 and 2.4 are two different major versions, whereas 2.3.1 and 2.3.0 use the same major version).

You can specify a specific version:

```sh
$ gem install [package] -v [version]
```

### Uninstalling a package

```sh
$ gem uninstall [package]
```

### Using [Bundler](http://bundler.io/)

We recommend using Bundler if you use a number of different Ruby applications so that each one has its own separate environment. Bundle installs the packets listed in a *Gemfile*.

```sh
$ bundle install
```

## Rack deployment

So that a Rack application is accessible by the web, you need to add a site in the alwaysdata administration **Web > Sites** section:

{{< fig "images/ruby-rack.png" "Ruby Rack Site Type">}}

- type: choose *Ruby Rack*,
- application path: the path to your Rack application.

You can also fill-in a number of optional fields:

- use Bundler,
- environment variables to define,
- a specific version of Ruby to use.
