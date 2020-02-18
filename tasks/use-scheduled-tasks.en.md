+++
url = "/fr/tâches-planifiées/utiliser-les-tâches-planifiées/"
title = "Comment utiliser des tâches planifiées"
layout = "howto"
weight = 10
hidden = true
tags = ["scheduled tasks"]
+++

Via the **Advanced > Scheduled tasks** menu in your administration interface, enter the commands that you wish to run, the URL that you wish to access at regular intervals and define the task repeat periods.

Important:

- If the task is scheduled at a certain frequency but the execution of the previous task is not finished, the current one will be ignored,
- Tasks are started during the set minute. In other words a task scheduled to start every day at 6:30 will start between 6:30:00 and 6:30:59.
- A log is created automatically and is available from the `$HOME/admin/logs/jobs/` directory. It gives you the start and end of the task.
- For accounts on shared servers, the consumption should remain reasonable. If the scheduled task is major processing, then reduce its frequency.

{{% notice note %}}
Even if it is not advisable, customers using dedicated and VPS servers may also use the `crontab -e` command. The two systems are separate.
{{% /notice %}}

## Examples

### WordPress

Every ten minutes, the [WordPress](https://developer.wordpress.org/cli/commands/cron/event/run/) tool starts to run the scheduled tasks:

alwaysdata administration interface:

- *value*: `php $HOME/wordpress/htdocs/wp cron event run --due-now`
- *frequency*: second choice - Every 10 minutes

Equivalent crontab syntax:

```
*/10 * * * * php $HOME/wordpress/htdocs/wp cron event run --due-now
```

### tt-rss

[Refreshing an RSS backend](https://git.tt-rss.org/fox/tt-rss/wiki/UpdatingFeeds#periodical-updating-from-crontab-using-update-script-updatephp---feeds) with TT-rss, every day at 10:30:

alwaysdata administration interface:

- *value*: `php $HOME/tt-rss/update.php --feeds --quiet`
- *frequency*: first choice - Every day at 10:30

Equivalent crontab syntax:

```
30 10 * * * php $HOME/tt-rss/update.php --feeds --quiet
```

---
## Links

- Find out more about [crontab syntax](https://en.wikipedia.org/wiki/Cron)

{{% notice note %}}
Shortcuts with an **@** - examples *@hourly* or *@reboot* - are not accepted (non-standard syntax).
{{% /notice %}}
