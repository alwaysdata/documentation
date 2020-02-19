+++
title = "Scheduled Tasks"
pre = "<i class='fas fa-fw fa-stopwatch'></i> "
weight = 32
layout = "man"
tags = ["scheduled tasks"]
+++

Web apps or services sometimes need to periodically run tasks, commands or call up URLs with no user interaction. To manage this point you should save a scheduled task.

Our platform is based on [Debian](https://www.debian.org/) and its [crontab](https://en.wikipedia.org/wiki/Cron) but allows them to be directly managed from our [administration interface](https://admin.alwaysdata.com) making their use easier.

Two kinds of information need to be provided:

- The one or more commands that you wish to run or the URLs you wish to request,
- Task frequency: you can specify a fixed time or an interval.

{{< fig "admin-panel_create-task.en.png" "Administration interface: create a scheduled task" >}}

---
- [Use scheduled tasks]({{< ref "tasks/use-scheduled-tasks" >}})
- [API reference](https://api.alwaysdata.com/v1/job/doc/)
