+++
title = "Languages"
pre = "<i class='fas fa-fw fa-code'></i> "
weight = 11
chapter = true
+++

# Languages

For all of the information on the technologies driven by servers:

- [Deno]({{< ref "languages/deno" >}})
- [Elixir]({{< ref "languages/elixir" >}})
- [Go]({{< ref "languages/go" >}})
- [Java]({{< ref "languages/java" >}})
- [Lua]({{< ref "languages/lua" >}})
- [Node.js]({{< ref "languages/nodejs" >}})
- [PHP]({{< ref "languages/php" >}})
- [Python]({{< ref "languages/python" >}})
- [Ruby]({{< ref "languages/ruby" >}})


## Versions installation
In [Catalyst servers]({{< ref "accounts/billing/catalyst-prices" >}}), language versions are, to limit disk space consumption, **automatically installed on demand**.[^1]
* Listing `/usr/alwaysdata/[language]/` only shows already installed versions, not all the "available" versions.
* To get a list of available versions, `alwrapper get_versions [language]` can be used.
* To install a version, just run it.

[^1]: `[language]` has to be replaced by the name of the language.
