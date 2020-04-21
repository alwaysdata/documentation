+++
title = "Using TiddlyWiki's Bob Plugin"
layout = "howto"
hidden = true
tags = ["tiddlywiki", "plugin"]
+++

[TiddlyWiki]({{<ref "./">}}) is a "non-linear personal web notebook", which means it is more likely intended to be used by a single user, for personal use. You may want to serve multiple TiddlyWikis, each dedicated to different purposes. You can achieve this by setting multiple *Sites* in your administration panel. Or you can rely on the [Bob](https://github.com/OokTech/TW5-Bob) plugin, which allows multi-seat edition in real-time.

## Installing the Plugin

After Installing the Node.js version [manually]({{<ref "./">}}#use-the-nodejs-server-version), install the plugin:

1. Log in through [SSH]({{<ref "remote-access/ssh">}})

2. Clone the plugin in a dedicated directory for TiddlyWiki plugins at your `$HOME` level:

    ```sh
    $ git clone --depth=1 https://github.com/OokTech/TW5-Bob.git $HOME/tw-plugins/OokTech/Bob
    ```

## Using the Plugin

1. Edit the `path/to/repository/tiddlywiki.info` file, and add the plugin to the `plugins` section:

    ```json
    "plugins": [
        "tiddlywiki/tiddlyweb",
        "tiddlywiki/filesystem",
        "tiddlywiki/highlight",
        /* ... */
        "OokTech/Bob"
    ],
    ```

2. Create a `path/to/repository/settings/settings.json` file, and fill it with the IP and PORT values you can find in your *Site* configuration view in your administration panel:

    ```json
    "ws-server": {
        "port": [PORT],
        "host": "[IP]",
        "autoIncrementPort": "false",
    },
    ```

3. In the *Site* view, edit the `Command` field by replacing `--listen` by `--wsserver`. You can also safely remove the `host` and `port` parameters.

4. Fill in the *Environment* field with `TIDDLYWIKI_PLUGIN_PATH="$HOME/tw-plugins"`

{{% notice note %}}
We do not recommend to run TiddlyWiki with the Bob plugin under a sub-path URL. Despite the support of [Proxies](https://github.com/OokTech/TW5-Bob/blob/master/Documentation/Using%20Proxies.tid) by the plugin, it may lead to inconsistencies like WebSocket disabilities. Prefer to run it from a subdomain instead.
{{% /notice %}}

You can now create as many wikis as you want by following the embedded Bob's Documentation

## Authentication

By default, as for straight TiddlyWiki, the Bob version is readable and writable by any user. If you want to apply permissions for read/write accesses, please refer to the [Authentication]({{<ref "./" >}}#authentication) section.
