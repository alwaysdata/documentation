---
layout: layouts/indexed.njk
title: DNS Management
eleventyNavigation:
  key: DNS Management
  parent: Domains
  order: 4
---

You can manage your DNS via a conventional system, directly from the **Domains** tab.

To use our DNS servers, set on your registrar administration panel `dns1.alwaysdata.com` and `dns2.alwaysdata.com`.

- [API Resource](https://api.alwaysdata.com/v1/record/doc/)

> [!NOTE]
> The [SOA DNS record](https://en.wikipedia.org/wiki/SOA_record) includes a 32-bit serial number (between 1 and 4294967295). We do not follow the *convention* of defining it with a date format that comes from a time when zone files were edited by hand. Not following this convention *should not* be considered an error.
