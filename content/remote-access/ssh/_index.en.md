+++
title = "SSH"
weight = 5
tags = ["remote access", "ssh"]
archetype = "chapter"
+++

SSH, for [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell), is a connection protocol that is secured by an exchange of encryption keys at the start of the connection. alwaysdata offers it in ALL of their environments.

**Remote SSH access is disabled by default.** To enable it, modify your user and check the password connection. It is then possible to set up a connection with [SSH keys](use-keys) and disable the password connection.

- [API - SSH](https://api.alwaysdata.com/v1/ssh/doc/)
- [Create an SSH user](create-a-ssh-user)
- [Frequent issues](remote-access/ssh/troubleshooting)

* Users of [Private Cloud](accounts/billing/private-cloud-prices):
	- [SSH 2-factor authentication](remote-access/ssh/ssh-two-factor-authentication)
	- [Global SSH keys](install-globally-ssh-keys)

{{% notice info %}}
All of our offers are managed ones, it is not possible to gain `root` access.
{{% /notice %}}

## Connecting with SSH

|Information||
|--- |--- |
|Host|ssh-[account].alwaysdata.net|
|Ports|22|
|Identifier|assigned user and password OR SSH keys|

These users can be configured in the **Remote access > SSH/SFTP** tab in your alwaysdata administration interface (among their [shell](https://en.wikipedia.org/wiki/Unix_shell)). The *fingerprints* for the SSH server where the account is located are also found there.

{{< fig "admin-panel_ssh-users-list.en.png" "Administration interface: list of SSH users" >}}

### Using a terminal

Open your terminal and enter the following command:

```ssh
$ ssh [user]@ssh-[account].alwaysdata.net
```

{{% notice note %}}
Replace `[user]` with your SSH user name and `ssh-[account].alwaysdata.net` with your SSH hostname.
{{% /notice %}}

### Via the web

Useful when located after a firewall, our [web interface](https://tsl0922.github.io/ttyd/) lets you use the SSH protocol from your browser. To use it, specify `https://ssh-[account].alwaysdata.net` in the address bar of your web browser.

Be aware however that this solution is hardly reliable and slow and does not replace a SSH client.

{{% notice info %}}
This interface is not compatible with the [Private Cloud](accounts/billing/private-cloud-prices).
{{% /notice %}}

## Miscellaneous

*Fingerprints* of our SSH servers are displayed in the **Remote access > SSH/SFTP** menu of your administration interface.

Current processes are accessible via the **Advanced > Processes > SSH** menu.

SSH users are not `chrooted`. Even if the user's root directory is not the root of the account, they will still be able to access the entire account. To use `chroot`, refer to [SFTP](remote-access/sftp) or [FTP](remote-access/ftp).

---
- [OpenSSH](https://www.openssh.com/),
- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/download.html): SSH terminal in Windows.
