+++
title = "Creating an SSH User"
tags = ["remote access", "ssh"]
+++

To connect to your account using *SSH*, you need to have a user. By default, a user with your *account* name was created with the account. You can administer your SSH users from your administration interface, **Remote access > SSH** tab.

{{< fig "images/admin-panel_ssh-users-list.en.png" "Administration interface: list of SSH users">}}

- Name: SSH user name prefixed with your account name,
- Password: the password assigned to the user. It is required for the first SSH connection; Once this is done, a [key connection](/web-hosting/remote-access/ssh/use-keys) can then be used,
- "HOME" directory: the directory where the user finds their connection,
- [Shell](https://en.wikipedia.org/wiki/Unix_shell): your user's command interpreter.

{{< fig "images/admin-panel_ssh-users-add.en.png" "Administration interface: add SSH users">}}

{{% notice note %}}
Unlike FTP, SSH does not propose any isolation. Hence, users can move around freely in all of the account directories.
{{% /notice %}}

{{% notice info %}}
Even if this is not recommended for reasons relating to rights on folders and files, you can create as many SSH users as you wish.
{{% /notice %}}
