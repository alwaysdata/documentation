+++
title = "FTP"
weight = 5
tags = ["remote access", "ftp"]
chapter = true
+++

# FTP

FTP, for [File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol) is a protocol for sharing files on a TCP/IP network.

- [API - FTP](https://api.alwaysdata.com/v1/ftp/doc/)
- [Create an FTP user]({{< relref "create-a-ftp-user" >}})
- [Frequent issues]({{< ref "remote-access/ftp/troubleshooting">}})

## Connecting with FTP

|Information||
|--- |--- |
|Host|ftp-[account].alwaysdata.net|
|Port|21|
|Identifier|assigned user and password|

These users can be configured in the **Remote access > FTP** tab in your alwaysdata administration interface.

{{< fig "admin-panel_list-ftp-users.en.png" "Administration interface: list of FTP users" >}}

{{% notice note %}}
Replace `ftp-[account].alwaysdata.net` with your FTP hostname.
{{% /notice %}}

The maximum number of simultaneous connections per user is *10*. On request, it is possible to change this for VPS and dedicated servers.

---
- [FileZilla](https://filezilla-project.org/download.php): free FTP client,
- [net2ftp](https://net2ftp.alwaysdata.com/): web interface.
