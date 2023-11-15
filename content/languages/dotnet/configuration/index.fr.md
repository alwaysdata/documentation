+++
url = "/fr/langages/dotnet/configuration/"
title = "Configurer .NET"
hidden = true
layout = "man"
+++

## Versions supportées

||
|-----|
| 8.0 |
| 6.0 |
| 5.0 |

La version par défaut est modifiable dans l'administration alwaysdata, **Environnement > .NET**. C'est cette version qui est notamment utilisée lorsque vous démarrez `dotnet`.

Les versions ne sont pas forcément [déjà installées]({{< ref "languages#versions" >}}).

Les versions majeures de .NET alternent entre le support à long terme (LTS) et le support à terme standard (STS) suivant [le cycle de vie de leurs versions](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core#lifecycle). Seules les versions LTS sont rendues disponibles, et elles le sont une fois la prise en charge la version General Availability (GA) par Microsoft.

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
