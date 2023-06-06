+++
title = "How to restore a site"
menuTitle = "Restore a site"
layout = "howto"
weight = 5
tags = ["backup", "databases", "recovery", "site"]
+++

Backups of your files and databases are located in the `$HOME/admin/backup` directory for your account. You can restore them using the **Advanced > Restore backups** menu.

1.  Choose the required date,
    {{< fig "images/admin-panel_restoration.en.png" "Administration interface: restore backups - step 1" >}}

2.  Then check the one or more databases and/or directories required [^1].
    {{< fig "images/admin-panel_restoration-site.en.png" "Administration interface: restore backups - step 2" >}}

{{% notice warning %}}
Restore will overwrite the current configuration, so make a backup first.
{{% /notice %}}

{{% notice note %}}
The restore time depends on the size of the files to restore.
{{% /notice %}}

## SSH mode

To restore a backup manually.

- Connect to your account [in SSH]({{< ref "remote-access/ssh" >}}) ;

- Restore files:

    ```sh
    $ rsync -av --delete $HOME/admin/backup/[date]/files/[directory]/ $HOME/[directory]/
    ```

{{% notice warning %}}
`--delete` will delete all of the files from this directory that have been created since the backup date. To run a test add `-n`.
{{% /notice %}}

- Restore a MySQL database:

    ```sh
    $ zstdcat $HOME/admin/backup/[date]/mysql/[base].sql.xz | mysql -h mysql-[account].alwaysdata.net -u [user] -p [base]
    ```

- Restore a PostgreSQL database:

    ```sh
    $ zstdcat $HOME/admin/backup/[date]/postgresql/[base].sql.xz | psql -h postgresql-[account].alwaysdata.net -U [user] -W -d [base]
    ```

[^1]: It is not mandatory to restore both databases and files.
