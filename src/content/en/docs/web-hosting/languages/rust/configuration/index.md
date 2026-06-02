---
title: Configuring Rust
eleventyNavigation:
  key: Configuring Rust
  parent: Rust
---

## Version

As Rust is a compiled language, it does not have to be installed at alwaysdata to be used. We do however provision with version 1.78 for the `cargo` executable.

You can compile your programs elsewhere, e.g. locally.

## HTTP deployment

To deploy an HTTP application with Rust, create a *[User program](/en/docs/web-hosting/sites/user-program)* type site in the **Web > Sites** section.

![](images/user-program.png)

After compiling the program and loading it into your account, you need to specify the command that starts your Rust application, for example:

```
$ /home/[account]/myapp/hello
```

> [!WARNING]
> Your application must absolutely listen to IP and the port shown in the site configuration in the *Command* field. The `IP` / `HOST` and `PORT` environment variables can also be used.
