+++
title = "How to restore e-mails"
linkTitle = "Restore e-mails"
layout = "howto"
weight = 10
tags = ["backup", "e-mail", "recovery"]
+++

Backups of your e-mails are located in the `$HOME/admin/backup` directory for your account. You can restore them using the **Advanced > Restore backups** menu.

{{% notice info %}}
The e-mails present on the backup date will be restored. No e-mail sent or received since will be deleted.
{{% /notice %}}

1.  Choose the required date,
    {{< fig "images/admin-panel_restoration.en.png" "Administration interface: restore backups - step 1" >}}

2.  Then check the one or more e-mail boxes.
    {{< fig "images/admin-panel_restoration-emails.en.png" "Administration interface: restore backups - step 2" >}}

{{% notice note %}}
The restore time depends on the size of the files to restore.
{{% /notice %}}

## SSH mode

To restore a backup manually.

- Connect to your account [in SSH](remote-access/ssh) ;

- Restore e-mails:

    ```sh
    $ rsync -av $HOME/admin/backup/[date]/mails/[domain]/[mailbox]/ $HOME/admin/mail/[domain]/[mailbox]/
    ```
