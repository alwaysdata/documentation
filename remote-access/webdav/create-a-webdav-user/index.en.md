+++
title = "Creating a WebDAV User"
layout = "howto"
weight = 30
hidden = true
tags = ["remote access", "webdav"]
+++

To connect to your account using *WebDAV*, you need to have a user. By default, a user with your `[account]` name was created with the account. You can create as many WebDAV users as you wish and you can administer them from your administration interface, from the **Remote access > WebDAV** tab.

{{< fig "images/admin-panel_list-webdav-users.en.png" "Administration interface: list of WebDAV users" >}}

- Name: SSH user name prefixed with your account name,
- Password: the password assigned to the user,
- Root directory: the directory where the user finds their connection.

{{< fig "images/admin-panel_add-webdav-user.en.png" "Administration interface: add WebDAV users">}}

{{% notice note %}}
FTP proposes isolation: the user cannot move around freely in their root directory's parent directories.
{{% /notice %}}
