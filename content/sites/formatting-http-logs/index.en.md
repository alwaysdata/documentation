+++
title = "Formating HTTP Logs"
layout = "man"
hidden = true
tags = ["http", "site"]
+++

Go to the **Logs** tab of your site (menu **Web > Sites**) to customize the HTTP access logs; stored afterwards in the `$HOME/admin/logs/http/` directory.

{{< fig "images/admin-panel_add-site-logs_standard.en.png" "" >}}

## Types of format

- *Standard* format[^1]:
```txt
{request_hostname} {client_ip} - - [{completion_date:%d/%b/%Y:%H:%M:%S %z}] "{request}" {status} {response_size} "{referer}" "{user_agent}"
```

> Example:
```sh
blog.alwaysdata.com 198.51.100.42 - - [17/Feb/2022:14:19:01 +0100] "GET /2022/02/01/2022-au-rapport/ HTTP/2.0" 200 16634 "https://blog.alwaysdata.com/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:96.0) Gecko/20100101 Firefox/96.0"
```

- *Advanced* format:
```txt
{request_hostname} {client_ip} - - [{completion_date:%d/%b/%Y:%H:%M:%S %z}] "{request}" {status} {response_size} "{referer}" "{user_agent}" {protocol} {duration}
```

> Example:
```sh
blog.alwaysdata.com 198.51.100.42 - - [17/Feb/2022:14:19:01 +0100] "GET /2022/02/01/2022-au-rapport/ HTTP/2.0" 200 16634 "https://blog.alwaysdata.com/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:96.0) Gecko/20100101 Firefox/96.0" https 0.128109
```

{{% notice tip %}}
To extract long requests, use the following command: `awk '{print $NF,$0}' $HOME/admin/logs/http/[date]/[fichier].log | sort -n | cut -f2- -d' '`
{{% /notice %}}


- *Customized* format. The log lines are customized in the **Format** field. This field accepts character strings as well as a number of variables listed below.

{{< fig "images/admin-panel_add-site-logs_custom.en.png" "" >}}

The syntax to use is `{variable_name}` to see its value appear in the access log lines.

### Variables available

| Variables          | Description                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------- |
| {client_ip}        | The IP address of the user that sent the request                                         |
| {completion_date}  | The date when the request was served [^2]                                                |
| {duration}         | Time taken to serve the request in seconds                                               |
| {peer_ip}          | IP address of the peer that sent the request (proxy or original user where applicable)   |
| {protocol}         | Request protocol mechanism (http, https, ws)                                             |
| {referer}          | Value of the Referer header sent by the request                                          |
| {request}          | First request line                                                                       |
| {request_header}   | Request headers [^3]                                                                     |
| {request_hostname} | Host name required in the request                                                        |
| {request_method}   | Method used in the request (GET, POST, etc.)                                             |
| {request_path}     | Path required in the request, including the query string                                 |
| {request_protocol} | Protocol used in the request (HTTP/1.1, HTTP/2, etc.)                                    |
| {request_time}     | The date when the request was received [^2]                                              |
| {response_header}  | Response headers [^3]                                                                    |
| {response_size}    | Response size in bytes, excluding the HTTP headers                                       |
| {ssl_version}      | Version of the protocol used for the SSL connection                                      |
| {status}           | Response status code (200, 301, 404, 500, etc.)                                          |
| {user_agent}       | Value of the User-Agent header sent by the request                                       |

## Specific cases

To display the user IP behind [Cloudflare](https://support.cloudflare.com/hc/en-us/articles/200170986-How-does-Cloudflare-handle-HTTP-Request-headers-) use `{request_header:cf-connecting-ip}`.
 
[^1]: [Combined Log Format with vhosts](https://httpd.apache.org/docs/2.4/logs.html)
[^2]: May be formatted in line with the [strftime](https://docs.python.org/3.6/library/datetime.html?highlight=strftime#strftime-strptime-behavior) syntax. *Examples:* `{completion_date:%d/%b/%Y}` *→ 16/Jul/2018,* `{completion_date:%H:%M:%S}` *→ 12:04:07*
[^3]: Only one header can be specified. E.g.: `{request_header:authorization}`, `{response_header:age}` (to be used with the [HTTP cache]({{< ref "sites/http-cache" >}}))
