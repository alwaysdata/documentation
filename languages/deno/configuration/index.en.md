+++
title = "Configuring Deno"
hidden = true
layout = "man"
tags = ["deno"]
+++

## Supported Versions

The version 1.0.0 is installed and is used when you start `deno`.

## Environment

Your Deno environment starts off empty, with no ready installed libraries.

## HTTP deployment

To deploy an HTTP application with Deno, create a *Deno* type site in the **Web > Sites** section. 

{{< fig "images/deno.png" "Type de site Deno">}}

You need to specify the command that will start your Deno application, for example:

```
deno run --allow-env --allow-net $HOME/myapp/index.ts
```

{{% notice warning %}}
Your application must absolutely listen to IP `0.0.0.0` and the port shown in the site configuration in the *Command* field or use the IP and PORT environment variables.
{{% /notice %}}
