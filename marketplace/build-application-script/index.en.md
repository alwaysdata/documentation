+++
title = "Build its own script Overview"
menuTitle = "Build its own script"
layout = "man"
weight = 5
draft = false
+++

Every user can propose a script written in the *langage of its choice* to allowing to users to install its application. This script will be executed with the *rights of the account on which the installation takes place* and must start with a comment in YAML format.

Scripts includes two parts:

* the **dataset** in YAML format, to configure the website and ask the user needed information for the script (FORM_* variables). It can be divided in three:
    * **site**: check the [API documentation]("API") which resumes all possible options.
    * **database**: mysql, postgresql, mongodb, couchdb, rabbitmq.
    * **form**: all variables asked to the user who create the website. Example: site title, administrator login, email address, administrator lastname/firstname...

* the **script** itself.

## Environment variables


|Variables|Description|Example|
|----|----|----|
|USER|Account name|foo|
|HOME|Account root for the script|/home/foo/example/|
|APPLICATION_NAME|Application name||
|INSTALL\_URL|Website address|foo.example.net/test|
|INSTALL\_URL\_PATH|Website root (base URL)|/test|
|INSTALL\_URL\_HOSTNAME|Website hostname|foo.example.net|
|INSTALL\_PATH\_RELATIVE|Relative path from the account root|/example/|
|INSTALL_PATH|Absolute path|/home/foo/example/|
|DATABASE\_USERNAME|User login to the database (automatically generated)|foo\_\*|
|DATABASE\_PASSWORD|Password of the user login to the database (automatically generated)||
|DATABASE\_NAME|Website database (automatically generated)|foo\_\*|
|DATABASE\_HOST|Database server hostname|mysql-foo.alwaysdata.net (MySQL database)|
|SMTP\_HOST|Outgoing mail server hostname|smtp-foo.alwaysdata.net|
|RESELLER\_DOMAIN|Root domain use by your provider|alwaysdata.net|
|FORM\_\*|Other variables explicitly asked to users in the "form" section of the YAML dataset||
|PORT|Specific port for websites using User program, Node.js or Elixir types||
|0.0.0.0 or IP|Specific IP for websites using User program, Node.js or Elixir types (prefer 0.0.0.0 to IP)||


If other variables are needed, open a [support ticket](https://admin.alwaysdata.com/support/add/ "support").

## Notes and tips

* The script must start with `set -e` to stop when it failed;
* It's advocated to indicate the **used langage version** (PHP, Python, Ruby, Node.js and Elixir) to avoid to depend of the environment default configuration;
* The root directory enter by the user (INSTALL_PATH) serves as root for the script (an <font color=red>export HOME=</font> is executed);
* It is wise to ask a minimal number of informations to avoid to make the script exhaustive. _Users will be able to adjust their application configuration later on._
* To add a **optional** form field, you need to put the <font color=red>required</font> option to <font color=red>false</font>. If the user indicates nothing the field will remain empty.

> To make its script accessible to users of the alwaysdata platform you need to check the box to make it _public_. **Any script tagged as public will be verified by alwaysdata team.**
>
> A _URI source_ can be given to facilitate maintenance. In that case, once changes are pushed in the repository you just need to update the application via the button provided for this purpose.


## Example - WordPress installation script

```
#!/bin/bash

# site:
#     type: php
#     path: '{INSTALL_PATH_RELATIVE}'
#     php_version: '7.3'
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

# Tools collection
wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar

# WordPress creation
php wp-cli.phar core download --locale="$FORM_LANGUAGE" --path="$INSTALL_PATH"
php wp-cli.phar config create --dbname="$DATABASE_NAME" --dbuser="$DATABASE_USERNAME" --dbpass="$DATABASE_PASSWORD" --dbhost="$DATABASE_HOST" --path="$INSTALL_PATH"
php wp-cli.phar core install --url="$INSTALL_URL" --title="$FORM_TITLE" --admin_user="$FORM_ADMIN_USERNAME" --admin_password="$FORM_ADMIN_PASSWORD" --admin_email="$FORM_EMAIL" --path="$INSTALL_PATH"

# Environment cleaning
rm -rf .wp-cli wp-cli.phar
```

