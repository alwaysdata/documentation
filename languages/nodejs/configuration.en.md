+++
title = "Configuring Node.js®"
hidden = true
layout = "man"
tags = ["nodejs"]
+++

## Supported Versions (Major Versions)


| [v2017]({{< ref "accounts/version" >}}) | [v2020]({{< ref "accounts/version" >}}) |
| --------------------------------------- | --------------------------------------- |
| -                                       | 13                                      |
| 12                                      | 12                                      |
| 11                                      | 11                                      |
| 10                                      | 10                                      |
| 9                                       | 9                                       |
| 8                                       | 8                                       |
| 6                                       | 6                                       |

The default version can be changed from the administration section, under **Environment > Node.js**. This is the version that is especially used when you start `node`.

## Binary to use

You need to always use `node` (or `/usr/bin/node`). Never use `nodejs`.

To force the use of a different version of Node.js other than the default one, define the environment variable `NODEJS_VERSION`:

```
$ NODEJS_VERSION=12 node
```

In your scripts, use `/usr/bin/node` as *shebang*:

```
#!/usr/bin/nodejs
```

## Environment

Your Node.js® environment starts off empty, with no ready installed libraries. You can use `npm` to install packets:

```
$ npm install express
```

You can also use `npm` in global mode, the packets will be installed in the `$HOME/.npm-packages` directory:

```
$ npm install -g express
```

## HTTP deployment

To deploy an HTTP application with Node.js®, create a Node.js type site in the **Web > Sites** section. You need to specify the command that will start your Node.js® application, for example:

```
node $HOME/myapp/index.js
```

{{% notice warning %}}
Your application must absolutely listen to IP `0.0.0.0` and the port shown in the site configuration in the *Command* field or use the IP and PORT environment variables.
{{% /notice %}}
