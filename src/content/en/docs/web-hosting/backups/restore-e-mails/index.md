---
title: Restore e-mails
eleventyNavigation:
  key: Restore Emails
  parent: Backups
  order: 2
---

Backups of your e-mails are located in the `/home/[account]/admin/backup` directory for your account. You can restore them using the **Advanced > Restore backups** menu.

> [!NOTE]
> The e-mails present on the backup date will be restored. No e-mail sent or received since will be deleted.


1.  Choose the required date,
    ![](images/admin-panel_restoration.png)

2.  Then check the one or more e-mail boxes.
    ![](images/admin-panel_restoration-emails.png)

> [!NOTE]
> The restore time depends on the size of the files to restore.


## SSH mode

To restore a backup manually.

- Connect to your account [in SSH](/en/docs/web-hosting/remote-access/ssh) ;

- Restore e-mails:

    ```sh
    $ rsync -av /home/[account]/admin/backup/[date]/mails/[domain]/[mailbox]/ /home/[account]/admin/mail/[domain]/[mailbox]/
    ```
