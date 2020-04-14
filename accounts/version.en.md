+++
title = "Account Version"
layout = "man"
hidden = true
tags = ["account", "profile"]
+++

As our platform evolves, your account may be hosted on different version of our PaaS, depending of its [hosting server status]({{< ref "advanced/migrations" >}}).

Here's how to determine your current account version: log in through [SSH]({{< ref "remote-access/ssh" >}}) and run the `lsb_release -a` command to read the `Codename` output:

- `jessie`: you're on [v2017]({{< ref "advanced/migrations/2017-software-architecture" >}}).
- `buster`: you're on **v2020**.
