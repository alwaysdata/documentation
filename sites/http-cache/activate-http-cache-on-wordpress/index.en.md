+++
title = "Activate the HTTP Cache on WordPress"
hidden = true
layout = "howto"
tags = ["cache", "http", "wordpress"]
+++

1. Install [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/) plugin in the WordPress admin console. Activate it and enable caching in its settings:

{{< fig "images/activate-wp-cache.en.png" "" >}}
	
Several parameters can be modified afterwards.

2. Activate the [HTTP cache]({{< ref "sites/http-cache" >}}) on the website via **Web > Sites > Edit the [site] - ⚙️ > Cache**.

3. Verify if the cache is activated:

- once on the WordPress home page, open the developper panel of your browser, *Network* menu. Search on the header `Age`.

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
