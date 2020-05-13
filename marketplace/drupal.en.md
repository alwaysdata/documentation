+++
title = "Drupal"
menuTitle = "Drupal"
layout = "man"
tags = ["drupal"]
+++

## Installation

The last version of [Drupal](https://www.drupal.org/) is one of our applications that are auto-installable via the administration interface: **Web > Sites > Install an application**.

To install it yourself, follow the steps set out below:

- download the desired version from the [official site](https://www.drupal.org/download),
- uncompress the source files and place them in your alwaysdata account using [FTP]({{< ref "/remote-access/ftp" >}}),
- create your MySQL [database]({{< ref "/databases" >}}),
- create your [site]({{< ref "sites/add-a-site" >}}),
- access your application's web page to finalize its installation.

## Troubleshooting

### CSS/JS files precompression

If you are using a Drupal version prior to **9** with CSS and JS files precompression, you will have to [apply this patch](https://www.drupal.org/files/issues/2019-01-02/3023545-mod_brotli.patch) to fix [a bug related to Brotli compression](https://www.drupal.org/project/drupal/issues/2960808).
