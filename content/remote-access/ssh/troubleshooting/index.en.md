+++
title = "SSH Troubleshooting"
layout = "faq"
weight = 70
hidden = true
tags = ["remote access", "troubleshooting", "ssh"]
+++

## Connection

Should connection issues arise, you can always use the `ssh -v [user]@ssh-[account].alwaysdata.net` command to get more information.

{{% notice note %}}
Replace `[user]` with your SSH user name and `ssh-[account].alwaysdata.net` with your SSH hostname.
{{% /notice %}}

An [IP blockage]({{< ref "security/network" >}}#intrusion-prevention) occurs after some ten failed attempts to connect to the server.

{{% notice info %}}
alwaysdata has connection logs that you may exceptionally request a copy of.
{{% /notice %}}

### Too many authentication failures

This is an SSH key issue, state the corresponding key. If you cannot find it, connect by password and update the `$HOME/.ssh/authorized_keys` file.

### WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!

An account's SSH server might change from time to time. The new fingerprints are shown in **Remote access > SSH**.

You have to update the `known_hosts` file, which is possible via the following command:

```ssh
$ ssh-keygen -R [hostname]
```

### Input/output error

Error linked to operations at our end. Please wait until these are finished, but you can also contact [support](https://admin.alwaysdata.com/support/add/) for more information.

{{% notice info %}}
alwaysdata has connection logs that you may exceptionally request a copy of.
{{% /notice %}}

## Rights

Using a number of SSH users may have undesirable side effects: problems accessing some files, when deleting folders, files that no longer belong to anyone if the owner user has been deleted, etc. Account users belong to the same group. You can:

- user the `chmod` command with the relevant file's owner user to grant the necessary permissions to the group,
- contact [support](https://admin.alwaysdata.com/support/add/) so that they will change the owner of the relevant files using the `chown` command.
