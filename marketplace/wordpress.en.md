+++
title = "WordPress"
menuTitle = "WordPress"
layout = "man"
tags = ["wordpress"]
+++

WordPress is currently the most widely used open source [CMS](https://en.wikipedia.org/wiki/Content_management_system) thanks to its ease of deployment and the ability to add new functions to it, called [plugins](http://wordpress.org/plugins/) that are developed by the community.

## Installation

The last version of [WordPress](https://wordpress.org/) is one of our applications that are auto-installable via the administration interface: **Web > Sites > Install an application**.

To install it yourself, follow the steps set out below:

- download the desired version from the [official site](https://wordpress.org/download/),
- uncompress the source files and place them in your alwaysdata account using [FTP]({{< ref "/remote-access/ftp" >}}),
- create your MySQL [database]({{< ref "/databases" >}}),
- create your [site]({{< ref "sites/add-a-site" >}}),
- access your application's web page to finalize its installation.

If you migrate a WordPress application previously hosted by another
hosting provider, change:

- the *siteurl*, *home* settings in the `_options` table in the database,
- the `$HOME/path/to/the/application/wp-config.php` (located at the application root).

## Recommendations

Due to its high profile, it is a target of choice for hackers. Consequently, it is important to follow these recommendations:

- regularly update WordPress and its plugins,
- keep informed on reports of bugs and security breaches relating to plugins before installing them,
- implement the [specific profile]({{<ref "sites/use-waf#profiles-available">}}) of our WAF,
- choose a prefix other than *wp*_ for your table names. To change this value on a WordPress application that is already deployed, change the `_options` table and the `$HOME/path/to/the/application/wp_config.php` file path.
- delete idle themes and plugins,
- delete the readme.txt file at the root of your application (contains the current version of your WordPress file that is useful to find security breaches that can be used),
- edit the `$HOME/[path-to-the-application]/wp-content/themes/theme_name/functions.php` file path for your theme and add:

    ```php
    remove_action("wp_head", "wp_generator");
    ```

    This will mask the version number in the meta name generator. Add:

    ```php
    add_filter('login_errors',create_function('$a', "return null;"));
    ```

    To mask the connection errors.

- delete the "admin" account created by default,
- [other rules]({{<ref "sites/clean-up-a-site">}}#3-delete-infection-sources).

---
## Useful links

- [iThemes Security](http://wordpress.org/plugins/better-wp-security/): improves the security of your WordPress site
- [WordFence](https://wordpress.org/plugins/wordfence/): scans your site looking for breaches, WAF and other tools for securing your WordPress interface
