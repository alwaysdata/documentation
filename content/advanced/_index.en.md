+++
title = "Advanced"
pre = "<i class='fas fa-fw fa-asterisk'></i> "
weight = 99
chapter = true
+++

# Advanced

Here you will find advanced issues or ones specific to alwaysdata.

- [Migrations]({{< relref "migrations" >}})
- [Dedicated IP addresses]({{< relref "dedicated-ip-addresses" >}})

## Private Cloud

- [System resources: alerts and limitations]({{< relref "system-resources-alerts-and-limitations" >}})
- [Docker]({{< relref "docker" >}})

## Redirecting logs

Any field of type `command` (user program, Node.js website, scheduled task, service, etc.) can be suffixed with `> foo/bar` (path of your choice) to redirect the logs of the command to a file.
