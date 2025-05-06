+++
title = "Terminology"
layout = "man"
hidden = true
+++

An alwaysdata user, named **profile** is represented by an email address used to log in to the [administration interface](https://admin.alwaysdata.com).

This user *can* be the owner of **accounts** on our [Public Cloud](/accounts/billing/public-cloud-prices) as well as **[servers](/accounts/billing/private-cloud-prices)** on which they can create accounts. Each **account** is *isolated* from one another.

On these **accounts**, it is possible to manage [domains](/domains), host [email addresses](/e-mails), [websites](/sites), [databases](/databases), or other applications.

{{< fig "images/terminology.en.png" "" >}}

They can also have **[permissions](accounts/permissions)** on other alwaysdata profiles.

{{< fig "images/permissions.en.png" "" >}}

Hosted email addresses are linked to domains. They are *always* on the same account as the domain.

[Site addresses](/sites/add-a-site/#addresses) *can* also be linked to domains. If so, they can be:
- on the same account;
- on another account of the same profile alwaysdata;
- [delegated](/domains/delegate-a-subdomain) to an account in another alwaysdata profile.

{{< fig "images/delegation.en.png" "" >}}
