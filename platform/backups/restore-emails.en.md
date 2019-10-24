+++
title = "How To restore emails"
menuTitle = "Restore emails"
layout = "howto"
weight = 10
draft = false
+++


The backups of your emails are located in the _~/admin/backup_ directory of your account.  You can restore them via the **Advanced > Backup recovery** menu.

Choose the due date then check the mailbox(es).

> Recovery time depends on the size of the files to be restored.


## By SSH ##

If you want to manually restore a backup.

* Connect to your [SSH]() account;
* Restore emails:

```
$ rsync -av ~/admin/backup/<date>/mails/<domain_name>/<mailbox>/ ~/admin/mail/<domain_name>/<mailbox>/
```

The emails on the date of the backup will be put back in place. No email received or sent ever since will be deleted.

