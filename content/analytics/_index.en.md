+++
title = "Analytics"
pre = "<i class='fas fa-fw fa-chart-line'></i> "
layout = "man"
weight = 35
tags = ["http", "analytics", "site"]
+++

From the raw HTTP logs (`$HOME/admin/logs/http`) we generate visit statistics in *real time*. They are available in the **Web > Analytics** section.

{{< fig "stats-panel.en.png" "" >}}

You can view the graph by site or for an entire account.

A graph at the server level is available in the menu **HTTP > Analytics** for the [Private Cloud]({{< ref "accounts/billing/private-cloud-prices" >}}).

## Customizing statistics

Our platform is entirely based on HTTP logs and provides a simple interface. Customized settings cannot be added.

You will need to install your own web statistics measurement software : [Matomo](https://matomo.org/) can be installed via our [marketplace](https://www.alwaysdata.com/en/marketplace/). If you already have an alwaysdata account go to the menu **Web > Sites > Install an application** to install it.
