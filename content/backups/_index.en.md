+++
title = "Backups"
pre = "<i class='fas fa-fw fa-history'></i> "
weight = 34
archetype = "chapter"
tags = ["backup", "recovery"]
+++

A backup of your files, databases and e-mails is made **daily**, retained for a rolling **30 days** and is available from the `$HOME/admin/backup` directory in your account.

Regardless the taken plan, backups are stored in a *dedicated datacenter* that is several kilometers away from the production center, using another provider.

You can restore [a website](restore-a-site) or [e-mails](restore-e-mails) from the **Advanced > Restore backups** tab in your administration interface.

{{% notice info %}}
Backups are not counted as part of an account’s disk space quota.
{{% /notice %}}

{{% notice tip %}}
The archived contents (e.g. BDD dumps) in your *backup* space are in [Zstandard](https://github.com/facebook/zstd) format, you can use the [official `zstd*` tools](https://github.com/facebook/zstd/releases/latest) or the [adapted plugin for 7zip](https://www.tc4shell.com/en/7zip/modern7z/) to manipulate them.
{{% /notice %}}

- [alwaysdata Disaster Recovery Plan](security/drp)
