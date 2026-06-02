---
title: Development
eleventyNavigation:
  key: Development
  order: 6
---

## Index
- [API](/en/docs/development/api)
- [Install & deployments guides](/en/docs/development/guides)
- [Marketplace](/en/docs/development/marketplace)

Private Cloud:
- [Docker](/en/docs/development/docker)
- [VPN](/en/docs/development/vpn)

## Miscellaneous

### Redirecting logs

Any field of type `command` (user program, Node.js website, scheduled task, service, etc.) can be suffixed with `> /home/[account]/path/to/file` (path of your choice) to redirect the logs of the command to a file.
