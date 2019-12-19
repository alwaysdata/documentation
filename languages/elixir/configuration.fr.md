+++
url = "/fr/langages/elixir/configuration/"
title = "Configurer Elixir"
hidden = true
layout = "man"
tags = ["elixir"]
+++

## Versions supportées

| Majeure | Mineures     |
|---------|--------------|
| 1.7     | 1.7.4, 1.7.3 |
| 1.6     | 1.6.6        |
| 1.5     | 1.5.3        |

La version par défaut est modifiable dans l'administration, section **Environnement > Elixir**. C'est cette version qui est notamment utilisée lorsque vous démarrez `mix`.

## Binaire à utiliser

Pour forcer une version de Elixir différente de celle par défaut, définissez la variable d'environnement `ELIXIR_VERSION` :

```
$ ELIXIR_VERSION=1.7.4 elixir
```

Dans vos scripts, utilisez `/usr/bin/elixir` comme *shebang* :

```
#!/usr/bin/elixir
```

## Environnement

Votre environnement Elixir est initialement vide, sans aucune bibliothèque préinstallée.

## Déploiement HTTP

Pour déployer une application HTTP avec Elixir, créez un site de type Elixir dans la section **Web > Sites**. Vous devrez spécifier la commande qui démarre votre application Elixir, par exemple :

```
mix $HOME/myapp/phx.server
```

{{% notice warning %}}
Votre application doit impérativement écouter sur l'ip `0.0.0.0` et le port indiqués dans la vue de configuration du site sous le champ *Commande* ; ou utiliser les variables d'environnement IP et PORT.
{{% /notice %}}
