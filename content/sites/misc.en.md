+++
title = "Miscellaneous questions"
layout = "faq"
hidden = true
tags = ["http", "site"]
+++

## HTTP Default Site

This option, for [Private Clouds]({{< ref "accounts/billing/private-cloud-prices" >}}) and managed in the **HTTP** menu of the server, allows you to specify a site to which requests arriving on the server will be redirected, whose address is not defined in the alwaysdata administration interface. This will replace the "*Site not found*" returned by default.

It is useful when there are addresses pointing to the server at the DNS level but they are not set in **Web > Sites**. This can, for example, be the case of a site with a very high number of addresses - that you don't want to declare all in **Sites** - or a forgotten address.

## Idle time

To configure in the menu **Web > Sites > Modify the [site] - ⚙️ > Advanced**. Choose the duration after which the system stops the application in case of long-term inactivity. Once an HTTP request is executed, the application will be restarted.

To ensure that an application is never stopped, set the value to `0`.

However, there is *no guarantee* that an application will never be stopped, and it can be stopped at any time. If it is *necessary* for a web application to run 24/7, create a [service]({{< ref "services" >}}) and a site of type [Redirect "reverse-proxy"]({{< ref "sites/redirect" >}}) for its web access.
