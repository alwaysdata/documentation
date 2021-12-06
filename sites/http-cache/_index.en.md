+++
title = "HTTP Cache"
weight = 50
layout = "man"
tags = ["cache", "http", "site"]
+++

The HTTP cache temporarily stores web documents (e.g. HTML pages, CCS documents, images) to reduce the latency induced by the server when it needs to serve up a page and/or reduce its workload.

- [Use the HTTP cache]({{< ref "sites/http-cache/use-http-cache" >}})

{{% notice note %}}
While the HTTP cache is appropriate in most cases, you can also [run Varnish]({{< ref "sites/user-program" >}}) on your alwaysdata account.
{{% /notice %}}

## Concept

When a user attempts to access a page, the corresponding web server will generate a page and send it over the network. Then the cache intercepts the response to store it in its local memory before serving it up to the user.

{{< fig "http-cache_part-1.en.png" "Caching a resource when it is requested" >}}

When a request for the same page is sent by the same or another user, the cache will deliver it as it now has a copy of the requested resource. The web server will no longer be queried.

{{< fig "http-cache_part-2.en.png" "Returning a resource cached previously" >}}

## Implementation

The standard's specifications are set out in [RFC 7234](https://tools.ietf.org/html/rfc7234). The HTTP *PURGE* function is also proposed to delete an entry from the cache by calling it via its URL.

---
Icons: The Noun Project
