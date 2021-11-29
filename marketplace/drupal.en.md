+++
title = "Drupal"
layout = "man"
hidden = true
tags = ["cms"]
+++

[Drupal](https://www.drupal.org/) is a recognized PHP [CMS](https://en.wikipedia.org/wiki/Content_management_system) that is highly customizable and allows multi-channel publishing.

- [Documentation](https://www.drupal.org/documentation)

## Installation

The last version of *Drupal* is auto-installable via the administration interface: **Web > Sites > Install an application**.

- [Install script](https://admin.alwaysdata.com/site/application/script/12/detail/)

## Troubleshooting

### CSS/JS files precompression

If you are using a Drupal version prior to **8.9** with CSS and JS files precompression, you will have to [apply this patch](https://www.drupal.org/files/issues/2019-01-02/3023545-mod_brotli.patch) to fix [a bug related to Brotli compression](https://www.drupal.org/project/drupal/issues/2960808).

## Further information

We provide a [specific profile]({{<ref "sites/waf/use-waf#profiles-available">}}) on our WAF.
