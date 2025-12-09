+++
url = "/fr/langages/java/configuration/"
title = "Configurer Java"
hidden = true
layout = "man"
tags = ["java"]
+++

## Versions supportées

| |
|----|
| 25 |
| 21 |
| 17 |
| 11 |
| 8  |

La version par défaut est modifiable dans l'administration alwaysdata, **Environnement > Java**. C'est cette version qui est notamment utilisée lorsque vous démarrez `java`.

Les versions ne sont pas forcément [déjà installées](languages#-versions).

{{% notice note %}}
Seules les **[versions LTS](https://www.java.com/releases/)** sont rendues disponibles.
{{% /notice %}}

## Binaire à utiliser

Pour se servir d'une version de Java différente que celle par défaut :

- rendez-vous dans **Environnement > Java** ;
- ou utilisez `JAVA_VERSION=[VERSION] java` (en remplaçant `[VERSION]` par la version de Java voulue).

## Environnement

Votre environnement Java est initialement vide, sans aucune bibliothèque préinstallée.

## Déploiement HTTP

Pour déployer une application HTTP avec Java, vous devez créer un site dans la section **Web > Sites** et pouvez utiliser deux types de sites :

### Java

Il utilise le serveur HTTP [Apache Tomcat](https://tomcat.apache.org/).

{{< fig "images/java-tomcat.fr.png" "">}}

* type : choisissez *Java* ;
* chemin de l'application : le chemin du fichier de votre application Java.

Vous pouvez également renseigner plusieurs champs optionnels :

* des variables d'environnement à définir ;
* une version de Python spécifique à utiliser.

### Programme utilisateur

[Présentation](sites/user-program)

{{< fig "images/user-program.fr.png" "">}}

Vous devrez spécifier la commande qui démarre votre application Java, par exemple[^1] :

- [Jenkins](https://www.jenkins.io/doc/book/installing/initial-settings/)

```
$ java -Xmx512m -jar jenkins.war --httpListenAddress=$IP --httpPort=$PORT
```
- [Spring](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#appendix.application-properties.server)

```
$ java -jar app.jar --server.address=:: --server.port=$PORT
```

{{% notice warning %}}
Votre application doit impérativement écouter sur l'IP `::` et le port indiqués dans la vue de configuration du site sous le champ *Commande* ; ou utiliser les variables d'environnement IP et PORT.
{{% /notice %}}

[^1]: Les options dépendent de l'application, vous devez **impérativement** vous référer à la documentation de celle-ci pour trouver quelles options utiliser s'il est nécessaire de préciser l'IP et le port dans la commande. Cela peut aussi être des options de fichier de configuration.
