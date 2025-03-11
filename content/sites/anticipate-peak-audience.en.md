+++
title = "Planning Audience Peaks"
layout = "howto"
hidden = true
tags = ["http", "site"]
+++

You are planning a TV/Radio presence that may cause more visits and you are not sure that your site can take the load? Here are some actions you can take ahead of time:

- **Isolate the site** by account - to avoid interfering with other sites as resources are shared at the account level,
- Enable the **[HTTP cache](sites/http-cache)** on your administration interface and/or at the application level using Memcached, Redis [^1] or any other software cache,
- Change to the latest possible language versions - to improve performance,
- Set a redirect to a **[static page](sites/static-files)** - using far less resources, these can be sent faster.

To observe the behavior of your application you can also run a **load test** (e.g. using `ab`).

## Example avec `ab`

We want to see if our commercial website could handle 300 000 visits per day.

*The following test makes 100 requests on the home page at a rate of 10 at a time (in parallel).*

```sh
$ ab -c 10 -n 100 https://www.alwaysdata.com/en/
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

Document Path:          /en/
Document Length:        3774 bytes

Concurrency Level:      10
Time taken for tests:   7.347 seconds
Complete requests:      100
Failed requests:        50
   (Connect: 0, Receive: 0, Length: 50, Exceptions: 0)
Non-2xx responses:      50
Total transferred:      4007050 bytes
HTML transferred:       3961700 bytes
Requests per second:    13.61 [#/sec] (mean)
Time per request:       734.658 [ms] (mean)
Time per request:       73.466 [ms] (mean, across all concurrent requests)
Transfer rate:          532.65 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:       82  121 114.3    100    1114
Processing:    33  521 813.1    212    4216
Waiting:       33  458 800.5     96    4094
Total:        120  642 816.0    320    4318

Percentage of the requests served within a certain time (ms)
  50%    320
  66%    638
  75%    813
  80%    878
  90%   1480
  95%   2318
  98%   4313
  99%   4318
 100%   4318 (longest request)

```

The important information is: `Requests per second:    13.61 [#/sec] (mean)`.

300,000 visits in 10 hours (small day) corresponds to 8.3 requests per second. The current configuration is therefore compatible.

- [Documentation for ab](https://httpd.apache.org/docs/2.4/programs/ab.html)

## Links

- Two outside load tests:
    - [Loader.io](https://loader.io/)
    - [K6](https://k6.io/)
  

[^1]: These two applications are available on [Private Cloud](accounts/billing/private-cloud-prices) environments.
