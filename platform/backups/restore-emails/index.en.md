+++
title = "How To restore emails"
menuTitle = "Restore emails"
layout = "howto"
weight = 10
draft = false
+++


The backups of your emails are located in the _~/admin/backup_ directory of your account.  You can restore them via the **Advanced > Backup recovery** menu.

1. Choose the due date;
![Admin panel: backup recovery - step 1](/en/platform/backups/admin_panel_restoration1_en.png)

2. Then check the mailbox(es).
![Admin panel: backup recovery - step 2](/en/platform/backups/admin_panel_restoration2-email_en.png)

> Recovery time depends on the size of the files to be restored.


## By SSH ##

If you want to manually restore a backup.

* Connect to your [SSH]({{< ref "platform/remote-access/ssh" >}}) account;
* Restore emails:

```
$ rsync -av ~/admin/backup/<date>/mails/<domain_name>/<mailbox>/ ~/admin/mail/<domain_name>/<mailbox>/
```

The emails on the date of the backup will be put back in place. No email received or sent ever since will be deleted.

