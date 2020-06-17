+++
title = "Removing a Site Infection"
layout = "howto"
weight = 90
tags = ["infection", "malware", "site"]
+++

A site infection may show up in different ways:

- sending spam,
- malware attacking other servers,
- phishing,
- redirecting to a third party site.

When alwaysdata support detects an infection it will block the malware and contact the user so that they can take the necessary action.

Most attacks are performed by automatic scripts. Therefore reinstalling the site and its extensions in the same state is not recommended or a new infection may take place in the following hours. Here are the actions that should be taken:

## 1. Delete the infected files

The following commands, presented for a site that uses PHP, are run via [SSH]({{< ref "remote-access/ssh" >}}) in your site's directory.

-   Check that no redirects or other directives have been added without your knowledge by checking the content of your `.htaccess` files. There should normally be only one located in the root of your site:
    ```
    find . -type f -name .htaccess
    ```

-   Search your files looking for [malware](https://en.wikipedia.org/wiki/Malware):
  ```
  find . -type f -name "*.php" | xargs grep base64_decode
  ```
  ```
  find . -name "*.php" | xargs grep eval
  ```

The infection looks like an alphanumeric succession run with the PHP
[eval](https://www.php.net/manual/en/function.eval.php) function:

```php
eval(gzinflate(base64_decode("FZy3sqMKFkX/ZaL3igDvaiI8QngPyRTee8/Xj24n3UFfCcE5e6+li1ScSf9P9TZj2Sd78U+abAWB/S8vsikv/vmPGL9ie7zfvQtBPE2Nzt4HaPd3Q0M1RB6eMYgHwFxCOF+T7/ppow3C7Tl5m9bcQWIs4uYlcw4Envy7f1QeBO4UpzkUACLAO8UvWkhraTtMMWF5rcCGA10u37A0klvx9GzqtUvc2arSuDhOsuvsRdbfTEW1C2IEAhBYr5uEHE/e4voIvKAhvBQJVQg0FD6i6KITcQ97cKjF7dSikH5jVZkgtqk/WoMZgF7NJmjon4izeYBw1d9Ll3Avr5O3g3LzoM192DV8f0tn/FJGIyGRo92...")));
```

This succession, encoded in base64, is simply a PHP script that will be
run when the page is called up. You can therefore decode this succession
to understand what the hacker is attempting to do:

```php
echo gzinflate(base64_decode("FZy3sqMKFkX/ZaL3igDvaiI8QngPyRTee8/Xj24n3UFfCcE5e6..."));
```

or:

```
find . -name "*.php" -print0 | xargs -0 grep eval
```

```php
$sF="PCT4BA6ODSE_";$s21=strtolower($sF[4].$sF[5].$sF[9].$sF[10].$sF[6]...
```
    
```php
$qV="stop_";$s20=strtoupper($qV[4].$qV[3]...
```

All of these files must be **deleted**.

-   Inspect your sources looking for hidden folders comprising a copy of the previously deleted malware:
    
    ```
    find . -type d -name ".*"
    ```

-   List the files that have been changed during the last 24 hours (1 being the number of the day):

    ```
    find . -type f -mtime -1 -print
    ```

-   Check the integrity of your database by scanning the latest records.

## 2. Looking for the breach

Depending on the date when the files were created, their name and their calls, it is possible to find the permissive URL called up. To do this, go through the POST requests in your Apache logs located in directory `$HOME/admin/logs/http`:

```
grep POST $HOME/admin/logs/http/[year]/http-[date].log[.gz]
```

Examples of suspect calls:

```
domain.tld 37.139.47.91 - - [23/Nov/2013:09:13:37 +0100] "POST /wp-content/themes/twentythirteen/404.php?pwd HTTP/1.0" 200 4598 "-" "Mozilla/5.0 
domain.tld 81.27.32.147 - - [23/Nov/2013:03:19:16 +0100] "POST //wp-content/themes/lightspeed/framework/_scripts/valums_uploader/php.php HTTP/1.1" 200 100 "-" "-"
domain.tld 31.184.244.18 - - [31/May/2013:02:12:37 +0200] "POST /templates/beez/7c31.php HTTP/1.1" 200 - "-" "-"
```

The name of the files, POST calls to URLs that do not contain any processing, are all indications that allow you to find the first HTTP request that is the origin of the infection.

{{% notice tip %}}
If the infection is a **recent** one and the search for the infection a complex one, then it is possible to work from a [backup]({{< ref "backups" >}}).
{{% /notice %}}

## 3. Deleting infection vehicles

- **Regularly update** the application, its plugins and themes,
- Delete all idle plugins and themes,
- Keep informed on reports of bugs and security breaches relating to applications/plugins before installing them,
- Implement the [web application firewall]({{< ref "sites/waf">}}),
- Change the prefix of the table names in your database (e.g. for WordPress *wp_*),
- Delete the readme.txt file at the root of your application,
- Delete any users created by default,
- Protect yourself from [hotlinking](https://en.wikipedia.org/wiki/Inline_linking) by adding the following to your .htaccess file:
    ```
    # Activating Rewrite mode
    RewriteEngine on
    RewriteCond %{HTTP_REFERER} !^$
    
    # Requests from your domain are allowed
    RewriteCond %{HTTP_REFERER} !^http(s)?://(www.)?yourdomain.com [NC]
    
    # Permission to use the content by search engines
    RewriteCond %{HTTP_REFERER}  !search?q=cache               [NC]
    RewriteCond %{HTTP_REFERER}  !google.                      [NC]
    
    # Return an alternative image if yours are used abusively
    RewriteRule .(gif|jpg|png)$ http://domain.tld/hotlink.jpg  [R,NC,L]
    ```
- Other filtering rules against XSS, HTTP redirects and PHP variable
    changes:
    ```
    RewriteEngine On
    RewriteCond %{REQUEST_METHOD} (GET|POST) [NC]
    RewriteCond %{QUERY_STRING} ^(.*)(%3C|<)/?script(.*)$ [NC,OR]
    RewriteCond %{QUERY_STRING} ^(.*)(%3D|=)?javascript(%3A|:)(.*)$ [NC,OR]
    RewriteCond %{QUERY_STRING} ^(.*)document.location.href(.*)$ [OR]
    RewriteCond %{QUERY_STRING} ^(.*)base64_encode(.*)$ [OR]
    RewriteCond %{QUERY_STRING} ^(.*)GLOBALS(=|[|%[0-9A-Z]{0,2})(.*)$ [OR]
    RewriteCond %{QUERY_STRING} ^(.*)_REQUEST(=|[|%[0-9A-Z]{0,2})(.*)$ [OR]
    RewriteRule (.*) - [F]
    ```

---
## Links

  - [Sucuri](http://sucuri.net/): scans and identifies potential breaches in your site,
  - [Patchman](https://www.patchman.co/): neutralizes malware are eliminates breaches,
  - [Google Webmaster Tools](https://www.google.com/webmasters/tools/home): provides detailed reports on your site's visibility.
