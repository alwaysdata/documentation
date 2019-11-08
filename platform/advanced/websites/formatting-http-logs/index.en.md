+++
title = "Formatting HTTP access logs Overview"
menuTitle = "Formatting HTTP logs"
layout = "man"
weight = 10
draft = false
+++

To customize the format of HTTP access logs, you must first choose a name for your customized log file. Enter a name of your choice in the **File name** field in the **Logs** menu of your website.
This file will be stored in the _~/admin/logs/http/_ directory.

The format of log lines is customizable in the **Format** field. This field accepts strings and a number of variables listed below.
The required syntax to see its value in the access log lines is <font color="red">{variable_name}</font>.

The default format is the following:

```
{request_hostname} {client_ip} - - [{completion_date:{%d/%b/%Y:%H:%M:%S %z}}] {request} {status} {response_size} {referer} {user_agent}
```

The log lines are displayed this way:

```
blog.alwaysdata.com 198.51.100.42 - - [17/Jul/2018:15:05:30 +0200] "GET / HTTP/1.1" 200 10975 "https://www.alwaysdata.com/fr/" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
```

## Available variables

Variables | Description
----|----
{client_ip} | IP address of the client who issued the request
{completion_date} | Date the request was served¹
{duration} | Time taken to serve the request in seconds
{peer_ip} | Peer IP address which sent the request (proxy or original client if applicable)
{protocol} | Request protocol scheme (http, https, ws)
{referer} | Value of the [Referer](https://en.wikipedia.org/wiki/HTTP_referer) request header relayed by the request
{request} | First line of the request
{request_header} | Request headers
{request_hostname} | Hostname requested
{request_method} | Used method (GET, POST, ...)
{request_path} | Path requested, including the query string value
{request_protocol} | Used protocol (HTTP/1.1, HTTP/2, ...)
{request_time} | Date the request was received¹
{response_header} | Response headers
{response_size} | Response size in bytes, HTTP headers excluded
{status} | Response status code (200, 301, 404, 500, ...)
{user_agent} | [User-Agent](https://en.wikipedia.org/wiki/User_agent#Use_in_HTTP) request header value forwarded by the request

----
¹ Can be formatted by following the [strftime](https://docs.python.org/3.6/library/datetime.html?highlight=strftime#strftime-strptime-behavior) syntax. _Examples: <font color="red">{completion\_date:{%d/%b/%Y}}</font> --> 16/Jul/2018, <font color="red">{completion\_date:{%H:%M:%S}}</font> --> 12:04:07_
