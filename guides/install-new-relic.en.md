+++
title = "Installing New Relic"
layout = "howto"
hidden = true
tags = ["monitoring"]
+++

[New Relic](https://newrelic.com/products/application-monitoring) monitors the applications and helps to optimize them. It offers agents in a number of languages and here we will present the steps needed to install the *PHP agent*.

Given the specificities of our infrastructure, their installation script cannot be used on our servers, so here are the steps to follow.

In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`
- New Relic directory: `$HOME/newrelic/`
- PHP 7.3.9

## Step 1: Download the agent

```
foo@ssh:~/newrelic$ wget -O- https://download.newrelic.com/php_agent/release/<newrelic-last-version>-linux.tar.gz | tar -xz --strip-components=1
```

[Download page](https://download.newrelic.com/php_agent/release/)

## Step 2: Modify php.ini

Add to `php.ini` (**Environment > PHP**):

```
extension = /home/[foo]/newrelic/agent/x64/newrelic-20180731.so
newrelic.license = "REPLACE_WITH_REAL_KEY"
newrelic.enabled = true
newrelic.loglevel = "info"
newrelic.logfile = "/home/[foo]/newrelic/php_agent.log"
```

More options are available from file `/home/[foo]/newrelic/scripts/newrelic.ini.template`.

## Step 3: Start the daemon

Start it via SSH:

```
foo@ssh:~/newrelic$ /home/[foo]/newrelic/daemon/newrelic-daemon.x64 --logfile /home/[foo]/newrelic/daemon/log
```

---

## Links

- [Documentation](https://docs.newrelic.com/docs/agents/manage-apm-agents)
