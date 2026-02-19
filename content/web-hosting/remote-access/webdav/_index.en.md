+++
title = "WebDAV"
tags = ["remote access", "webdav"]
+++

WebDAV stands for [Web-based Distributed Authoring and Versioning](http://www.webdav.org/) and it allows users to collaboratively modify and manage files on remote web servers.

- [WebDAV - API](https://api.alwaysdata.com/v1/webdav/doc/)
- [Create a WebDAV user](/web-hosting/remote-access/webdav/create-a-webdav-user)

{{% notice info %}}
WebDAV is not enabled by default on the [Private Cloud](/admin-billing/billing/private-cloud-prices) (the default ports are used by the sites). Contact [support](https://admin.alwaysdata.com/support/add/) if you need it.
{{% /notice %}}

## Connecting with WebDAV

|Information||
|--- |--- |
|Host|webdav-[account].alwaysdata.net|
|Ports|80 (HTTP) or 443 (HTTPS)|
|Identifier|assigned user and password|

These users can be configured in the **Remote access > WebDAV** tab in your alwaysdata administration interface.

{{< fig "admin-panel_list-webdav-users.en.png" "Administration interface: list of WebDAV users" >}}

### With Windows

1.  Right click on the **Workstation** or **Computer** icon,

2.  Choose **Connect a network drive**. From the *Folder* field, specify:
    - in Vista and higher: `https://webdav-[account].alwaysdata.net/`

3.  Click on *Connect* under a different user name, then enter your identifiers. Validate and click on *Finish*.

### With Mac OS X

1.  From the **Finder**, choose *Go > Connect to server*,

2.  From the *Server address* field, enter `http://webdav-[account].alwaysdata.net/` ;

3.  Click on *Connect*.

### With davfs2 (Linux)

**davfs2** offers the advantage of mounting WebDAV shared volumes like a local partition locale so that your files are accessible from any application. To mount a partition in `/mnt/alwaysdata`:

```sh
$ sudo mount.davfs https://webdav-[account].alwaysdata.net/ /mnt/alwaysdata
```

{{% notice note %}}
Replace `webdav-[account].alwaysdata.net` with your WebDAV hostname available from **Remote access > WebDAV**.
{{% /notice %}}
