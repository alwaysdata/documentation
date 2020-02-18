+++
title = "Formating HTTP Logs"
layout = "man"
hidden = true
tags = ["http", "site"]
+++

To customize the format of the HTTP access logs you need to first choose a name for your custom log file. To do this, fill-in the name of your choice in the **Filename** field in the **Logs** tab in your site (**Web > Sites** menu).

{{< fig "images/admin-panel_add-site-logs.en.png""Add a site: HTTP logs" >}} 

This file will be stored in directory `$HOME/admin/logs/http/`.

The log lines are customized in the **Format** field. This field accepts character strings as well as a number of variables listed below. The syntax to use is `{variable_name}` to see its value appear in the access log lines.

The default format is as follows:

```
{request_hostname} {client_ip} - - [{completion_date:{%d/%b/%Y:%H:%M:%S %z}}] {request} {status} {response_size} {referer} {user_agent}
```

The log lines are displayed as follows:

```
blog.alwaysdata.com 198.51.100.42 - - [17/Jul/2018:15:05:30 +0200] "GET / HTTP/1.1" 200 10975 "https://www.alwaysdata.com/fr/" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
```

## Variables available

|Variables|Description|
|--- |--- |
|{client_ip}|The IP address of the client that sent the request|
|{completion_date}|The date when the request was served [^1]|
|{duration}|Time taken to serve the request in seconds|
|{peer_ip}|IP address of the peer that sent the request (proxy or original client where applicable)|
|{protocol}|Request protocol mechanism (http, https, ws)|
|{referer}|Value of the Referer header sent by the request|
|{request}|First request line|
|{request_header}|Request headers|
|{request_hostname}|Host name required in the request|
|{request_method}|Method used in the request (GET, POST, etc.)|
|{request_path}|Path required in the request, including the query string|
|{request_protocol}|Protocol used in the request (HTTP/1.1, HTTP/2, etc.)|
|{request_time}|The date when the request was received [^1]|
|{response_header}|Response headers|
|{response_size}|Response size in bytes, excluding the HTTP headers|
|{status}|Response status code (200, 301, 404, 500, etc.)|
|{user_agent}|Value of the User-Agent header sent by the request|


[^1]: May be formatted in line with the [strftime](https://docs.python.org/fr/3.6/library/datetime.html?highlight=strftime#strftime-strptime-behavior) syntax. *Examples:* `{completion_date:{%d/%b/%Y}}` *→ 16/Jul/2018,* `{completion_date:{%H:%M:%S}}` *→ 12:04:07*
