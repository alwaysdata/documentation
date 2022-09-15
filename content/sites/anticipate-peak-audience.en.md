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

## Example avec `ab`

We want to see if our commercial website could handle 300 000 visits per day.

*The following test makes 100 requests on the home page at a rate of 10 at a time (in parallel).*

```sh
$  ab -c 10 -n 100 https://www.alwaysdata.com/
This is ApacheBench, Version 2.3 <$Revision: 1843412 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking www.alwaysdata.com (be patient).....done


Server Software:        nginx
Server Hostname:        www.alwaysdata.com
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES128-GCM-SHA256,2048,128
Server Temp Key:        X25519 253 bits
TLS Server Name:        www.alwaysdata.com

Document Path:          /
Document Length:        0 bytes

Concurrency Level:      10
Time taken for tests:   5.046 seconds
Complete requests:      100
Failed requests:        0
Non-2xx responses:      100
Total transferred:      32600 bytes
HTML transferred:       0 bytes
Requests per second:    19.82 [#/sec] (mean)
Time per request:       504.609 [ms] (mean)
Time per request:       50.461 [ms] (mean, across all concurrent requests)
Transfer rate:          6.31 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        2    4   3.3      3      15
Processing:     6  284 924.3      8    4515
Waiting:        6  284 924.3      8    4515
Total:          8  288 926.8     11    4530

Percentage of the requests served within a certain time (ms)
  50%     11
  66%     12
  75%     14
  80%     15
  90%    530
  95%   3037
  98%   4515
  99%   4530
 100%   4530 (longest request)
```

The important information is: `Requests per second:    19.82 [#/sec] (mean)`.

300,000 visits in 10 hours (small day) corresponds to 8.3 requests per second. The current configuration is therefore compatible.

- [Documentation for ab](https://httpd.apache.org/docs/2.4/programs/ab.html)

## Links

- Two outside load tests:
    - [Loader.io](https://loader.io/)
    - [K6](https://k6.io/)
  

[^1]: These two applications are available on [Private Cloud]({{< ref "accounts/billing/private-cloud-prices" >}}) environments.
