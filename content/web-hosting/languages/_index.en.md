+++
title = "Languages"
weight = 11
+++

For all of the information on the technologies driven by servers:

- [.NET](/web-hosting/languages/dotnet)
- [Deno](/web-hosting/languages/deno)
- [Elixir](/web-hosting/languages/elixir)
- [Go](/web-hosting/languages/go)
- [Java](/web-hosting/languages/java)
- [Lua](/web-hosting/languages/lua)
- [Node.js](/web-hosting/languages/nodejs)
- [PHP](/web-hosting/languages/php)
- [Python](/web-hosting/languages/python)
- [Ruby](/web-hosting/languages/ruby)
- [Rust](/web-hosting/languages/rust)

Other interpreters and languages also can be run through the [user program](/web-hosting/sites/user-program).

## Versions

It is possible to choose a major version of a language or a specific minor version.

When major versions are selected, the system automatically handles updates when a new minor version becomes available. It lets you benefit from security and bug fixes automatically, while still retaining full compatibility.

The versions used by default are those indicated in the **Environment** menu of the administration interface. It is possible to choose another version by using the *Environment variables* (or for sites by choosing the version in **Web > Sites**).

### Private Cloud

Language versions are, to limit disk space consumption, **automatically installed on demand**.[^1]

To run the binary of a language (e.g., `python`), you simply need to run `python`. This will internally call `/usr/bin/python`, which is a *wrapper* of the "correct" version of python (the one defined in your environment).

The binaries are stored in `/usr/alwaysdata/[language]/[version]`. The directory of each version does not necessarily exist until you call the binary of the version in question: so you should not rely on `/usr/alwaysdata` to know if a version is available but you can use:

```
$ alwrapper get_versions [language]
```

[^1]: `[language]` and `[version]` have to be replaced by the name of the language/version.
