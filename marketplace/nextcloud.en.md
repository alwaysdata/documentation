+++
title = "Nextcloud"
layout = "man"
hidden = true
tags = ["productivity", "storage"]
+++

[Nextcloud](https://nextcloud.com/) is a productivity platform to host files, edit and share them, manage calendars, contacts and more.

- [Documentation](https://docs.nextcloud.com/)

## Installation

The last version of *Nextcloud* is auto-installable via the administration interface: **Web > Sites > Install an application**.

- [Install script](https://admin.alwaysdata.com/site/application/script/7/detail/)

## Upgrade

It is possible to use the following script in [SSH]({{< ref "/remote-access/ssh" >}}) to upgrade Nextcloud.

```sh
$ php path/to/nextcloud/directory/updater/updater.phar
```

## Further information

We provide a [specific profile]({{<ref "sites/waf/use-waf#profiles-available">}}) on our WAF.
