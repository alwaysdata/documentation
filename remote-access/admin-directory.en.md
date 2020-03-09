+++
title = "admin directory overview"
layout = "man"
hidden = true
tags = ["account", "technical environment"]
+++

Every account holds a `$HOME/admin` directory placed at its root an accessible in [FTP]({{< ref "remote-access/ftp" >}}), [SSH]({{< ref "remote-access/ssh" >}}), [SFTP]({{< ref "remote-access/sftp" >}}) or [WebDAV]({{< ref "remote-access/webdav" >}}). 

You'll find there:

- _mail_: [NFS](https://en.wikipedia.org/wiki/Network_File_System) mounting (shared servers) or symbolic links (VPS & dedicated servers) of [e-mails]({{< ref "e-mails" >}}),
- _config_,
- _logs_,
- _tmp_: store temporary files of your applications (replace /tmp),
- _backup_: NFS mounting of [backups]({{< ref "backups" >}}) which are NOT locally stored.

{{% notice note %}}
This directory should NOT receive your files.
{{% /notice %}}

## config

This directory hosts Apache, uWSGI or languages configuration files. You access it in **read-only** and changes are made directly in your alwaysdata administration interface, in the **Environment** or **Web > Sites** menus.

## logs

It gathers different types of logs:

- _http_: access to your websites,
- _sites_: launches, shutdowns and failure of "upstream" web servers,
- _jobs_: achievement of your scheduled tasks,
- _apache_: a log for all applications using this web (PHP and Apache custom),
- _uwsgi_: a log for every applications (Python WSGI, Ruby Rack and Ruby on Rails <= 2.x).
