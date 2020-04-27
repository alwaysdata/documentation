+++
title = "API"
pre = "<i class='fas fa-fw fa-plug'></i> "
weight = 80
tags = ["api"]
+++

An [API](https://en.wikipedia.org/wiki/Application_programming_interface) (or Application Programming Interface) is a programming interface used to automate how you manage your resources.

Our [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API lets you manage your alwaysdata resources (accounts, e-mails, databases, etc.) from your code.

## Address

|Version|Address|
|--- |--- |
|1.0|https://api.alwaysdata.com/v1/|

## Quick example

```
$ curl --basic --user APIKEY: https://api.alwaysdata.com/v1/mailbox/
```

## Find out more

- [Use]({{< relref "api/usage" >}})
- [Examples]({{< ref "examples" >}})
- [Resources]({{< relref "api/resources" >}})
