---
title: Apache PageSpeed
eleventyNavigation:
  key: Apache PageSpeed
  parent: Guides
---

[PageSpeed](https://www.modpagespeed.com/) automatically optimizes your website by changing the resources of this web page to implement web performance [best practices](https://developers.google.com/speed/docs/best-practices/rules_intro). **Apache mod_pagespeed** must be installed on the account.

Given the specificities of our infrastructure, their installation script cannot be used on our servers, so here are the steps to follow.

In our example, we use the [SSH access](/en/docs/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `[account]`
- PageSpeed directory: `/home/[account]/pagespeed/`
- Apache 2.4

> [!NOTE]
Feel free to adjust according to your needs.

## Step 1: Downloading

```sh
[account]@ssh:~/pagespeed$ wget https://dl-ssl.google.com/dl/linux/direct/mod-pagespeed-stable_current_amd64.deb
[account]@ssh:~/pagespeed$ dpkg -x mod-pagespeed-stable_current_amd64.deb .
```

There are two modules, one for Apache 2.2 and the other for Apache 2.4.

## Step 2: Changing the Apache configuration

In **Web > Configuration > Apache**, add:

```
LoadModule pagespeed_module          "/home/[account]/pagespeed/usr/lib/apache2/modules/mod_pagespeed_ap24.so"
ModPagespeedFileCachePath            "/home/[account]/pagespeed/cache/pagespeed/"
ModPagespeedFileCacheSizeKb          102400
ModPagespeedFileCacheCleanIntervalMs 3600000
ModPagespeedFileCacheInodeLimit      500000
```
