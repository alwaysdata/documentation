+++
title = "SFTP"
weight = 5
tags = ["remote access", "sftp"]
chapter = true
+++

# SFTP

SFTP, the [SSH File Transfer Protocol](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol), is used to secure an FTP transfer by passing through an SSH tunnel. Consequently, clients can use a simple graphic interface via the FTP client of their choice.

## Connecting with SFTP

From **Remote access > SSH** allow your SSH user *password connection* permission.

{{< fig "admin-panel_ssh-users-list.en.png" "Administration interface: list of SSH users">}}

Then from your FTP client, fill-in the SSH connection information. Let us take the example of the *test* account and the [FileZilla](https://filezilla-project.org/) FTP client:

  - user: `test`
  - password
  - hostname: `ssh-test.alwaysdata.net`
  - port: `22`

{{< fig "filezilla_sftp-connection.en.png" "FileZilla interface: SFTP connection" >}}

{{% notice info %}}
This must not be confused with the [FTPS] protocol({{< ref "remote-access/ftp" >}}): FTP transfer secured by SSL or TLS protocols.
{{% /notice %}}
