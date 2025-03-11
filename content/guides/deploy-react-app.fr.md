+++
url = "/fr/guides/deployer-app-react/"
title = "Déployer une application Create React App"
layout = "howto"
hidden = true
tags = ["deploiement", "statique", "react", "front-end"]
+++

Une application conçue avec [React](https://reactjs.org/) est essentiellement constituée, pour sa partie production, d'_assets_ statiques.

Si le cycle de développement fait intervenir Node.js pour servir les pages/vues dans un serveur HTTP avec tout le
confort des outils de développement (_hot-reloading_, etc.), elle n'est pas nécessaire pour sa mise en production. [Un
simple serveur Web](https://create-react-app.dev/docs/deployment) fera l'affaire :

> Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths
> like /static/js/main.[hash].js are served with the contents of the /static/js/main.[hash].js file.

## Côté _alwaysdata_

Créez simplement un site de type [Fichiers statiques](sites/static-files) pointant vers le répertoire de votre choix (par exemple
`www/my-app`).

## Côté développement

Commencez par ajouter dans votre fichier `package.json` une entrée [indiquant au build l'_URL_ final de votre projet en
production](https://create-react-app.dev/docs/deployment/#building-for-relative-paths), par exemple :

```json
"homepage": "https://[account].alwaysdata.net/my-app"
```

Dans votre environnement local de développement, lancez la tâche de _build_. Si vous avez utilisé un outil comme [Create
React App](https://create-react-app.dev) pour initialiser votre projet, celle-ci est disponible _via_ la tâche _npm_ 
`npm run build`. Cette commande va produire les _assets_ statiques dans un répertoire `build`.

Vous pouvez ensuite déployer ces fichiers résultant du _build_ dans le répertoire indiqué précédemment lors de la
création du site, par exemple via [_rsync/SSH_](remote-access/ssh) :

```sh
rsync -rz --mkpath build/ [account]@ssh-[account].alwaysdata.net:www/my-app
```
