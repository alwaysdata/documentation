---
title: Adding a Filter Rule
eleventyNavigation:
  key: Adding a Filter Rule
  parent: Incoming Emails
  order: 1
---

To better manage emails and sort them automatically, filtering rules are available. These rules can be created at the email client or server level.

To create them on the latter, go to **Emails > Addresses > Change** the desired address **> Filter rules**.

![](images/filter-rule1.png)

You will find a list of your rules that you can add to.

![](images/filter-rule2.png)

![Add a filter rule](images/filter-rule3.png)

Filtering rules are translated into [Sieve](http://sieve.info/) format and you can find it in the `/home/[account]/admin/mail/[domain]/[local-part]/filter.sieve` file in your file space.

> [!TIP]
> To create more complex rules, you will need to use [Sieve rules](/en/docs/emails/incoming-emails/use-sieve-scripts).


---

- [API resource](https://api.alwaysdata.com/v1/mailbox/rule/doc/)
