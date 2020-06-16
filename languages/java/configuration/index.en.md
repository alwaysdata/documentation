+++
title = "Configuring Java"
hidden = true
layout = "man"
tags = ["java"]
+++

## Supported Versions

- [v2017]({{< ref "accounts/version" >}}):

| Major versions | Command                                                |
| -------------- | ------------------------------------------------------ |
| 10             | /usr/lib/jvm/java-10-openjdk-amd64/jre/bin/java        |
| 9              | /usr/lib/jvm/java-9-openjdk-amd64/jre/bin/java         |
| 8              | /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java         |
| 7              | java or /usr/lib/jvm/java-7-openjdk-amd64/jre/bin/java |

The default version is Java 1.7. This is the version that is especially used when you start `java`.

- [v2020]({{< ref "accounts/version" >}}):

| Major versions |
| -------------- |
| 14             |
| 11             |
| 8              |

The default version is Java 14. This is the version that is especially used when you start `java`.

## Binary to use

To use a Java version that is different from the default one:

- [v2017]({{< ref "accounts/version" >}}): use `/usr/lib/jvm/java-[VERSION]-openjdk-amd64/jre/bin/java` (replacing `[VERSION]` with the desired Java version),
- [v2020]({{< ref "accounts/version" >}}):
    - go on **Environment > Java**,
    - or use `JAVA_VERSION=[VERSION] java` (replacing `[VERSION]` with the desired Java version).

## Environment

Your Java environment starts off empty, with no ready installed libraries.

## HTTP deployment

To deploy an HTTP application with Java, create a *[User program]({{< ref "sites/user-program" >}})* type site in the **Web > Sites** section.

{{< fig "images/user-program.en.png" "User Program Site Type">}}

You need to specify the command that will start your Java application, for example:

- [v2017]({{< ref "accounts/version" >}}):

```
$ /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java -Djava.net.preferIPv4Stack=true -Xmx512m -jar jenkins.war --httpListenAddress=0.0.0.0 --httpPort=$PORT
```

- [v2020]({{< ref "accounts/version" >}}):

```
$ java -Xmx512m -jar jenkins.war --httpListenAddress=0.0.0.0 --httpPort=$PORT
```

{{% notice warning %}}
Your application must absolutely listen to IP `0.0.0.0` and the port shown in the site configuration in the *Command* field or use the IP and PORT environment variables.
{{% /notice %}}
