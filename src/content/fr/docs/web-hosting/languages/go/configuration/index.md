---
permalink: /fr/docs/hebergement-web/langages/go/configuration/
title: Configurer Go
eleventyNavigation:
  key: Configurer Go
  parent: Langages
---

## Version

Go étant un langage compilé, il n’a pas besoin d’être ins­tal­lé chez always­da­ta pour être uti­li­sé. Nous proposons cependant la version 1.22 qui est utilisée lorsque vous démarrez `go`.

Vous pouvez compiler vos programmes ailleurs, localement par exemple.

## Déploiement HTTP

Pour déployer une application HTTP avec Go, créez un site de type *[Programme utilisateur](/fr/docs/hebergement-web/sites/programme-utilisateur/)* dans la section **Web > Sites**.

![Type de site Programme utilisateur](images/user-program.png)

Après avoir compilé le programme et l'avoir chargé sur votre compte, vous devrez spécifier la commande qui démarre votre application Go, par exemple :

```
$ $HOME/myapp/hello
```

> [!WARNING] Attention
> Votre application doit impérativement écouter sur l'ip et le port indiqués dans la vue de configuration du site sous le champ *Commande*. Vous pouvez utiliser les variables d'environnement `IP` / `HOST` et `PORT`.
