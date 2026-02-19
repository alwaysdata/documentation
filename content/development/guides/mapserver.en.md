+++
title = "MapServer CGI"
tags = ["http", "site"]
+++

[MapServer](https://mapserver.org/) is a platform for publishing spatial data and interactive mapping applications to the web.

In our example, we use the [SSH access](/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `foo`
- MapServer installation directory: `$HOME/mapserver`

1. Create the soft link:

```sh
foo@ssh:~/mapserver$ ln -s /usr/lib/cgi-bin/mapserv mapserv
```

2. Create a `.htaccess` file with:

```
Options +ExecCGI
SetHandler cgi-script
```

- [MapServer CGI](https://mapserver.org/cgi/)
