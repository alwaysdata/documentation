+++
title = "API"
pre = "<i class='fas fa-fw fa-plug'></i> "
weight = 80
tags = ["administration interface", "api"]
+++

An [API](https://en.wikipedia.org/wiki/Application_programming_interface) (or Application Programming Interface) is a programming interface used to automate how you manage your resources.

Our [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API lets you manage your alwaysdata resources (accounts, e-mails, databases, etc.) from your code.

{{% notice info %}}
The API does not work if you have activated two-factor authentication on your profile.
{{% /notice %}}

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

`APIKEY` to replace per the API token, `foo` per the account name and `1234` per the site ID.

## Find out more

- [Use](api/usage)
- [Examples](examples)
- [Resources](api/resources)
