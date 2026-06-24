---
title: Troubleshooting
eleventyNavigation:
  key: Websites - Troubleshooting
  parent: Websites
  order: 99
---

- [Removing a website infection](/en/docs/web-hosting/sites/troubleshooting/clean-up-a-site)
- [PHP](/en/docs/web-hosting/languages/php/troubleshooting)

## Connection

External services to check uptime: [Where's It Up?](https://wheresitup.com/), [Screenshot Guru](https://screenshot.guru/) (avec screenshot).


- [Connection to upstream refused, Connection to upstream skipped, Upstream not ready, Cannot parse upstream response](/en/docs/web-hosting/sites/troubleshooting/connection-to-upstream)

### This site can’t be reached / server DNS address could not be found

- Check if the domain exists, isn't expired or locked by the [ICANN](https://www.icann.org/fr) via a `whois`[^1],
- Check the [DNS resolution](https://www.dnswatch.info/) address.

Adding the domaine in the **Domains** menu is not enough to create a website. It is required to add the addresses in **Web > Sites**.

### 403 Forbidden

For websites using [Apache](/en/docs/web-hosting/sites/http-servers/configure-apache) it will per default look for a file named `index.html` or `index.php` for the home page. Rename your file or use the [DirectoryIndex](https://httpd.apache.org/docs/2.4/en/mod/mod_dir.html#directoryindex) directive in an `.htaccess`.

### 500 Errors

These errors may be returned by web servers (e.g. Apache), language runtime, or the application itself. Set debug logs to get more inputs on how to fix them.

### Empty page

An empty page without a message or error code usually indicates an application issue: the returned code by HTTP logs is *200*, stating that the request reached the application. Set debug logs to get more inputs on how to fix it.

## Apache logs

Logs are available in the `/home/[account]/logs/apache` directory.

### Broken pipe / Connection reset by peer

```txt
Broken pipe: [client X.X.X.X:0] mod_fcgid: ap_pass_brigade failed in handle_request_ipc function
(104)Connection reset by peer: [client X.X.X.X:0] mod_fcgid: ap_pass_brigade failed in handle_request_ipc function
```

The connection was broken by the client. For example, because the visitor closed his tab while the page was not fully loaded. **This is nothing unusual.**

### Premature end of script headers

```txt
Premature end of script headers: index.php, referer: https://example.org
```

The *server* stopped suddenly and Apache returned a 500 error. **This should not happen under normal circumstances.** This can be caused by many reasons (PHP bug, application bug, PHP process killed by the kernel, etc.).

You need to analyze all the logs at your disposal to find the cause: application logs, PHP logs...

[^1]: More information on [whois](https://en.wikipedia.org/wiki/Whois)
