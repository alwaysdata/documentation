+++
title = "Configuring Node.js"
hidden = true
layout = "man"
tags = ["nodejs"]
+++

`[package]` has to be replaced by the name of the package to be installed.

## Supported versions

||
|---|
| 19 |
| 18 |
| 17 |
| 16 |
| 15 |
| 14 |
| 13 |
| 12 |
| 11 |
| 10 |
| 9  |
| 8  |
| 6  |

The default version can be changed from the administration section, under **Environment > Node.js**. This is the version that is especially used when you start `node`.

Versions are not necessarily [already installed]({{< ref "languages#versions" >}}).

## Binary to use

You need to always use `node` (or `/usr/bin/node`). Never use `nodejs`.

To force the use of a different version of Node.js other than the default one, define the environment variable `NODEJS_VERSION`:

```sh
$ NODEJS_VERSION=12 node
```

In your scripts, use `/usr/bin/node` as *shebang*:

```
#!/usr/bin/node
```

## Environment

Your Node.js environment starts off empty, with no ready installed libraries. You can use `npm` to install package:

```sh
$ npm install [package]
```

You can also use `npm` in global mode, the package will be installed in the `$HOME/.npm-packages` directory:

```sh
$ npm install -g [package]
```

## HTTP deployment

To deploy an HTTP application with Node.js, create a *Node.js* type site in the **Web > Sites** section.

{{< fig "images/nodejs.png" "Node.js Site Type">}}

You need to specify the command that will start your Node.js application, for example:

```
node $HOME/myapp/index.js
```

{{% notice warning %}}
Your application must absolutely listen to IP and the port shown in the site configuration in the *Command* field. The `IP` / `HOST` and `PORT` environment variables can also be used.
{{% /notice %}}
