+++
title = "How To use the Web Application Firewall (WAF)"
menuTitle = "Use the WAF"
date = 2019-10-07T15:56:12+02:00
layout = "howto"
weight = 10
draft = false
+++

To manage the Web Application Firewal, go on the administration interface in **Web > Sites > site details > WAF** menu. 

## Available profiles

|Profile|Description|
|----|----|
|None |(by default)|
|Basic|Force strict HTTP protocol|
||HTTP Detect malicious bots|
|Strong|Basic profile|
||Detect Remote Code Execution (RCE)|
||Detect [Cross-Site Scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks|
||Detect [SQL Injections](https://en.wikipedia.org/wiki/SQL_injection)|
|Full|Strong profile|
||Detect attacks for PHP language|
||Detect attacks by [Remote File Injection (RFI)](https://en.wikipedia.org/wiki/File_inclusion_vulnerability)|
|WordPress|Full profile|
||A WordPress’ specific ruleset|
|Drupal|Full profile|
||A Drupal’ specific ruleset|

## Exclude rules

Depending on your use case, the **WAF's behavior may be too restrictive**. It also can generate **false positives** during its analysis. If you think its behavior is not right, it is possible to exclude certain rules normally used during the analysis.

Only the **ID of the rules to exclude** have to be specified. You will find it in the Sites logs (_~/admin/logs/sites_). Example:

<font size="-1">

* [08/Jan/2019:11:09:19 +0100] [waf] - \<attack IP\> "GET /?param=%22>\<script\>alert(1);\</script\> HTTP/1.1" - 941100 | XSS Attack Detected via libinjection' with value: ">\<script\>alert(1);\</script>
* [08/Jan/2019:11:09:19 +0100] [waf] - \<attack IP\> "GET /?param=%22>\<script\>alert(1);\</script\> HTTP/1.1" - 941110 | XSS Filter - Category 1: Script Tag Vector' with value: \<script\>
* [08/Jan/2019:11:09:19 +0100] [waf] - \<attack IP\> "GET /?param=%22>\<script\>alert(1);\</script\> HTTP/1.1" - 941160 | NoScript XSS InjectionChecker: HTML Injection' with value: \<script\>

</font>

941100, 941110 and 941160 might be indicated.

> CAUTION: it is necessary to gradually add rules as the exclusion is applicable throughout the site. Indeed, even if adding a large number of rules to exclude can improve navigation in some cases, the protection will be reduced in all other cases.


## Exclude paths

This exclusion type allows to **avoid the analysis of webpages starting by the specified path**. By enter <font color=red>/foo/</font> by example, <font color=grey>_www.mon-site.com/foo/_</font> will be excluded from the analysis as query strings: <font color=grey>_www.mon-site.com/foo/?param=bar_</font>. To also exclude <font color=grey>_www.mon-site.com/foo/bar_</font> and <font color=grey>_www.mon-site.com/foo/script.php_</font>, you have to add a wildcard: <font color=red>/foo/\*</font>. At last, if we want to substitute any character (especially any that constantly change) <font color=red>?</font> can be used.<br>
So to rule out the analysis <font color=grey>_www.mon-site.com/whatever/fooT/_</font>, _whatever_ and _T_ being any character, the path to exclude will be: <font color=red>/\*/foo?/</font>.

Example: let's take the case of a WordPress website which has similar logs as those presented earlier. If these rules are activated in the blog administration interface, it is possible to permanently exclude them.<br>
However the blog will not be protected against these attempted attacks. In this case, it is wise to exclude the path (example: /wp-admin/*): all operations in the administration interface  won't be affected by the WAF analysis.


## Exclude IPs

Exclude **safe IPs** may be worthwhile to prevent to some tools or people from being blocked.

Take [WPScan](https://wpscan.org/) as example: by activating it on a WordPress website some  of the requests it carries out may be blocked. Paths or rules exclusions would not be efficient as it examines numerous URLs. The solution will be to exclude the HTTP server on which WPScan is installed. It will then be able to operate normally.
