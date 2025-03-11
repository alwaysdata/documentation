+++
title = "WordPress"
layout = "man"
hidden = true
tags = ["cms", "wordpress"]
+++

- [Activate HTTP cache on WordPress](sites/activate-http-cache-on-wordpress)

## Transfer from another hosting provider

You will need to change:

- the *siteurl*, *home* settings in the `_options` table in the database,
- the `$HOME/path/to/the/application/wp-config.php` (located at the application root).

## Recommendations

Due to its high profile, it is a target of choice for hackers. Consequently, it is important to follow these recommendations:

- regularly update *WordPress* and its plugins,
- keep informed on reports of bugs and security breaches relating to plugins before installing them,
- implement the [specific profile](sites/waf#available-profiles) of our WAF,
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
- [other rules](sites/clean-up-a-site#3-delete-infection-sources).

---
## Useful links

- [iThemes Security](http://wordpress.org/plugins/better-wp-security/): improves the security of your WordPress site
- [WordFence](https://wordpress.org/plugins/wordfence/): scans your site looking for breaches, WAF and other tools for securing your WordPress interface
