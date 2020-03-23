+++
title = "Installing Blazegraph"
layout = "howto"
hidden = true
+++

[Blazegraph](https://blazegraph.com/) is a graph oriented DBMS.

In our example, we use the [SSH access]({{< ref "remote-access/ssh">}}) and consider the following information:

- Account name: `foo`
- Blazegraph directory: `$HOME/blazegraph/`

## Step 1: Downloading

```
foo@ssh:~/blazegraph$ wget https://github.com/blazegraph/database/releases/download/<blazegraph-last-version>/blazegraph.jar
```

Take the [last version available](https://github.com/blazegraph/database/releases).

## Step 2: Create the site

From **Web > Sites**, create a [User program]({{< ref "sites/user-program" >}}) site with the **Command**:

- Debian Jessie: `java -server -Xmx4g -Djava.net.preferIPv4Stack=true -Djetty.host=0.0.0.0 -Djetty.port=$PORT -jar $HOME/blazegraph/blazegraph.jar`
- Debian Buster (new accounts): `java -server -Xmx4g -Djetty.host=0.0.0.0 -Djetty.port=$PORT -jar $HOME/blazegraph/blazegraph.jar`
