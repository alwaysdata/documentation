+++
url = "/fr/langages/nodejs/configuration/"
title = "Configurer Node.js"
hidden = true
layout = "man"
tags = ["nodejs"]
+++

`[paquet]` est à remplacer par le nom du paquet à installer.

## Versions supportées

||
|---|
| 21 |
| 20 |
| 19 |
| 18 |
| 17 |
| 16 |
| 15 |
| 14 |
| 13 |
| 12 |
| 11 |
| 10 |
| 9  |
| 8  |
| 6  |

La version par défaut est modifiable dans l'administration, section **Environnement > Node.js**. C'est cette version qui est notamment utilisée lorsque vous démarrez `node`.

Versions ne sont pas forcément [déjà installées]({{< ref "languages#versions" >}}).

## Binaire à utiliser

Vous devez toujours utiliser `node` (ou `/usr/bin/node`). N'utilisez jamais `nodejs`.

Pour forcer une version de Node.js différente de celle par défaut, définissez la variable d'environnement `NODEJS_VERSION` :

```sh
$ NODEJS_VERSION=12 node
```

Dans vos scripts, utilisez `/usr/bin/node` comme *shebang* :

```
#!/usr/bin/node
```

## Environnement

Votre environnement Node.js est initialement vide, sans aucune bibliothèque préinstallée. Vous pouvez utiliser `npm` pour installer des paquets :

```sh
$ npm install [paquet]
```

Vous pouvez également utiliser `npm` en mode global, les paquets seront installés dans le répertoire `$HOME/.npm-packages` :

```sh
$ npm install -g [paquet]
```

## Déploiement HTTP

Pour déployer une application HTTP avec Node.js, créez un site de type *Node.js* dans la section **Web > Sites**.

{{< fig "images/nodejs.png" "Type de site Node.js">}}

Vous devrez spécifier la commande qui démarre votre application Node.js, par exemple :

```
node $HOME/myapp/index.js
```

{{% notice warning %}}
Votre application doit impérativement écouter sur l'ip et le port indiqués dans la vue de configuration du site sous le champ *Commande*. Vous pouvez utiliser les variables d'environnement `IP` / `HOST` et `PORT`.
{{% /notice %}}
