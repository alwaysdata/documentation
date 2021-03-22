+++
title = "Installing Blackfire"
layout = "howto"
hidden = true
tags = ["apps optimization", "profiling"]
+++

[Blackfire](https://blackfire.io) helps to test, debug optimize applications. It offers agents in a number of languages and here we will present the steps needed to install the _PHP and Python agents_.

In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`
- Blackfire directory: `$HOME/blackfire/`

{{% notice note %}}
`[foo]`, `<version>`, `[version]`, `<YOUR_SERVER_ID>` and `<YOUR_SERVER_TOKEN>` must be replaced by accurate informations.
{{% /notice %}}

## Step 1: Agent download

```sh
foo@ssh:~/blackfire$ wget https://packages.blackfire.io/debian/pool/any/main/b/blackfire-php/blackfire-agent_<version>_amd64.deb
foo@ssh:~/blackfire$ dpkg -x blackfire-agent_<version>_amd64.deb .
```
[Download page](https://blackfire.io/docs/up-and-running/installation?action=install&mode=full&location=local&os=manual&language=php): take the DEB 64 bits package.

## Step 2: Agent configuration

```sh
foo@ssh:~/blackfire$ cat << EOF > etc/blackfire/agent-prod
[blackfire]
; setting: server-id
; You can find your personal server-id at https://blackfire.io/my/settings/credentials
server-id=<YOUR_SERVER_ID>

; setting: server-token
; You can find your personal server-token at https://blackfire.io/my/settings/credentials
server-token=<YOUR_SERVER_TOKEN>

; setting: log-file
log-file=/home/[foo]/blackfire/agent.log

; setting: log-level
; desc   : log verbosity level (4: debug, 3: info, 2: warning, 1: error)
; default: 1
log-level=1

; setting: memory-limit
; desc   : Sets the maximum allowed RAM usage (megabytes) when ingesting traces. Use 0 to disable
; default: 500
memory-limit=500

EOF
```

More options are available on their [documentation](https://blackfire.io/docs/up-and-running/configuration/agent).

## Step 3: Start the deamon

Create a [service]({{< ref "services" >}}) with the following details:

- *SSH user*: `foo`
- *Command*: `/home/[foo]/blackfire/usr/bin/blackfire-agent --config=/home/[foo]/blackfire/etc/blackfire/agent-prod`
- *Working directory*: `blackfire`

## Step 4: Probes installation

### [PHP](https://blackfire.io/docs/php)

**Download**

```sh
foo@ssh:~/blackfire$ wget https://packages.blackfire.io/debian/pool/any/main/b/blackfire-php/blackfire-php_<version>_amd64.deb
foo@ssh:~/blackfire$ dpkg -x blackfire-php_<version>_amd64.deb .
```
[Download page](https://blackfire.io/docs/up-and-running/installation?action=install&mode=full&location=local&os=manual&language=php) - point D: take the DEB 64 bits package.

**php.ini modification (Environment > PHP)**

```ini
extension = /home/[foo]/blackfire/usr/lib/blackfire-php/amd64/blackfire-[version].so
```

More options are available on their [documentation](https://blackfire.io/docs/php/configuration). To set up logs:

```ini
blackfire.log_level = 1
# Log verbosity level (4: debug, 3: info, 2: warning, 1: error)
blackfire.log_file = /home/[foo]/blackfire/blackfire-php.log
```

### [Python](https://blackfire.io/docs/python)

```sh
foo@ssh:~$ pip install blackfire
```

---

## Links

- [Documentation](https://blackfire.io/docs)
