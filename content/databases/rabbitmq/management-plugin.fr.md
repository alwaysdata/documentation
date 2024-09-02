+++
url = "/fr/bases-de-données/rabbitmq/plugin-de-management"
title = "Plugin de management de RabbitMQ"
layout = "man"
hidden = true
tags = ["base de données", "rabbitmq"]
+++

Le [plugin de management](https://www.rabbitmq.com/management.html) de RabbitMQ peut être utilisé sur le [Cloud Privé]({{< ref "accounts/billing/private-cloud-prices" >}}). Seuls les [accès management](https://www.rabbitmq.com/management.html#permissions) seront disponibles.

## Mise en place

Créez un site de type [Reverse proxy]({{< ref "sites/add-a-site#configuration" >}}) pointant sur `https://localhost:15672`. Ajoutez dans ses directives du vhost :

```txt
SSLProxyCheckPeerCN off
SSLProxyCheckPeerName off
```

Vous pouvez vous y connecter avec n'importe lequel de vos utilisateurs RabbitMQ.
