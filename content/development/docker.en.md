+++
title = "Docker"
tags = [""]
+++

{{% notice note %}}
[Docker](https://www.docker.com/) is only available on [Private Cloud](/admin-billing/billing/private-cloud-prices) environments.
{{% /notice %}}

Docker runs in [rootless](https://docs.docker.com/engine/security/rootless/) mode.

## Installation

After having [contacted the customer support team](https://admin.alwaysdata.com/support/add) to install Docker on the server, prior to use, **for each account** you must:

- execute in [SSH](/web-hosting/remote-access/ssh):

```sh
$ dockerd-rootless-setuptool.sh install
```

This should return:

```sh
[INFO] dockerd-rootless.sh needs to be started (e.g. by creating a service):
dockerd-rootless.sh 

[INFO] Creating CLI context "rootless"
Successfully created context "rootless"
```

- create a [services](/web-hosting/services):
    - Command: `dockerd-rootless.sh`
    
> The installation is complete, you can now use the `docker` command normally.

## Use

You can use Docker to run [sites](/web-hosting/sites), [services](/web-hosting/services), [scheduled tasks](/web-hosting/tasks) or simply in [SSH](/web-hosting/remote-access/ssh).

To run a site with Docker, you need to use the [user program](/web-hosting/sites/user-program) type and indicate your `docker run` command. Your Docker container needs to listen in HTTP on the `$PORT` portal, for example:

```txt
docker run -p $PORT:80 gitlab/gitlab-ee:latest
docker run -p $PORT:8080 jenkins/jenkins:lts-jdk11
```

You need to consult the documentation of your Docker image to find out exactly what to indicate.

By default, Docker listens on the private IP addresses of the account. If it is necessary for Docker to be directly accessible from the outside, you need to [specify the external IP](https://docs.docker.com/engine/containers/run/#exposed-ports) using the `-p` option.

{{% notice warning %}}
**The Docker containers are entirely the responsibility of our users. No managed services or assistance can be provided by alwaysdata.** Specifically, Docker images generally incorporate software such as Apache, PHP, MySQL, Redis, etc., which is not always administered, configured, or monitored by alwaysdata, unlike applications that run without Docker. For this reason, we strongly recommend that our users only use Docker if there is a demonstrated need, and to **always** seek advice from our customer support team before using a Docker image. In most cases, it is preferable not to use Docker - for example, using our [marketplace](/development/marketplace) or an [installation guide](/development/guides), thereby making it possible to benefit from the alwaysdata managed services, better performance and superior reliability.
{{% /notice %}}
