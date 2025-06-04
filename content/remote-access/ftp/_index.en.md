+++
title = "FTP"
weight = 5
tags = ["remote access", "ftp"]
archetype = "chapter"
+++

FTP, for [File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol) is a protocol for sharing files on a distant network.

- [API - FTP](https://api.alwaysdata.com/v1/ftp/doc/)
- [Create an FTP user](create-a-ftp-user)
- [Upload files with FileZilla](use-filezilla)
- [Frequent issues](remote-access/ftp/troubleshooting)

## Connecting with FTP

|Information||
|--- |--- |
|Host|**ftp-[account].alwaysdata.net**|
|Port|**990 (SSL/TLS)**|
|Alternative port|21 (STARTTLS)|
|Identifier|assigned **user** and **password**|

These users can be configured in the **Remote access > FTP** tab in your alwaysdata administration interface.

{{< fig "admin-panel_list-ftp-users.en.png" "Administration interface: list of FTP users" >}}

{{% notice note %}}
Replace `ftp-[account].alwaysdata.net` with your FTP hostname.
{{% /notice %}}

The maximum number of simultaneous connections per user is *10*. On request, it is possible to change this in Private Cloud environments.

## .ftpaccess

It is possible to create [.ftpaccess](http://www.proftpd.org/docs/howto/ftpaccess.html) files to modify the FTP configuration of the relevant files.

### Example: To block access to read only to one user

Create a `.ftpaccess` at the root of the file with the following directive:

```sh
<Limit WRITE>
DenyUser [utilisateur FTP]
</Limit>
```

## Miscellaneous

The port range used for passive mode is *53000-53999*.

---
- [FileZilla](https://filezilla-project.org/download.php): free FTP client
