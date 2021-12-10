+++
title = "Using Monitoring Probes"
layout = "howto"
hidden = true
tags = ["http", "dedicated server", "gold server", "site"]
+++

For our customers who have a dedicated server, it is possible to program monitoring probes to check that a website is working properly. If a problem is observed by a probe, an alert is sent to our team.

## Configuration

The probe configuration is used to set various options:

- address: the precise address that will be monitored by the probe, possibly via an HTTP identification,
- notification: when to trigger an alert and how to contact the person in charge of the application,
- response: checking the content of the HTTP response with a text (by default the probe checks that the HTTP response is a type 2xx).

## Responsibility

Work triggered by probes is charged for if the application is responsible for it.

Examples (a non-exhaustive list):

  - any problem resulting from incorrect server use by the customer,
  - abnormal behavior by the customer's applications,
  - any performance problem not caused by a server or network malfunction,
  - server resource saturation by customer applications,
  - any network malfunction whose origin is not alwaysdata's responsibility.

{{% notice note %}}
A probe costs 10€ per month and any intervention triggered by a breakdown for which we are not responsible is charged €100 (excluded VAT).
{{% /notice %}}
