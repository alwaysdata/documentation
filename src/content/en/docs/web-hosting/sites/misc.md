---
title: Miscellaneous Questions
eleventyNavigation:
  key: Websites - Miscellaneous Questions
  parent: Websites
  order: 99
---

## HTTP Default Site

This option, for [Private Clouds](/en/docs/admin-billing/billing/private-cloud-prices) and managed in the **HTTP** menu of the server, allows you to specify a site to which requests arriving on the server will be redirected, whose address is not defined in the alwaysdata administration interface. This will replace the "*Site not found*" returned by default.

It is useful when there are addresses pointing to the server at the DNS level but they are not set in **Web > Sites**. This can, for example, be the case of a site with a very high number of addresses - that you don't want to declare all in **Sites** - or a forgotten address.

## Idle time

To configure in the menu **Web > Sites > Modify the [site] - ⚙️ > Advanced** (30 minutes by default).

A site's process is started on the first request received. It is [stopped](/en/docs/technical-specifications/execution-environment/#processes) if no request is received during the idle time, then automatically restarted on the next request. A site never runs as several simultaneous instances, including during a restart.

To ensure that an application is never stopped for inactivity, set the value to `0`.

However, there is *no guarantee* that an application runs permanently: it is only started on the first request received and can be stopped at any time (e.g. during maintenance on our side). If it is *necessary* for a web application to run 24/7, create a [service](/en/docs/web-hosting/services) and a site of type [Reverse proxy](/en/docs/web-hosting/sites/add-a-site/#configuration) for its web access.
