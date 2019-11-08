+++
title = "How To install Apache PageSpeed"
menuTitle = "Install Apache PageSpeed"
date = 2019-09-12T12:37:04+02:00
layout = "howto"
weight = 10
+++

[PageSpeed](https://www.modpagespeed.com/) automatically optimize your website by changing the resources on that web page to implement web performance [best practices](https://developers.google.com/speed/docs/best-practices/rules_intro). Tu use it Apache **mod_pagespeed** must be installed on the account. As of our infrastructure particularities, their installation script is not usable on our servers, so here are steps to follow:

In our example, we will use the [SSH access]() and consider following information:

- Account name: foo
- PageSpeed directory: ~/pagespeed/
- Apache 2.4

## Step 1: Downloading

```
foo@ssh:~/pagespeed$ wget https://dl-ssl.google.com/dl/linux/direct/mod-pagespeed-stable_current_amd64.deb
foo@ssh:~/pagespeed$ dpkg -x mod-pagespeed-stable_current_amd64.deb .
```
There is two modules one for Apache 2.2 and the other for Apache 2.4.

## Step 2 : Apache configuration modification

In **Web > Configuration**, add:

```
LoadModule pagespeed_module /home/foo/pagespeed/usr/lib/apache2/modules/mod_pagespeed_ap24.so
ModPagespeedFileCachePath            "/home/foo/pagespeed/cache/pagespeed/"
ModPagespeedFileCacheSizeKb          102400
ModPagespeedFileCacheCleanIntervalMs 3600000
ModPagespeedFileCacheInodeLimit      500000
```

