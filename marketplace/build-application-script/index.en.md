+++
title = "Creating Your Own Installation Script"
layout = "man"
hidden = true
+++

Any user may propose a script in the *language of their choice* allowing users to install their application. This script will be run with the *permissions for the account where installation took place* and must start with a YAML format comment.

{{< fig "images/create-script.en.png" "Create an application script">}}

Scripts comprise two parts:

- the YAML format **dataset** for configuring the site and requesting the information required by the script (the `FORM_*` variables) from the user. It can be split into three:

    - **site**: refer to the [API documentation](https://api.alwaysdata.com/v1/site/doc/) that restates all of the possible options.
    - **database**: mysql, postgresql, mongodb, couchdb, rabbitmq.
    - **form**: all of the variables requested from the user creating the site. Example: site title, administrator ID, e-mail address, administrator's name, etc.
- the actual **script**.

## Environment variables

|Variables|Description|Example|
|--- |--- |--- |
|USER|Account name|`foo`|
|HOME|Account root for the script|`/home/foo/example/`|
|APPLICATION_NAME|Application name||
|INSTALL_URL|Site address|`foo.example.net/test`|
|INSTALL_URL_PATH|Site root (base URL)|`/test`|
|INSTALL_URL_HOSTNAME|Site host name|`foo.example.net`|
|INSTALL_PATH_RELATIVE|Relative path from the account root|`/example/`|
|INSTALL_PATH|Absolute path|`/home/foo/example/`|
|DATABASE_USERNAME|Database connection user (managed automatically)|`foo_*`|
|DATABASE_PASSWORD|User password for database connection (managed automatically)||
|DATABASE_NAME|Site database (managed automatically)|`foo_*`|
|DATABASE_HOST|Host name for database server connection|`mysql-foo.alwaysdata.net` (base MySQL)|
|SMTP_HOST|Host name for mail sending server connection|`smtp-foo.alwaysdata.net`|
|RESELLER_DOMAIN|Root domain used by the hosting provider|`alwaysdata.net`|
|FORM_*|Other variables explicitly requested from the user in the "form" section in the YAML dataset||
|PORT|Specific port for User program, Node.js or Elixir type sites||
|0.0.0.0 or IP|Specific port for User program, Node.js or Elixir type sites (prefer 0.0.0.0 to IP)||

If other variables are needed, open a [support ticket](https://admin.alwaysdata.com/support/add/).

### Notes and tips

- The script needs to start with `set -e` to stop it when it fails,
- Specify the **version of the language used** (PHP, Python, Ruby, Node.js® and Elixir). This is recommended to avoid being dependent on the default account configuration,
- The root directory specified by the user (`INSTALL_PATH`) serves as the root for a script (an `export HOME=` is run by default),
- It is preferable to request a minimum amount of information to avoid making the script an exhaustive one. *Users may change the configuration of their application later on.*
- To add an **optional** form field, set the `required` option to `false`. If the user does not specify anything, the field remains blank.

{{% notice note %}}
To make a script accessible to alwaysdata platform users, check the box to make it *public*.
**Any script marked as public will at least be checked by the alwaysdata team.**
{{% /notice %}}

{{% notice tip %}}
A *deposit URL* may be provided to make maintenance easier. In this case, once the changes are pushed to the deposit all that remains is to update the application via the button provided.
{{% /notice %}}

## Example - WordPress installation script

    #!/bin/bash
    
    # site:
    #     type: php
    #     path: '{INSTALL_PATH_RELATIVE}'
    #     php_version: '7.2'
    # database:
    #     type: mysql
    # form:
    #     language:
    #         type: choices
    #         label: Language
    #         initial: en_US
    #         choices:
    #             de_DE: German
    #             en_US: English
    #             es_ES: Spanish
    #             fr_FR: French
    #             it_IT: Italian
    #     title:
    #         label: Blog title
    #         max_length: 255
    #     email:
    #         type: email
    #         label: Email
    #     admin_username:
    #         label: Administrator username
    #         regex: ^[ a-zA-Z0-9.@_-]+$
    #         max_length: 255
    #     admin_password:
    #         type: password
    #         label: Administrator password
    #         max_length: 255
    
    set -e
    
    # https://wp-cli.org
    
    # Recovering the tool
    wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    
    # Creating WordPress
    php wp-cli.phar core download --locale="$FORM_LANGUAGE" --path="$INSTALL_PATH"
    php wp-cli.phar config create --dbname="$DATABASE_NAME" --dbuser="$DATABASE_USERNAME"
    --dbpass="$DATABASE_PASSWORD" --dbhost="$DATABASE_HOST" --path="$INSTALL_PATH"
    php wp-cli.phar core install --url="$INSTALL_URL" --title="$FORM_TITLE" --admin_user=
    "$FORM_ADMIN_USERNAME" --admin_password="$FORM_ADMIN_PASSWORD" --admin_email="$FORM_EMAIL"
    --path="$INSTALL_PATH"
    
    # Cleaning the environment
    rm -rf .wp-cli wp-cli.phar
