+++
title = 'Fixing Errors "Connection to upstream refused/skipped"'
layout = "howto"
hidden = true
tags = ["http", "troubleshooting", "site"]
+++

The **Connection to upstream refused** and **Connection to upstream skipped** errors indicate a problem when the application was started. This may be either the *HTTP server* that cannot be started or the *application* that starts but is not listing to the correct IP. Regardless of the reason, more information is available from the `$HOME/admin/logs/sites` logs.

Here is a non-exhaustive list of examples:

## Apache

### Disk quota exceeded

```
=> Site log for a site using Apache:
STDERR: (122)Disk quota exceeded: apache: could not open error log file /home/foo/admin/logs/apache/apache.log.

=> Logs Apache ($HOME/admin/logs/apache):
[error] (122)Disk quota exceeded: Couldn't bind unix domain socket /home/foo/admin/config/apache/run/cgisoc
k.XXXXXXX
[error] (122)Disk quota exceeded: could not create /home/foo/admin/config/apache/run/apache.pid
[error] apache: could not log pid to file /home/foo/admin/config/apache/run/apache.pid
```

Choose the next higher pack from the **Accounts** tab in your administration interface or delete files. This especially affects free 100 Mb packs.

### Cannot find Apache log

```
STDERR: (2)No such file or directory: apache: could not open error log file /home/foo/admin/logs/apache/apache.log.
STDERR: Unable to open logs
```

Try and restart the Apache instance (**Web > Sites > Restart** a PHP type site) to regenerate it or perform a notable change to one of the affected sites (e.g. by adding a fictitious address).

### Spurious characters

```
STDERR: Syntax error on line XXX of /home/foo/admin/config/apache/sites.conf:
STDERR: Invalid command 'XXX', perhaps misspelled or defined by a module not included in the server configuration
```

Spurious characters or directives that do not use the correct syntax have been added to the **Global directives** field for a **custom Apache** type site at the **virtual host** field level for the relevant site or at the Apache configuration level (**Web > Configuration**). 

Correct them or delete them.

{{% notice info %}}
There is only one Apache server per account so prefer managing [Apache directives](https://httpd.apache.org/docs/) at the virtual host or `.htaccess` level where possible.
{{% /notice %}}

## uWSGI

```
=> Logs sites :
STDERR: [uWSGI] getting INI configuration from /home/foo/admin/config/uwsgi/XXXXX.conf
Upstream starting failed: /usr/alwaysdata/uwsgi/2.0.17.1/bin/uwsgi --ini /home/foo/admin/config/uwsgi/XXXXX.conf (return code: 1 | reason: -)

=> Logs uWSGI ($HOME/admin/logs/uwsgi) :
chdir() to /home/foowww
chdir(): No such file or directory [core/uwsgi.c line 2631]
-----
failed to open python file /home/foo/www/app.py
unable to load app 0 (mountpoint='') (callable not found or import error)
-----
unable to find "application" callable in file /home/foo/www/manage.py
-----
ModuleNotFoundError: No module named 'XXXX'
```

Depending on the error, correct the site, the virtual environment or the script itself.

## Other HTTP servers

For sites that do not use Apache or uWSGI, check the program run in [SSH]({{< ref "remote-access/ssh" >}}). Especially whether it does properly listen on:

  - IPv4,
  - on IP and the set port.

### Upstream not ready

```
Upstream starting failed: node ~/www/app.js (return code: - | reason: No such file or directory: '/www/')
```

The working directory specified in **Web > Sites** does not exist.

### Incorrect command (path)

```
STDERR: internal/modules/cjs/loader.js:589
STDERR:     throw err;
STDERR:     ^
STDERR: 
STDERR: Error: Cannot find module '/home/foo/www/app.js'
STDERR:     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:587:15)
STDERR:     at Function.Module._load (internal/modules/cjs/loader.js:513:25)
STDERR:     at Function.Module.runMain (internal/modules/cjs/loader.js:760:12)
STDERR:     at startup (internal/bootstrap/node.js:308:19)
STDERR:     at bootstrapNodeJSCore (internal/bootstrap/node.js:878:3)
Upstream starting failed: node ~/www/app.js
```

The */home/foo/www/app.js* file does not exist.

## Cannot parse upstream response

This error means that an HTTP response returned by your server/application is incorrect (badly formulated) and therefore that our proxy cannot parse it (and return it).
