---
title: Tideways
eleventyNavigation:
  key: Tideways
  parent: Guides
  order: 1
---

[Tideways](https://tideways.com/) monitors the PHP applications and helps to optimize them. Given the specificities of our infrastructure, their installation script cannot be used on our servers, so here are the steps to follow.

In our example, we use the [SSH access](/en/docs/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `[account]`
- Tideways directory: `/home/[account]/tideways/`

> [!NOTE]
> `[version]` and `[php_version]` must be replaced by the accurate data. Feel free to adjust according to your needs.


## Step 1: Download the agent and the daemon

```sh
[account]@ssh:~/tideways$ wget -O- https://s3-eu-west-1.amazonaws.com/tideways/extension/[version]/tideways-php-[version]-x86_64.tar.gz | tar -xz --strip-components=1
[account]@ssh:~/tideways$ wget -O- https://s3-eu-west-1.amazonaws.com/tideways/daemon/[version]/tideways-daemon_linux_amd64-[version].tar.gz | tar -xz --strip-components=0
```

[Download page](https://tideways.io/profiler/downloads)

## Step 2: Modify php.ini

Add to `php.ini` (**Environment > PHP** or **Web > Sites > Edit the [site] - ⚙️ > Configuration**):

```ini
extension = /home/[account]/tideways/tideways-[version]/tideways-php-[php-version].so
```

[Setup documentation](https://support.tideways.com/documentation/setup/configuration/)

## Step 3: Start the daemon

```sh
[account]@ssh:~/tideways$ chmod +x tideways-daemon_[version]/tideways-daemon
```

Create a [service](/en/docs/web-hosting/services) with the following details:

- *Command*: `/home/[account]/tideways/tideways-daemon_[version]/tideways-daemon -address /home/[account]/tideways/tidewaysd.sock`
- *Working directory*: `/home/[account]/tideways/tideways-daemon_[version]/`
