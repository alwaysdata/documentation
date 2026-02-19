+++
title = "Development"
pre = "<i class='fas fa-fw fa-code'></i> "
weight = 60
archetype = "chapter"
+++

## Index
- [API](/development/api)
- [Install & deployments guides](/development/guides)
- [Marketplace](/development/marketplace)

Private Cloud:
- [Docker](/development/docker)
- [VPN](/development/vpn)

## Miscellaneous

### Redirecting logs

Any field of type `command` (user program, Node.js website, scheduled task, service, etc.) can be suffixed with `> foo/bar` (path of your choice) to redirect the logs of the command to a file.
