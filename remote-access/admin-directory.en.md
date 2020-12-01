+++
title = "admin directory overview"
layout = "man"
hidden = true
tags = ["account", "technical environment"]
+++

Every account have a `$HOME/admin` directory, accessible in [FTP]({{< ref "remote-access/ftp" >}}), [SSH]({{< ref "remote-access/ssh" >}}), [SFTP]({{< ref "remote-access/sftp" >}}) or [WebDAV]({{< ref "remote-access/webdav" >}}).

It contains:

- _mail_: [NFS](https://en.wikipedia.org/wiki/Network_File_System) mounting (public Cloud) or symbolic links (VPS & dedicated servers) to the account [e-mailboxes]({{< ref "e-mails" >}}),
- _config_,
- _logs_,
- _tmp_: temporary storage for your apps (we *strongly* recommend using this instead of `/tmp`),
- _backup_: read-only NFS mounting for [backups]({{< ref "backups" >}}) which are NOT stored locally.

{{% notice note %}}
This `admin` directory is **not** dedicated to storing your own files.
{{% /notice %}}

## config

This directory hosts Apache, uWSGI or languages configuration files. You can access it **read-only**. Changes are made directly in your alwaysdata administration interface, in the **Environment**, **Web > Configuration** or **Web > Sites** menus.

## logs

It also gathers different types of logs:

- _http_: access to your websites,
- _sites_: launches, shutdowns and failures of "upstream" web servers,
- _jobs_: achievements of your scheduled tasks,
- _apache_: a log for all applications using this web (PHP and Apache custom),
- _uwsgi_: a log for every application (Python WSGI, Ruby Rack and Ruby on Rails <= 2.x).

{{% notice info %}}
A periodic deletion of logs can be set up via the **Web > Sites > Logs** menu.
{{% /notice %}}

Only *apache* et *uwsgi* logs from the ongoing month are counted into the account's disk space quota.
