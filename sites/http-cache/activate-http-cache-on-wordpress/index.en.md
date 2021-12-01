+++
title = "Activate the HTTP Cache on WordPress"
hidden = true
layout = "howto"
tags = ["cache", "http", "wordpress"]
+++

1. Install [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/) or [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) plugins in the WordPress admin console.

	For both plugins, caching must be enabled in their settings. Several parameters can be modified.

2. Activate the [HTTP cache]({{< ref "sites/http-cache" >}}) on the website via **Web > Sites > Edit the [site] - ⚙️ > Cache**.

3. Verify if the cache is activated:

- using `curl -I`:
```sh
$ curl -I https://httpcache.alwaysdata.net
HTTP/2 200 
date: Wed, 01 Dec 2021 14:51:58 GMT
server: Apache
vary: X-Forwarded-Proto,Accept-Encoding
last-modified: Wed, 01 Dec 2021 14:40:13 GMT
etag: "2d5a-5d216a6cd644a"
accept-ranges: bytes
referrer-policy: no-referrer-when-downgrade
pragma: public
cache-control: max-age=3600, public
content-type: text/html; charset=UTF-8
via: 2.0 alproxy
content-length: 11610
```
- once on the WordPress home page, open the developper panel of your browser, *Network* menu. Search on the header `Age`.

{{< fig "images/result.png" "" >}}

If your site returns the header `cache-control: max-age=0`, it is not cached.
