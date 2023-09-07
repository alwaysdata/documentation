+++
title = "Using User Program Type"
layout = "howto"
weight = 20
tags = ["http", "user program", "site"]
+++

To run a web program that does not use one of the other types of site you can use the *User program*.

It may be used for [Erlang](https://www.erlang.org/), [Go]({{< ref "languages/go" >}}), [Java]({{< ref "languages/java" >}}), [Lua]({{< ref "languages/lua" >}}), [Rust](https://www.rust-lang.org/), [Scala](https://www.scala-lang.org/),) and many other languages and software...[^1]

Go to the **Web > Sites > Add a site** menu.

{{< fig "images/admin-panel_sites-list.en.png" "Administration interface: list of sites" >}}

- Name: used for display purposes in the alwaysdata administration interface, it is purely for information purposes,
- Addresses: the addresses used to reach your site (`*.example.org` for _catch-all_),

{{< fig "images/admin-panel_add-site-general.en.png" "Add a site: general" >}}

- Type: User program,
- Command: command to run to start the program. Your program's HTTP should point to the IP address and port provided in the explanatory text,
- Working directory,
- Environment: environment variables so that the program will work.

{{< fig "images/admin-panel_user-program.en.png" "Adding a site: User program" >}}

{{% notice tip %}}
Before setting up the site, you can test running the program in [SSH]({{< ref "remote-access/ssh" >}}).
{{% /notice %}}

If the program will not run, the *sites* logs available from the `$HOME/admin/logs/sites/` directory may help you.

[^1]: For example, [Nginx](https://www.nginx.com/), [LiteSpeed](https://www.litespeedtech.com/) or [Varnish](https://varnish-cache.org/) are all compatible with *alwaysdata* servers. Installation and configuration are your responsibility.
