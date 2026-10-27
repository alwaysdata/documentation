---
title: Postmortem Analysis of the Handling of the PHP2Shell Vulnerability at alwaysdata
description: A look back at October 21, when this vulnerability was disclosed
date: 2026-10-26
authors: ["François Lesueur", "Cyril Baÿ"]
---

PHP2Shell is a combination of two PHP vulnerabilities [publicly announced on October 20, 2026, at 8:15 p.m. UTC](https://www.php.net/archive/2026.php#2026-10-20-1). The patch, initially announced for October 21 at 2:00 p.m. UTC, was ultimately released about thirty minutes earlier. A general overview of the events can be found on the [Wikipedia page](https://fr.wikipedia.org/wiki/PHP2Shell).

In this article, we do not go into detail about the vulnerabilities or the patches. Instead, we recount our day on October 21 as a managed hosting provider, from the public announcement to the deployment of the patches.

All times are in UTC; local time in France is UTC+2.

![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGw2b3JqbWFic2MyczkxcGJxYjU1cGFwMW1xdGZqeTlnZ3ZwODNuaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ot3leal6z3nFJrJ3iD/giphy.gif)


## Awareness

We received numerous alerts about the discovery of these vulnerabilities and their significance, particularly through mailing lists and our monitoring efforts. Very quickly, the team knew it would have to mobilize on this issue, which would take top priority.

At that point, very little information is available. The first source is the announcement on the official PHP website, which states the severity but provides no details. As a few snippets of information leak out, several independent analyses are published, particularly two that will be helpful to us.

We know that the actual patches won't be released until mid-afternoon, but we're looking for countermeasures that will buy us a little time. Cloudflare [reports](https://x.com/dok2001/status/2112811965735202970) that the first attacks have already taken place. As soon as the patches are released, many attackers will analyze them to exploit them as quickly as possible, before systems are patched. In the age of AI-powered analysis and given the number of potential targets (all PHP-based sites), it’s not unreasonable to think that it will only take a few dozen minutes before we see much larger-scale attacks. A temporary countermeasure, even one with significant impact, is therefore vital at this time. [AWS](https://aws.amazon.com/fr/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/) has since confirmed this, reporting that it detected initial activity as early as October 17 (exclusively on [honeypots](https://en.wikipedia.org/wiki/Honeypot_(computing))), an initial surge on the morning of the 21st (with the first indications), followed by widespread use in the hours after the patches were released.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3dqdnB1bno4dHd0anc4OXgwdWFsYmlqemx3aTlzaXY3bXFxb2VhOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3nmrZ76aKP1Je/giphy.gif)


## Initial Precautions

The first analysis we've received is from [J4ck3LSyN](https://jackalsyn.com/posts/php-up-2026.html). The first precaution to take is to set `session.upload_progress.enabled` to `Off`. The impact is extremely limited (only the upload progress bars), and we roll this out quickly (8:02 a.m. UTC). There is also a mention of blocking `multipart`, which we are not yet doing at this time.

A second analysis comes from [Vincent Schmalbach](https://www.vincentschmalbach.com/cve-2026-109618-and-cve-2026-109619-what-you-should-do-now/). Based on this analysis, combined with our monitoring, which frequently highlights `multipart`, and the fact that the core of the vulnerabilities seems to lie in how `multipart` is handled by the PHP engine, it becomes clearer that blocking `multipart` is likely necessary to protect ourselves in the meantime.

The decision to block (or not) `multipart` is much more difficult. Doing so blocks file uploads for PHP-based sites, as well as simple forms. However, the alternatives are either to take the risk of a compromise (which we consider high, too high) or to take the sites offline (which is clearly worse). We’ve seen that organizations around the world have chosen among these three options, and a number of sites have indeed been taken offline outright as a precaution. For our part, we’ve decided to block `multipart` using an `.htaccess` file:
```
<If "req('Content-Type') =~ /multipart/i">
    Require all denied
</If>
```

The second question is whether to block access already in the morning or wait until the patches are released. In fact, the risk will be highest between the release of the patches and the deployment of the updated versions on our end. We decided to block access first thing in the morning (8:33 a.m. UTC), which has two advantages. First, even though the risk will only be at its highest after the patches are released, it was likely that attackers would already be looking for the first clues, and the first exploits could appear well before then (which has since been confirmed). Second, since this measure has a significant impact and affects many European customers, it allows us to handle support issues during those customers’ business hours.

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDM1MXQ4NmZlNTh6NnkyejFjYXk2cWwxOHVseHNuOXlkY2lwcmwwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z356CGNb47ECzIYAYO/giphy.gif)


## Support

As the morning progressed, support received an increasing number of inquiries. First, from customers concerned about the disclosure of these vulnerabilities, asking what they should do and what measures we have implemented and plan to implement. Next, from customers impacted by the `multipart` block, who are therefore experiencing issues on their websites or with our webmail (which is written in PHP). The general administration interface is not written in PHP and therefore functions normally throughout the duration of the operations.

A first step is to publish an [update on the operation](https://status.alwaysdata.com/operation/494/detail/) that we can share with customers. The support team has also been expanded, allowing us to respond quickly to every request (more than 5 times the usual number of messages on this day). Every customer ticket received a personalized response generally within less than 10 minutes. These tickets are then followed up with additional responses as needed.

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGdrOW84bDY4MTZmbzB3ejhyZzB0ZWJ0MW5oejhsOGF4c2E5YjRrYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UE9JPTe7LySli/giphy.gif)

Customers did not need to take any action on their end to protect themselves; while the `multipart` block certainly had an impact, it was, in principle, robust. Our priority was to prevent hacking incidents. However, for every customer negatively impacted by this block, we offered to unblock them, while clearly emphasizing the associated risks. Very few requested this unblocking, and we were able to limit the number of IP addresses that were unblocked.


## The Resolution

About 30 minutes before the announced time (1:34 p.m. UTC), the patched versions were released by PHP. Language updates are routine operations for us, but in this case, we wanted to patch all the versions we offer (and that customers may still be using). This includes versions dating back to PHP 4.4, whereas PHP itself had only released patches starting with version 8.2 (semi-official patches were eventually released for version 7.4).

The backporting work then began. Starting with version 7.4, we iteratively applied the fixes and reran the tests, version by version. We finally succeeded in applying the fix to all versions down to 4.4, that is, to all the versions we offer. All that remained was to deploy all these new versions.

Once the versions were updated and the final tests were completed, we were able to lift the block on `multipart` and re-enable `session.upload_progress.enabled` for all users by the end of the day (4:02 p.m. UTC). Operations returned to normal.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWlqejEwNjJiODF2cmtoMzduMzBzeHZsbDU4OXh6eGFnbWZjcnBpYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0EoBVexxvaP88SSQ/giphy.gif)


## Timeline

* Announcement on the PHP website: October 20, 8:15 p.m. UTC
* Configuration of `session.upload_progress.enabled`: October 21, 8:02 a.m. UTC
* Blocking of `multipart` requests: October 21, 8:33 a.m. UTC
* Release of patches by PHP: October 21, 1:34 p.m. UTC
* All patched versions deployed, restrictions lifted: October 21, 4:02 p.m. UTC