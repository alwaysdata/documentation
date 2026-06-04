---
layout: layouts/indexed.njk
title: Development
eleventyNavigation:
  key: Development
  order: 6
---

## Miscellaneous

### Redirecting logs

Any field of type `command` (user program, Node.js website, scheduled task, service, etc.) can be suffixed with `> /home/[account]/path/to/file` (path of your choice) to redirect the logs of the command to a file.
