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
| 21 |
| 17 |
| 11 |
| 8  |

La version par défaut est modifiable dans l'administration alwaysdata, **Environnement > Java**. C'est cette version qui est notamment utilisée lorsque vous démarrez `java`.

Les versions ne sont pas forcément [déjà installées](languages#-versions).

## Binaire à utiliser

Pour se servir d'une version de Java différente que celle par défaut :

- rendez-vous dans **Environnement > Java** ;
- ou utilisez `JAVA_VERSION=[VERSION] java` (en remplaçant `[VERSION]` par la version de Java voulue).

## Environnement

Votre environnement Java est initialement vide, sans aucune bibliothèque préinstallée.

## Déploiement HTTP

Pour déployer une application HTTP avec Java, créez un site de type *[Programme utilisateur](sites/user-program)* dans la section **Web > Sites**. 

{{< fig "images/user-program.fr.png" "Type de site Programme utilisateur">}}

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
