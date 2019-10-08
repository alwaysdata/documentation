+++
title = "How To use scheduled tasks"
menuTitle = "Use scheduled tasks"
date = 2019-10-07
layout = "howto"
weight = 10
draft = false
+++

Via the **Advanced > Scheduled tasks** menu of you administration interface, enter commands you want to run, URLs you want to access at regular interval and set the repeat period of these tasks.

CAUTION:

- If the task is scheduled at a certain frequency but the previous task is not completed the current job will be skipped;
- Tasks are are executed in a minute range. In other words a task scheduled to start every day at 6:30 will start between 6:30:00 and 6:30:59;
- A log report is automatically created and available in the _~/admin/logs/jobs/_ directory. It gives the start and stop of the task;
- For account being on shared servers, the consumption must remain reasonable. If the scheduled task is a heavy treatment the frequency has to be reduced.

> Although it is contraindicated clients with dedicated and VPS serveurs can also use `crontab -e` command. It's two separate systems.


## Examples

- [WordPress](https://developer.wordpress.org/cli/commands/cron/event/run/) tool launch to execute scheduled tasks every 10 minutes

> alwaysdata administration interface
>
>> value: ```php $HOME/wordpress/htdocs/wp cron event run --due-now```
>>
>> frequency: second choice - every 10 minutes
>
> Crontab syntax
>
>>```*/10 * * * * php $HOME/wordpress/htdocs/wp cron event run --due-now```


- [RSS backend refreshment](https://git.tt-rss.org/fox/tt-rss/wiki/UpdatingFeeds#periodical-updating-from-crontab-using-update-script-updatephp---feeds) with TT-rss everyday at 10:30

> alwaysdata administration interface
>
>> value: ```php $HOME/tt-rss/update.php --feeds --quiet```
>>
>> frequency: first choice - Every day at 10:30
>
> Crontab syntax
>
>> ```30 10 * * * php $HOME/tt-rss/update.php --feeds --quiet```


## Links

- More on [crontab syntax](https://en.wikipedia.org/wiki/Cron)

---
Non standard predefined syntax in **@** - examples _@hourly_ or _@reboot_ - are not allowed.
