+++
title = "Drupal"
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

## Recommendations

It is important to follow these instructions to avoid infection:

- regularly update Drupal and its plugins,
- keep informed on reports of bugs and security breaches relating to plugins before installing them,
- implement the [specific profile]({{<ref "sites/use-waf#profiles-available">}}) of our WAF,
- delete idle themes and plugins,
- customize the prefix of the table names in your database,
- delete the readme.txt file at the root of your application,
- delete any users created by default,
- [other rules]({{<ref "sites/clean-up-a-site">}}#3-delete-infection-sources).

## Troubleshooting

### CSS/JS files precompression

If you are using a Drupal version prior to **8.9** with CSS and JS files precompression, you will have to [apply this patch](https://www.drupal.org/files/issues/2019-01-02/3023545-mod_brotli.patch) to fix [a bug related to Brotli compression](https://www.drupal.org/project/drupal/issues/2960808).
