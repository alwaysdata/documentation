+++
url = "/fr/langages/java/configuration/"
title = "Configurer Java"
hidden = true
layout = "man"
tags = ["java"]
+++

## Versions supportées

| Majeures |
|----------|
| 14       |
| 11       |
| 8        |

La version par défaut est Java 14. C'est cette version qui est notamment utilisée lorsque vous démarrez `java`.

Les versions ne sont pas forcément [déjà installées]({{< ref "languages#-versions" >}}).

## Binaire à utiliser

Pour se servir d'une version de Java différente que celle par défaut :

- rendez-vous dans **Environnement > Java** ;
- ou utilisez `JAVA_VERSION=[VERSION] java` (en remplaçant `[VERSION]` par la version de Java voulue).

## Environnement

Votre environnement Java est initialement vide, sans aucune bibliothèque préinstallée.

## Déploiement HTTP

Pour déployer une application HTTP avec Java, créez un site de type *[Programme utilisateur]({{< ref "sites/user-program" >}})* dans la section **Web > Sites**. 

{{< fig "images/user-program.fr.png" "Type de site Programme utilisateur">}}

Vous devrez spécifier la commande qui démarre votre application Java, par exemple :

```
$ java -Xmx512m -jar jenkins.war --httpListenAddress=0.0.0.0 --httpPort=$PORT
```

{{% notice warning %}}
Votre application doit impérativement écouter sur l'ip `0.0.0.0` et le port indiqués dans la vue de configuration du site sous le champ *Commande* ; ou utiliser les variables d'environnement IP et PORT.
{{% /notice %}}
