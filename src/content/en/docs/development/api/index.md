---
title: API
eleventyNavigation:
  key: API
  parent: Development
---

An [API](https://en.wikipedia.org/wiki/Application_programming_interface) (or Application Programming Interface) is a programming interface used to automate how you manage your resources.

Our [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API lets you manage your alwaysdata resources (accounts, e-mails, databases, etc.) from your code.

## Address

|Version|Root URL|Documentation|
|:---|:---|:---|
|1.0|api.alwaysdata.com/v1|https://api.alwaysdata.com/doc/|

## Quick examples

```sh
$ curl --basic --user "APIKEY account=foo:" https://api.alwaysdata.com/v1/mailbox/
```

### Restart a website

```sh
$ curl -X POST --basic --user "APIKEY account=foo:" https://api.alwaysdata.com/v1/site/1234/restart/
```

`APIKEY` to replace per the [API token](/en/docs/admin-billing/profile/tokens), `foo` per the account name and `1234` per the site ID.

## Find out more

- [Use](/en/docs/development/api/usage)
- [Examples](/en/docs/development/api/examples)
- [Resources](/en/docs/development/api/resources)
