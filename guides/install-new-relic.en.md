+++
title = "Installing New Relic"
layout = "howto"
hidden = true
tags = ["monitoring"]
+++

[New Relic](https://newrelic.com/products/application-monitoring) monitors the applications and helps to optimize them. It offers agents in a number of languages and here we will present the steps needed to install the **PHP and Python agents**.

In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`

{{% notice note %}}
[foo], [newrelic-last-version], [version] et REPLACE\_WITH\_LICENSE\_KEY must be replaced by accurate informations.
{{% /notice %}}

## PHP

Given the specificities of our infrastructure, their installation script cannot be used on our servers, so here are the steps to follow.

- New Relic directory: `$HOME/newrelic/`

### Step 1: Download the agent

```sh
foo@ssh:~/newrelic$ wget -O- https://download.newrelic.com/php_agent/release/<newrelic-last-version>-linux.tar.gz | tar -xz --strip-components=1
```

[Download page](https://download.newrelic.com/php_agent/release/)

### Step 2: Modify php.ini

Add to `php.ini` (**Environment > PHP**):

```ini
extension = /home/[foo]/newrelic/agent/x64/newrelic-[version].so
newrelic.license = "REPLACE_WITH_REAL_KEY"
newrelic.enabled = true
newrelic.loglevel = "info"
newrelic.logfile = "/home/[foo]/newrelic/php_agent.log"
```

More options are available from file `/home/[foo]/newrelic/scripts/newrelic.ini.template`.

### Step 3: Start the daemon

Create a [service]({{< ref "services" >}}) with the following details:

- *Command*: `/home/[foo]/newrelic/daemon/newrelic-daemon.x64 --logfile /home/[foo]/newrelic/daemon/log`
- *Working directory*: `newrelic`

## Python

New Relic is a Python module to be installed as other ones. If the application uses a `virtualenv`, New Relic will need to be installed at its level.

### Step 1: Install the agent

```sh
foo@ssh:~$ pip install newrelic
foo@ssh:~$ newrelic-admin generate-config REPLACE_WITH_LICENSE_KEY newrelic.ini
```

### Step 2: Modify the app configuration

Add to the `.py` application file:

```txt
import newrelic.agent
newrelic.agent.initialize('/home/[foo]/newrelic.ini')
```

---

## Links

- [Documentation](https://docs.newrelic.com/docs/agents/manage-apm-agents)
