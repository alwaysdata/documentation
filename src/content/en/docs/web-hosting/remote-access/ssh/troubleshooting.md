---
title: SSH Troubleshooting
eleventyNavigation:
  key: SSH Troubleshooting
  parent: SSH
  order: 9
---

## Connection

Should connection issues arise, you can always use the `ssh -v [account]@ssh-[account].alwaysdata.net` command to get more information.

An [IP blockage](/en/docs/technical-specifications/network#intrusion-prevention) occurs after some ten failed attempts to connect to the server.

> [!NOTE]
> alwaysdata has connection logs that you may exceptionally request a copy of.


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

## Rights

Employing several SSH users may have secondary and undesirable effects: errors when accessing certain files and when deleting files, etc.

In this case, you can:

- delete the problem SSH user. This automatically reassigns the files it owned to the main user.
- use the `chmod` command with the owner user of the files concerned in order to give the necessary rights to the group.

> [!WARNING]
> The processes started up by a site (**Web > Sites**), typically *Apache* or *PHP*, run with the main user.
