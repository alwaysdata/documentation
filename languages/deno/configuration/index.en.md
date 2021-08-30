+++
title = "Configuring Deno"
hidden = true
layout = "man"
tags = ["deno"]
+++

## Supported versions

||
|--------------|
| 1.12         |
| 1.10         |
| 1.8          |
| 1.7          |
| 1.5          |
| 1.4          |
| 1.2          |
| 1.0          |

The default version can be changed from the administration section, under **Environment > Deno**. This is the version that is especially used when you start `deno`.

Versions are not necessarily [already installed]({{< ref "languages#versions" >}}).

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
Your application must absolutely listen to IP and the port shown in the site configuration in the *Command* field. The `IP` / `HOST` and `PORT` environment variables can also be used.
{{% /notice %}}
