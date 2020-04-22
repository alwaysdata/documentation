+++
title = "Utiliser le plugin Bob de TiddlyWiki"
layout = "howto"
hidden = true
tags = ["tiddlywiki", "plugin"]
+++

[TiddlyWiki]({{<ref "./">}}) est un "carnet Web personnel non linéaire", ce qui signifie qu'il est plus probablement destiné à être utilisé par un seul utilisateur, pour un usage personnel. Il est possible que vous souhaitiez servir plusieurs TiddlyWikis, chacun étant dédié à des fins différentes. Vous pouvez y parvenir en définissant plusieurs *Sites* dans votre panneau d'administration. Ou vous pouvez utiliser le plugin [Bob](https://github.com/OokTech/TW5-Bob), qui permet l'édition *multi-seats* en temps réel.

## Installation du plugin

Après avoir installé la version Node.js [manuellement]({{<ref "./">}}#utilisez-la-version-serveur-de-nodejs), installez le plugin :

1. Connectez-vous via [SSH]({{<ref "remote-access/ssh">}})

2. Clonez le plugin dans un répertoire dédié aux plugins de TiddlyWiki au niveau "$HOME" :

    ```sh
    $ git clone --depth=1 https://github.com/OokTech/TW5-Bob.git $HOME/tw-plugins/OokTech/Bob
    ```

## Utiliser le plugin

1. Editez le fichier `path/to/repository/tiddlywiki.info`, et ajoutez le plugin à la section `plugins` :

    ```json
    "plugins" : [
        "tiddlywiki/tiddlyweb",
        "tiddlywiki/filesystem",
        "tiddlywiki/highlight",
        "OokTech/Bob"
    ],
    ```

2. Créez un fichier `path/to/repository/settings/settings.json`, et remplissez-le avec les valeurs d'`[IP]` et de `[PORT]` que vous pouvez trouver dans la vue de configuration *Site* dans votre panneau d'administration :

    ```json
    "ws-server": {
        "port": [PORT],
        "host": "[IP]",
        "autoIncrementPort": "false",
    },
    ```

3. Dans la vue *Site*, modifiez le champ "Commande" en remplaçant `--listen` par `--wsserver`. Vous pouvez également supprimer sans risque les paramètres `host` et `port`.

4. Remplissez le champ *Environnement* avec `TIDDLYWIKI_PLUGIN_PATH="$HOME/tw-plugins"`

{{% notice note %}}
Nous ne recommandons pas de faire fonctionner TiddlyWiki avec le plugin Bob sous une URL avec un sous-chemin. Malgré le support des [Proxies](https://github.com/OokTech/TW5-Bob/blob/master/Documentation/Using%20Proxies.tid) par le plugin, cela peut conduire à des incohérences comme des WebSocket inutilisables. Hébergez-le plutôt dans un sous-domaine.
{{% /notice %}}

Vous pouvez maintenant créer autant de wikis que vous le souhaitez en suivant la procédure intégrée à la documentation de Bob.

## Authentification

Par défaut, comme pour le TiddlyWiki classique, la version de Bob est lisible et accessible en écriture par n'importe quel utilisateur. Si vous souhaitez appliquer des autorisations d'accès en lecture/écriture, veuillez vous référer à la section [Authentification]({{<ref "./" >}}#authentification).
