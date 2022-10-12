+++
title = "Configuring Java"
hidden = true
layout = "man"
tags = ["java"]
+++

## Supported versions

||
| -- |
| 17 |
| 14 |
| 11 |
| 8  |

The default version can be changed from the alwaysdata administration, under **Environment > Java**. This is the version that is especially used when you start `java`.

Versions are not necessarily [already installed]({{< ref "languages#versions" >}}).

## Binary to use

To use a Java version that is different from the default one:

- go on **Environment > Java**,
- or use `JAVA_VERSION=[VERSION] java` (replacing `[VERSION]` with the desired Java version).

## Environment

Your Java environment starts off empty, with no ready installed libraries.

## HTTP deployment

To deploy an HTTP application with Java, create a *[User program]({{< ref "sites/user-program" >}})* type site in the **Web > Sites** section.

{{< fig "images/user-program.en.png" "User Program Site Type">}}

You need to specify the command that will start your Java application, for example[^1]:

- [Jenkins](https://www.jenkins.io/doc/book/installing/initial-settings/)

```
$ java -Xmx512m -jar jenkins.war --httpListenAddress=$IP --httpPort=$PORT
```
- [Spring](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#appendix.application-properties.server)

```
$ java -jar app.jar --server.address=:: --server.port=$PORT
```

{{% notice warning %}}
Your application must absolutely listen to IP `::` and the port shown in the site configuration in the *Command* field or use the IP and PORT environment variables.
{{% /notice %}}

[^1]: Options depend on the application, you **must** refer to it's documentation to find out which options to use if it is necessary to specify the IP and port in the command. This can also be configuration file options.
