+++
url = "/fr/langages/nodejs/configuration/"
title = "Configurer Node.js"
hidden = true
layout = "man"
tags = ["nodejs"]
+++

## Versions supportées

| Majeure | Mineures                                    |
|---------|---------------------------------------------|
| 12      | 12.0.0                                      |
| 11      | 11.12.0, 11.8.0, 11.1.0, 11.0.0             |
| 10      | 10.15.3, 10.15.1, 10.13.0, 10.12.0, 10.9.0  |
| 9       | 9.11.2                                      |
| 8       | 8.15.1, 8.15.0, 8.12.0, 8.11.4              |
| 6       | 6.17.0, 6.16.0, 6.14.4                      |

La version par défaut est modifiable dans l'administration, section **Environnement > Node.js**. C'est cette version qui est notamment utilisée lorsque vous démarrez node.

## Binaire à utiliser

Vous devez toujours utiliser `node` (ou `/usr/bin/node`). N'utilisez jamais `nodejs`.

Pour forcer une version de Node.js différente de celle par défaut, définissez la variable d'environnement `NODEJS_VERSION` :

```
$ NODEJS_VERSION=8.4.0 node
```

Dans vos scripts, utilisez `/usr/bin/nodejs` comme *shebang* :

```
#!/usr/bin/nodejs
```

## Environnement

Votre environnement Node.js est initialement vide, sans aucune bibliothèque préinstallée. Vous pouvez utiliser `npm` pour installer des paquets :

```
$ npm install express
```

Vous pouvez également utiliser `npm` en mode global, les paquets seront installés dans le répertoire `$HOME/.npm-packages` :

```
$ npm install -g express
```

## Déploiement HTTP

Pour déployer une application HTTP avec Node.js, créez un site de type Node.js dans la section **Web > Sites**. Vous devrez spécifier la commande qui démarre votre application Node.js, par exemple :

```
node $HOME/myapp/index.js
```

{{% notice warning %}}
Votre application doit impérativement écouter sur l'ip `0.0.0.0` et le port indiqués dans la vue de configuration du site sous le champ *Commande* ; ou utiliser les variables d'environnement IP et PORT.
{{% /notice %}}
