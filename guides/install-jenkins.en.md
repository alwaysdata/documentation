+++
title = "Installing Jenkins"
layout = "howto"
hidden = true
+++

[Jenkins](https://jenkins.io/) is a CI (Continous Integration) server.

In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`
- Jenkins directory: `$HOME/jenkins/`

## Step 1: Downloading

```
foo@ssh:~/jenkins$ wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
```

## Step 2: Create the site

From **Web > Sites**, create a [User program]({{< ref "sites/user-program" >}}) site with the **Command**:

- [v2017]({{< ref "accounts/version" >}}):

  ```sh
  /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java \
    -Djava.net.preferIPv4Stack=true \
    -Xmx512m \
    -jar $HOME/jenkins/jenkins.war --httpListenAddress=0.0.0.0 --httpPort=$PORT
  ```

- [v2020]({{< ref "accounts/version" >}}):

  ```sh
  java \
    -Xmx512m \
    -jar $HOME/jenkins/jenkins.war --httpListenAddress=0.0.0.0 --httpPort=$PORT`
  ```
