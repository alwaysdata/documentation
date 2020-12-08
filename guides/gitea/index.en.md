+++
title = "Installing and Configuring Gitea"
layout = "howto"
hidden = true
+++

[Gitea](https://gitea.io) is a git repositories manager written in Go.

> Gitea is a painless self-hosted Git service. It is similar to GitHub, Bitbucket, and GitLab. Gitea is a fork of Gogs.

{{< fig "images/gitea.png" >}}

By self-hosting Gitea in your alwaysdata account, you should be able to access private (and public) git repositories, hosted on the alwaysdata's cloud, and cut your dependency to centralized hosting solutions like Github.

## Installation

### Using the marketplace

The most convenient way to install Gitea is to rely on [our apps marketplace]({{< ref "marketplace">}}) to deploy the latest version.

[This install script](https://admin.alwaysdata.com/site/application/script/2/detail/):

1. Download the lastest version available and install it in your account.
2. Create a minimal configuration file located at `$HOME/[gitea/install/path]/custom/conf/app.ini`.
3. Create the [site]({{< ref "sites/add-a-site" >}}) associated with the given subdomain.

### Manually

Alternatively, you may want to install Gitea by hand (because you prefer to fine tune the install process, or rely on a previous version than the latest one).

We suggest you to follow [our internal install script](https://admin.alwaysdata.com/site/application/script/2/detail/) as well as the [official documentation](https://docs.gitea.io/en-us/install-from-binary/) to do so.

## First Connection

Gitea doesn't have an admin account creation process during the install. All you have to do is to point your browser to your given URL that hosts your freshly installed Gitea instance, and register yourself and account.

As the first registered user, you will have the admin permissions set up on your account, and be able to manage the whole instance.

## Configuration

The install script comes with a minimal configuration file located at `$HOME/[gitea/install/path]/custom/conf/app.ini`.

{{% notice info %}}
You could host the configuration file anywhere on your account filesystem for maintenance purposes. Pass the path to the config file by using the `-c` flag to the `gitea web` command in your site configuration view.
{{% /notice %}}

The configuration file follows the [`ini` files syntax](https://en.wikipedia.org/wiki/INI_file).

{{% notice info %}}
The complete [Gitea Config Cheatsheet](https://docs.gitea.io/en-us/config-cheat-sheet/) is available in the official documentation.
{{% /notice %}}

### Repositories Path

Gitea stores your repositories in the `$HOME/gitea-repositories` by default. If you want to change it, then configure the `repository.ROOT` entry. The path have to be absolute, be sure to fill-in your account properly:

```ini
[repository]
ROOT = /home/[account]/[path/to/repositories]
```

### Disabling Registration

If you don't want to allow people to register on your Gitea instance, you can disable it:

```ini
[service]
DISABLE_REGISTRATION = true
```

{{% notice warn %}}
Keep in mind that you do have to create your own account first after installing, *before* disabling the registration.
{{% /notice %}}

### Optimize Performance with Cache Strategy

Gitea can use a [Memcached]({{< ref "databases/memcached">}}) instance as a cache strategy.

{{% notice info %}}
*Memcached* is currently only available in *alwaysdata Catalyst* environments.
{{% /notice %}}

```ini
[cache]
ENABLED = true
ADAPTER = memcache
HOST    = 127.0.0.1:11211
```

On *Public Cloud* instances, you can faster it a bit by enabling memory caching instead of using *Memcached*:

```ini
[cache]
ENABLED  = true
ADAPTER  = memory
INTERVAL = 300
```

### OAuth Providers

If you want to allow your users (including your own account) to use an [external OAuth provider](https://en.wikipedia.org/wiki/OAuth) to log in to their account, you can enable external providers. This configuration takes place in the site administration directly at the `/admin/auths` URI.

#### Example: External Auth with Google

To allow users to use their Google account to log in to the instance, first go to the [Google Developer Console](https://console.developers.google.com/). In the `Credentials` section, create a new `OAuth client ID` credentials. Fill-in an `Authorized redirect URIs` to your current Gitea instance URL.

{{< fig "images/gitea_google-oauth.png" >}}

Then, in your Gitea instance, create a new `Authentication Source` and fill in with your `Client ID` and `Secret` token you've generated in the *Google Developer Console*.

{{< fig "images/gitea_auth-source.png" >}}

## SSH Access

Gitea allows you to use both HTTPS and SSH to access you repositories. If you want to enable the SSH access through your alwaysdata account, you have to enable the following options:

```ini
[server]
SSH_DOMAIN = ssh-[account].alwaysdata.net
```

Gitea will then reflect the right SSH address in your repositoriy views. Because Gitea runs under your alwaysdata account, it'll be able to update the `$HOME/.ssh/authorized_keys` file to allow your users to SSH log in to your account to performs git operations.

### Preventing locking-out

When you use an SSH key declared in your Gitea interface to log in to the alwaysdata SSH servers, the Gitea internal prompt is instanciated to handle git commands. This prompt is *not* interactive and doesn't allow you to run regular shell commands on your alwaysdata account.

To prevent this locking-out situation where you won't be able to log in to your SSH account, you have to follow two steps:

1. Generate two SSH key pairs on your computer:
   - one for the Gitea log in, that you fill in your user's settings view;
   - one for admin purposes to log in to the regular SSH prompt, that you fill in the `$HOME/.ssh/authorized-keys` file as usual for [SSH log in]({{< ref "remote-access/ssh">}}).
2. **On your local computer**, create (or update) the `$HOME/.ssh/config` file and declare aliases to login to the alwaysdata server:
   ```ssh
   Host admin.ssh-[account].alwaysdata.net
     User [account]
     HostName ssh-[account].alwaysdata.net
     IdentityFile ~/.ssh/[admin-keyfile].pub
     IdentitiesOnly Yes

   Host ssh-[account].alwaysdata.net
     User [account]
     IdentityFile ~/.ssh/[gitea-keyfile].pub
     IdentitiesOnly Yes
   ```

This way, if you login with:

* `ssh [account]@ssh-[account].alwaysdata.net`: you will trigger the Gitea internal prompt ; this setup follow the Gitea SSH URL as displayed, and works for all users ;
* `ssh admin.ssh-[account].alwaysdata.net`: you will get access to the regular shell prompt over SSH, allowing you to performs tasks in your account using the CLI.
