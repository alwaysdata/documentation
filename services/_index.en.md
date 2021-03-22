+++
title = "Services"
pre = "<i class='fas fa-fw fa-sitemap'></i> "
weight = 33
layout = "man"
tags = ["services"]
+++

It's possible to set up services, i.e generic programs that run 24 hours a day without any user interaction.

These services are supervised via the **Advanced > Services** menu of the [administration interface](https://admin.alwaysdata.com).

{{< fig "admin-panel_create-service.en.png" "Ad­mi­nis­tra­tion interface: create a service" >}}

If the service needs to listen on a port THEN choose a port between `8300` and `8499` and use the account hostname - of the form `services-[compte].alwaysdata.net`[^1]. It must bind in IPv6 on `::`.

Unlike a command manually launched in SSH, these services will be restarted automatically by the system if the service is stopped.

The *Monitoring command* field - optionnal - allows you to specify a command that checks if the service is running. When this command returns an error code, the service is restarted. For example it can verify that the service is reachable on the assigned port by using (for a service that uses the *8300* port):

```sh
$ nc -z services-[account].alwaysdata.net 8300
```

---
- [Use services]({{< ref "services/use-services" >}})
- [API reference](https://api.alwaysdata.com/v1/service/doc/)

[^1]: `[account]` to be replace by the account name.
