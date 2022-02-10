+++
title = "Installing and Configuring Gitea"
layout = "howto"
hidden = true
tags = ["development"]
+++

[Gitea](https://gitea.io) is a git repositories manager written in Go.

> Gitea is a painless self-hosted Git service. It is similar to GitHub, Bitbucket, and GitLab. Gitea is a fork of Gogs.

By self-hosting Gitea in your alwaysdata account, you should be able to access private (and public) git repositories, hosted on the alwaysdata's cloud, and cut your dependency to centralized hosting solutions like Github.

- [Documentation](https://docs.gitea.io/en-us/)

## Installation

### Using the marketplace

The last version of Gitea can be installed via our marketplace in the menu **Web > Sites > Install an application**.

- [Install script](https://admin.alwaysdata.com/site/application/script/2/detail/)

## First Connection

Gitea doesn't have an admin account creation process during the install. All you have to do is to point your browser to your given URL that hosts your freshly installed Gitea instance, and register yourself and account.

As the first registered user, you will have the admin permissions set up on your account, and be able to manage the whole instance.

## Configuration

The install script comes with a minimal configuration file located at `$HOME/[gitea/install/path]/custom/conf/app.ini`.

The configuration file follows the [`ini` files syntax](https://en.wikipedia.org/wiki/INI_file).

{{% notice info %}}
The complete [Gitea Config Cheatsheet](https://docs.gitea.io/en-us/config-cheat-sheet/) is available in the official documentation.
{{% /notice %}}
