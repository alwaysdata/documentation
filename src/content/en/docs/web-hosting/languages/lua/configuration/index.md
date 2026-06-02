---
title: Configuring Lua
eleventyNavigation:
  key: Configuring Lua
  parent: Lua
---

## Supported versions

||
|---|
|5.4|
|5.3|
|5.2|
|5.1|

The default version is Lua 5.4. This is the version that is especially used when you start `lua`.

Versions are not necessarily [already installed](/en/docs/web-hosting/languages#versions).
## Binary to use

To use a different version of Lua than the default one, use `lua5.X`.

## Environment

[Luarocks](https://luarocks.org/) and [LuaJIT](http://luajit.org/) are ready installed.

## HTTP deployment

To deploy an HTTP application with Lua, create a *[User program](/en/docs/web-hosting/sites/user-program)* type site in the **Web > Sites** section.

![](images/user-program.png)

You need to specify the command that will start your Lua application, for example:

```
lua5.1 /home/[account]/myapp/start-server.lua
```

> [!WARNING]
> Your application must absolutely listen to IP `::` and the port shown in the site configuration in the *Command* field or use the IP and PORT environment variables.
