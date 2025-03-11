+++
title = "Web Application Firewall (WAF)"
linkTitle = "WAF"
weight = 60
layout = "man"
tags = ["http", "site", "waf"]
+++

A [WAF](https://en.wikipedia.org/wiki/Web_application_firewall) examines every HTTP request to protect the web applications from the various attack vehicles to minimize infections. It may allow them to transit to the application or block them, alert, record whether they are deemed malevolent.

{{< fig "waf.en.png" "Path of an HTTP request faced with a WAF">}}

To configure the web application firewall, use the administration interface from **Web > Sites > Edit the [site] - ⚙️ > WAF**.

{{< fig "admin-panel_add-site-waf.en.png" "" >}}

## Available profiles

|Profile|Description|
|--- |--- |
|None|(by default)|
|Basic|Strict compliance with the HTTP protocol|
||Malicious robot detection|
|Strong|All of the basic profile rules|
||Remote Code Execution (RCE) detection|
||[Cross-Site Scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) type attack detection|
||[SQL injection](https://en.wikipedia.org/wiki/SQL_injection) detection|
|Complete|All of the strong profile rules|
||PHP language related attack detection|
||Local File Inclusion (LFI) attack detection|
||[Remote File Inclusion (RFI)](https://en.wikipedia.org/wiki/File_inclusion_vulnerability) attack detection|
|WordPress|All of the complete profile rules|
||WordPress specific rules|
|Drupal|All of the complete profile rules|
||Drupal specific rules|
|Nextcloud|All of the complete profile rules|
||Nextcloud specific rules|
|Dokuwiki|All of the complete profile rules|
||Dokuwiki specific rules|

{{% notice note %}}
Activating a protection profile will result in a slight increase in latency when processing an HTTP request. This latency, that represents a few milliseconds, increases with the degree of protection.
{{% /notice %}}

## Excluding rules

Depending on your usage case, **the way WAF behaves may be too restrictive**. It may also generate **false positives** during its analysis. If you consider its behavior unsuitable, then you have the option of excluding some of the rules used during the analysis.

Only specify the **number of the rule to exclude**. You will find this in the Sites logs (`$HOME/admin/logs/sites`). Example:

```
[08/Jan/2019:11:09:19 +0100] [waf] - <attack IP> "GET /?param=%22><script>alert(1);</script> HTTP/1.1" - 941100 | XSS Attack Detected via libinjection' with value: "><script>alert(1);</script>
[08/Jan/2019:11:09:19 +0100] [waf] - <attack IP> "GET /?param=%22><script>alert(1);</script> HTTP/1.1" - 941110 | XSS Filter - Category 1: Script Tag Vector' with value: <script>
[08/Jan/2019:11:09:19 +0100] [waf] - <attack IP> "GET /?param=%22><script>alert(1);</script> HTTP/1.1" - 941160 | NoScript XSS InjectionChecker: HTML Injection' with value: <script>
```

Consequently `941100`, `941110` and `941160` could be indicated.

{{% notice warning %}}
Be sure to progressively add rules as the exclusion is applicable to the entire site. This is because even if adding a large number of rules to exclude may improve browsing in some cases, protection will then be lessened in all other cases.
{{% /notice %}}

## Excluding paths

This kind of exclusion is used to **avoid any page analysis starting with the specified path**. By entering `/foo/` for example, `www.my-site.com/foo/` will be excluded from the analysis as will the query strings: `www.my-site.com/foo/?param=bar`. To also exclude `www.my-site.com/foo/bar` and `www.my-site.com/foo/script.php` add a *wildcard*: `/foo/*`. Lastly, to substitute any character (especially one that changes regularly), `?` may be used.

Therefore, to remove `www.my-site.com/foo/barBaz/` from the analysis, `foo` and `Baz` being ordinary *strings*, the path to exclude will be: `/*/bar?/`.

{{% notice tip %}}
Let us take the case of a WordPress type site that shows logs similar to those presented previously. If these rules are triggered when browsing the blog administration interface, then it is possible to exclude them permanently. The blog itself however will no longer be protected against these attack attempts. In this case, it is wiser to exclude the path (e.g. /wp-admin/*) so that all of your operations on the administration interface are no longer covered by the WAF analysis.
{{% /notice %}}

*[Query strings](https://en.wikipedia.org/wiki/Query_string)* can't be used with these exclusions.

## Excluding IPs

It may be worth excluding **safe IPs** (specific IPs or IPs ranges) to stop tools or people from being blocked.

Let us take the example of [WPScan](https://wpscan.com/): by activating it on a WordPress site, some of the requests that it runs may be blocked. Excluding rules or paths would not be effective as it observes numerous URLs. The solution is therefore to exclude the HTTP server that WPScan is installed on so that it can operate normally.

---
alwaysdata uses WAF ModSecurity and all of the [OWASP Modsecurity Core Rule Set](https://coreruleset.org/) (CRS).
