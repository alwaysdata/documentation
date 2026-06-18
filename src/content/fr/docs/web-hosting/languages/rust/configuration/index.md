---
permalink: /fr/docs/hebergement-web/langages/rust/configuration/
title: Configurer Rust
eleventyNavigation:
  key: Configurer Rust
  parent: Rust
---

## Version

Rust étant un langage compilé, il n’a pas besoin d’être ins­tal­lé chez always­da­ta pour être uti­li­sé. Nous proposons cependant la version 1.78 qui est utilisée lorsque vous démarrez `cargo`.

Vous pouvez compiler vos programmes ailleurs, localement par exemple.

## Déploiement HTTP

Pour déployer une application HTTP avec Rust, créez un site de type *[Programme utilisateur](/fr/docs/hebergement-web/sites/serveurs-http/programme-utilisateur/)* dans la section **Web > Sites**.

![](images/user-program.png)

Après avoir compilé le programme et l'avoir chargé sur votre compte, vous devrez spécifier la commande qui démarre votre application Rust, par exemple :

```
$ /home/[compte]/myapp/hello
```

> [!WARNING] Attention
> Votre application doit impérativement écouter sur l'IP et le port indiqués dans la vue de configuration du site sous le champ *Commande*. Vous pouvez utiliser les variables d'environnement `IP` / `HOST` et `PORT`.
