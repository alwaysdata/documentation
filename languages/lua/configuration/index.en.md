+++
title = "Configuring Lua"
hidden = true
layout = "man"
tags = ["lua"]
+++

## Versions supported

|Major versions|
|--- |
|5.3|
|5.2|
|5.1|

The default version is Lua 5.3. This is the version that is especially used when you start `lua`.

Versions are not necessarily [already installed]({{< ref "languages#versions" >}}).
## Binary to use

To use a different version of Lua than the default one, use `lua5.X`.

## Environment

[Luarocks](https://luarocks.org/) and [LuaJIT](http://luajit.org/) are ready installed.

## HTTP deployment

To deploy an HTTP application with Lua, create a *[User program]({{< ref "sites/user-program" >}})* type site in the **Web > Sites** section.

{{< fig "images/user-program.en.png" "User Program Site Type">}}

You need to specify the command that will start your Lua application, for example:

```
lua5.1 $HOME/myapp/start-server.lua
```

{{% notice warning %}}
Your application must absolutely listen to IP `0.0.0.0` and the port shown in the site configuration in the *Command* field or use the IP and PORT environment variables.
{{% /notice %}}
