---
title: "Les sept cercles de l’enfer des dépendances : le guide ultime pour passer au développement distant"
description: "Développement distant avec VSCode"
date: 2020-06-02
authors: ["Matthias Dugué"]
---

Avez-vous déjà eu affaire à un projet à long terme, impliquant l'intégration de nombreuses dépendances (souvent circulaires), qui finit par prendre une journée entière à installer localement, seulement pour déboguer une petite fonctionnalité ? Sans aucun doute ! Nous connaissons tou·te·s le moment où vous procrastinez une session de débogage simplement parce que vous ne voulez pas avoir à faire tourner l'environnement localement.

![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTUwZ2V5YnEzNnp0OHZyM3BmYmc5ZDBldHhuMWRreDczdjM4MWtxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9PTaAhwri56V2/giphy.gif)

Bonne nouvelle : il existe une autre solution. Grâce au *débogage à distance*, vous pouvez exécuter votre environnement sur vos serveurs de *staging*[^1] et travailler dessus depuis votre IDE !

Les écosystèmes de développement Web ont beaucoup évolué ces dernières années. Pas seulement les *frameworks* et les outils, mais souvent des environnements entiers. Le changement le plus visible de ces derniers mois a été l'adoption massive par la plupart des développeurs Web de [VSCode](https://code.visualstudio.com/) comme IDE principal. Basé sur JavaScript, soutenu par [les équipes Open Source de Microsoft](https://github.com/Microsoft/vscode), avec une stabilité améliorée et un réel gain de performance, et soutenu par une large communauté fournissant *beaucoup* d'extensions : c'est probablement le meilleur choix pour votre outil quotidien.

L'équipe de développement de Microsoft fournit un [ensemble d'extensions vous permettant de travailler sur des machines distantes](https://code.visualstudio.com/docs/remote/remote-overview) utilisant différents protocoles, comme le vénérable SSH ! Grâce à notre plateforme, qui vous offre un [accès SSH par défaut](/fr/docs/hebergement-web/access-distant/ssh/), vous pouvez exploiter ces extensions facilement.

Attachez vos ceintures, voici le guide complet !

## Pré-requis

Tout d'abord, vous aurez besoin de [VSCode](https://code.visualstudio.com/) (évidemment). Veuillez noter que les *Remote Extensions* ne peuvent fonctionner qu'avec la [version officielle](https://code.visualstudio.com/Download), et non avec l'édition *OSS*, car celles-ci utilisent des composants non-libres. Installez-le en utilisant votre gestionnaire de paquets habituel (sous Linux), ou téléchargez la version correspondant à votre système d'exploitation.

Vous devrez également activer l'accès SSH par clef sur votre compte alwaysdata. Vous pouvez vous référer à la [documentation officielle sur l'utilisation des clés SSH](/fr/docs/hebergement-web/acces-distant/ssh/utiliser-des-cles-ssh/) si vous n'êtes pas à l'aise avec le processus.

Nous vous recommandons d'avoir un fichier de configuration SSH pour déclarer vos hôtes, ce qui sera plus facile à utiliser dans VSCode. Sur votre machine locale, créez un fichier `$HOME/.ssh/config` avec le contenu suivant :

```txt
Host alwaysdata
    User [alwaysdata-account]
    HostName ssh-[alwaysdata-account].alwaysdata.net
    IdentityFile ~/.ssh/id_ed25519
```

Remplacez `[ad-account]` par le nom de votre compte alwaysdata, et définissez le chemin d'accès à votre clé privée SSH en fonction de votre configuration locale.

Sous Windows, vous devrez peut-être [vous référer à ce fichier de configuration](https://code.visualstudio.com/docs/remote/ssh#_remember-hosts-and-advanced-settings) dans la configuration de l'extension.

Assurez-vous que votre connexion SSH est prête en exécutant `$ ssh alwaysdata` dans votre terminal. Si vous êtes connecté aux serveurs d'alwaysdata, vous êtes prêt !

![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzNnYml4emt0aWMyNGRvMXFwNHVld3pod25mZmp4bjE2bnQ4ZGc3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LcfBYS8BKhCvK/giphy.gif)

## Sur le serveur, depuis votre canapé

Lancez VSCode et allez dans le *gestionnaire d'extensions* (`Ctrl`+`Shift`+`X`) et installez les extensions [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) et [Remote - SSH : Editing Configuration Files](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh-edit).

À présent, en utilisant le *gestionnaire à distance*, ou la *Palette de commande > Remote-SSH : Connect to Host…* (`F1`), activez la connexion à l'hôte `alwaysdata`. Après un certain temps[^2], vous serez connecté au serveur d'alwaysdata. Une notification verte `SSH : alwaysdata` dans la *Barre d'état* vous le signale. Faisons un test et essayons la commande *Fichier > Ouvrir…* sur un fichier ou un dossier : votre explorateur devrait maintenant afficher votre environnement distant ! Vous pouvez également voir que la console (`Ctrl`+`` ` ``) s'ouvre sur votre environnement distant.

Félicitations ! Vous travaillez maintenant depuis votre IDE local sur votre compte distant alwaysdata, sans aucune différence ! Vous pouvez maintenant commencer votre session de *débogage à distance de votre application*.

---

Un petit mot avant de vous lancer : lorsque vous travaillez à distance sur nos serveurs avec l'extension *Remote - SSH*, VSCode considère le dossier *distant* que vous avez ouvert comme l'espace de travail actuel (comme il le fait pour les projets locaux). Pour ce faire, il enregistre ses fichiers de configuration dans le répertoire caché habituel `.vscode` à la racine de votre projet. Nous vous recommandons vivement d'ignorer ce dossier dans votre outil de versionnement (comme `.gitignore`) et de ne pas le supprimer de votre environnement distant.

Dans ce guide, lorsque nous faisons référence à certains paramètres, ils sont liés à l'espace de travail et sont donc enregistrés dans ce dossier sur le serveur. Le *gestionnaire à distance* mémorise vos espaces de travail distants, ce qui vous permet de les rouvrir rapidement lorsque vous souhaitez démarrer une nouvelle session de débogage.

## JavaScript : un langage pour les gouverner tous

Pour illustrer ce guide, nous avons choisi de nous concentrer sur un seul langage pour le *back-end* et le *front-end*. C'est ici uniquement à titre d'exemple, et vous pouvez travailler sur n'importe quel type d'architecture. Il vous suffit d'installer le bon *plugin* de débogueur dans VSCode, et tout ira bien. Gardez à l'esprit qu'alwaysdata supporte [tous les langages que vous souhaitez](/fr/docs/hebergement-web/langages/), n'hésitez pas à choisir celui qui correspondra le mieux à vos besoins !

Grâce à notre [applithèque](https://www.alwaysdata.com/fr/marketplace/), vous pouvez déployer un large éventail de *frameworks* Web directement à partir de votre compte. Dans votre interface d'administration, allez à la section *Web > Sites*, cliquez sur le bouton *Installer une application*, choisissez *Express.js* en cliquant sur la roue crantée, et suivez les instructions de l'installateur.

Vous avez maintenant une application [Express.js](https://expressjs.com/) disponible ! Cliquez sur son URL pour ouvrir une nouvelle fenêtre pointant vers votre tout nouveau site, vous devriez voir le fameux message de bienvenue `Hello World!`. Utilisons maintenant notre IDE local pour éditer ce projet.

Il est à noter la façon dont la même base de code sera utilisée dans différents contextes : *développement* et *production*. Le site auquel vous venez d'accéder tourne en version de *production*. Nous travaillerons sur la même base de code mais nous l'utiliserons à partir de l'accès SSH, en mode *développement*. Cela signifie que chaque modification que nous apporterons ne sera pas répercutée sur la version *production* tant que vous n'aurez pas redémarré votre site depuis votre panneau d'administration.

Cette distinction *production* vs *développement* est valable uniquement pour les langages en processus persistants, comme Node.js, Python, Ruby… Les langages à état transitoires, comme PHP, sont systématiquement relancés à chaque requêtes, et vos changements seront donc immédiatement appliqués, sans qu'il soit nécessaire de relancer votre site.

Dans VSCode, ouvrez votre espace de travail distant en activant la connexion `alwaysdata` et ouvrez le dossier qui vient d'être créé par l'installateur de l'applithéque. Vous êtes prêt à développer !

Lançons notre application en mode développement : ouvrez le fichier `package.json` et ajoutez un script de `debug` :

```json
{
  /* ... */
  "scripts" : {
    "debug": "NODE_ENV=development node app.js"
  }
  /* ... */
}
```

Notre application [s'attend à trouver la variable d'environnement PORT](/fr/docs/hebergement-web/langages/nodejs/configuration/#environnement), exécutons-là à partir du terminal intégré VSCode : `PORT=3000 npm run debug`. Vous devriez voir un message indiquant que votre application est prête. Mais vous ne pouvez pas accéder au port distant depuis votre machine locale !

Heureusement, VSCode *Remote Extension* vous permet de déclarer un port local à rattacher[^3] à votre environnement distant. Dans le *gestionnaire à distance*, ajoutez un nouveau port à la section *Forwarded Ports*. Entrez `3000`. Maintenant, vous devriez pouvoir faire pointer votre navigateur sur http://localhost:3000, et accéder à votre application distante en mode débogage !

Pour éviter d'entrer les ports transférés à chaque fois que vous démarrez une session, dans les **préférences locales des utilisateurs**, cochez la case *Remote: Restore Forwarded Ports* (ou ajoutez `"remote.restoreForwardedPorts": true` dans votre fichier local `User/settings.json`).

Nous sommes maintenant en mesure d'exécuter notre application à partir de VSCode et d'y accéder localement. Voyons maintenant comment la déboguer !

## Exécuter, échouer, puis exécuter à nouveau

### Aller au-delà du code

Lançons notre application attachée au débogueur VSCode. Elle vous permet de définir des points d'arrêt et d'inspecter *callstack*, même à distance ! Installez l'extension [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome). Nous allons également éditer notre script `debug` pour l'exécuter avec le mode d'inspection activé :

```json
"debug": "NODE_ENV=development node --inspect=9321 app.js"
```

Nous attachons l'inspecteur dans un port non-standard pour éviter tout conflit, surtout avec la dernière partie de ce guide. Ne vous préoccupez pas pour le moment.

Nous avons maintenant besoin d'une tâche de débogage qui fera tourner notre application et y attachera le débogueur. Allez dans le *gestionnaire d'exécution et de débogage* (`Ctrl`+`Shift`+`D`), actuellement vide. Cliquez sur le lien *create a launch.json*, et sélectionnez *Node.js* dans le panneau de choix. VSCode créera un nouveau fichier `.vscode/launch.json` dans votre environnement distant (vous pouvez le voir depuis votre *explorateur*). Remplissez-le avec la configuration suivante :

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Server Debug Mode",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "--scripts-prepend-node-path=true",
                "run-script",
                "debug"
            ],
            "port": 9321,
            "env": {
                "PORT": "3000"
            },
            "skipFiles": [
                "<node_internals>/**"
            ]
        }
    ]
}
```

Nous y trouvons :

- `runtimeExecutable` : nous exécutons l'application par le biais de `npm` ;
- `runtimeArgs` : voici notre script `debug` ; nous ajoutons également `script-prepend-node-path` pour éviter les avertissements dus au chemin vers l'exécutable `node` dans le système de fichiers, qui est spécifique à l'architecture alwaysdata ;
- `port` : le port auquel nous avons choisi d'attacher l'inspecteur node ;
- `env` : les variables d'environnement passées, ici le port sur lequel l'application Express.js va s'attacher.

Nous sommes maintenant prêts à faire fonctionner notre application avec le débogueur. Lancez le débogueur avec la flèche verte dans le *panneau d'exécution* (ou appuyez sur `F5`). Votre script de débogage *npm* est exécuté par VSCode, et vous pouvez toujours accéder à votre application dans votre navigateur.

Maintenant, ouvrez le fichier `app.js`, et mettez un point d'arrêt sur la ligne `res.send` (6) en cliquant dans la gouttière (ou appuyez sur `F9` avec votre curseur sur la ligne). Rechargez votre navigateur. Votre application devrait faire une pause juste avant d'exécuter l'instruction `res.send` et vous pouvez analyser et déboguer votre application depuis le *Panneau d'exécution et de débogage* !

### Outils pratiques pour développeurs surbookés

Malheureusement, devoir relancer votre application à chaque fois que vous modifiez les fichiers est plutôt fastidieux. Configurons le rechargement à chaud côté serveur !

1. Installez [Nodemon](https://www.npmjs.com/package/nodemon) sur votre projet depuis le terminal intégré : `npm install --save-dev nodemon`.
2. Editez le script `debug` dans le fichier `package.json` pour lancer l'application avec `nodemon` : `NODE_ENV=development nodemon --inspect=9321 --exitcrash app.js`.
3. Modifiez la configuration du débogueur dans le fichier `launch.json` en ajoutant l'option `"restart" : true`, permettant au débogueur de se réattacher à chaque fois que nodemon redémarre l'application.

```json
"name": "Server Debug Mode",
"restart": true
```

Exécutez à nouveau la configuration du débogueur et rechargez votre navigateur : vous devriez être en mesure d'accéder à l'application. Modifiez la chaîne `Hello World!` et sauvegardez le fichier. Votre application est automatiquement rechargée et le débogueur ré-attaché. Rechargez votre navigateur : vous avez le nouveau message !

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGs0bWZpNnAzanh4bDV3dXZsY2dsbGZ1NWV1N3NrZTg5cTc4cGdyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lUJ1YoZB1lHVPG/giphy.gif)

En tant que développeurs, nous sommes souvent paresseux : configurons le navigateur pour qu'il se recharge de lui-même lorsque l'application serveur est également rechargée :

1. Installez [livereload](https://www.npmjs.com/package/livereload) dans votre projet : `npm install --save-dev livereload connect-livereload`.
2. Votre application doit servir une page HTML valide pour pouvoir injecter le script livereload côté serveur. Ajoutons [Pug](https://www.npmjs.com/package/pug) comme moteur de *templates*, et [Helmet](https://www.npmjs.com/package/helmet) pour gérer les en-têtes de sécurité CORS des pages que nous servons : `npm install --save pug helmet`
3. Configurez votre application pour utiliser le moteur de *templates*, et activez LiveReload lorsque l'app est en mode *développement* :

```js
const path = require('path')
const livereload = require('livereload')
const connectLivereload = require('connect-livereload')
const helmet = require('helmet')

const LIVERELOAD_PORT=35729
const app = express()

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", `localhost:${LIVERELOAD_PORT}`, "'unsafe-inline'", "'unsafe-eval'"],
    connectSrc: ["'self'", `ws://localhost:${LIVERELOAD_PORT}`]
  }
}))

if (process.env.NODE_ENV
&&  process.env.NODE_ENV === "development") {
  var livereloadServer = livereload.createServer()
  app.use(connectLivereload({
    port: LIVERELOAD_PORT
  }))
  livereloadServer.server.once('connection', () => {
    setTimeout(() => livereloadServer.refresh('/'), 100)
  })
}
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index', {
    title: "Hello World!",
    message: "Hello World 😺 !"
  })
})
```

4. Créez un fichier `views/index.pug` à la racine de votre projet :

```pug
html
head
    title= title

body
    h1= message
```

5. Dans la section *Forwarded Ports Section*, ajoutez un nouveau port à transférer : `35729`, permettant à votre navigateur d'accéder au serveur livereload.

Maintenant, exécutez à nouveau la configuration du débogueur. Rechargez votre navigateur, il devrait activer le mode LiveReload (vous verrez une requête *WebSocket* dans le *Panneau Réseau*). Modifiez le message envoyé au modèle. Lors de la sauvegarde, l'application sera redémarrée, le débogueur y sera rattaché, et votre navigateur sera rechargé sans aucune action de votre part !

## Débogueur à tous les étages

### Tout en un

VSCode offre un large choix d'extensions, vous permettant de bénéficier d'une expérience totalement intégrée. Alors pourquoi ne pas exécuter et contrôler notre navigateur de test directement depuis notre IDE ? Il est temps d'installer l'extension [Browser preview](https://marketplace.visualstudio.com/items?itemName=auchenberg.vscode-browser-preview).

Créons une configuration de débogage prête à exécuter le *Browser Preview*. Dans votre fichier `launch.json`, ajoutez une nouvelle configuration après celle du *Server Debug Mode* :

```json
{
    "type": "browser-preview",
    "request": "launch",
    "name": "Browser Preview: Launch",
    "url": "http://localhost:3000"
}
```

De toute évidence, il est parfaitement inutile de lancer l'aperçu du navigateur sans lancer l'application en arrière-plan. C'est pourquoi nous allons créer un *Compound* qui lancera les deux à partir de notre débogueur. Toujours dans le fichier `launch.json`, ajoutez une entrée `compounds` juste après celle des `configurations` :

```json
"compounds": [
    {
        "name": "Client/Server",
        "configurations": ["Server Debug Mode", "Browser Preview: Launch"],
    }
]
```

Maintenant, dans votre *Panneau d'exécution et de débogage*, sélectionnez la configuration `Client/Server`, et exécutez-la. Votre application est lancée en mode développement avec *Nodemon* et attachée au débogueur, et un *Panneau de prévisualisation du navigateur* devrait s'ouvrir, pointant sur l'adresse de l'application[^4]. En attendant un correctif, vous pouvez mettre à jour manuellement l'adresse pour charger votre application dans le panneau de prévisualisation).

### Go Go, Gadget !

Nous avons un panneau de prévisualisation du navigateur, attaché au débogueur interne. Voyons ce que nous pouvons en faire !

1. Créez un fichier `static/js/main.js` au niveau de la racine de votre projet, avec le contenu suivant :

```js
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1')
    .addEventListener('click', () => {
      alert("You didn't say the magic word!")
    })
})
```

2. Mettez à jour notre `index.pug`, chargez un script `main.js` dans la page :

```pug
html
    head
        script(src="/js/main.js" defer)
```

3. Maintenant, éditez notre `app.js` pour servir les fichiers statiques :

```js
app.use(express.static(path.join(__dirname, 'static')))
```

Si vous lancez l'application maintenant, vous devriez pouvoir cliquer sur le titre et voir la boîte d'alerte apparaître dans les notifications VSCode. Mais vous ne pouvez pas accéder aux fichiers dans le débogueur, car il doit rattacher ces *assets* aux sources sur le serveur.

Modifiez l'entrée `Browser Preview: Launch` dans le fichier `launch.json` et ajoutez le *mapping* vers les fichiers :

```json
{
    "type": "browser-preview",
    "request": "launch",
    "name": "Browser Preview: Launch",
    "url": "http://localhost:3000",
    "pathMapping": {
        "/js/": "${workspaceRoot}/static/js/"
    }
}
```

Exécutez à nouveau la tâche de débogage. Ajoutez un point d'arrêt dans le fichier `main.js`. Cliquez sur le titre. Votre script est mis en pause et vous pouvez inspecter la *callstack* à partir de l'inspecteur de débogage intégré !

Terminons en activant également le rechargement en direct des ressources du *frontend*. Mettez à jour le fichier `app.js` en ajoutant l'instruction LiveReload `watch` après avoir créé le `livereloadServer` :

```js
var livereloadServer = livereload.createServer()
livereloadServer.watch(path.join(__dirname, 'static'))
```

Vous pouvez maintenant éditer le fichier `main.js` voir votre navigateur se recharger automatiquement !

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2VvMnFteXBsb2g0MmRmeDRybGVyaDVsZnBjbHNpMGtmempkc2djaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GKrVGCgcUuKC4/giphy.gif)

C'était un long voyage et un long article juste pour vous donner seulement quelques bases du **Débogage à distance back et front**. Il vous offre la possibilité de conserver votre dépôt de code dans votre compte alwaysdata, libérant votre environnement local strate technique complexe à maintenir.

Vous pouvez exécuter votre code à distance en *mode de développement*, attacher le *backend* au débogueur local, exécuter votre application Web dans un conteneur de navigateur, et exécuter un second débogueur en parallèle, attaché à ce navigateur intégré !

Cela vous donne la possibilité de tester et de déboguer dans un environnement de type production avec tout l'outillage moderne que vous pouvez attendre. Encore plus amusant : lorsque votre session de débogage est terminée, il vous suffit de redémarrer votre *Site* depuis votre panneau d'administration alwaysdata et vos modifications sont en ligne !

Comme mentionné précédemment, grâce à l'écosystème VSCode, des débogueurs sont disponibles pour de nombreux langages modernes comme Python, Ruby, PHP et bien d'autres encore. Pas besoin de s'en tenir à JS, vous pouvez utiliser ce guide avec n'importe quel type de langage que vous hébergez sur votre compte.

Nous espérons que cela vous aidera à améliorer votre flux de travail quotidien. Vous voulez en savoir plus sur les cas d'utilisation avancés de votre compte alwaysdata ? Faites-nous part en commentaires de la façon dont nous pouvons vous aider à débloquer de nouveaux niveaux dans vos tâches quotidiennes !

[^1]: Peut-être fourni par vos coéquipiers DevOps
[^2]: Au cours de laquelle VSCode installe les composants nécessaires à distance et démarre un serveur de développement à distance en arrière-plan
[^3]: VSCode s'appuie sur *SSH Port Forwarding* et a besoin que le serveur SSH ait la directive [`AllowTCPForwarding` activée](https://github.com/microsoft/vscode-remote-release/issues/92). Chez alwaysdata, nous désactivons cette fonction pour des raisons de sécurité, mais nous avons heureusement trouvé un moyen de faire fonctionner le Port Forwarding pour VSCode sans compromettre la sécurité !
[^4]: En raison de la façon dont les compounds sont exécutés, l’aperçu du navigateur peut pointer sur `about:blank` au lieu de http://localhost:3000. Il existe une solution de contournement liée à la possibilité d’exécuter des pré-tâches (voir [le ticket](https://github.com/auchenberg/vscode-browser-preview/issues/114)). En attendant un correctif, vous pouvez mettre à jour manuellement l’adresse pour charger votre application dans le panneau de prévisualisation.
