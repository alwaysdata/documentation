+++
title = "Nextcloud"
layout = "man"
tags = ["nextcloud"]
+++

- [Nextcloud documentation](https://docs.nextcloud.com/)

## Installation

The last version of [Nextcloud](https://nextcloud.com/) is one of our applications that are auto-installable via the administration interface: **Web > Sites > Install an application**.

To install it yourself, follow the steps set out below:

- download the desired version from the [official site](https://nextcloud.com/install/#instructions-server),
- uncompress the source files and place them in your alwaysdata account using [FTP]({{< ref "/remote-access/ftp" >}}),
- create your MySQL [database]({{< ref "/databases" >}}),
- create your [site]({{< ref "sites/add-a-site" >}}),
- access your application's web page to finalize its installation.

## Upgrade

It is possible to use the following script in [SSH]({{< ref "/remote-access/ssh" >}}) to upgrade Nextcloud.

```
php path/to/nextcloud/directory/updater/updater.phar
```

## Recommendations

It is important to follow these instructions to avoid infection:

- regularly upgrade Nextcloud and its plugins,
- keep informed on reports of bugs and security breaches relating to plugins before installing them,
- implement the [specific profile]({{<ref "sites/use-waf#profiles-available">}}) of our WAF,
- delete idle plugins,
- [other rules]({{<ref "sites/clean-up-a-site">}}#3-delete-infection-sources).

