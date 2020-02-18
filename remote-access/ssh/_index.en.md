+++
title = "SSH"
weight = 5
tags = ["remote access", "ssh"]
chapter = true
+++

# SSH

SSH, for [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell), is a connection protocol that is secured by an exchange of encryption keys at the start of the connection. alwaysdata offers it in ALL of their environments.

- [API - SSH](https://api.alwaysdata.com/v1/ssh/doc/)
- [Create an SSH user]({{< relref "create-a-ssh-user" >}})
- [Use keys]({{< relref "use-keys" >}})
- [Frequent issues]({{< ref "remote-access/ssh/troubleshooting">}})
- [Global SSH keys]({{< relref "install-globally-ssh-keys" >}}) (VPS and dedicated server option)

{{% notice info %}}
All of our offers are managed ones, it is not possible to gain `root` access.
{{% /notice %}}

## Connecting with SSH

|Information||
|--- |--- |
|Host|ssh-[account].alwaysdata.net|
|Ports|22|
|Identifier|assigned user and password OR SSH keys|

These users can be configured in the **Remote access > SSH** tab in your alwaysdata administration interface. The *fingerprints* for the SSH server where the account is located are also found there.

{{< fig "admin-panel_ssh-users-list.en.png" "Administration interface: list of SSH users" >}}

### Using a terminal

Open your terminal and enter the following command:

```
$ ssh [user]@ssh-[account].alwaysdata.net
```

{{% notice note %}}
Replace `[user]` with your SSH user name and `ssh-[account].alwaysdata.net` with your SSH hostname.
{{% /notice %}}

### Via the web

Useful when located after a firewall, our web interface lets you use the SSH protocol from your browser. Be aware however that this solution is hardly reliable and slow and does not replace a client.

{{% notice info %}}
This interface is not compatible with VPS and dedicated hosting.
{{% /notice %}}

---
## Links

- [OpenSSH](https://www.openssh.com/),
- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/download.html): SSH terminal in Windows.
