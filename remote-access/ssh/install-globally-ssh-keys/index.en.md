+++
title = "Connecting To Your Server Using SSH Keys"
layout = "howto"
weight = 80
hidden = true
tags = ["remote access", "dedicated", "vps", "ssh"]
+++

To easily manage your server accounts, you can install global SSH keys in the **SSH keys** tab for your server. These are used to connect to any account without knowing the password.

{{< fig "images/admin-interface_global-ssh-keys.en.png" "Administration interface: global SSH keys" >}}

You will find your public SSH key to copy in the `$HOME/.ssh/id_rsa.pub` file on your computer and if you do not have one you can [generate it]({{< ref "remote-access/ssh/use-keys" >}}).
