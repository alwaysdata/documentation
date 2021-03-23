+++
title = "Alerts notifications"
layout = "man"
hidden = true
tags = ["profile"]
+++

For many reasons, an alert may be triggered by our system. Here is how it works:

- Alert **opening** (by a triggering event) with an e-mail sent informing the one or more users involved,
- **reminder** e-mails,
- Alert **expiry** (if no corrective action is taken) with possible action.

## Types of notifications

### Lack of activity

This kind of alert only affects *free plans* and is intended to not take up space on our infrastructure with abandoned accounts.

- Triggering event: no connection to the [administration interface](https://admin.alwaysdata.com) for X days [^1],
- Resolution: connecting to the administration interface,
- Expiry: suspension of the inactive profile and its accounts.

### Irregular financial situation

- Triggering event: negative balance (e.g. when an invoice is issued),
- Resolution: paying the invoice so that the remaining balance is zero or higher,
- Expiry: suspension of the relevant profile and its accounts.

### Domain expiry

- Triggering event: a domain will expire in X days,
- Resolution: renewing the domain,
- Expiry: the domain is about to expire and therefore may no longer be available.

### Automatic domain renewal

- Triggering event: automatic domain renewal is enabled but the balance is too low OR no credit card/bank account is configured,
- Resolution: recharge the prepaid account with enough money OR add a credit card/bank account allowing automatic debits to the means of payment,
- Expiry: this kind of alert does not expire.

### Credit card expiry

- Triggering event: a credit card will expire in less than 31 days,
- Resolution: delete or update the credit card,
- Expiry: this kind of alert does not expire.

### Account migration

- Triggering event: a [migration]({{< ref "advanced/migrations">}}) relating to an account is scheduled,
- Resolution: apply the migration,
- Expiry: the migration will be applied automatically (but not necessarily on the actual day of expiry).

[^1]: - a profile created in less than a year must connect every 120 days,
    - a profile created between 1 and 4 years must connect every 6 months,
    - a profile with 4 years of age, one connection per year is required.
