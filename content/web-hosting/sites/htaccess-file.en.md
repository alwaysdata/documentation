+++
title = ".htaccess"
tags = ["apache", "http", "site"]
+++

The `.htaccess` files are Apache configuration files. Here are some examples of how they are most often used.

## Protecting a directory with a password

Use an ID and password to protect the access to file for certain users.

```
AuthName "Protected access"
AuthType Basic
AuthUserFile /absolute/path/to/.htpasswd
Require valid-user
```

The `$HOME` variable can be used to indicate the root of the account.

The `.htpasswd` contains the list of Id/password combinations allowed. It can be placed anywhere but it must not be readable from the outside.

To create this `.htpasswd` file:

```sh
$ htpasswd -c .htpasswd [user]
```

Replace `[user]` with the desired user name. The tool will prompt the user to enter the corresponding password twice.

## Restricting access to a directory

Block access to a directory by a domain or an IP address. You can also allow access to the directory only by selected IPs and/or domains.

```
order deny,allow 
deny from all 
allow from <IP address / domain>
require user <user login>
```

## Customize error messages (403, 404, etc.)

The following syntax will define custom error pages:

```
ErrorDocument 403 /errors/403.php 
ErrorDocument 404 /errors/404.php
```

This syntax is valid regardless of the [HTTP response code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

## Redirect

This function is available directly by declaring a [Redirect](/web-hosting/sites/redirect) site type, but you can do this using the `.htaccess` file:

```
Redirect 301 <Source file> <Destination file>
```

You can also redirect an entire directory as follows:

```
RedirectMatch 301 <Source directory>(.*) <Destination directory>/$1
```

## URL rewriting

*URL rewriting* comprises changing the link structure. This practice is often used to improve the indexing of your pages (and therefore your site referencing) by inserting keywords into the addresses.

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ {Fichier source}/$1 
```

## Possible errors

Any error linked to `.htaccess` will be visible in the `$HOME/admin/logs/apache/apache.log` file.

```
Invalid command '\xef\xbb\xbf', perhaps misspelled or defined by a module not included in the server configuration
```

The `.htaccess` file was not saved in the correct format. Please pay attention to saving your file without [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). This is generally an option in your editor.
