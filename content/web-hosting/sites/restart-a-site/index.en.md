+++
title = "Restarting a Website"
tags = ["http", "site"]
+++

To activate certain modifications, it is necessary to restart the program. This is done as follows:

- when you click on the **Restart** button;
- when making changes to the site form in **Web > Sites**:
	- when an address is added / modified / deleted;
	- when a site option is modified;
- when making changes in the **Environment** menu.

{{< fig "images/site-restart.en.png" "Restart button" >}}

These actions are also accessible via our [API](/development/api).

{{% notice info %}}
Only one Apache server exists per account. By restarting a site using this web server (PHP, Redirect, Static Files, and Custom Apache), all Apache sites in the account will be restarted.
{{% /notice %}}

## Hot restart

There is no standard way to request a *hot restart* (during which no requests should be lost). By default, the system therefore sends a `SIGTERM`, which will then stop the process and restart it. In this case, requests may then potentially be lost.

For *Apache* and *uWSGI* web servers, the signals allowing a warm restart are managed by the system.

For other programs, the **Hot restart** field allows you to specify which signal to send to the application.


{{< fig "images/hot-restart-signal.en.png" "" >}}

Examples:

-  [Puma](https://github.com/puma/puma/blob/master/docs/restart.md) - Ruby web server
