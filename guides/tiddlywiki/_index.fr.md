+++
title = "Installer TiddlyWiki"
layout = "howto"
hidden = true
tags = ["marketplace", "tiddlywiki"]
+++

[TiddlyWiki](https://tiddlywiki.com/) est un "carnet Web non linéaire". Il est dédié à l'organisation de fragments d'informations (telles que *notes*, *images*, et plus) en les sauvegardant et en les reliant de manière intelligente. Il peut être servi comme un fichier HTML statique ou via un site [Node.js]({{<ref "languages/nodejs">}}).

## Installation via notre [marketplace]({{<ref "marketplace">}})

Notre marketplace propose un script pour installer TiddlyWiki automatiquement. Dans votre interface d'administration, allez à la section **Web > Sites**, cliquez sur le bouton *Installer une application*, et sélectionnez l'entrée *TiddlyWiki* en cliquant sur la roue dentée.

Remplissez les champs selon votre préférence, et lancez l'installateur.

## Manuellement

### Utiliser un fichier statique et WebDAV

Vous pouvez simplement utiliser l'accès à distance WebDAV pour modifier votre TiddlyWiki, et le servir publiquement en lecture seule en utilisant le type de site *statique* :

1. Téléchargez un TiddlyWiki vide à la [page de téléchargement](https://tiddlywiki.com/#GettingStarted)
2. En utilisant [FTP]({{<ref "remote-access/ftp">}}) ou [SFTP]({{<ref "remote-access/sftp">}}), téléversez le fichier sur votre compte (par exemple dans `$HOME/notes/wiki/index.html`)
3. Ouvrez votre navigateur et entrez l'adresse `https://webdav-[compte].alwaysdata.net/[chemin/à partir de l'ACCUEIL]/[nom de fichier].html` (par exemple `https://webdav-[compte].alwaysdata.net/notes/wiki/index. html`), en utilisant votre *nom d'utilisateur du compte* et *mot de passe du compte* pour vous authentifier dans la fenêtre d'authentification *basic* (vous pouvez également créer un [utilisateur WebDAV]({{<ref "remote-access/webdav/create-a-webdav-user">}}) dédié à cette fin)

Vous pouvez maintenant éditer votre TiddlyWiki, l'action d'*enregistrement* passera par le protocole WebDAV pour mettre à jour le fichier HTML distant.

Si vous souhaitez y accéder à partir d'une URL publique en mode lecture seule (sans autorisation), créez un nouveau [site statique]({{<ref "sites/static-files">}}) dans votre section **Web > Sites**. Utilisez le répertoire dans lequel vous avez téléchargé votre fichier comme directive `Root directory`.

### Utiliser la version serveur de Node.js

Si vous souhaitez utiliser des fonctionnalités plus avancées, comme l'authentification, vous pouvez utiliser la version Node.js :

1. Connectez-vous via [SSH]({{<ref "remote-access/ssh">}})

2. Installez globalement le paquet TiddlyWiki *via* npm :

    ```sh
    $ npm install --global tiddlywiki
    ```

3. Créez un nouveau dépôt pour votre carnet :

    ```sh
    $ tiddlywiki $HOME/[chemin/vers/carnet] --init server
    ```

4. Créez un nouveau site [Node.js]({{<ref "languages/nodejs">}}) :
   - Version de Node.js : min. *10.x*
   - Commande : `~/.npm-packages/bin/tiddlywiki . --listen host=$IP port=$PORT`
   - Répertoire de travail : `[chemin/vers/carnet]`.

## Authentification

Vous pouvez ajouter une couche d'authentification *basic* sur votre TiddlyWiki servi par Node.js :

1. Dans le dossier de votre carnet (où se trouve le fichier `tiddlywiki.info`), créez un fichier `users.csv` avec le contenu suivant :

    ```csv
    username,password
    [user1],[pwd1]
    [user2],[pwd2]
    ...
    ```

2. Modifiez le champ "Commande" dans la configuration du *Site*, et ajoutez `credentials=users.csv "readers=(authenticated)" "writers=user1,user2"`.
    - remplacez `(authenticated)` par `(anon)` pour permettre un accès public en lecture seule
    - les noms d'utilisateurs peuvent être utilisés en "readers" ou en "writers" pour définir des autorisations d'accès fines

## Ajouter un plugin

Nous allons ajouter le plugin de *traduction FR*, ainsi que le plugin *Freelinks* pour l'exemple.

1. Éditez le fichier `tiddlywiki.info` et dans la section `plugins`ajoutez la ligne `"tiddlywiki/freelinks"`.

    ```json
    "plugins": [
        "tiddlywiki/tiddlyweb",
        "tiddlywiki/filesystem",
        "tiddlywiki/highlight",
        "tiddlywiki/freelinks"
    ],
    ```

{{% notice info %}}
Le fichier `tiddlywiki.info` est un fichier JSON standard, veillez à en respecter la syntaxe, notamment la virgule en séparateur d'entrées d'un tableau (ici après `"tiddlywiki/highlight",`).
{{% /notice %}}

2. Pour la traduction, ajoutez à la suite de la section `themes` le contenu suivant :

    ```json
    "languages": [
        "en-EN",
        "fr-FR"
    ],
    ```

    Vous devriez avoir ce résultat :

    ```json
    "plugins": [
        "tiddlywiki/tiddlyweb",
        "tiddlywiki/filesystem",
        "tiddlywiki/highlight",
        "tiddlywiki/freelinks"
    ],
    "themes": [
        "tiddlywiki/vanilla",
        "tiddlywiki/snowwhite"
    ],
    "languages": [
        "en-EN",
        "fr-FR"
    ],
    ```

3. Sauvegardez, et depuis l'interface d'administration de votre site, redémarrez-le pour que TiddlyWiki prenne en compte ces modifications.
