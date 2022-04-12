+++
title = "Editing Apache Configuration"
menuTitle = "Configuration Apache"
layout = "howto"
weight = 10
tags = ["apache", "http", "site"]
+++

[Apache](http://httpd.apache.org/)2.4 is available on our servers. To add global directives to your Apache configuration go to **Web > Configuration > Apache**.

{{< fig "images/admin-panel_apache.en.png" "Administration interface: configure Apache" >}}

All of the modifications made in the *Apache global directives* field will impact the `$HOME/admin/config/apache/sites.conf` file. Apache error logs are available in file `$HOME/admin/logs/apache/apache.log`. An extract of these logs is presented in the administration’s interface (Logs - 📄).

Apache serves PHP, Static Files and Custom Apache websites.

- [Apache 2.4 documentation](http://httpd.apache.org/docs/2.4/en/)
- [File .htaccess]({{< ref "sites/htaccess-file" >}})

## Installing a module

Once the `.so` file is compiled and added to your [file space]({{< ref "remote-access" >}}), insert this line into the global directives:

```
LoadModule <MODULE> $HOME/path/to/module.so
```
