---
title: Execution Environment
eleventyNavigation:
  key: Execution Environment
  parent: Technical Specifications
  order: 11
---

## System

Your programs run on a standard Linux x64 ([Debian](https://www.debian.org/)).

## Isolation

Each account has its own UID/GID. It is isolated from other accounts by standard Linux mechanisms:

- [cgroups](https://en.wikipedia.org/wiki/Cgroups) for resources,
- UID/GID permissions for files.

## Processes

- No restriction on the processes that can be run.
- No port filtering for outgoing connections. [Private Cloud](/en/docs/admin-billing/billing/private-cloud-prices/) users can add some via the [firewall](/en/docs/technical-specifications/configure-firewall/).
- A process to be stopped receives the `SIGTERM` signal, then `SIGKILL` if it is still running 30 seconds later.

> [!TIP]
> Catch `SIGTERM` to stop your application gracefully (closing connections, writing pending data).

- [Limits](/en/docs/technical-specifications/limits/)
- [Responsibilities](/en/docs/technical-specifications/responsibilities/)
