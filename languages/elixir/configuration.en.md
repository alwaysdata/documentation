+++
title = "Configuring Elixir"
hidden = true
layout = "man"
tags = ["elixir"]
+++

## Supported Versions (Major Versions)

| [v2017]({{< ref "accounts/version" >}}) | [v2020]({{< ref "accounts/version" >}}) |
| --------------------------------------- | --------------------------------------- |
| -                                       | 1.10                                    |
| -                                       | 1.9                                     |
| -                                       | 1.8                                     |
| 1.7                                     | 1.7                                     |
| 1.6                                     | 1.6                                     |
| 1.5                                     | -                                       |

The default version can be changed from the administration section, under **Environment > Elixir**. This is the version that is especially used when you start `mix`.

## Binary to use

To force the use of a different version of Elixir other than the default one, define the environment variable `ELIXIR_VERSION`:

```
$ ELIXIR_VERSION=1.7 elixir
```

In your scripts, use `/usr/bin/elixir` as *shebang*:

```
#!/usr/bin/elixir
```

## Environment

Your Elixir environment starts off empty, with no ready installed libraries.

## HTTP deployment

To deploy an HTTP application with Elixir, create an *Elixir* type site in the **Web > Sites** section. You need to specify the command that will start your Elixir application, for example:

```
mix $HOME/myapp/phx.server
```

{{% notice warning %}}
Your application must absolutely listen to IP `0.0.0.0` and the port shown in the site configuration in the *Command* field or use the IP and PORT environment variables.
{{% /notice %}}
