+++
title = "Sysadmin Resources: Alerts and Limitations"
layout = "howto"
hidden = true
tags = ["dedicated", "vps"]
+++

{{% notice info %}}
Fonctionnality only available on dedicated and VPS servers.
{{% /notice %}}

The **Resources** menu allows to configure sysadmin resources, as the memory.

{{< fig "images/admin-panel_resources.en.png" "Admin interface" >}}

- *RAM limit per account*: maximum limit that an account can reach at a given time. If it is reached a process (not necessarily the most consuming) is automatically killed by the system.

- *Command to execute when RAM threshold is exceeded*: command/script executed by the system when the threshold is reached. This allows not to kill a process "at random".

- *RAM treshold*: treshold at which the script described above is performed.
