+++
title = "Docker"
layout = "man"
hidden = true
tags = [""]
+++

You can use [Docker](https://www.docker.com/)[^1] on alwaysdata [Private Cloud offers]({{< ref "accounts/billing/private-cloud-prices">}}).

## Installation

After [contacting support](https://admin.alwaysdata.com/support/add) to install Docker on the server, you need - **for each account** that needs to use it - to:

- run in [SSH]({{< ref "remote-access/ssh" >}}):
```sh
$ dockerd-rootless-setuptool.sh install
```

It should return:

```
[INFO] systemd not detected, dockerd-rootless.sh needs to be started manually:

PATH=/usr/local/bin:/sbin:/usr/sbin:$PATH dockerd-rootless.sh 

[INFO] Creating CLI context "rootless"
"docker context create" requires exactly 1 argument.
See 'docker context create --help'.

Usage:  docker context create [OPTIONS] CONTEXT

Create a context
```

- create a [service]({{< ref "services" >}}):
    - *Command*: `dockerd-rootless.sh`.

The installation is over, you can now use the `docker` command normally.

## Usage

You can use Docker to run [sites]({{< ref "sites" >}}), [services]({{< ref "services" >}}), [scheduled tasks]({{< ref "tasks" >}}), or simply in [SSH]({{< ref "remote-access/ssh" >}}).

To run a site with Docker, you will need to use the [user-program]({{< ref "sites/user-program" >}}) type and specify your `docker run` command. You will need your Docker container to listen in HTTP on the `$PORT` port, for example :

```txt
docker run -p $PORT:80 gitlab/gitlab-ee:latest
docker run -p $PORT:8080 jenkins/jenkins:lts-jdk11
```

You will need to consult the documentation of your Docker image to know what exactly to specify.

{{% notice warning %}}
**Docker containers are entirely the responsibility of our customers. In particular, Docker images generally include software such as Apache, PHP, MySQL, Redis... which will not be administered, configured or monitored by alwaysdata, unlike applications that would run without Docker.

For this reason, we strongly encourage our customers to use Docker only when necessary, and to **always** consult our support team before using a Docker image. In many cases, it will be preferable to do without Docker (for example, by using our [marketplace]({{< ref "marketplace" >}}) or an [installation guide]({{< ref "guides" >}}), allowing you to benefit from alwaysdata's outsourcing, better performance and increased reliability.
{{% /notice %}}

[^1]: Docker runs in [rootless](https://docs.docker.com/engine/security/rootless/) mode.
