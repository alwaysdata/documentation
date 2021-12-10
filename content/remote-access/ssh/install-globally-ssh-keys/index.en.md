+++
title = "Connecting To Your Server Using SSH Keys"
layout = "howto"
weight = 80
hidden = true
tags = ["remote access", "dedicated server", "gold server", "vps", "ssh"]
+++

To easily manage your server accounts, you can install global SSH keys in the **SSH keys** tab for your server. These are used to connect to any account without knowing the password.

{{< fig "images/admin-interface_global-ssh-keys.en.png" "Administration interface: global SSH keys" >}}

Your public SSH key to copy in this form is given in the `$HOME/.ssh/id_rsa.pub` file on your computer. If you do not have one you can [generate it]({{< ref "remote-access/ssh/use-keys" >}}).
