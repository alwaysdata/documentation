+++
title = "How to restore emails"
menuTitle = "Restore emails"
layout = "howto"
weight = 10
tags = ["email", "backup"]
+++

Backups of your emails are located in the `$HOME/admin/backup` directory for your account. You can restore them using the **Advanced > Restore backups** menu.

1.  Choose the required date,
    {{< fig "images/admin-panel_restoration.en.png" "Administration interface: restore backups - step 1" >}}

2.  Then check the one or more email boxes.
    {{< fig "images/admin-panel_restoration-emails.en.png" "Administration interface: restore backups - step 2" >}}

{{% notice note %}}
The restore time depends on the size of the files to restore.
{{% /notice %}}

## SSH mode

To restore a backup manually.

- Connect to your account [in SSH]({{< ref "remote-access/ssh">}}) ;

- Restore emails:

    ```
    $ rsync -av $HOME/admin/backup/[date]/mails/[domaine]/[boîte_email]/ $HOME/admin/mail/[domaine]/[boîte_email]/
    ```

{{% notice info %}}
Here the emails present on the backup date will be restored. No email sent or received since will be deleted.
{{% /notice %}}
