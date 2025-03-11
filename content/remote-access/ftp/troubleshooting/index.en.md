+++
title = "FTP Troubleshooting"
layout = "faq"
weight = 50
hidden = true
tags = ["remote access", "troubleshooting", "ftp"]
+++

## Connection

An [IP blockage](security/network) occurs after some ten failed attempts to connect to the server.

{{% notice info %}}
alwaysdata has connection logs that you may exceptionally request a copy of.
{{% /notice %}}

### 530 Home Directory does not exist

Check that the root directory specified in **Remote access > FTP** does exist. If you are not sure, specify the account root: `/`.

There may be other reasons for this error and it may appear sporadically. Try connecting again later or contact [support](https://admin.alwaysdata.com/support/add).

### Answer: 530 Login or password incorrect

The login/password pair is incorrect. Check it or change your password from **Remote access > FTP**.

### ECONNREFUSED - Connection refused by the server / ECONNRESET - Connection reset by peer

The connection locks up before reaching alwaysdata servers, check:

- That you are in **active** or **passive** mode: in active mode, the FTP server will determine the port to use and will initialize the connection, whereas in passive mode, the FTP client initializes the connection. Therefore the latter is recommended.
    - For **FileZilla** go to *Edit > Settings > Connection > FTP*.
- that you do not have any software acting as a firewall,
- by changing device,
- by changing the Internet connection.

If none of these solutions works, try the [SFTP](remote-access/sftp) connection.

{{% notice info %}}
The Wi-Fi connections at educational facilities and hotels often block such services.
{{% /notice %}}

### ECONNABORTED - Connection cancelled
The FTP connection is made with an IP but another IP then connects in passive mode. Be sure to use only one IP during the FTP connection.
If you can not change this behavior, try the [SFTP](remote-access/sftp) connection.

## Access to files

### Some files are not visible

The "hidden" directories and files, for example `.htaccess`, are not necessarily visible by default, this is an **option from your FTP client**.

For **FileZilla** go to *Server > Force hidden file display*.
