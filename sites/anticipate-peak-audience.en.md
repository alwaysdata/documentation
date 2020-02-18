+++
title = "Planning Audience Peaks"
layout = "howto"
hidden = true
tags = ["http", "site"]
+++

You are planning a TV/Radio presence that may cause more visits and you are not sure that your site can take the load? Here are some actions you can take ahead of time:

- **Isolate the site** by account - to avoid interfering with other sites as resources are shared at the account level,
- Enable the **[HTTP cache]({{< ref "sites/http-cache" >}})** on your administration interface and/or at the application level using Memcached, Redis [^1] or any other software cache,
- Change to the latest possible language versions - to improve performance,
- Set a redirect to a **[static page]({{< ref "sites/static-files">}})** - using far less resources, these can be sent faster.

To observe the behavior of your application you can also run a **load test** (e.g. using `ab`).

## Links

- [Documentation for ab](https://httpd.apache.org/docs/2.4/programs/ab.html)
- Two outside load tests:
    - [Loader.io](https://loader.io/)
    - [Load impact](https://loadimpact.com/)
  

[^1] These two applications are available on VPS and dedicated
environments.
