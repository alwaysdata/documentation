---
title: "The Eternal Sunshine of the Zero Build Pipeline"
description: "Servir des dépendances frontend sans build intermédiaire"
date: 2020-06-23
authors: ["Matthias Dugué"]
---

Le développement Web frontend est devenu un parcours du combattant au fil des ans. Il s'est complexifié aussi bien du point de vue des outils que des frameworks, et vous avez forcément été confronté au phénomène de *JavaScript Fatigue* dû à la croissance rapide de tout l'écosystème.

Alors accrochez-vous, en 2020, on repart en arrière ! L'avenir est déjà là, et il est plus que reluisant 🤩 !

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBlYjhnb2xoZnF4cHJ5OG5zdzNkaTJwbWQycWhuazAxdThvaXpxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Mbn3J84dYw00DVm/giphy.gif)

## Au commencement était JavaScript…

… et puis tout s'est accéléré. Avec l'arrivée de Node.js, JS est devenu *le* nouveau challenger. Être capable d'exécuter du JavaScript à la fois sur le *backend* et le *frontend* a considérablement simplifié le développement de nombreux outils, de nouvelles (petites) bibliothèques et de nouveaux environnements. Emporté par le *Registre NPM*, il s'est rapidement étendu et est maintenant le langage *de facto* pour tous les outils de développement *front*, ainsi que pour la distribution des dépendances.

Puis sont apparus les frameworks *front* réactifs, comme *React*, *Vue.js*, ou *Svelte*. Avec leurs architectures intelligentes, ils constituent les bibliothèques UI les plus rapides à l'heure actuelle pour développer des interfaces complexes dans le navigateur.

Enfin, l'ère *PWA*. Nous développons maintenant des applications Web en utilisant les technologies Web, mais pas nécessairement liées à des sites Web. Ce sont des applications, comme toutes les autres. Installables, elles fonctionnent dans des navigateurs *chromeless* comme Electron ou les WebViews, et n'ont rien à envier aux versions natives.

Nous sommes en 2020, et nous pensons désormais en dehors du navigateur : JavaScript fonctionne partout, nous développons des applications en utilisant les technologies du web, et nous appliquons les mêmes modèles que pour les développements natifs. Tout cela avec les mêmes mises en garde : à mesure que l'écosystème JS se développe, les dépendances de nos applications croissent également. Nous sommes maintenant en train de *compiler pour le Web*. Comme pour des développements natifs.

Il y a cependant une petite, mais significative, différence : nous diffusons nos applications en streaming. Lorsque vous servez une application web, vous utilisez toujours les fondamentaux du Web : votre serveur envoie une page HTML qui demande à son tour ses ressources (images, JS, polices, CSS, etc.). Nous envoyons chaque jour des tonnes de *Go* aux navigateurs de nos utilisateurs, et il est temps d'arrêter l'hémorragie ! En prenant le problème dès la conception.

## Le péché originel : le *packing*

Aux premiers temps des applications Web, nous avions un nouveau modèle pour distribuer des morceaux de JavaScript à travers les projets sous forme de petites librairies : *CommonJS*. Il était si moderne qu'il est devenu la norme pour la distribution de modules dans l'environnement Node.js. Le principal problème était l'incapacité de la VM de notre navigateur à comprendre et à exploiter ce format.

Nous avons donc commencé à développer des *loaders*, capables de charger et d'injecter des modules CommonJS dans nos pages principales. Mais cela a rapidement conduit à un autre problème : nous avons commencé à servir trop de dépendances au navigateur, ce qui a fait gonfler les coûts de connexion.

Nous avons donc créé des *bundlers*, comme [Webpack](https://webpack.js.org/). Ils sont chargés de collecter toutes les dépendances et les modules de votre application et de produire un seul fichier JS que votre navigateur peut exécuter. Ils sont rapidement devenus des *packers* en même temps, vous permettant d'appliquer des changements et des optimisations à vos builds, et d'ajouter des mécanismes pour importer bien plus que des dépendances JS !

Nous avons ensuite ajouté des préprocesseurs et des transpilateurs, pour écrire avec de nouveaux langages vers JavaScript (comme CoffeeScript ou TypeScript), puis de nouveaux outils pour des optimisations supplémentaires, en divisant les ressources en petits morceaux et en les servant uniquement à la demande. Parce que la performance en prenait un sacré coup.

Notre outillage de développement est maintenant plus compliquée qu'il ne l'a jamais été. Nous sommes dans une course sans fin pour ajouter de nouveaux outils qui nous permettent de faire face au problème de la performance. Nous les avons créés parce que nous avions besoin de ces outils, mais notre chaîne de production est maintenant un horrible processus bouffi, qui est extrêmement complexe à comprendre et qui prend une éternité à démarrer et à compiler chaque fois que vous démarrez un projet ou enregistrez un fichier.

Cette situation est-elle encore bien légitime ?

## Bienvenue en 2020 : *Zero Build Pipeline*

Alors, passons en revue la liste. Qu'avons-nous aujourd'hui dans notre boîte à outils ?

1. *Modules ES6 natifs* : navré pour le format CommonJS, mais son descendant, le *Module ES6*, est bien plus efficace. Il est supporté en natif par [Node.js](https://nodejs.org/api/esm.html) et [les navigateurs](https://caniuse.com/#feat=es6-module). Il n'y a plus de raison de l'éviter.
2. *Libres pré-compilées* : [TypeScript](https://www.typescriptlang.org/) est en de plus en plus couramment utilisé[^1] et nous avons beaucoup de nouvelles bibliothèques qui sont développées avec ce langage. Même développés en VanillaJS, ces modules peuvent être optimisés en dehors de notre chaîne d'outils et distribués dans une version de production. Pas besoin de gérer cela de notre côté dans *notre* projet.
3. *Un grand écosystème* : NPM est l'un des registres de dépendances les plus importants au monde. Tout l'univers JavaScript/TypeScript est rempli d'excellents outils et de librairies utiles, prêts à être utilisés sans devoir les embarquer dans notre build final.
4. *HTTP/2* : La version 2 du protocole est largement disponible et supportée, et elle réduit un grand nombre de requêtes. En effet, il est probablement plus efficace de servir un tas de petits fichiers avec HTTP/2 plutôt qu'un gros fichier unique, grâce aux optimisations du protocole. Sans compter le bénéfice associé à la mise en cache.
5. Tous nos outils, des commandes Unix aux applications dédiées au *frontend*, offrent une *CLI*, qui permet la construction de pipelines avancés.

Cette boîte à outils est donc riche en possibilités. Intuitivement, elle nous pousse vers le **Bare Modules Devtools**. Voici les idées simples qui se cachent derrière le concept :

1. Nous utilisons les modules tels qu'ils sont distribués, dans leur format de module ES6, sans les empaqueter ou les regrouper,
2. Nous comptons sur HTTP/2 pour servir efficacement les fichiers de ressources afin de maintenir un taux de performance élevé,
3. Nous nous en tenons à 0ms pour démarrer l'environnement de développement, en ne servant que les fichiers bruts et les modules et en ne les modifiant pas dans un contexte de *développement*,
4. Nous pré/post-traitons nos fichiers sources en utilisant directement les CLI (ou avec des outils natifs) pour éviter de créer de nouvelles chaînes d'outils complexes.

Le 5 mai dernier a vu le lancement de la version 2 de [Snowpack](https://www.snowpack.dev/#get-started), et c'est exactement ce dont nous avions besoin pour mettre en œuvre ce concept ! Ce nouvel outil est à la fois un outil de développement, qui vous permet d'exécuter vos applications en mode développement sans temps de démarrage, sans *packing*, avec des mises à jour rapides, et un outil de construction où vous pouvez définir et associer (*pipe*) des outils pour préparer vos ressources pour les versions de production si nécessaire.

## Vous n'avez encore rien vu !

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2Fid2ZheWNtZ290ZDE3c2dzeTk1emZpZmZpenc5bjU1Mjd5MzFjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ozsTeR2bs1hjBU4/giphy.gif)

Commencez par installer *Snowpack* comme dépendance de votre projet :

```sh
$ cd mon-projet
$ npm install --save-dev snowpack@next
```

Et c'est tout ! Il est maintenant prêt à prendre en charge votre processus de développement.

### Outils de développement

*Snowpack* analysera votre projet, à la recherche de déclarations d'`import`, puis copiera les ressources à partir du répertoire `node_modules` du projet, ou les installera directement, dans un répertoire `web_modules`.

De là, vous pouvez servir vos ressources sous forme de module web et les importer dans votre page :

```html
<html lang="en">
  <body>
    <canvas id="canvas"></canvas>
    <script type="module">
      import confetti from '/web_modules/canvas-confetti.js';

      confetti.create(document.getElementById('canvas'))({
        particleCount: 200,
        spread: 200
      })
    </script>
  </body>
</html>
```

Vos scripts doivent être déclarés dans le HTML avec l'attribut `type=module` pour activer le mode Module ES6. Et vos ressources sont importées depuis le répertoire `web_modules` à la racine.

Il suffit de lancer l'installation de snowpack depuis le répertoire de votre projet : le dossier `web_modules` va se peupler avec vos dépendances. Vous pouvez également les gérer [à partir de votre fichier package.json](https://www.snowpack.dev/#webdependencies) et avec les [entrées de configuration de snowpack](https://www.snowpack.dev/#config-files).

En *mode de développement*, cette configuration vous permet de déclarer des fonctionnalités utiles, comme les directives de montage. Elles agissent comme des points de montage Unix, vous permettant de servir tous les éléments que vous souhaitez à partir du serveur de développement intégré :

```json
{
  "snowpack": {
    "scripts": {
      "mount:public": "mount public --to /",
      "mount:web_modules": "mount web_modules"
    }
  }
}
```

Ensuite, il suffit de faire tourner `snowpack dev` pour obtenir un serveur de développement complet, servant vos ressources avec un *LiveReload* embarqué. Avec la commande `dev`, il n'est même plus nécessaire de mettre à jour les chemins d'accès vous-même : il suffit de suivre la syntaxe habituelle, comme `import * as React from 'react'` dans vos fichiers JS, et Snowpack convertira le chemin d'accès à la volée.

Au moment du *build*, Snowpack copie simplement vos fichiers, ce qui vous permet de les déployer comme vous le souhaitez. Il ajoute également une option `--bundle`, vous permettant de passer vos fichiers produits à Parcel, pour optimiser vos versions de production en s'appuyant sur un écosystème déjà existant.

Vous pouvez également définir vos propres scripts *snowpack*, pour personnaliser vos pipelines de construction, comme :

```json
{
  "scripts": {
    /* Build JS and JSX files with Babel */
    "build:js,jsx": "babel --filename $FILE",
    /* Pass CSS to PostCSS */
    "build:css": "postcss"
  }
}
```

---

L'ancien modèle n'est plus adapté à nos contraintes modernes. Grâce aux technologies actuellement disponibles, nous n'avons plus besoin de conditionner et de regrouper nos applications avec leurs dépendances. Au lieu de cela, nous pouvons nous concentrer sur le développement plutôt que sur l'outillage.

Cette approche présente une bonne philosophie : elle s'appuie sur les outils existants pour maintenir un effort de compatibilité croisée (comme le travail avec Parcel, Rollup, Babel… sous le capot), elle n'impose aucune contrainte et vous pouvez vous rabattre sur n'importe quel autre outil de *build* si vous en avez besoin, et elle est rapide à exécuter.

Snowpack est le premier concurrent de ce nouvel univers, avec de nombreuses fonctionnalités intéressantes, dont `import-maps`, de la proxification de requêtes, du *HMR*, etc. Nul doute que nous verrons rapidement d'autres alternatives[^2], et c'est le bon moment pour sauter dans le train du *bare modules development* !

[^1]: Saviez-vous que vous pouvez exécuter TypeScript sur les serveurs alwaysdata directement grâce à [Deno](/fr/docs/hebergement-web/langages/deno) ?
[^2]: Vue.js a déjà commencé à travailler sur son propre outil pour Vue.js : [Vite](https://medium.com/@wearethreebears/getting-started-with-vite-a-no-bundler-dev-environment-for-vue-js-217a6eb7c9d0).
