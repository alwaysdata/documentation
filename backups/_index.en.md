+++
title = "Backups"
pre = "<i class='fas fa-fw fa-history'></i> "
weight = 33
chapter = true
tags = ["backup"]
+++

# Backups

A backup of your files, databases and emails is made **daily**, retained for a rolling **30 days** and is available from the `$HOME/admin/backup` directory in your account.

Backups are stored in a dedicated data center that is tens of kilometers away from the production center, using another contractor.

You can restore [a website]({{< relref "restore-a-site" >}}) or [emails]({{< relref "restore-emails" >}}) from the **Advanced > Restore backups** tab in your administration interface.

{{% notice info %}}
Backups are not counted as part of an account’s disk space quota.
{{% /notice %}}
