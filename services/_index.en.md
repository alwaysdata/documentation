+++
title = "Services"
pre = "<i class='fas fa-fw fa-sitemap'></i> "
weight = 33
layout = "man"
tags = ["services"]
+++

You can register services: They are custom programs running in a headless mode (i.e. without any user interaction).

Those services are declared in the [administration panel](https://admin.alwaysdata.com)'s  **Advanced > Services**.

{{< fig "admin-panel_create-service.en.png" "Ad­mi­nis­tration Panel: Create a Service" >}}

When you need to join your service from an external application, you *must* pick a port in the `8300` and `8499` range, and attach your service on `::` (IPv6 only). Your service will be reachable on this port at the address `services-[account].alwaysdata.net:[PORT]`[^1].

Unlike a command launched by-hand trough SSH, those services will be restarted automatically by the system when the service stops.

The optional *Monitoring command* allows you to specify a command used to check the service's status. When this command returns an error code, the service is restarted. E.g. you can ping the service on the assigned port (i.e. *8300*):

```sh
$ nc -z services-[account].alwaysdata.net 8300
```

---

- [Use services]({{< ref "services/use-services" >}})
- [API reference](https://api.alwaysdata.com/v1/service/doc/)

[^1]: `[account]` to be replace by the account name.
