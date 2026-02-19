+++
title = "Creating an FTP User"
tags = ["remote access", "ftp"]
+++

To connect to your account using *FTP*, you need to have a user. By default, a user with your *account* name was created with the account. You can create as many FTP users as you wish and you can administer them from your administration interface, from the **Remote access > FTP** tab.

{{< fig "images/admin-panel_list-ftp-users.en.png" "Administration interface: list of FTP users">}}

- Name: FTP user name prefixed with your account name,
- Password: the password assigned to the user,
- Root directory: the directory where the user finds their connection.

{{< fig "images/admin-panel_add-ftp-user.en.png" "Administration interface: add FTP users">}}

{{% notice note %}}
FTP proposes isolation: the user cannot move around freely in their root directory's parent directories.
{{% /notice %}}
