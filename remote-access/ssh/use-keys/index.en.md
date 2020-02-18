+++
title = "using SSH Keys"
layout = "howto"
weight = 20
hidden = true
tags = ["remote access", "ssh"]
+++

Connecting in SSH mode with its public key (rather than its password) offers some advantages: enhanced security, the ability to define a "blank" password, etc. Here are the steps to follow to configure your SSH account with a public key.

## In Windows

The actions are performed using *PuTTY*, an SSH client [available free of charge](https://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

1.  Generate the private key:
    - Start **PuTTYGen** (supplied by PuTTy),
    - Generate a pair of **SSH-2 ED25519 2048 bit** keys,
    - Save the private key on your station,

2.  Declare the key on the server by copying this key to the `$HOME/.ssh/authorized_keys` file in your alwaysdata account,

3.  Connect in SSH mode: configure your **PuTTY** session in the *Auth* category then in *Private Key file for auth*, load your private key.

## In Unix / OS X

1.  Generate the private key:
    ```
    $ mkdir -p $HOME/.ssh
    $ chmod 0700 $HOME/.ssh
    $ ssh-keygen -t ed25519 -f $HOME/.ssh/id_ed25519
    ```

{{% notice tip %}}
To never have to enter your password when connecting in SSH mode, specify a blank "passphrase".
{{% /notice %}}

2.  Declare the key on the server:
    ```
    $ ssh-copy-id -i $HOME/.ssh/id_ed25519.pub [user]@ssh-[account].alwaysdata.net
    ```

    Or by copying the content of this file to the `$HOME/.ssh/authorized_keys` file in your alwaysdata account.

{{% notice note %}}
Replace `[user]` with your SSH user name and `ssh-[account].alwaysdata.net` with your SSH hostname.
{{% /notice %}}

3.  Connecting with SSH: on the next SSH connection, you will be prompted to enter your passphrase (or nothing at all if your passphrase is blank).
