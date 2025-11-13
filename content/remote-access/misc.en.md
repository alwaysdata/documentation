+++
title = "Miscellaneous questions"
layout = "faq"
hidden = true
tags = ["account", "technical environment"]
+++

## List accounts

The list of accounts can be visualized in different ways. For all of them, their contents are **not** accessible to others.

## `/tmp` directory

The `/tmp` directory is shared by all users on a server. It is not recommended to use it, and by default, the files are readable by other users. `$HOME/admin/tmp` is preferable, as it benefits from the same isolation as the other directories within an account.

## Disk space quota

Backups (`$HOME/admin/backup`), like most logs (`$HOME/admin/logs`), do not count towards the disk space quota.

Only the *apache*, *php*, and *uwsgi* logs from the current month count towards a user's disk space quota.
