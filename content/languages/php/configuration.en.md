+++
title = "Configuring PHP"
hidden = true
layout = "man"
tags = ["php"]
+++

## Supported versions

||
|---|
|8.1, 8.0|
|7.4, 7.3, 7.2, 7.1, 7.0|
|5.6, 5.5, 5.4, 5.3, 5.2|
|4.4|

The default version can be changed from the alwaysdata administration, under **Environment > PHP**. This is the version that is especially used when you start `php`.

Versions are not necessarily [already installed]({{< ref "languages#versions" >}}).

## Error logs

You can view the Apache error logs from file `$HOME/admin/logs/apache/apache.log`. These logs sometimes comprise important information returned by PHP.

A [php.ini]({{< ref "languages/php/configuration">}}#parameters-php-ini) option lets you get PHP error logs by adding the following directives:

```ini
log_errors = On
error_log = /home/[myaccount]/[path_to_log_file]
```

## Parameters (php.ini)

By default, the `php.ini` file activates a number of essential extensions and defines some basic parameters. This file is accessible in read from the following location `$HOME/admin/config/php/php.ini`. Here is its content (for an account configured on PHP version 7.2):

```ini
; Core settings
max_execution_time = 120
max_input_time = 60
memory_limit = 256M

post_max_size = 256M
upload_max_filesize = 256M

output_buffering = 4096
expose_php = Off
default_socket_timeout = 10
date.timezone = "Europe/Paris"

mysql.default_socket = /run/mysqld/mysqld.sock

session.save_path = /home/sandbox/admin/tmp
upload_tmp_dir = /home/sandbox/admin/tmp

; Extensions
extension_dir = "/usr/alwaysdata/php/7.2.12/lib/php/extensions/no-debug-non-zts-20170718"

extension = ctype.so
extension = curl.so
extension = dom.so
extension = gd.so
extension = gettext.so
extension = iconv.so
extension = json.so
extension = mbstring.so
extension = openssl.so
extension = posix.so
extension = simplexml.so
extension = tokenizer.so
extension = xml.so
extension = xmlwriter.so
extension = xsl.so
extension = zip.so
extension = zlib.so

extension = mysqli.so
extension = pgsql.so
extension = pdo.so
extension = pdo_mysql.so
extension = pdo_pgsql.so

extension = fileinfo.so
extension = phar.so

; Zend extensions
zend_extension = /usr/alwaysdata/php/7.2.12/lib/php/extensions/no-debug-non-zts-20170718/opcache.so
```

To change this `php.ini`, go to the **Environment > PHP** section (or if you want to manage it at the website level in **Web > Sites**). All of the directives that you define will be added to the initial `php.ini` file and can therefore overwrite the default values. There is no limit to what you can define, every PHP option is accessible.

You can also create `.user.ini` files to only apply parameters to some directories.

## HTTP deployment

Managing PHP versions per site results in a higher RAM consumption per account. Websites cannot then share PHP processes. It is therefore recommended :
- to prioritize the management of PHP at the account level (Environment section),
- to use few different versions per account,
- if you have to use several and a certain number of sites use the same version, to group their php.ini via the global php.ini and to switch them on the PHP default version.
