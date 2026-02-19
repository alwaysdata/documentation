+++
title = "Adding a Filter Rule"
tags = ["e-mail"]
+++

To better manage e-mails and sort them automatically, filtering rules are available. These rules can be created at the e-mail client or server level.

To create them on the latter, go to **E-mails > Addresses > Change** the desired address **> Filter rules**.

{{< fig "images/filter-rule1.en.png" "Administration interface: go to the filtering rules" >}}

You will find a list of your rules that you can add to.

{{< fig "images/filter-rule2.en.png" "List of your filter rules" >}}

{{< fig "images/filter-rule3.en.png" "Add a filter rule" >}}

Filtering rules are translated into [Sieve](http://sieve.info/) format and you can find it in the `$HOME/admin/mail/[domain]/[local-part]/filter.sieve` file in your file space.

{{% notice tip %}}
To create more complex rules, you will need to use [Sieve rules](/e-mails/use-sieve-scripts).
{{% /notice %}}

---

- [API resource](https://api.alwaysdata.com/v1/mailbox/rule/doc/)
