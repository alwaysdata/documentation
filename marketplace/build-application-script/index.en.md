+++
title = "Creating Your Own Installation Script"
layout = "man"
hidden = true
+++

Any user may propose a script in the *language of their choice* allowing users to install their application. This script will be run with the *permissions for the account where installation took place* and must start with a YAML format comment.

{{< fig "images/create-script.en.png" "Create an application script">}}

Scripts comprise two parts:

- the YAML format **dataset** for configuring the site and requesting the information required by the script (the `FORM_*` variables) from the user. It can be split into four:

    - **site**: refer to the [API documentation](https://api.alwaysdata.com/v1/site/doc/) that restates all of the possible options.
    - **database**: mysql, postgresql, couchdb, rabbitmq.
    - **requirements**: specify limiting requirements which blocks their installation on certain plans.
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
|INSTALL_PATH_RELATIVE|Relative path from the account root (without final slash)|`/example`|
|INSTALL_PATH|Absolute path (without final slash)|`/home/foo/example`|
|DATABASE_USERNAME|Database connection user (managed automatically)|`foo_*`|
|DATABASE_PASSWORD|User password for database connection (managed automatically)||
|DATABASE_NAME|Site database (managed automatically)|`foo_*`|
|DATABASE_HOST|Host name for database server connection|`mysql-foo.alwaysdata.net` (base MySQL)|
|SMTP_HOST|Host name for mail sending server connection|`smtp-foo.alwaysdata.net`|
|RESELLER_DOMAIN|Root domain used by the hosting provider|`alwaysdata.net`|
|FORM_*|Other variables explicitly requested from the user in the "form" section in the YAML dataset||
|PORT|Specific port for User program, Node.js, Elixir, .NET or Deno type sites||
|`::` or IP|Specific port for User program, Node.js, Elixir, .NET or Deno type sites (prefer `::` to IP)||

If other variables are needed, open a [support ticket](https://admin.alwaysdata.com/support/add/).

### Notes and tips

- The script needs to start with `set -e` to stop it when it fails,
- Specify the **version of the language used** (PHP, Python, Ruby, Node.js and Elixir). This is recommended to avoid being dependent on the default account configuration,
- The root directory specified by the user (`INSTALL_PATH`) serves as the root for a script (an `export HOME=` is run by default),
- It is preferable to request a minimum amount of information to avoid making the script an exhaustive one. *Users may change the configuration of their application later on.*
- To add an **optional** form field, set the `required` option to `false`. If the user does not specify anything, the field remains blank,
- *labels* are translatables. Depending on the language chosen in its alwaysdata administration interface, the customer can have the form questions in the specified languages.

{{% notice note %}}
To make a script accessible to alwaysdata platform users, check the box to make it *public*.
**Any script marked as public must be maintained and will at least be checked by the alwaysdata team.**
{{% /notice %}}

{{% notice tip %}}
A *deposit URL* may be provided to make maintenance easier. In this case, once the changes are pushed to the deposit all that remains is to update the application via the button provided.
{{% /notice %}}

## Example - Drupal installation script

```
#!/bin/bash

# site:
#     type: php
#     path: '{INSTALL_PATH_RELATIVE}/web'
#     php_version: '8'
# database:
#     type: mysql
# requirements:
#     disk: 140
# form:
#     language:
#         type: choices
#         label:
#             en: Language
#             fr: Langue
#         choices:
#             de: Deutsch
#             en: English
#             es: Español
#             fr: Français
#             it: Italiano
#     site_name:
#         label:
#             en: Site name
#             fr: Nom du site
#         max_length: 255
#     email:
#         type: email
#         label:
#             en: Email
#             fr: Email
#     admin_username:
#         label:
#             en: Administrator username
#             fr: Nom d'utilisateur de l'administrateur
#         regex: ^[ a-zA-Z0-9.@_-]+$
#         min_length: 5
#         max_length: 255
#     admin_password:
#         type: password
#         label:
#             en: Administrator password
#             fr: Mot de passe de l'administrateur
#         min_length: 5
#         max_length: 255

set -e

# https://www.drupal.org/docs/system-requirements

# Downloading the tool
COMPOSER_CACHE_DIR=/dev/null composer2 require drush/drush 10
COMPOSER_CACHE_DIR=/dev/null composer2 create-project drupal/recommended-project

# Install
# https://drushcommands.com
echo "y" | php vendor/drush/drush/drush.php si --db-url=mysql://"$DATABASE_USERNAME":"$DATABASE_PASSWORD"@"$DATABASE_HOST"/"$DATABASE_NAME" --account-name="$FORM_ADMIN_USERNAME" --account-pass="$FORM_ADMIN_PASSWORD" --account-mail="$FORM_EMAIL" --site-name="$FORM_SITE_NAME" --locale="$FORM_LANGUAGE" --root=recommended-project

if [ "$INSTALL_URL_PATH" != "/" ]
then
    sed -i "s|# RewriteBase /$|RewriteBase $INSTALL_URL_PATH|" recommended-project/web/.htaccess
fi

# Cleaning the environment
rm -rf .composer .drush .subversion vendor composer.json composer.lock

shopt -s dotglob
mv recommended-project/* .
rmdir recommended-project
```

The `disk:140` condition specifies that the Drupal installation requires 140 MB of disk space. The free offer is therefore too tight.
