+++
url = "/fr/langages/deno/configuration/"
title = "Configurer Deno"
hidden = true
layout = "man"
tags = ["deno"]
+++

## Versions supportées

La version 1.0.0 est installée et est utilisée lorsque vous démarrez `deno`.

## Environnement

Votre environnement Deno est initialement vide, sans aucune bibliothèque préinstallée.

## Déploiement HTTP

Pour déployer une application HTTP avec Deno, créez un site de type *Deno* dans la section **Web > Sites**.

{{< fig "images/deno.png" "Deno Site Type">}}

Vous devrez spécifier la commande qui démarre votre application Deno, par exemple :

```
deno run --allow-env --allow-net $HOME/myapp/index.ts
```

{{% notice warning %}}
Votre application doit impérativement écouter sur l'ip et le port indiqués dans la vue de configuration du site sous le champ *Commande*. Vous pouvez utiliser les variables d'environnement `IP` / `HOST` et `PORT`.
{{% /notice %}}
