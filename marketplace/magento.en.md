+++
title = "Magento"
layout = "man"
tags = ["magento"]
+++

## Installation

Magento 2.4, [needing Elasticsearch](https://devdocs.magento.com/guides/v2.4/install-gde/system-requirements-tech.html), is *not compatible* with the shared PaaS.

Magento 2.3 is one of our applications that are auto-installable via the administration interface: **Web > Sites > Install an application**.

To install it yourself, follow its [documentation](https://magento.com/tech-resources/download).

## Recommandations

It is important to follow these instructions to avoid infection:

- regularly update Magento and its plugins,
- keep informed on reports of bugs and security breaches relating to plugins before installing them,
- implement the [complete profile]({{<ref "sites/use-waf#profiles-available">}}) of our WAF,
- delete idle themes and plugins,
- customize the prefix of the table names in your database,
- delete the readme.txt file at the root of your application,
- delete any users created by default,
- [other rules]({{<ref "sites/clean-up-a-site">}}#3-delete-infection-sources).
