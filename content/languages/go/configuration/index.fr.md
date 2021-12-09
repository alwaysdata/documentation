+++
url = "/fr/langages/go/configuration/"
title = "Configurer Go"
hidden = true
layout = "man"
tags = ["golang"]
+++

## Version

Go étant un langage compilé, il n’a pas besoin d’être ins­tal­lé chez always­da­ta pour être uti­li­sé. Nous proposons cependant la version 1.17 qui est utilisée lorsque vous démarrez `go`.

Vous pouvez compiler vos programmes ailleurs, localement par exemple.

## Déploiement HTTP

Pour déployer une application HTTP avec Go, créez un site de type *[Programme utilisateur]({{< ref "sites/user-program" >}})* dans la section **Web > Sites**.

{{< fig "images/user-program.fr.png" "Type de site Programme utilisateur">}}

Après avoir compilé le programme et l'avoir chargé sur votre compte, vous devrez spécifier la commande qui démarre votre application Go, par exemple :

```
$ $HOME/myapp/hello
```

{{% notice warning %}}
Votre application doit impérativement écouter sur l'ip et le port indiqués dans la vue de configuration du site sous le champ *Commande*. Vous pouvez utiliser les variables d'environnement `IP` / `HOST` et `PORT`.
{{% /notice %}}
