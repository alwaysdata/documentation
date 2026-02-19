+++
title = "Configuring Elixir"
tags = ["elixir"]
+++

## Supported versions

| |
| --- |
| 1.13 \| 1.14 \| 1.15 \| 1.16 \| 1.17 \| 1.18 |

The default version can be changed from the administration section, under **Environment > Elixir**. This is the version that is especially used when you start `mix`.

Versions are not necessarily [already installed](/web-hosting/languages#versions).

## Binary to use

To force the use of a different version of Elixir other than the default one, define the environment variable `ELIXIR_VERSION`:

```sh
$ ELIXIR_VERSION=1.14 elixir
```

In your scripts, use `/usr/bin/elixir` as *shebang*:

```
#!/usr/bin/elixir
```

## Environment

Your Elixir environment starts off empty, with no ready installed libraries.

## HTTP deployment

To deploy an HTTP application with Elixir, create an *Elixir* type site in the **Web > Sites** section.

{{< fig "images/elixir.png" "Elixir Site Type">}}

You need to specify the command that will start your Elixir application, for example:

```
mix $HOME/myapp/phx.server
```

{{% notice warning %}}
Your application must absolutely listen to IP `::` and the port shown in the site configuration in the *Command* field or use the IP and PORT environment variables.
{{% /notice %}}
