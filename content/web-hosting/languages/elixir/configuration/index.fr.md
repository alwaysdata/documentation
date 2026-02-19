+++
url = "/fr/hebergement-web/langages/elixir/configuration/"
title = "Configurer Elixir"
tags = ["elixir"]
+++

## Versions supportées


| |
| --- |
| 1.13 \| 1.14 \| 1.15 \| 1.16 \| 1.17 \| 1.18 |

La version par défaut est modifiable dans l'administration, section **Environnement > Elixir**. C'est cette version qui est notamment utilisée lorsque vous démarrez `mix`.

Les versions ne sont pas forcément [déjà installées](/web-hosting/languages#versions).

## Binaire à utiliser

Pour forcer une version de Elixir différente de celle par défaut, définissez la variable d'environnement `ELIXIR_VERSION` :

```sh
$ ELIXIR_VERSION=1.14 elixir
```

Dans vos scripts, utilisez `/usr/bin/elixir` comme *shebang* :

```
#!/usr/bin/elixir
```

## Environnement

Votre environnement Elixir est initialement vide, sans aucune bibliothèque préinstallée.

## Déploiement HTTP

Pour déployer une application HTTP avec Elixir, créez un site de type *Elixir* dans la section **Web > Sites**.

{{< fig "images/elixir.png" "Type de site Elixir">}}

Vous devrez spécifier la commande qui démarre votre application Elixir, par exemple :

```
mix $HOME/myapp/phx.server
```

{{% notice warning %}}
Votre application doit impérativement écouter sur l'ip `::` et le port indiqués dans la vue de configuration du site sous le champ *Commande* ; ou utiliser les variables d'environnement IP et PORT.
{{% /notice %}}
