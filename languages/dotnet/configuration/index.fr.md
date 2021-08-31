+++
url = "/fr/langages/dotnet/configuration/"
title = "Configurer .NET"
hidden = true
layout = "man"
+++

## Versions supportées

||
|-----|
| 5.0 |

La version par défaut est modifiable dans l'administration alwaysdata, **Environnement > .NET**. C'est cette version qui est notamment utilisée lorsque vous démarrez `dotnet`.

Les versions ne sont pas forcément [déjà installées]({{< ref "languages#versions" >}}).

## Environnement

Votre environnement .NET est initialement vide, sans aucune bibliothèque préinstallée.

## Déploiement HTTP

Pour déployer une application HTTP avec .NET, créez un site de type *.NET* dans la section **Web > Sites**.

{{< fig "images/net.png" ".NET Site Type">}}

Vous devrez spécifier la commande qui démarre votre application .NET, par exemple :

```
dotnet run --urls "http://$IP:$PORT"
```

{{% notice warning %}}
Votre application doit impérativement écouter sur l'ip et le port indiqués dans la vue de configuration du site sous le champ *Commande*. Vous pouvez utiliser les variables d'environnement `IP` / `HOST` et `PORT`.
{{% /notice %}}
