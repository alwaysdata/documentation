+++
url = "/fr/langages/java/configuration/"
title = "Configurer Java"
hidden = true
layout = "man"
tags = ["java"]
+++

## Versions supportées

- [v2017]({{< ref "accounts/version" >}}) :

| Majeures | Commande                                                    |
|----------|-------------------------------------------------------------|
| 10       | `/usr/lib/jvm/java-10-openjdk-amd64/jre/bin/java`           |
| 9        | `/usr/lib/jvm/java-9-openjdk-amd64/jre/bin/java`            |
| 8        | `/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java`            |
| 7        |  `java` ou `/usr/lib/jvm/java-7-openjdk-amd64/jre/bin/java` |

La version par défaut est Java 1.7. C'est cette version qui est notamment utilisée lorsque vous démarrez `java`.

- [v2020]({{< ref "accounts/version" >}}) :

| Majeures |
|----------|
| 14       |
| 11       |
| 8        |

La version par défaut est Java 14. C'est cette version qui est notamment utilisée lorsque vous démarrez `java`.

## Binaire à utiliser

Pour se servir d'une version de Java différente que celle par défaut :

- [v2017]({{< ref "accounts/version" >}}) : utilisez `/usr/lib/jvm/java-[VERSION]-openjdk-amd64/jre/bin/java` (en remplaçant `[VERSION]` par la version de Java voulue) ;
- [v2020]({{< ref "accounts/version" >}}) :
    - rendez-vous dans **Environnement > Java** ;
    - ou utilisez `JAVA_VERSION=[VERSION] java` (en remplaçant `[VERSION]` par la version de Java voulue).

## Environnement

Votre environnement Java est initialement vide, sans aucune bibliothèque préinstallée.

## Déploiement HTTP

Pour déployer une application HTTP avec Java, créez un site de type *[Programme utilisateur]({{< ref "sites/user-program" >}})* dans la section **Web > Sites**. 

{{< fig "images/user-program.fr.png" "Type de site Programme utilisateur">}}

Vous devrez spécifier la commande qui démarre votre application Java, par exemple :

- [v2017]({{< ref "accounts/version" >}}) :

```
$ /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java -Djava.net.preferIPv4Stack=true -Xmx512m -jar jenkins.war --httpListenAddress=0.0.0.0 --httpPort=$PORT
```

- [v2020]({{< ref "accounts/version" >}}) :

```
$ java -Xmx512m -jar jenkins.war --httpListenAddress=0.0.0.0 --httpPort=$PORT
```

{{% notice warning %}}
Votre application doit impérativement écouter sur l'ip `0.0.0.0` et le port indiqués dans la vue de configuration du site sous le champ *Commande* ; ou utiliser les variables d'environnement IP et PORT.
{{% /notice %}}
