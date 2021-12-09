+++
title = "Configuring Go"
hidden = true
layout = "man"
tags = ["golang"]
+++

## Version

As Go is a compiled language, it does not have to be installed at alwaysdata to be used. We do however provision with version 1.17 for the `go` executable.

You can compile your programs elsewhere, e.g. locally.

## HTTP deployment

To deploy an HTTP application with Go, create a *[User program]({{< ref "sites/user-program" >}})* type site in the **Web > Sites** section.

{{< fig "images/user-program.en.png" "User Program Site Type">}}

After compiling the program and loading it into your account, you need to specify the command that starts your Go application, for example:

```
$ $HOME/myapp/hello
```

{{% notice warning %}}
Your application must absolutely listen to IP and the port shown in the site configuration in the *Command* field. The `IP` / `HOST` and `PORT` environment variables can also be used.
{{% /notice %}}
