+++
url = "/fr/hebergement-web/langages/rust/configuration/"
title = "Configurer Rust"
tags = ["rust"]
+++

## Version

Rust étant un langage compilé, il n’a pas besoin d’être ins­tal­lé chez always­da­ta pour être uti­li­sé. Nous proposons cependant la version 1.78 qui est utilisée lorsque vous démarrez `cargo`.

Vous pouvez compiler vos programmes ailleurs, localement par exemple.

## Déploiement HTTP

Pour déployer une application HTTP avec Rust, créez un site de type *[Programme utilisateur](/web-hosting/sites/user-program)* dans la section **Web > Sites**.

{{< fig "images/user-program.fr.png" "Type de site Programme utilisateur">}}

Après avoir compilé le programme et l'avoir chargé sur votre compte, vous devrez spécifier la commande qui démarre votre application Rust, par exemple :

```
$ $HOME/myapp/hello
```

{{% notice warning %}}
Votre application doit impérativement écouter sur l'IP et le port indiqués dans la vue de configuration du site sous le champ *Commande*. Vous pouvez utiliser les variables d'environnement `IP` / `HOST` et `PORT`.
{{% /notice %}}
