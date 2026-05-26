---
permalink: /fr/docs/hebergement-web/langages/dotnet/configuration/
title: Configurer .NET
eleventyNavigation:
  key: Configurer .NET
  parent: Langages
---

## Versions supportées

||
|-----|
| 10.0 |
| 8.0 |
| 6.0 |
| 5.0 |

La version par défaut est modifiable dans l'administration alwaysdata, **Environnement > .NET**. C'est cette version qui est notamment utilisée lorsque vous démarrez `dotnet`.

Les versions ne sont pas forcément [déjà installées](/fr/docs/hebergement-web/languages/#versions).

> [!NOTE]
> Les versions majeures de .NET alternent entre le support à long terme (LTS) et le support à terme standard (STS) suivant [le cycle de vie de leurs versions](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core#lifecycle). Seules les **versions LTS** sont rendues disponibles, et elles le sont une fois la prise en charge la version General Availability (GA) par Microsoft.


## Environnement

Votre environnement .NET est initialement vide, sans aucune bibliothèque préinstallée.

## Déploiement HTTP

Pour déployer une application HTTP avec .NET, créez un site de type *.NET* dans la section **Web > Sites**.

![.NET Site Type](images/net.png)

Vous devrez spécifier la commande qui démarre votre application .NET, par exemple :

```
dotnet run --urls "http://$IP:$PORT"
```

> [!WARNING] Attention
> Votre application doit impérativement écouter sur l'ip et le port indiqués dans la vue de configuration du site sous le champ *Commande*. Vous pouvez utiliser les variables d'environnement `IP` / `HOST` et `PORT`.
