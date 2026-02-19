+++
title = "Activate the HTTP cache on WordPress"
linkTitle = "WordPress and HTTP cache"
tags = ["cache", "http", "wordpress"]
+++

1. Install the [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/) plugin in the WordPress administration interface. Activate it, then the cache in its settings:

{{< fig "images/activate-wp-cache.en.png" "" >}}

Numerous settings can be modified later.

2. Activate the [HTTP cache](/web-hosting/sites/http-cache) on the website in **Web > Sites > Modify the [site] - ⚙️ > Cache**.

3. Check whether the cache is activated:

- once on the WordPress home page, open the developer panel on your browser, under the *Network* menu. Search for the `Age` header.

{{< fig "images/result.en.png" "" >}}

- or by using `curl -I`:

```sh
$ curl -I https://httpcache.alwaysdata.net
HTTP/2 200 
date: Wed, 01 Dec 2021 16:04:55 GMT
server: Apache
vary: Accept-Encoding,Cookie

cache-control: max-age=3, must-revalidate

content-type: text/html; charset=UTF-8
via: 2.0 alproxy
```

If your site returns the header `cache-control: max-age=0`, it is not cached.
