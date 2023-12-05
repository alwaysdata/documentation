+++
url = "/fr/langages/deno/configuration/"
title = "Configurer Deno"
hidden = true
layout = "man"
tags = ["deno"]
+++

## Versions supportées

| |
|------|
| 1.37 |
| 1.36 |
| 1.34 |
| 1.33 |
| 1.31 |
| 1.29 |
| 1.28 |
| 1.25 |
| 1.23 |
| 1.21 |
| 1.20 |
| 1.17 |
| 1.16 |
| 1.14 |
| 1.12 |
| 1.10 |
| 1.8  |
| 1.7  |
| 1.5  |
| 1.4  |
| 1.2  |
| 1.0  |

La version par défaut est modifiable dans l'administration alwaysdata, **Environnement > Deno**. C'est cette version qui est notamment utilisée lorsque vous démarrez `deno`.

Les versions ne sont pas forcément [déjà installées]({{< ref "languages#versions" >}}).

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
