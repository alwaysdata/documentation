+++
title = "Using TiddlyWiki's Bob Plugin"
layout = "howto"
hidden = true
tags = ["wiki"]
+++

[TiddlyWiki]({{<ref "./">}}) is a "non-linear personal web notebook", which means it is more likely intended to be used by a single user, for personal use. You may want to serve multiple TiddlyWikis, each dedicated to different purposes. You can achieve this by setting multiple *Sites* in your administration panel. Or you can rely on the [Bob](https://github.com/OokTech/TW5-Bob) plugin, which allows multi-seat edition in real-time.

In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`
- TiddlyWiki directory: `$HOME/wiki/`
- Port: 8100 (given in the Command helptext in **Web > Sites**)

{{% notice note %}}
`[foo]` and `[version]` must be replaced by accurate informations.
{{% /notice %}}

## Installing

1. Install TiddlyWiki via the [marketplace]({{< ref "marketplace" >}}) or by yourself
2. At the TiddlyWiki root, upload the last version of the [Bob plugin binary](https://github.com/OokTech/TW5-BobEXE) and set it up:

```sh
foo@ssh:~/wiki$ wget https://github.com/OokTech/TW5-BobEXE/releases/download/[version]/BobLinux
foo@ssh:~/wiki$ chmod u+x BobLinux
```
3. Execute the binary one time to create necessary files and directories:

```sh
foo@ssh:~/wiki$ ./BobLinux
```

4. Edit the file `IndexWiki/settings/settings.json` to replace the `ws-server` value and indicate:

```json
"ws-server": {
    "port": 8100,
    "host": "::",
    "autoIncrementPort": false
 },
```

5. Create the configuration in **Web > Sites**:

- the website type will be **User program**,
- the **Command** field of the site must be: `./BobLinux IndexWiki`,
- if you used the marketplace, the authentication set up when installing TiddlyWiki will no longer be in place.

{{% notice note %}}
We do not recommend to run TiddlyWiki with the Bob plugin under a sub-path URL. Despite the support of [Proxies](https://github.com/OokTech/TW5-Bob/blob/master/Documentation/Using%20Proxies.tid) by the plugin, it may lead to inconsistencies like WebSocket disabilities. Prefer to run it from a subdomain instead.
{{% /notice %}}
