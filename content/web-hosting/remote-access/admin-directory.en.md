+++
title = "Admin Directory Overview"
tags = ["account", "technical environment"]
+++

Every account have a `$HOME/admin` directory, accessible in [FTP](/web-hosting/remote-access/ftp), [SSH](/web-hosting/remote-access/ssh), [SFTP](/web-hosting/remote-access/sftp) or [WebDAV](/web-hosting/remote-access/webdav).

It contains:

- _mail_: [NFS](https://en.wikipedia.org/wiki/Network_File_System) mounting (Public Cloud) or symbolic links (Private Cloud) to the account [mailboxes](/e-mails),
- _config_,
- _logs_,
- _tmp_: temporary storage for your apps (we *strongly* recommend using this instead of `/tmp`),
- _backup_: read-only NFS mounting for [backups](/web-hosting/backups) which are NOT stored locally.

{{% notice note %}}
This `admin` directory is **not** dedicated to storing your own files.
{{% /notice %}}

## config

This directory hosts Apache, uWSGI or languages configuration files. You can access it **read-only**. Changes are made directly in your alwaysdata administration interface, in the **Environment**, **Web > Configuration** or **Web > Sites** menus.

## logs

It also gathers different types of logs:

- _http_: access to your [websites](/web-hosting/sites),
- _sites_: launches, shutdowns and failures of "upstream" web servers,
- _jobs_: achievements of your [scheduled tasks](/web-hosting/tasks),
- _services_: achievements of your [services](/web-hosting/services),
- _apache_: a log for all applications using this web server (PHP and Apache custom),
- _php_: a log for all applications using the PHP scripting language,
- _uwsgi_: a log for every application (Python WSGI, Ruby Rack and Ruby on Rails <= 2.x).

The alwaysdata administration's interface presents an excerpt of these logs (**Logs** - 📄).

{{% notice info %}}
A **retention period** of logs can be set up for each account via the **Advanced > Logs** menu. For Private Cloud it is possible to do it at the server level in its **HTTP** menu.
*All logs (http, sites, jobs...) will be deleted once the desired period has passed.*
{{% /notice %}}

Only *apache*, *php* and *uwsgi* logs from the ongoing month are counted into the account's disk space quota.
