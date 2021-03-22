+++
title = "Services"
pre = "<i class='fas fa-fw fa-sitemap'></i> "
weight = 33
layout = "man"
tags = ["services"]
+++

Web apps or services sometimes need to run background tasks or deamons with no user interaction. To manage this point you should save a scheduled task.

These services are supervised via the **Advanced > Services** menu of the [administration interface](https://admin.alwaysdata.com).

{{< fig "admin-panel_create-service.fr.png" "Ad­mi­nis­tra­tion interface: create a service" >}}

Two type of services can be launched:

- a service that runs alone - that we don't need to be connected. Examples: Celery, New Relic.
- a service that one or several applications need to connect. In that case, you will need to listen on a port between `8300` and `8499` and use the account hostname - of the form `services-[compte].alwaysdata.net`[^1]. To be configured at the client level. Example : Redis.

Unlike a task manually launched in SSH, these services will be restarted automatically by the system if the service is stopped.

The *Monitoring command* field allows you to create a command to restart the service in case of failure. It can, for example, verify that the service is listening on the assigned port by using (for a service that uses the 8300 port):

```sh
$ nc -z services-[account].alwaysdata.net 8300
```

---
- [Use services]({{< ref "services/use-services" >}})
- [API reference](https://api.alwaysdata.com/v1/service/doc/)

[^1]: `[account]` to be replace by the account name.
