---
title: New Relic
eleventyNavigation:
  key: New Relic
  parent: Guides
---

[New Relic](https://newrelic.com/products/application-monitoring) monitors the applications and helps to optimize them. It offers agents in a number of languages and here we will present the steps needed to install the **PHP and Python agents**.

In our example, we use the [SSH access](/en/docs/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `[account]`

> [!NOTE]
> `[newrelic-last-version]`, `[version]` et `REPLACE_WITH_LICENSE_KEY` must be replaced by the accurate data. Feel free to adjust according to your needs.


## PHP

Given the specificities of our infrastructure, their installation script cannot be used on our servers, so here are the steps to follow.

- New Relic directory: `/home/[account]/newrelic/`

### Private Cloud

#### Step 1: Download the agent

```sh
[account]@ssh:~/newrelic$ wget -O- https://download.newrelic.com/php_agent/release/<newrelic-last-version>-linux.tar.gz | tar -xz --strip-components=1
```

[Download page](https://download.newrelic.com/php_agent/release/)

#### Step 2: Modify php.ini

Add to `php.ini` (**Environment > PHP**):

```ini
extension = /home/[account]/newrelic/agent/x64/newrelic-[version].so
newrelic.license = "REPLACE_WITH_REAL_KEY"
newrelic.enabled = true
newrelic.loglevel = "info"
newrelic.logfile = "/home/[account]/newrelic/php_agent.log"
```

More options are available from file `/home/[account]/newrelic/scripts/newrelic.ini.template`.

#### Step 3: Start the daemon

Create a [service](/en/docs/web-hosting/services) with the following details:

- *Command*: `/home/[account]/newrelic/daemon/newrelic-daemon.x64 -f --logfile /home/[account]/newrelic/daemon/log`
- *Working directory*: `/home/[account]/newrelic`

### Public Cloud

#### Step 1: Download the agent

```sh
[account]@ssh:~/newrelic$ wget -O- https://download.newrelic.com/php_agent/release/<newrelic-last-version>-linux.tar.gz | tar -xz --strip-components=1
```

[Download page](https://download.newrelic.com/php_agent/release/)

#### Step 2: Modify php.ini

Add to `php.ini` (**Environment > PHP**):

```ini
extension = /home/[account]/newrelic/agent/x64/newrelic-[version].so
newrelic.license = "REPLACE_WITH_REAL_KEY"
newrelic.enabled = true
newrelic.loglevel = "info"
newrelic.logfile = "/home/[account]/newrelic/php_agent.log"
newrelic.daemon.location="/home/[account]/newrelic/daemon/newrelic-daemon.x64"
```

More options are available from file `/home/[account]/newrelic/scripts/newrelic.ini.template`.

## Python

New Relic is a Python module to be installed as other ones. If the application uses a `virtualenv`, New Relic will need to be installed at its level.

### Step 1: Install the agent

```sh
[account]@ssh:~$ python -m pip install newrelic
[account]@ssh:~$ newrelic-admin generate-config REPLACE_WITH_LICENSE_KEY newrelic.ini
```

### Step 2: Modify the app configuration

Add to the `.py` application file:

```txt
import newrelic.agent
newrelic.agent.initialize('/home/[account]/newrelic.ini')
```

---

## Links

- [Documentation](https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/install-configure/configure-new-relic-agents/#apm-config)
