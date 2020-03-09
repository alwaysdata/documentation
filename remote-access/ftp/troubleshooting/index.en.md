+++
title = "FTP Troubleshooting"
layout = "faq"
weight = 50
hidden = true
tags = ["remote access", "troubleshooting", "ftp"]
+++

## Connection

An [IP blockage]({{< ref "security/network" >}}) occurs after some ten failed attempts to connect to the server.

{{% notice info %}}
alwaysdata has connection logs that you may exceptionally request a copy of. 
{{% /notice %}}

### 530 Home Directory does not exist

Check that the root directory specified in **Remote access > FTP** does exist. If you are not sure, specify the account root: `/`.

There may be other reasons for this error and it may appear sporadically. Try connecting again later or contact [support](https://admin.alwaysdata.com/support/add).

### Answer: 530 Login or password incorrect

The login/password pair is incorrect. Check it or change your password from **Remote access > FTP**.

### Command: AUTH SSL - Error: Cannot establish a connection with the server

You are attempting to connect in FTPS, change to the **regular FTP** protocol.

### ECONNREFUSED - Connection refused by the server

The connection locks up before reaching alwaysdata servers, check:

- That you are in **active** or **passive** mode: in active mode, the FTP server will determine the port to use and will initialize the connection, whereas in passive mode, the FTP client initializes the connection. Therefore the latter is recommended.
    - For **FileZilla** go to *Edit > Settings > Connection > FTP*.
- that you do not have any software acting as a firewall,
- by changing device,
- by changing the Internet connection.

If none of these solutions works, try the [SFTP]({{< ref "remote-access/sftp" >}}) connection or our [web](https://net2ftp.alwaysdata.com) interface.

{{% notice info %}}
The Wi-Fi connections at educational facilities and hotels often block such services.
{{% /notice %}}

## Access to files

### Some files are not visible

The "hidden" directories and files, for example `.htaccess`, are not necessarily visible by default, this is an **option from your FTP client**.

For **FileZilla** go to *Server > Force hidden file display*.
