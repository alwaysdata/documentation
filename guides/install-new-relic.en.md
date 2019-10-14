+++
title = "How To install New Relic"
menuTitle = "Install New Relic"
date = 2019-09-12T12:32:14+02:00
layout = "howto"
weight = 10
draft = false
+++

[New Relic](https://newrelic.com/products/application-monitoring) monitors apps and helps to optimize them. It offers agents for several languages and we will present here the steps to install the PHP agent.
As of our infrastructure particularities, their installation script is not usable on our servers.

In our example, we will use the [SSH access]() and consider following information:

- Account name: foo
- New Relic directory: ~/newrelic/
- PHP version: 7.3.9

### Step 1: Agent's download

```
foo@ssh:~/newrelic$ wget -O- https://download.newrelic.com/php_agent/release/<newrelic-last-version>-linux.tar.gz | tar -xz --strip-components=1
```

[Download page](https://download.newrelic.com/php_agent/release/)


### Step 2: PHP.ini modification

Add in the php.ini (**Environment > PHP**):

```
extension = /home/foo/newrelic/agent/x64/newrelic-20180731.so
newrelic.license = "REPLACE_WITH_REAL_KEY"
newrelic.enabled = true
newrelic.loglevel = "info"
newrelic.logfile = "/home/foo/newrelic/php_agent.log"
```

More options are available in the /home/foo/newrelic/scripts/newrelic.ini.template

### Step 3: Launching of the daemon

**Alservice**

Launch it via SSH:

```
foo@ssh:~/newrelic$ /home/foo/newrelic/daemon/newrelic-daemon.x64 --logfile /home/foo/newrelic/daemon/log
```

## Links

- [Documentation](https://docs.newrelic.com/docs/agents/manage-apm-agents)
