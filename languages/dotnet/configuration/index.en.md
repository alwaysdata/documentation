+++
title = "Configuring .NET"
hidden = true
layout = "man"
+++

## Supported Versions

||
|-----|
| 5.0 |

The default version can be changed from the administration section, under **Environment > .NET**. This is the version that is especially used when you start `dotnet`.

Versions are not necessarily [already installed]({{< ref "languages#versions" >}}).

## Environment

Your .NET environment starts off empty, with no ready installed libraries.

## HTTP deployment

To deploy an HTTP application with .NET, create a *.NET* type site in the **Web > Sites** section. 

{{< fig "images/net.png" "Type de site .NET">}}

You need to specify the command that will start your Deno application, for example:

```
dotnet run --urls "http://$IP:$PORT"
```

{{% notice warning %}}
Your application must absolutely listen to IP and the port shown in the site configuration in the *Command* field. The `IP` / `HOST` and `PORT` environment variables can also be used.
{{% /notice %}}
