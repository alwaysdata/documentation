+++
title = "RabbitMQ Management plugin"
layout = "man"
hidden = true
tags = ["database", "rabbitmq"]
+++

The [management plugin](https://www.rabbitmq.com/management.html) of RabbitMQ can be used on the [Private cloud]({{< ref "accounts/billing/private-cloud-prices" >}}). Only [management access](https://www.rabbitmq.com/management.html#permissions) will be available.

## Installation

Create a site of the type [Transparent redirection]({{< ref "sites/redirect" >}}) pointing on `https://localhost:15672`. In its vhost directives, add:

```txt
SSLProxyCheckPeerCN off
SSLProxyCheckPeerName off
```

You can connect with any of your RabbitMQ users.
